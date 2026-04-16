---
paths:
  - "moujihi-api/**/*.go"
  - "backend/**/*.go"
  - "internal/**/*.go"
---

# Conventions Go — Moujihi Backend

- Framework : Fiber (pas Gin, pas Echo)
- ORM : sqlc (requêtes SQL compilées, type-safe)
- Structure : monolithe organisé par domaine dans internal/
- context.Context en premier paramètre de chaque fonction
- Gestion d'erreur explicite (pas de panic, pas de recover sauf middleware)
- Logs structurés (slog)
- Tests : go test avec testcontainers pour les intégrations
- Pas de variables globales — injection de dépendances via structs
- Validation des inputs avec validator/v10
- Middleware auth : vérification JWT Supabase sur chaque route protégée
