---
paths:
  - "**/*.go"
  - "**/*.ts"
  - "**/*.tsx"
---

# Règles de sécurité — Moujihi

- JAMAIS de concaténation SQL (utiliser sqlc ou requêtes paramétrées)
- JAMAIS stocker de données de paiement (tokenisation CMI)
- Chiffrer CIN et Code Massar avec AES-256-GCM avant stockage
- Vérifier user_id == resource.owner_id sur chaque endpoint (anti-IDOR)
- Rate limiting Redis sur tous les endpoints publics
- Validation et sanitization de tous les inputs utilisateur
- CSP headers stricts sur le frontend
- CORS restrictif (uniquement moujihi.ma)
- Logs d'audit pour tout accès aux données sensibles
- Scan ClamAV sur chaque fichier uploadé
- Consentement parental obligatoire pour les mineurs (-18 ans)
