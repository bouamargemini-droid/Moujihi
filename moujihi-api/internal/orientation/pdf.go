package orientation

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"math"
)

type RIASECProfile struct {
	Realistic     float64 `json:"realistic"`
	Investigative float64 `json:"investigative"`
	Artistic      float64 `json:"artistic"`
	Social        float64 `json:"social"`
	Enterprising  float64 `json:"enterprising"`
	Conventional  float64 `json:"conventional"`
}

type Recommendation struct {
	Domain    string  `json:"domain"`
	Reasoning string  `json:"reasoning"`
	Score     float64 `json:"score"`
}

type ProfileData struct {
	Name            string           `json:"name"`
	BacType         string           `json:"bacType"`
	Interests       []string         `json:"interests"`
	Personality     RIASECProfile    `json:"personality"`
	SelfEfficacy    float64          `json:"selfEfficacy"`
	Recommendations []Recommendation `json:"recommendations"`
}

type SVGPoint struct {
	X float64
	Y float64
}

type TemplateData struct {
	Profile       ProfileData
	MoujiihiID    string
	Date          string
	SVGPoints     string
	SVGLabels     []SVGLabel
	EfficacyWidth float64
}

type SVGLabel struct {
	X    float64
	Y    float64
	Text string
}

func generateRIASECSVG(p RIASECProfile) (string, []SVGLabel) {
	cx, cy := 150.0, 150.0
	maxR := 120.0

	traits := []struct {
		name  string
		value float64
	}{
		{"Réaliste", p.Realistic},
		{"Investigateur", p.Investigative},
		{"Artistique", p.Artistic},
		{"Social", p.Social},
		{"Entreprenant", p.Enterprising},
		{"Conventionnel", p.Conventional},
	}

	points := make([]SVGPoint, len(traits))
	labels := make([]SVGLabel, len(traits))

	for i, t := range traits {
		angle := (float64(i)*60 - 90) * math.Pi / 180
		r := (t.value / 10) * maxR
		points[i] = SVGPoint{
			X: cx + r*math.Cos(angle),
			Y: cy + r*math.Sin(angle),
		}
		labelR := maxR + 20
		labels[i] = SVGLabel{
			X:    cx + labelR*math.Cos(angle),
			Y:    cy + labelR*math.Sin(angle),
			Text: fmt.Sprintf("%s (%.0f)", t.name, t.value),
		}
	}

	var svgPoints string
	for i, pt := range points {
		if i > 0 {
			svgPoints += " "
		}
		svgPoints += fmt.Sprintf("%.1f,%.1f", pt.X, pt.Y)
	}

	return svgPoints, labels
}

const reportHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; background: #fff; padding: 40px; max-width: 800px; margin: 0 auto; }
  .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 30px; }
  .logo { font-size: 24px; font-weight: 700; }
  .logo span { color: #6b7280; font-size: 14px; font-weight: 400; }
  .meta { text-align: right; color: #6b7280; font-size: 13px; }
  h1 { font-size: 28px; margin-bottom: 4px; }
  h2 { font-size: 18px; margin-bottom: 12px; color: #374151; border-bottom: 1px solid #e5e5e5; padding-bottom: 8px; }
  .subtitle { color: #6b7280; margin-bottom: 30px; font-size: 15px; }
  section { margin-bottom: 30px; }
  .riasec-chart { text-align: center; margin: 20px 0; }
  .riasec-chart svg { max-width: 320px; }
  .efficacy-bar { height: 16px; background: #f3f4f6; border-radius: 8px; overflow: hidden; margin-top: 8px; }
  .efficacy-fill { height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6); border-radius: 8px; }
  .efficacy-score { display: flex; justify-content: space-between; font-size: 14px; color: #6b7280; margin-top: 4px; }
  .interests { display: flex; flex-wrap: wrap; gap: 8px; }
  .interest-tag { background: #f3f4f6; border-radius: 20px; padding: 4px 14px; font-size: 13px; color: #374151; }
  .recommendation { border: 1px solid #e5e5e5; border-radius: 12px; padding: 16px; margin-bottom: 12px; }
  .rec-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .rec-domain { font-weight: 600; font-size: 16px; }
  .rec-score { background: #eff6ff; color: #3b82f6; padding: 2px 10px; border-radius: 12px; font-size: 13px; font-weight: 600; }
  .rec-reasoning { color: #6b7280; font-size: 14px; line-height: 1.5; }
  .footer { border-top: 2px solid #e5e5e5; padding-top: 20px; margin-top: 40px; text-align: center; color: #9ca3af; font-size: 12px; }
</style>
</head>
<body>
  <div class="header">
    <div class="logo">Moujihi <span>موجهي</span></div>
    <div class="meta">
      <div>{{.MoujiihiID}}</div>
      <div>{{.Date}}</div>
    </div>
  </div>

  <h1>Bilan d'Orientation</h1>
  <p class="subtitle">
    {{- if .Profile.Name}}{{.Profile.Name}}{{end}}
    {{- if .Profile.BacType}} — Bac {{.Profile.BacType}}{{end}}
  </p>

  {{if .SVGPoints}}
  <section>
    <h2>Profil RIASEC</h2>
    <div class="riasec-chart">
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <!-- Grid circles -->
        <circle cx="150" cy="150" r="120" fill="none" stroke="#e5e5e5" stroke-width="1"/>
        <circle cx="150" cy="150" r="80" fill="none" stroke="#e5e5e5" stroke-width="1"/>
        <circle cx="150" cy="150" r="40" fill="none" stroke="#e5e5e5" stroke-width="1"/>
        <!-- Profile polygon -->
        <polygon points="{{.SVGPoints}}" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
        <!-- Labels -->
        {{range .SVGLabels}}
        <text x="{{.X}}" y="{{.Y}}" text-anchor="middle" font-size="10" fill="#6b7280">{{.Text}}</text>
        {{end}}
      </svg>
    </div>
  </section>
  {{end}}

  {{if .Profile.SelfEfficacy}}
  <section>
    <h2>Confiance en soi</h2>
    <div class="efficacy-bar">
      <div class="efficacy-fill" style="width: {{.EfficacyWidth}}%"></div>
    </div>
    <div class="efficacy-score">
      <span>Score d'auto-efficacité</span>
      <span>{{.Profile.SelfEfficacy}}/10</span>
    </div>
  </section>
  {{end}}

  {{if .Profile.Interests}}
  <section>
    <h2>Centres d'intérêt</h2>
    <div class="interests">
      {{range .Profile.Interests}}
      <span class="interest-tag">{{.}}</span>
      {{end}}
    </div>
  </section>
  {{end}}

  {{if .Profile.Recommendations}}
  <section>
    <h2>Domaines recommandés</h2>
    {{range .Profile.Recommendations}}
    <div class="recommendation">
      <div class="rec-header">
        <span class="rec-domain">{{.Domain}}</span>
        <span class="rec-score">{{.Score}}%</span>
      </div>
      <p class="rec-reasoning">{{.Reasoning}}</p>
    </div>
    {{end}}
  </section>
  {{end}}

  <div class="footer">
    Généré par Moujihi (موجهي) — moujihi.ma<br>
    Ce bilan est un outil d'aide à la décision. Il ne remplace pas un conseiller d'orientation professionnel.
  </div>
</body>
</html>`

func GenerateReportHTML(session *Session) ([]byte, error) {
	var profile ProfileData
	if session.StudentProfile != nil {
		if err := json.Unmarshal(session.StudentProfile, &profile); err != nil {
			return nil, fmt.Errorf("unmarshal profile: %w", err)
		}
	}

	svgPoints, svgLabels := generateRIASECSVG(profile.Personality)

	data := TemplateData{
		Profile:       profile,
		MoujiihiID:    session.StudentID,
		Date:          session.CreatedAt.Format("02/01/2006"),
		SVGPoints:     svgPoints,
		SVGLabels:     svgLabels,
		EfficacyWidth: profile.SelfEfficacy * 10,
	}

	tmpl, err := template.New("report").Parse(reportHTML)
	if err != nil {
		return nil, fmt.Errorf("parse template: %w", err)
	}

	var buf bytes.Buffer
	if err := tmpl.Execute(&buf, data); err != nil {
		return nil, fmt.Errorf("execute template: %w", err)
	}

	return buf.Bytes(), nil
}
