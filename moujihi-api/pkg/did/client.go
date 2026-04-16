package did

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Client struct {
	apiKey    string
	avatarURL string
}

func NewClient(apiKey, avatarURL string) *Client {
	return &Client{apiKey: apiKey, avatarURL: avatarURL}
}

type TalkResponse struct {
	ID        string `json:"id"`
	Status    string `json:"status"`
	ResultURL string `json:"result_url,omitempty"`
}

type talkRequest struct {
	SourceURL string     `json:"source_url"`
	Script    talkScript `json:"script"`
	Config    talkConfig `json:"config"`
}

type talkScript struct {
	Type     string `json:"type"`
	AudioURL string `json:"audio_url"`
}

type talkConfig struct {
	Fluent   bool    `json:"fluent"`
	PadAudio float64 `json:"pad_audio"`
}

func (c *Client) CreateTalk(ctx context.Context, audioURL string) (*TalkResponse, error) {
	reqBody := talkRequest{
		SourceURL: c.avatarURL,
		Script: talkScript{
			Type:     "audio",
			AudioURL: audioURL,
		},
		Config: talkConfig{
			Fluent:   true,
			PadAudio: 0.5,
		},
	}

	body, err := json.Marshal(reqBody)
	if err != nil {
		return nil, fmt.Errorf("marshal request: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", "https://api.d-id.com/talks", bytes.NewReader(body))
	if err != nil {
		return nil, fmt.Errorf("create request: %w", err)
	}

	req.Header.Set("Authorization", "Basic "+c.apiKey)
	req.Header.Set("Content-Type", "application/json")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("call d-id: %w", err)
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("read response: %w", err)
	}

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		return nil, fmt.Errorf("d-id error %d: %s", resp.StatusCode, string(respBody))
	}

	var result TalkResponse
	if err := json.Unmarshal(respBody, &result); err != nil {
		return nil, fmt.Errorf("unmarshal response: %w", err)
	}

	return &result, nil
}

func (c *Client) GetTalkStatus(ctx context.Context, talkID string) (*TalkResponse, error) {
	url := fmt.Sprintf("https://api.d-id.com/talks/%s", talkID)
	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("create request: %w", err)
	}

	req.Header.Set("Authorization", "Basic "+c.apiKey)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("call d-id: %w", err)
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("read response: %w", err)
	}

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("d-id error %d: %s", resp.StatusCode, string(respBody))
	}

	var result TalkResponse
	if err := json.Unmarshal(respBody, &result); err != nil {
		return nil, fmt.Errorf("unmarshal response: %w", err)
	}

	return &result, nil
}
