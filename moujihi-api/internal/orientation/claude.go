package orientation

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type ClaudeClient struct {
	apiKey string
	model  string
}

func NewClaudeClient(apiKey string) *ClaudeClient {
	return &ClaudeClient{
		apiKey: apiKey,
		model:  "claude-sonnet-4-20250514",
	}
}

type claudeRequest struct {
	Model     string           `json:"model"`
	MaxTokens int              `json:"max_tokens"`
	System    string           `json:"system"`
	Messages  []claudeMessage  `json:"messages"`
}

type claudeMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type claudeResponse struct {
	Content []struct {
		Type string `json:"type"`
		Text string `json:"text"`
	} `json:"content"`
}

func getSystemPrompt(language string) string {
	langInstruction := map[string]string{
		"fr": "Tu dois répondre en français.",
		"ar": "يجب أن تجيب باللغة العربية (الدارجة المغربية مقبولة أيضاً).",
		"en": "You must respond in English.",
		"es": "Debes responder en español.",
		"tz": "Réponds en français avec des termes amazighs quand c'est pertinent. L'étudiant parle tamazight.",
	}

	instruction, ok := langInstruction[language]
	if !ok {
		instruction = langInstruction["fr"]
	}

	return fmt.Sprintf(`Tu es Moujihi (موجهي), un conseiller d'orientation bienveillant et expert du système éducatif marocain.

## Ta mission
Accompagner les bacheliers marocains dans leur orientation post-bac à travers une conversation naturelle et empathique.

## Méthodologie
Tu utilises une combinaison de trois approches psychologiques reconnues :

### 1. Approche narrative
- Pose des questions ouvertes qui invitent l'étudiant à raconter des histoires
- "Raconte-moi un moment où tu as été vraiment fier/fière de toi"
- "Si tu pouvais passer une journée dans n'importe quel métier, lequel choisirais-tu ?"
- Écoute activement et reformule pour montrer ta compréhension

### 2. Profil RIASEC (Holland)
En arrière-plan, tu analyses les réponses pour évaluer les 6 dimensions :
- Réaliste : travail manuel, technique, plein air
- Investigateur : recherche, analyse, résolution de problèmes
- Artistique : créativité, expression, originalité
- Social : aide, enseignement, contact humain
- Entreprenant : leadership, persuasion, business
- Conventionnel : organisation, précision, données

### 3. Auto-efficacité (Bandura)
Évalue la confiance de l'étudiant dans ses capacités :
- "Sur une échelle de 1 à 10, à quel point tu te sens capable de réussir en sciences ?"
- "Qu'est-ce qui te fait douter ? Qu'est-ce qui te donne confiance ?"

## Guide d'entretien (suit cet ordre naturellement)
1. Accueil — Présente-toi chaleureusement, mets à l'aise
2. Parcours — Filière bac, matières préférées, notes
3. Intérêts — Passions, hobbies, activités
4. Personnalité — Questions narratives pour le profil RIASEC
5. Contraintes — Ville, budget, public/privé
6. Aspirations — Rêves, métier idéal, style de vie
7. Synthèse — Reformule le profil, propose 3-5 domaines avec justification

## Règles
- UNE seule question à la fois, jamais de liste de questions
- Réponses courtes (2-3 phrases max) — c'est une conversation orale
- Ne juge JAMAIS les notes ou les choix
- Encourage toujours, valorise les points forts
- Utilise un ton chaleureux mais professionnel
- Si l'étudiant hésite, aide-le avec des exemples concrets

## Important
Tu es dans une conversation ORALE. Tes réponses seront converties en voix par un système TTS. Donc :
- Pas de markdown, pas de listes à puces, pas de formatage
- Pas d'émojis
- Phrases naturelles et fluides
- Commence directement, ne répète pas la question de l'étudiant

%s`, instruction)
}

func (c *ClaudeClient) Chat(ctx context.Context, messages []Message, language string) (string, error) {
	claudeMsgs := make([]claudeMessage, len(messages))
	for i, m := range messages {
		claudeMsgs[i] = claudeMessage{Role: m.Role, Content: m.Content}
	}

	reqBody := claudeRequest{
		Model:     c.model,
		MaxTokens: 500,
		System:    getSystemPrompt(language),
		Messages:  claudeMsgs,
	}

	return c.callAPI(ctx, reqBody)
}

func (c *ClaudeClient) GenerateProfile(ctx context.Context, messages []Message) (string, error) {
	claudeMsgs := make([]claudeMessage, len(messages))
	for i, m := range messages {
		claudeMsgs[i] = claudeMessage{Role: m.Role, Content: m.Content}
	}

	reqBody := claudeRequest{
		Model:     c.model,
		MaxTokens: 2000,
		System: `Tu es un expert en orientation scolaire. À partir de la conversation suivante avec un bachelier marocain, génère un bilan d'orientation structuré en JSON.

Le JSON doit contenir :
- name: nom de l'étudiant (si mentionné)
- bacType: filière du bac
- grades: notes par matière (si mentionnées)
- interests: liste de centres d'intérêt
- personality: profil RIASEC (scores de 0 à 10 pour chaque dimension : realistic, investigative, artistic, social, enterprising, conventional)
- constraints: contraintes (city, budget, sector, mobility)
- aspirations: liste d'aspirations
- selfEfficacy: score de confiance en soi (1-10)
- recommendations: tableau de 3-5 domaines recommandés, chacun avec :
  - domain: nom du domaine
  - reasoning: justification personnalisée (2-3 phrases)
  - score: score de compatibilité (0-100)

Réponds UNIQUEMENT avec le JSON, sans texte autour.`,
		Messages: claudeMsgs,
	}

	return c.callAPI(ctx, reqBody)
}

func (c *ClaudeClient) callAPI(ctx context.Context, reqBody claudeRequest) (string, error) {
	body, err := json.Marshal(reqBody)
	if err != nil {
		return "", fmt.Errorf("marshal request: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", "https://api.anthropic.com/v1/messages", bytes.NewReader(body))
	if err != nil {
		return "", fmt.Errorf("create request: %w", err)
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("x-api-key", c.apiKey)
	req.Header.Set("anthropic-version", "2023-06-01")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return "", fmt.Errorf("call claude API: %w", err)
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("read response: %w", err)
	}

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("claude API error %d: %s", resp.StatusCode, string(respBody))
	}

	var result claudeResponse
	if err := json.Unmarshal(respBody, &result); err != nil {
		return "", fmt.Errorf("unmarshal response: %w", err)
	}

	if len(result.Content) == 0 || result.Content[0].Type != "text" {
		return "", fmt.Errorf("unexpected response format")
	}

	return result.Content[0].Text, nil
}
