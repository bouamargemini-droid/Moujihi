package main

import (
	"database/sql"
	"fmt"
	"log/slog"
	"os"

	_ "github.com/lib/pq"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"

	"github.com/bouamargemini-droid/Moujihi/moujihi-api/internal/auth"
	"github.com/bouamargemini-droid/Moujihi/moujihi-api/internal/config"
	"github.com/bouamargemini-droid/Moujihi/moujihi-api/internal/orientation"
	"github.com/bouamargemini-droid/Moujihi/moujihi-api/internal/student"
	"github.com/bouamargemini-droid/Moujihi/moujihi-api/pkg/deepgram"
	"github.com/bouamargemini-droid/Moujihi/moujihi-api/pkg/did"
	"github.com/bouamargemini-droid/Moujihi/moujihi-api/pkg/elevenlabs"
)

func main() {
	slog.SetDefault(slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{Level: slog.LevelInfo})))

	cfg, err := config.Load()
	if err != nil {
		slog.Error("failed to load config", "error", err)
		os.Exit(1)
	}

	// Database
	db, err := sql.Open("postgres", cfg.DatabaseURL)
	if err != nil {
		slog.Error("failed to connect to database", "error", err)
		os.Exit(1)
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		slog.Error("failed to ping database", "error", err)
		os.Exit(1)
	}
	slog.Info("connected to database")

	// External clients
	claudeClient := orientation.NewClaudeClient(cfg.AnthropicKey)

	var dgClient *deepgram.Client
	if cfg.DeepgramKey != "" {
		dgClient = deepgram.NewClient(cfg.DeepgramKey)
	}

	var elClient *elevenlabs.Client
	if cfg.ElevenLabsKey != "" && cfg.ElevenLabsVoiceID != "" {
		elClient = elevenlabs.NewClient(cfg.ElevenLabsKey, cfg.ElevenLabsVoiceID)
	}

	var didClient *did.Client
	if cfg.DIDKey != "" {
		didClient = did.NewClient(cfg.DIDKey, cfg.DIDAvatar)
	}

	// Services & handlers
	studentRepo := student.NewRepository(db)
	studentHandler := student.NewHandler(studentRepo)

	orientationService := orientation.NewService(db, claudeClient, dgClient, elClient, didClient)
	orientationHandler := orientation.NewHandler(orientationService)

	// Fiber app
	app := fiber.New(fiber.Config{
		AppName:   "Moujihi API",
		BodyLimit: 10 * 1024 * 1024, // 10MB for audio uploads
	})

	app.Use(recover.New())
	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000, https://moujihi.ma",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
	}))

	// Health check
	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok", "service": "moujihi-api"})
	})

	// Public routes
	api := app.Group("/api")
	api.Post("/auth/register", studentHandler.Register)

	// Protected routes
	protected := api.Group("", auth.AuthMiddleware())
	protected.Get("/student/me", studentHandler.GetMe)
	protected.Patch("/student/me", studentHandler.UpdateMe)

	protected.Post("/orientation/session", orientationHandler.CreateSession)
	protected.Post("/orientation/chat", orientationHandler.Chat)
	protected.Post("/orientation/complete", orientationHandler.Complete)
	protected.Get("/orientation/report/:id", orientationHandler.GetReport)

	// Start server
	addr := fmt.Sprintf(":%s", cfg.Port)
	slog.Info("starting Moujihi API", "port", cfg.Port)
	if err := app.Listen(addr); err != nil {
		slog.Error("server failed", "error", err)
		os.Exit(1)
	}
}
