package student

import (
	"context"
	"database/sql"
	"fmt"
	"math/rand"
	"time"
)

type Repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *Repository {
	return &Repository{db: db}
}

func generateMoujiihiID() string {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	chars := "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
	b := make([]byte, 6)
	for i := range b {
		b[i] = chars[r.Intn(len(chars))]
	}
	return fmt.Sprintf("MJH-%s", string(b))
}

func (r *Repository) Create(ctx context.Context, req RegisterRequest) (*Student, error) {
	s := &Student{
		MoujiihiID: generateMoujiihiID(),
		Email:      req.Email,
		Phone:      req.Phone,
		Language:   req.Language,
	}
	if req.Name != "" {
		s.Name = &req.Name
	}

	err := r.db.QueryRowContext(ctx,
		`INSERT INTO students (moujihi_id, email, phone, name, language)
		 VALUES ($1, $2, $3, $4, $5)
		 RETURNING id, created_at, updated_at`,
		s.MoujiihiID, s.Email, s.Phone, s.Name, s.Language,
	).Scan(&s.ID, &s.CreatedAt, &s.UpdatedAt)

	if err != nil {
		return nil, fmt.Errorf("create student: %w", err)
	}
	return s, nil
}

func (r *Repository) GetByID(ctx context.Context, id string) (*Student, error) {
	s := &Student{}
	err := r.db.QueryRowContext(ctx,
		`SELECT id, moujihi_id, email, phone, name, language, supabase_user_id, created_at, updated_at
		 FROM students WHERE id = $1`, id,
	).Scan(&s.ID, &s.MoujiihiID, &s.Email, &s.Phone, &s.Name, &s.Language, &s.SupabaseUserID, &s.CreatedAt, &s.UpdatedAt)

	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("get student: %w", err)
	}
	return s, nil
}

func (r *Repository) GetByEmail(ctx context.Context, email string) (*Student, error) {
	s := &Student{}
	err := r.db.QueryRowContext(ctx,
		`SELECT id, moujihi_id, email, phone, name, language, supabase_user_id, created_at, updated_at
		 FROM students WHERE email = $1`, email,
	).Scan(&s.ID, &s.MoujiihiID, &s.Email, &s.Phone, &s.Name, &s.Language, &s.SupabaseUserID, &s.CreatedAt, &s.UpdatedAt)

	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("get student by email: %w", err)
	}
	return s, nil
}

func (r *Repository) Update(ctx context.Context, id string, req UpdateRequest) (*Student, error) {
	s := &Student{}
	err := r.db.QueryRowContext(ctx,
		`UPDATE students SET
			name = COALESCE($2, name),
			language = COALESCE($3, language),
			updated_at = now()
		 WHERE id = $1
		 RETURNING id, moujihi_id, email, phone, name, language, supabase_user_id, created_at, updated_at`,
		id, req.Name, req.Language,
	).Scan(&s.ID, &s.MoujiihiID, &s.Email, &s.Phone, &s.Name, &s.Language, &s.SupabaseUserID, &s.CreatedAt, &s.UpdatedAt)

	if err != nil {
		return nil, fmt.Errorf("update student: %w", err)
	}
	return s, nil
}
