package deepgram

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
)

var languageMap = map[string]string{
	"fr": "fr",
	"ar": "ar",
	"en": "en",
	"es": "es",
	"tz": "fr", // tamazight fallback
}

type Client struct {
	apiKey string
}

func NewClient(apiKey string) *Client {
	return &Client{apiKey: apiKey}
}

type transcriptionResponse struct {
	Results struct {
		Channels []struct {
			Alternatives []struct {
				Transcript string `json:"transcript"`
			} `json:"alternatives"`
		} `json:"channels"`
	} `json:"results"`
}

func (c *Client) Transcribe(ctx context.Context, audio []byte, language string) (string, error) {
	lang, ok := languageMap[language]
	if !ok {
		lang = "fr"
	}

	params := url.Values{
		"language":     {lang},
		"model":        {"nova-3"},
		"smart_format": {"true"},
	}

	reqURL := "https://api.deepgram.com/v1/listen?" + params.Encode()

	req, err := http.NewRequestWithContext(ctx, "POST", reqURL, bytes.NewReader(audio))
	if err != nil {
		return "", fmt.Errorf("create request: %w", err)
	}

	req.Header.Set("Authorization", "Token "+c.apiKey)
	req.Header.Set("Content-Type", "audio/webm")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return "", fmt.Errorf("call deepgram: %w", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("read response: %w", err)
	}

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("deepgram error %d: %s", resp.StatusCode, string(body))
	}

	var result transcriptionResponse
	if err := json.Unmarshal(body, &result); err != nil {
		return "", fmt.Errorf("unmarshal response: %w", err)
	}

	if len(result.Results.Channels) > 0 && len(result.Results.Channels[0].Alternatives) > 0 {
		return result.Results.Channels[0].Alternatives[0].Transcript, nil
	}

	return "", nil
}
