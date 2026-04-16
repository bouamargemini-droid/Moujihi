package elevenlabs

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Client struct {
	apiKey  string
	voiceID string
}

func NewClient(apiKey, voiceID string) *Client {
	return &Client{apiKey: apiKey, voiceID: voiceID}
}

type ttsRequest struct {
	Text          string       `json:"text"`
	ModelID       string       `json:"model_id"`
	VoiceSettings voiceSettings `json:"voice_settings"`
}

type voiceSettings struct {
	Stability       float64 `json:"stability"`
	SimilarityBoost float64 `json:"similarity_boost"`
	Style           float64 `json:"style"`
}

func (c *Client) TextToSpeech(ctx context.Context, text string) ([]byte, error) {
	reqBody := ttsRequest{
		Text:    text,
		ModelID: "eleven_multilingual_v2",
		VoiceSettings: voiceSettings{
			Stability:       0.6,
			SimilarityBoost: 0.8,
			Style:           0.3,
		},
	}

	body, err := json.Marshal(reqBody)
	if err != nil {
		return nil, fmt.Errorf("marshal request: %w", err)
	}

	url := fmt.Sprintf("https://api.elevenlabs.io/v1/text-to-speech/%s", c.voiceID)
	req, err := http.NewRequestWithContext(ctx, "POST", url, bytes.NewReader(body))
	if err != nil {
		return nil, fmt.Errorf("create request: %w", err)
	}

	req.Header.Set("xi-api-key", c.apiKey)
	req.Header.Set("Content-Type", "application/json")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("call elevenlabs: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		errBody, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("elevenlabs error %d: %s", resp.StatusCode, string(errBody))
	}

	return io.ReadAll(resp.Body)
}
