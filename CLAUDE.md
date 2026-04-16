@AGENTS.md
@PRD.md

# Moujihi — Instructions de développement

## CONTEXTE OBLIGATOIRE
À chaque début de conversation ou si le contexte semble perdu :
1. Tu es sur le projet **Moujihi** — plateforme d'orientation IA + candidature auto pour bacheliers marocains
2. Le PRD complet (1400+ lignes) est importé via @PRD.md ci-dessus — lis-le
3. La stack est : **Next.js 15 (frontend) + Go monolithique Fiber (backend) + PostgreSQL + Redis**
4. La mémoire projet détaillée est dans `~/.claude/projects/-Users-adilbouamar/memory/project_moujihi.md`
5. Si l'utilisateur dit **"recharge la mémoire"** ou **"relis le contexte"** → lis immédiatement PRD.md + project_moujihi.md + tous les fichiers .claude/rules/

## Règles fondamentales
- TOUJOURS lire et respecter le PRD avant de coder quoi que ce soit
- NE JAMAIS coder sans validation explicite de l'utilisateur
- Suivre les phases de livraison définies dans le PRD (section 22)
- Toute communication en français

## Stack technique
- Frontend : Next.js 15 (App Router) + TailwindCSS v4 + shadcn/ui
- Backend : Go monolithique (Fiber framework) — PAS de microservices
- DB : PostgreSQL 16 + Redis 7 (Upstash)
- Auth : Supabase Auth
- IA : Claude API + Deepgram (STT) + ElevenLabs (TTS) + D-ID (avatar)
- Déploiement : Coolify sur Hetzner + Cloudflare

## Architecture
- Go monolithique structuré par domaine (internal/)
- Chaque domaine peut être extrait en microservice plus tard
- Frontend consomme les APIs Go via REST + WebSocket
- sqlc pour les requêtes SQL (type-safe, zéro injection)

## SEO
- Toutes les pages publiques doivent être SSR/SSG avec meta tags complets
- Schema.org sur chaque page indexable
- Open Graph + Twitter Cards sur chaque page
- Sitemap XML auto-généré

## Sécurité
- Chiffrement AES-256-GCM pour les données sensibles (CIN, Massar)
- Conformité loi 09-08 Maroc (CNDP)
- OWASP Top 10 vérifié sur chaque endpoint
- Données paiement jamais stockées (tokenisation CMI)
