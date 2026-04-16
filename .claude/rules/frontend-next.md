---
paths:
  - "src/**/*.tsx"
  - "src/**/*.ts"
  - "app/**/*.tsx"
---

# Conventions Next.js — Moujihi Frontend

- Next.js 15 App Router (pas Pages Router)
- TailwindCSS v4 + shadcn/ui pour tous les composants
- Zustand pour le state management
- React Hook Form + Zod pour les formulaires
- next-intl pour l'i18n (FR/AR/EN/ES/TZ)
- Support RTL natif : CSS logical properties (margin-inline-start, pas margin-left)
- Mobile-first : toujours designer pour mobile d'abord
- Mode sombre par défaut
- Images : Next.js Image component (WebP/AVIF auto, lazy loading)
- SEO : metadata export sur chaque page publique, Schema.org JSON-LD
- Toute page publique = SSR ou SSG, jamais client-only
- Performance : LCP < 2.5s, bundle < 500KB pour la landing
