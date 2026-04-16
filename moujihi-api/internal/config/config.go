package config

import (
	"fmt"
	"os"
)

type Config struct {
	Port          string
	DatabaseURL   string
	RedisURL      string
	SupabaseURL   string
	SupabaseKey   string
	SupabaseJWTSecret string
	AnthropicKey  string
	DeepgramKey   string
	ElevenLabsKey string
	ElevenLabsVoiceID string
	DIDKey        string
	DIDAvatar     string
}

func Load() (*Config, error) {
	cfg := &Config{
		Port:              getEnv("PORT", "8080"),
		DatabaseURL:       getEnv("DATABASE_URL", "postgres://moujihi:moujihi_dev@localhost:5432/moujihi?sslmode=disable"),
		RedisURL:          getEnv("REDIS_URL", "redis://localhost:6379"),
		SupabaseURL:       os.Getenv("SUPABASE_URL"),
		SupabaseKey:       os.Getenv("SUPABASE_SERVICE_ROLE_KEY"),
		SupabaseJWTSecret: os.Getenv("SUPABASE_JWT_SECRET"),
		AnthropicKey:      os.Getenv("ANTHROPIC_API_KEY"),
		DeepgramKey:       os.Getenv("DEEPGRAM_API_KEY"),
		ElevenLabsKey:     os.Getenv("ELEVENLABS_API_KEY"),
		ElevenLabsVoiceID: getEnv("ELEVENLABS_VOICE_ID", ""),
		DIDKey:            os.Getenv("DID_API_KEY"),
		DIDAvatar:         getEnv("DID_AVATAR_URL", "https://d-id-public-bucket.s3.us-west-2.amazonaws.com/alice.jpg"),
	}

	if cfg.AnthropicKey == "" {
		return nil, fmt.Errorf("ANTHROPIC_API_KEY is required")
	}

	return cfg, nil
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
