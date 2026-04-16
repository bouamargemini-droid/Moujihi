package auth

import (
	"strings"

	"github.com/gofiber/fiber/v2"
)

// AuthMiddleware validates the JWT token from the Authorization header.
// For Phase 1, we use a simplified auth flow — the student ID is passed
// directly after registration. Full Supabase JWT validation will be added in Phase 2.
func AuthMiddleware() fiber.Handler {
	return func(c *fiber.Ctx) error {
		authHeader := c.Get("Authorization")
		if authHeader == "" {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Missing authorization header",
			})
		}

		token := strings.TrimPrefix(authHeader, "Bearer ")
		if token == "" || token == authHeader {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Invalid authorization format",
			})
		}

		// Phase 1: token is the student ID directly
		// Phase 2: validate Supabase JWT and extract user_id
		c.Locals("student_id", token)

		return c.Next()
	}
}
