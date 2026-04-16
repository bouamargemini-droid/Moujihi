package orientation

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log/slog"
	"time"

	"github.com/bouamargemini-droid/Moujihi/moujihi-api/pkg/deepgram"
	"github.com/bouamargemini-droid/Moujihi/moujihi-api/pkg/did"
	"github.com/bouamargemini-droid/Moujihi/moujihi-api/pkg/elevenlabs"
)

type Message struct {
	Role      string `json:"role"`
	Content   string `json:"content"`
	Timestamp int64  `json:"timestamp"`
}

type Session struct {
	ID              string          `json:"id"`
	StudentID       string          `json:"student_id"`
	Status          string          `json:"status"`
	Language        string          `json:"language"`
	Conversation    []Message       `json:"conversation"`
	RIASECProfile   json.RawMessage `json:"riasec_profile,omitempty"`
	StudentProfile  json.RawMessage `json:"student_profile,omitempty"`
	Recommendations json.RawMessage `json:"recommendations,omitempty"`
	CreatedAt       time.Time       `json:"created_at"`
	CompletedAt     *time.Time      `json:"completed_at,omitempty"`
}

type Service struct {
	db         *sql.DB
	claude     *ClaudeClient
	deepgram   *deepgram.Client
	elevenlabs *elevenlabs.Client
	did        *did.Client
}

func NewService(db *sql.DB, claude *ClaudeClient, dg *deepgram.Client, el *elevenlabs.Client, d *did.Client) *Service {
	return &Service{
		db:         db,
		claude:     claude,
		deepgram:   dg,
		elevenlabs: el,
		did:        d,
	}
}

func (s *Service) CreateSession(ctx context.Context, studentID, language string) (*Session, error) {
	session := &Session{
		StudentID:    studentID,
		Status:       "in_progress",
		Language:     language,
		Conversation: []Message{},
	}

	convJSON, _ := json.Marshal(session.Conversation)

	err := s.db.QueryRowContext(ctx,
		`INSERT INTO sessions (student_id, status, language, conversation)
		 VALUES ($1, $2, $3, $4)
		 RETURNING id, created_at`,
		session.StudentID, session.Status, session.Language, convJSON,
	).Scan(&session.ID, &session.CreatedAt)

	if err != nil {
		return nil, fmt.Errorf("create session: %w", err)
	}

	return session, nil
}

func (s *Service) GetSession(ctx context.Context, sessionID string) (*Session, error) {
	session := &Session{}
	var convJSON, riasecJSON, profileJSON, recsJSON []byte

	err := s.db.QueryRowContext(ctx,
		`SELECT id, student_id, status, language, conversation, riasec_profile, student_profile, recommendations, created_at, completed_at
		 FROM sessions WHERE id = $1`, sessionID,
	).Scan(&session.ID, &session.StudentID, &session.Status, &session.Language,
		&convJSON, &riasecJSON, &profileJSON, &recsJSON,
		&session.CreatedAt, &session.CompletedAt)

	if err == sql.ErrNoRows {
		return nil, fmt.Errorf("session not found")
	}
	if err != nil {
		return nil, fmt.Errorf("get session: %w", err)
	}

	json.Unmarshal(convJSON, &session.Conversation)
	session.RIASECProfile = riasecJSON
	session.StudentProfile = profileJSON
	session.Recommendations = recsJSON

	return session, nil
}

func (s *Service) Transcribe(ctx context.Context, audio []byte, sessionID string) (string, error) {
	session, err := s.GetSession(ctx, sessionID)
	if err != nil {
		return "", err
	}

	text, err := s.deepgram.Transcribe(ctx, audio, session.Language)
	if err != nil {
		return "", fmt.Errorf("transcribe: %w", err)
	}

	slog.Info("transcribed audio", "session_id", sessionID, "text", text)
	return text, nil
}

func (s *Service) Chat(ctx context.Context, sessionID, userText string) (string, error) {
	session, err := s.GetSession(ctx, sessionID)
	if err != nil {
		return "", err
	}

	// Add user message
	session.Conversation = append(session.Conversation, Message{
		Role:      "user",
		Content:   userText,
		Timestamp: time.Now().Unix(),
	})

	// Get Claude response
	aiResponse, err := s.claude.Chat(ctx, session.Conversation, session.Language)
	if err != nil {
		return "", fmt.Errorf("claude chat: %w", err)
	}

	// Add assistant message
	session.Conversation = append(session.Conversation, Message{
		Role:      "assistant",
		Content:   aiResponse,
		Timestamp: time.Now().Unix(),
	})

	// Save conversation to DB
	convJSON, _ := json.Marshal(session.Conversation)
	_, err = s.db.ExecContext(ctx,
		`UPDATE sessions SET conversation = $2 WHERE id = $1`,
		sessionID, convJSON,
	)
	if err != nil {
		slog.Error("failed to save conversation", "error", err)
	}

	return aiResponse, nil
}

func (s *Service) TextToSpeech(ctx context.Context, text string) (string, error) {
	if s.elevenlabs == nil {
		return "", fmt.Errorf("elevenlabs client not configured")
	}

	audioData, err := s.elevenlabs.TextToSpeech(ctx, text)
	if err != nil {
		return "", fmt.Errorf("tts: %w", err)
	}

	// TODO: upload audioData to storage and return URL
	// For Phase 1, we return base64 or a temporary local URL
	_ = audioData
	return "", nil
}

func (s *Service) GenerateAvatar(ctx context.Context, audioURL string) (string, error) {
	if s.did == nil || audioURL == "" {
		return "", fmt.Errorf("D-ID client not configured or no audio URL")
	}

	talk, err := s.did.CreateTalk(ctx, audioURL)
	if err != nil {
		return "", fmt.Errorf("create avatar talk: %w", err)
	}

	// Poll for completion
	for i := 0; i < 30; i++ {
		time.Sleep(1 * time.Second)
		status, err := s.did.GetTalkStatus(ctx, talk.ID)
		if err != nil {
			continue
		}
		if status.ResultURL != "" {
			return status.ResultURL, nil
		}
	}

	return "", fmt.Errorf("avatar generation timed out")
}

func (s *Service) CompleteSession(ctx context.Context, sessionID string) (json.RawMessage, error) {
	session, err := s.GetSession(ctx, sessionID)
	if err != nil {
		return nil, err
	}

	profileJSON, err := s.claude.GenerateProfile(ctx, session.Conversation)
	if err != nil {
		return nil, fmt.Errorf("generate profile: %w", err)
	}

	now := time.Now()
	_, err = s.db.ExecContext(ctx,
		`UPDATE sessions SET status = 'completed', student_profile = $2, completed_at = $3 WHERE id = $1`,
		sessionID, profileJSON, now,
	)
	if err != nil {
		return nil, fmt.Errorf("update session: %w", err)
	}

	return json.RawMessage(profileJSON), nil
}

func (s *Service) GetReport(ctx context.Context, sessionID string) ([]byte, error) {
	session, err := s.GetSession(ctx, sessionID)
	if err != nil {
		return nil, err
	}

	if session.Status != "completed" {
		return nil, fmt.Errorf("session not completed yet")
	}

	return GenerateReportHTML(session)
}
