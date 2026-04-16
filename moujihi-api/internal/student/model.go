package student

import (
	"time"
)

type Student struct {
	ID             string    `json:"id"`
	MoujiihiID     string    `json:"moujihi_id"`
	Email          string    `json:"email"`
	Phone          string    `json:"phone"`
	Name           *string   `json:"name,omitempty"`
	Language       string    `json:"language"`
	SupabaseUserID *string   `json:"supabase_user_id,omitempty"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}

type RegisterRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Phone    string `json:"phone" validate:"required,min=10"`
	Name     string `json:"name" validate:"required,min=2"`
	Language string `json:"language" validate:"required,oneof=fr ar en es tz"`
}

type UpdateRequest struct {
	Name     *string `json:"name,omitempty"`
	Language *string `json:"language,omitempty" validate:"omitempty,oneof=fr ar en es tz"`
}
