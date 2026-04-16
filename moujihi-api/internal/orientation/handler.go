package orientation

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

type Handler struct {
	service *Service
}

func NewHandler(service *Service) *Handler {
	return &Handler{service: service}
}

type ChatRequest struct {
	SessionID string `json:"session_id" validate:"required"`
	Audio     []byte `json:"audio"`
	Text      string `json:"text"`
}

type ChatResponse struct {
	Text     string `json:"text"`
	AudioURL string `json:"audio_url,omitempty"`
	VideoURL string `json:"video_url,omitempty"`
}

func (h *Handler) CreateSession(c *fiber.Ctx) error {
	studentID := c.Locals("student_id").(string)

	var req struct {
		Language string `json:"language"`
	}
	if err := c.BodyParser(&req); err != nil || req.Language == "" {
		req.Language = "fr"
	}

	session, err := h.service.CreateSession(c.Context(), studentID, req.Language)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create session",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(session)
}

func (h *Handler) Chat(c *fiber.Ctx) error {
	var req ChatRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	if req.SessionID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "session_id is required",
		})
	}

	userText := req.Text

	// If audio is provided, transcribe it first
	if len(req.Audio) > 0 && userText == "" {
		transcribed, err := h.service.Transcribe(c.Context(), req.Audio, req.SessionID)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "Failed to transcribe audio",
			})
		}
		userText = transcribed
	}

	if userText == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "No audio or text provided",
		})
	}

	// Get AI response
	aiResponse, err := h.service.Chat(c.Context(), req.SessionID, userText)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to get AI response",
		})
	}

	resp := ChatResponse{
		Text: aiResponse,
	}

	// Generate TTS audio
	audioURL, err := h.service.TextToSpeech(c.Context(), aiResponse)
	if err == nil {
		resp.AudioURL = audioURL
	}

	// Generate avatar video (async — may take a few seconds)
	videoURL, err := h.service.GenerateAvatar(c.Context(), audioURL)
	if err == nil {
		resp.VideoURL = videoURL
	}

	return c.JSON(resp)
}

func (h *Handler) Complete(c *fiber.Ctx) error {
	var req struct {
		SessionID string `json:"session_id" validate:"required"`
	}
	if err := c.BodyParser(&req); err != nil || req.SessionID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "session_id is required",
		})
	}

	profile, err := h.service.CompleteSession(c.Context(), req.SessionID)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to complete session",
		})
	}

	return c.JSON(fiber.Map{
		"profile":      profile,
		"completed_at": time.Now(),
	})
}

func (h *Handler) GetReport(c *fiber.Ctx) error {
	sessionID := c.Params("id")

	report, err := h.service.GetReport(c.Context(), sessionID)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to generate report",
		})
	}

	if c.Query("format") == "pdf" {
		c.Set("Content-Type", "application/pdf")
		c.Set("Content-Disposition", "attachment; filename=bilan-moujihi.pdf")
		return c.Send(report)
	}

	session, err := h.service.GetSession(c.Context(), sessionID)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Session not found",
		})
	}

	return c.JSON(session)
}
