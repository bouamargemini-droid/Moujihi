-- Moujihi Phase 1 — Schema initial

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Étudiants
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    moujihi_id TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    name TEXT,
    language TEXT NOT NULL DEFAULT 'fr',
    supabase_user_id UUID UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Sessions d'orientation
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'in_progress',
    language TEXT NOT NULL DEFAULT 'fr',
    conversation JSONB NOT NULL DEFAULT '[]'::jsonb,
    riasec_profile JSONB,
    student_profile JSONB,
    recommendations JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    completed_at TIMESTAMPTZ
);

-- Index
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_students_phone ON students(phone);
CREATE INDEX idx_students_moujihi_id ON students(moujihi_id);
CREATE INDEX idx_sessions_student_id ON sessions(student_id);
CREATE INDEX idx_sessions_status ON sessions(status);
