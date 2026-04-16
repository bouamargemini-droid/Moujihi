# PRD — Moujihi (موجهي)
## Plateforme d'orientation et de candidature automatisée pour les bacheliers marocains

**Version :** 1.0
**Date :** 16 avril 2026
**Auteur :** Adil Bouamar

---

## 1. Vision produit

Moujihi est une plateforme web qui accompagne les bacheliers marocains dans leur orientation post-bac grâce à un **agent conversationnel vidéo basé sur l'IA**. Contrairement aux formulaires traditionnels, Moujihi offre une expérience humaine : l'étudiant discute avec un avatar intelligent qui analyse son profil en temps réel, génère un Bilan d'Orientation personnalisé, et **postule automatiquement aux écoles** à sa place.

### Problème
- ~300 000 bacheliers/an au Maroc avec peu d'accès à des conseillers d'orientation
- Les méthodes existantes (formulaires, salons) sont impersonnelles et inefficaces
- Les inscriptions aux écoles sont dispersées, les délais mal communiqués, et beaucoup d'étudiants ratent des opportunités par manque d'information

### Solution
Une plateforme tout-en-un qui :
1. **Oriente** — via une conversation vidéo avec un agent IA bienveillant
2. **Recommande** — des filières adaptées au profil de l'étudiant
3. **Postule** — automatiquement aux écoles sélectionnées par l'étudiant
4. **Notifie** — quand les inscriptions ouvrent et quand les dossiers avancent

---

## 2. Utilisateurs cibles

### Étudiant (utilisateur principal)
- Bachelier marocain (17-20 ans)
- En année de bac ou venant d'obtenir son bac
- Cherche une orientation fiable et un accompagnement dans les candidatures
- Utilise principalement son smartphone
- Communique en français, arabe, anglais, espagnol ou tamazight

### Parent (utilisateur secondaire)
- Parent de l'étudiant
- Veut suivre le parcours d'orientation de son enfant
- Peut valider, modifier les préférences, ajouter des écoles
- Reçoit les notifications de statut des candidatures
- **Accès : co-gestion** (lecture + modification + suivi temps réel)

### École privée / Université (utilisateur B2B)
- École supérieure privée ou université partenaire
- Gère sa vitrine sur Moujihi (description, filières, frais, médias)
- Reçoit des leads qualifiés (dossiers complets, profils compatibles)
- Accepte/refuse les candidatures via son espace
- Paie une commission de **1 500 MAD par étudiant inscrit**

---

## 3. Fonctionnalités principales

### 3.1 Inscription et identification

| Élément | Détail |
|---------|--------|
| Méthode d'inscription | Email + Téléphone |
| Identifiant officiel | Code Massar (lié au profil scolaire ministériel) + CIN |
| Identifiant interne | Généré automatiquement (MJH-XXXXXX) |
| Espace parent | Lié au compte étudiant via code d'invitation |

Chaque étudiant possède une **fiche unique** contenant :
- Informations personnelles (nom, CIN, Code Massar, ville)
- Parcours scolaire (filière bac, notes, établissement)
- Profil psychologique (RIASEC, auto-efficacité)
- Documents uploadés (relevés, CIN, photos)
- Historique des sessions d'orientation
- Candidatures envoyées et leur statut

### 3.2 Session d'orientation vidéo

**Expérience :**
L'étudiant ouvre la plateforme, autorise caméra et micro, et commence à discuter avec un avatar IA (D-ID) qui joue le rôle d'un conseiller d'orientation.

**Caractéristiques :**
- Durée maximale : **30 minutes**
- 1 session complète par étudiant (reprise possible si interruption)
- Langues : français, arabe, anglais, espagnol, tamazight
- Sous-titres en temps réel
- Conversation naturelle (pas de questionnaire)

**Méthodologie psychologique :**
1. **Approche narrative** — questions ouvertes qui invitent l'étudiant à raconter des expériences
2. **Profil RIASEC (Holland)** — analyse en arrière-plan des 6 dimensions de personnalité (Réaliste, Investigateur, Artistique, Social, Entreprenant, Conventionnel)
3. **Auto-efficacité (Bandura)** — évaluation de la confiance de l'étudiant dans ses capacités

**Guide d'entretien (ordre naturel) :**
1. Accueil et mise en confiance
2. Parcours scolaire (filière, notes, matières fortes/faibles)
3. Centres d'intérêt et passions
4. Personnalité et valeurs
5. Contraintes (ville, budget, public/privé, mobilité)
6. Aspirations et métier rêvé
7. Synthèse et validation avec l'étudiant

**Pipeline technique :**
```
Étudiant parle → Micro (MediaRecorder API)
  → Deepgram STT (transcription temps réel)
  → Claude API (raisonnement + orientation)
  → ElevenLabs TTS (synthèse vocale)
  → D-ID (animation avatar)
  → Avatar parle à l'étudiant
```

### 3.3 Bilan d'Orientation

Document PDF généré à la fin de la session contenant :
- **Profil de l'étudiant** : résumé des informations collectées
- **Profil RIASEC** : graphique radar des 6 dimensions
- **Score d'auto-efficacité** : évaluation de la confiance
- **Recommandations** : 3 à 5 filières/écoles recommandées avec justification
- **Plan d'action** : prochaines étapes et calendrier des inscriptions

### 3.4 Base de données des écoles supérieures

Couverture **complète** de l'enseignement supérieur marocain :

**Écoles publiques :**
- Universités publiques (15 universités, ~100 établissements)
- ENSA (Écoles Nationales des Sciences Appliquées)
- ENCG (Écoles Nationales de Commerce et de Gestion)
- FST (Facultés des Sciences et Techniques)
- CPGE (Classes Préparatoires aux Grandes Écoles)
- EST (Écoles Supérieures de Technologie)
- Médecine et pharmacie
- Écoles d'ingénieurs (EMI, ENSIAS, EHTP, INPT...)
- Écoles militaires (ERA, ERM...)

**Écoles privées :**
- UIR, UPM, UM6P, EMSI, Mundiapolis, ESCA, HEM, SUP'DE CO...
- Toutes les écoles reconnues par le ministère

**Formation professionnelle :**
- OFPPT (technicien, technicien spécialisé)
- BTS

**Pour chaque école :**
- Nom, ville, type (public/privé/prépa)
- Filières proposées
- Conditions d'accès (notes, concours, dossier)
- Frais de scolarité
- Débouchés professionnels
- Dates habituelles d'inscription
- URL du portail d'inscription
- Profil RIASEC compatible

### 3.5 Candidature automatique

**Niveau d'automatisation : FULL**

Le système :
1. **Détecte** l'ouverture des inscriptions (scraping pour le public, API/partenariats pour le privé)
2. **Prépare** le dossier (pré-remplissage à partir de la fiche étudiant + documents OCR)
3. **Soumet** la candidature automatiquement sans intervention de l'étudiant
4. **Suit** le statut (accepté, en attente, refusé, documents manquants)
5. **Relance** si un dossier est incomplet ou si une action est requise

**Stratégie hybride :**
- **Écoles privées** : candidature via la plateforme Moujihi (partenariats directs)
- **Écoles publiques** : scraping + automatisation des portails (plus complexe, portails variés)

**Sélection des écoles :**
- L'étudiant choisit parmi les recommandations de Moujihi
- L'étudiant peut aussi ajouter ses propres choix (hors recommandations)
- Le parent peut ajouter ou modifier la liste des écoles

**Important :** Le Bilan d'Orientation (pack Essentiel) recommande des **domaines et types de filières**, mais ne révèle **PAS les noms précis** des écoles partenaires. Les noms d'écoles + candidatures ne sont accessibles qu'à partir du **pack Premium**.

### 3.5.1 Système Moujihi Gateway — Sécurisation des leads (écoles privées)

Le cœur du modèle B2B. L'école ne peut **jamais** inscrire un étudiant Moujihi sans passer par la plateforme.

**Principe : Moujihi est le point de passage obligatoire de toute inscription.**

**Flux complet :**

```
ÉTUDIANT               MOUJIHI                    ÉCOLE
   │                      │                          │
   ├─ Postule ───────────►│                          │
   │                      ├─ Dossier PARTIEL ───────►│
   │                      │  (nom + prénom + ville)   │
   │                      │  (PAS de tél/email/CIN)   │
   │                      │                          ├─ Accepte le dossier
   │                      │◄── Acceptation ──────────┤
   │                      │                          │
   │                      ├─ Facture 1 500 MAD ─────►│
   │                      │                          ├─ Paie (ou solde prépayé débité)
   │                      │◄── Paiement confirmé ────┤
   │                      │                          │
   │◄─ Code CIM activé ──┤─ Contacts complets ─────►│
   │   (QR code unique)   │  + code CIM activé       │
   │                      │                          │
   ├─ Se présente à l'école avec QR code ───────────►│
   │                      │                          ├─ Scanne le code CIM
   │                      │◄── Scan confirmé ────────┤
   │◄─ "Confirmes-tu ?" ─┤                          │
   ├─ Confirme ──────────►│                          │
   │                      ├─ INSCRIPTION VALIDÉE ✓ ──►│
```

**Code d'Inscription Moujihi (CIM) :**
- Généré automatiquement lors de l'acceptation du dossier par l'école
- Format : `MJH-2026-XXXXX` + QR code unique
- **Inactif** tant que l'école n'a pas payé la commission
- **Activé** après paiement → envoyé à l'étudiant par WhatsApp
- **Obligatoire** pour finaliser l'inscription physique à l'école
- Chaque étape est horodatée et tracée

**Solde prépayé :**
- L'école dépose une avance (minimum 15 000 MAD = 10 étudiants)
- Débit automatique de 1 500 MAD à chaque inscription validée
- Alerte quand le solde passe sous 3 000 MAD
- Recharge en ligne (virement ou carte)

**Protection anti-contournement — 5 couches de sécurité :**

| Couche | Mécanisme |
|--------|-----------|
| 1. Information masquée | L'école ne reçoit JAMAIS les coordonnées complètes avant paiement |
| 2. Bourse Moujihi | L'étudiant bénéficie d'une réduction exclusive (2 000-5 000 MAD sur les frais de scolarité) uniquement via Moujihi. Contourner = perdre la bourse |
| 3. Code CIM obligatoire | L'école ne peut pas finaliser l'inscription sans le code (clause Convention de partenariat) |
| 4. Clause contractuelle | Convention signée : toute inscription d'un lead Moujihi sans code CIM = pénalité de 5 000 MAD + résiliation possible |
| 5. Suivi post-orientation | Questionnaire automatique envoyé à l'étudiant 2 mois après. Détection des contournements |

**Bourse Moujihi (avantage exclusif étudiant) :**

Moujihi négocie avec chaque école partenaire des avantages réservés aux étudiants Moujihi :
- Réduction de 2 000 à 5 000 MAD sur les frais de scolarité
- Frais de dossier offerts
- Facilités de paiement (10x sans frais au lieu de 3x)
- Priorité sur les places limitées

Pourquoi l'école accepte : le coût d'acquisition classique d'un étudiant (pub Facebook, salons, commerciaux) est de 3 000 à 8 000 MAD. Moujihi à 1 500 MAD + bourse = toujours moins cher.

Pourquoi l'étudiant ne contourne pas :
```
SANS Moujihi → Frais : 40 000 MAD, pas de bourse
AVEC Moujihi (pack 499 MAD) → Bourse : -3 000 MAD → Frais : 37 000 MAD
Bénéfice net étudiant : +2 501 MAD d'économie
```

### 3.5.2 Espace École partenaire

**Onboarding école :**
1. L'école crée son compte sur Moujihi
2. Télécharge la **Convention de partenariat** (document pré-rempli avec les infos légales de Moujihi)
3. Le système détecte automatiquement les informations de l'école (OCR)
4. L'école signe, cachète et uploade la Convention + documents requis :
   - Registre de Commerce (RC)
   - Patente
   - Identifiant Commun de l'Entreprise (ICE)
   - Autorisation du ministère de l'enseignement supérieur
   - RIB bancaire
5. Validation par l'équipe Moujihi
6. Compte activé + dépôt du solde prépayé initial

**Fonctionnalités de l'espace école :**
- **Vitrine** : gestion de la page école (description, filières, frais, photos, vidéos)
- **Candidatures** : réception, acceptation/refus des dossiers étudiants
- **Codes CIM** : gestion des codes d'inscription, scan QR
- **Solde** : suivi du solde prépayé, historique des débits, recharge
- **Facturation** : historique des factures, export comptable
- **Messagerie** : communication avec les étudiants via Moujihi (sans accès aux coordonnées directes avant paiement)
- **Statistiques** : nombre de candidatures reçues, taux d'acceptation, profil type des candidats

### 3.6 Upload de documents + OCR

L'étudiant uploade ses documents dans son espace :
- Relevés de notes (1ère année bac, examens régionaux)
- CIN (recto/verso)
- Photo d'identité
- Diplôme du bac (quand disponible)
- Autres documents spécifiques (certificats, lettres de motivation)

**Traitement OCR + IA :**
- Extraction automatique des informations (nom, notes, filière)
- Pré-remplissage des formulaires de candidature
- **Vérification de cohérence** : les notes extraites sont comparées avec ce que l'étudiant a déclaré en session d'orientation. Alerte si incohérence détectée.

### 3.7 Notifications

**Canaux : WhatsApp (principal) + Email (documents)**

Notifications envoyées :
- Ouverture des inscriptions pour les écoles ciblées
- Candidature soumise avec succès
- Dossier incomplet — action requise
- Changement de statut (accepté, refusé, liste d'attente)
- Rappels de dates limites
- Résultats de concours / tests

Le parent reçoit les mêmes notifications que l'étudiant.

### 3.8 Comparateur d'écoles

L'étudiant peut comparer les écoles côte à côte :
- Frais de scolarité
- Débouchés professionnels
- Classement / réputation
- Ville et logement
- Conditions d'accès
- Bourse Moujihi disponible
- Témoignages d'anciens étudiants (phase 2)

### 3.9 IA comme ADN de la plateforme

L'intelligence artificielle est le moteur central de Moujihi. Chaque interaction alimente un profil étudiant de plus en plus riche, qui augmente la valeur de la plateforme pour les écoles.

#### 3.9.1 Profiling étudiant IA — La fiche qui se vend

L'agent IA collecte 3 niveaux de données :

**Données explicites** (déclarées par l'étudiant) :
- Notes, filière bac, matières fortes/faibles
- Ville, budget, préférences public/privé
- Métier rêvé, aspirations

**Données implicites** (extraites par l'IA pendant la conversation) :
- Profil RIASEC complet (6 dimensions de personnalité)
- Score d'auto-efficacité (confiance en soi)
- Niveau de maturité décisionnelle (sait ce qu'il veut vs hésitant)
- Sensibilité au prix (le budget est-il un frein majeur ?)
- Niveau d'influence parentale (décide seul ou parents décident ?)
- Canaux d'influence (réseaux sociaux, amis, professeurs)
- Degré d'urgence (calme vs stressé par les deadlines)
- Centres d'intérêt détaillés (sport, tech, art, voyage...)
- Compétences soft (communication, leadership, créativité)
- Langue dominante et niveau de français/arabe

**Données comportementales** (trackées sur la plateforme) :
- Écoles consultées et temps passé sur chaque fiche
- Écoles ajoutées aux favoris puis retirées
- Comparaisons effectuées
- Heure et fréquence de connexion
- Rapidité et complétude de l'upload de documents
- Interactions avec les notifications (ouverture, clic)
- Parcours de navigation (funnel)

**Chaque fiche étudiant vendue aux écoles contient l'ensemble de ces données** — un profil ultra-qualifié, pas un simple nom et numéro de téléphone.

#### 3.9.2 Feed IA personnalisé — Rétention étudiant

Chaque fois que l'étudiant ouvre Moujihi, il voit un **feed intelligent** qui le maintient dans l'écosystème :

**Notifications sociales (preuve sociale) :**
- "Aujourd'hui, 30 étudiants ont été acceptés à l'ENCG Casablanca"
- "Un étudiant de ta ville vient d'être accepté à l'ENSA Marrakech"
- "Les inscriptions ENSA ferment dans 3 jours — 234 étudiants ont déjà postulé"
- "Tu es dans le top 15% des profils pour cette école"

**FOMO (Fear of Missing Out) :**
- "Il reste 12 places à l'UIR pour ta filière"
- "Cette école a reçu 45% de candidatures de plus que l'an dernier"
- "3 étudiants avec un profil similaire au tien ont postulé à cette école aujourd'hui"

**Contenu éducatif IA (personnalisé au profil) :**
- "5 choses à savoir avant de choisir une prépa"
- "Ingénieur au Maroc : salaire moyen et débouchés en 2026"
- Mini-quiz quotidien : "Quel métier correspond le mieux à ton profil ?"
- Chaque contenu est généré par l'IA et adapté aux intérêts de l'étudiant

#### 3.9.3 Gamification

**Barre de progression :**
- "Ton dossier est complet à 78% — ajoute ta photo pour atteindre 85%"
- "Ton profil d'orientation est à 60% — réponds à 3 questions pour le compléter"

**Badges :**
- "Dossier en or" — profil 100% complet
- "Early bird" — postulé dans les premières 48h après ouverture
- "Moujihi Explorer" — 5 écoles comparées
- "Ambassadeur" — 3 amis parrainés
- "Accepté" — première acceptation

**Streaks :**
- "Tu es connecté 5 jours de suite — continue !"
- Streak cassé = notification WhatsApp : "Tu n'es pas venu depuis 2 jours, il se passe des choses..."

#### 3.9.4 Partage social — La fierté comme moteur de growth

Quand un étudiant est accepté, Moujihi génère automatiquement :
- **Story/Card partageable** : image stylée "J'ai été accepté(e) à [École] grâce à Moujihi" — style Spotify Wrapped
- Optimisée pour **Instagram, WhatsApp Status, TikTok**
- **Lien de parrainage intégré** dans le visuel
- **Timeline publique** (optionnelle) : l'étudiant publie son parcours (style LinkedIn)
- **Classement entre amis** : "Invite tes amis et compare vos profils"

#### 3.9.5 Système de parrainage

| Palier | Récompense parrain | Récompense filleul |
|--------|-------------------|-------------------|
| 1 filleul | 1 candidature gratuite supplémentaire | -50 MAD sur son pack |
| 3 filleuls | Pack Premium offert | -50 MAD sur son pack |
| 10 filleuls | Pack Illimité offert | -50 MAD sur son pack |

Le parrainage est tracké automatiquement et les récompenses délivrées par l'IA.

#### 3.9.6 Dashboard école IA — Rendre les écoles addictives

**Insights IA en temps réel :**
- "147 étudiants ont consulté votre école cette semaine (+23%)"
- "Votre école est la 2ème plus consultée à Casablanca en Commerce"
- "34 étudiants compatibles n'ont pas encore postulé — voulez-vous les cibler ?"
- "Les étudiants qui vous consultent hésitent avec [École X] — voici ce qui les attire chez eux"
- "Recommandation IA : augmentez votre Bourse Moujihi de 500 MAD pour +15% de conversions"
- "Votre taux d'acceptation est de 89% — la moyenne du secteur est 72%"

**Scoring des leads IA :**
Chaque lead envoyé à l'école est scoré automatiquement :
- **Score de compatibilité** (0-100) : profil RIASEC vs filières de l'école
- **Score d'intention** (0-100) : comportement de l'étudiant (temps sur fiche, favoris, urgence)
- **Score de conversion** (0-100) : probabilité que l'étudiant s'inscrive
- L'école voit : "Cet étudiant a un score de 92/100 — forte probabilité d'inscription"

**Notifications push addictives :**
- "Un étudiant score 95 vient de postuler chez vous !"
- "Vous avez reçu 12 nouvelles candidatures cette semaine"
- "Votre concurrent vient de baisser ses frais de 10% — impact estimé sur vos candidatures : -8%"

**Benchmarking et classement :**
- Classement en temps réel : "3ème école la plus demandée en ingénierie à Rabat"
- Comparaison anonymisée avec les concurrents
- Prédictions IA : "Vous devriez recevoir ~45 candidatures la semaine prochaine"
- Suggestions d'optimisation : "Les étudiants quittent votre fiche à la section Frais"

### 3.10 Moujihi Ads — Système d'enchères (modèle Google Ads)

#### Positionnement payant

Quand un étudiant recherche une filière/ville, les résultats affichent :
```
[SPONSORISÉ] 🏆 École A — Bourse de 5000 MAD     ← Position 1 (enchère haute)
[SPONSORISÉ] École B — Frais de dossier offerts   ← Position 2
[SPONSORISÉ] École C                               ← Position 3
─────────────────────────────────────────────────────
Recommandé pour toi : École D (score 94/100)       ← Résultats organiques IA
Recommandé pour toi : École E (score 87/100)
```

Les résultats sponsorisés sont **clairement identifiés** et séparés des recommandations IA organiques.

#### Mécanismes d'enchères

**Enchère par clic (CPC) :**
- L'école définit un budget quotidien (ex: 500 MAD/jour)
- Enchérit sur des **segments** : ville, filière, profil RIASEC, budget étudiant
- Prix au clic dynamique

**Enchère par position (CPP) :**
- Position 1 dans "Commerce + Casablanca" = prix mensuel
- Position 2 = prix inférieur, etc.

**Moujihi Boost :**
- L'école paie pour apparaître dans le **feed étudiant** comme contenu sponsorisé
- Budget quotidien : 200-1000 MAD/jour
- Ciblage IA : ville, filière, profil, comportement

#### Prix dynamique

| Facteur | Impact sur le prix |
|---------|-------------------|
| Saison (juin-août = haute saison) | x2 à x3 |
| Nombre d'étudiants actifs dans la ville | Plus d'étudiants = prix monte |
| Nombre d'écoles concurrentes sur le segment | Plus de concurrence = prix monte |
| Qualité de la fiche école (Quality Score) | Bonne fiche = réduction |
| Historique de conversion | Bon taux = réduction |

#### Quality Score (comme Google)

L'IA évalue chaque école sur :
- Complétude de la fiche (description, photos, vidéos) — /25
- Taux d'acceptation des candidatures — /25
- Rapidité de réponse aux candidatures — /25
- Montant de la Bourse Moujihi offerte — /15
- Satisfaction des étudiants inscrits — /10

**Un bon Quality Score = l'école paie moins cher pour la même position.** Ça incite les écoles à offrir une meilleure expérience aux étudiants.

#### Dashboard enchères pour l'école

- "Votre enchère actuelle pour Commerce + Casablanca : 15 MAD/clic"
- "Prix moyen du marché : 22 MAD/clic"
- "Recommandation IA : augmentez à 20 MAD pour passer en position 2"
- Historique des dépenses, ROI par segment, prédictions IA

### 3.11 Moujihi Events — Portes ouvertes virtuelles

- L'école organise un **live streaming** sur Moujihi
- Les étudiants ciblés (profil compatible) reçoivent une invitation personnalisée
- L'étudiant peut poser des questions en direct
- Replay disponible dans la fiche de l'école
- **Pricing** : 10 000 MAD par événement

### 3.12 Moujihi Insights — Rapports IA pour les écoles

Rapports de marché vendus aux écoles :
- Tendances d'orientation par ville et filière
- Profils types des étudiants par segment
- Analyse concurrentielle détaillée (anonymisée)
- Prédictions de demande pour la prochaine saison
- **Pricing** : 5 000 à 20 000 MAD par rapport

### 3.13 Moujihi Prep — Préparation aux concours

- Cours de préparation aux concours (ENSA, médecine, CPGE...) via IA ou partenaires
- QCM adaptatifs générés par l'IA (niveau s'ajuste au profil)
- Simulations d'entretien avec l'avatar IA
- **Pricing** : 99 à 299 MAD par module

### 3.14 Moujihi Logement — Résidences étudiantes

- Partenariats avec des résidences étudiantes dans les villes universitaires
- L'étudiant accepté dans une école voit : "Résidences disponibles près de ton école"
- Réservation via Moujihi
- **Pricing** : commission par réservation

### 3.15 Moujihi Talent — Stages et alternances (phase 2)

- Les entreprises accèdent aux profils étudiants pour proposer des stages/alternances
- Matching IA entre profil étudiant et offres
- **Pricing** : commission par placement

### 3.16 Moujihi Data — Données agrégées (phase 2)

- Données anonymisées et agrégées vendues à :
  - Ministère de l'éducation
  - Think tanks et chercheurs
  - Organismes internationaux
- Tendances macro de l'orientation au Maroc
- **Pricing** : sur devis

### 3.17 Moujihi Stories — "Un jour dans la vie de..."

Mini-vidéos verticales (format TikTok/Reels, 60 secondes) :
- Créées par de vrais étudiants déjà inscrits ou générées par l'IA
- "Un jour dans la vie d'un étudiant ENSA Marrakech"
- "Ma première semaine à l'UIR"
- "Comment j'ai réussi le concours médecine"

**Objectif :** les bacheliers ne savent pas à quoi ressemble la vie dans ces écoles. Contenu addictif qui garde l'étudiant sur la plateforme.

**Monétisation :** les écoles paient pour produire des stories mises en avant dans le feed étudiant.

### 3.18 Moujihi Match — Le Tinder de l'orientation

Après le Bilan d'Orientation, l'étudiant découvre les écoles en **swipant** :
- **Swipe droite** = intéressé
- **Swipe gauche** = pas intéressé
- **Super like** = candidature prioritaire

Chaque swipe alimente l'algorithme IA (donnée comportementale = valeur de la fiche).
L'école voit en temps réel : "34 étudiants ont liké votre école aujourd'hui".
UX familière pour les jeunes, addictif des deux côtés.

### 3.19 Moujihi Circles — Communautés par filière/ville

Groupes automatiques créés par l'IA :
- "Futurs ENSA 2026"
- "Bacheliers SVT Casablanca"
- "Ceux qui hésitent entre commerce et ingénierie"

**Fonctionnement :**
- Les étudiants échangent entre eux (questions, stress, conseils)
- L'IA modère automatiquement
- L'IA intervient quand elle détecte une question d'orientation et répond avec un conseil personnalisé
- Chaque message = donnée supplémentaire qui enrichit le profil étudiant

**Effet réseau :** plus il y a d'étudiants, plus les cercles sont actifs, plus c'est dur de partir.

### 3.20 Moujihi Voice Notes — Orientation en vocal

En complément de la session vidéo complète :
- **Mini-sessions vocales asynchrones** de 5 minutes avec l'agent IA
- L'étudiant envoie un vocal → l'IA répond en vocal
- Format WhatsApp : familier, rapide, sans friction
- Permet de poser une question rapide sans relancer une session complète

Augmente les touchpoints quotidiens et génère plus de données sur le profil.

### 3.21 Moujihi Predict — "Tes chances d'être accepté"

Pour chaque école, l'IA calcule en temps réel :
- "Tes chances d'être accepté à l'ENCG : **78%**"
- Basé sur : notes, profil RIASEC, historique des admissions, nombre de candidats cette année

**Mécanique addictive :** le score évolue en temps réel (nouveaux candidats = score change). L'étudiant revient chaque jour vérifier. Même mécanique que les paris sportifs ou Kaggle.

L'école voit : "Le candidat X a 78% de chances de s'inscrire chez vous" — enrichit le scoring des leads.

### 3.22 Moujihi Défi — Challenges hebdomadaires

Chaque semaine, un défi personnalisé par l'IA selon le comportement de l'étudiant :
- "Complète ton profil à 100% et gagne une candidature gratuite"
- "Compare 3 écoles et débloque un rapport exclusif sur ta filière"
- "Invite 2 amis cette semaine et monte dans le classement"
- "Réponds au quiz orientation et découvre un métier que tu ne connais pas"
- Pas de documents uploadés → défi upload
- Pas de swipe récent → défi Moujihi Match

Récompenses : candidatures gratuites, badges exclusifs, visibilité dans le classement.

### 3.23 Moujihi Simulation de Salaire

L'étudiant choisit une filière et voit :
- Salaire moyen à la sortie
- Salaire après 5 ans et 10 ans
- Comparaison visuelle entre plusieurs filières
- **Retour sur investissement** : "Tu paies 40 000 MAD/an pendant 5 ans. Tu récupères ton investissement en 2.3 ans de travail."

**Argument massue pour les parents.** Ancre Moujihi comme un outil sérieux et financièrement rationnel. Données basées sur les statistiques du marché de l'emploi marocain (HCP, enquêtes sectorielles).

### 3.24 Moujihi Live — Q&A en direct

Chaque semaine, un **live** sur la plateforme :
- Un professionnel diplômé raconte son parcours (ingénieur EMI, médecin, entrepreneur ENCG...)
- Les étudiants posent des questions en direct
- Vrais invités ou simulation IA (phase 1)
- Replays disponibles dans les fiches écoles

**Monétisation :** les écoles sponsorisent les lives de leur secteur.
**Rétention :** crée un rendez-vous récurrent hebdomadaire.

### 3.25 Moujihi Offline — Mode hors-ligne

Pour les bacheliers en zones rurales avec un internet instable :
- Téléchargement du Bilan d'Orientation en PDF
- Consultation hors-ligne des fiches écoles sauvegardées
- Enregistrement de vocaux hors-ligne → envoi automatique au retour de la connexion
- Feed pré-chargé lors de la dernière connexion

Élargit le marché à tout le Maroc (pas que les grandes villes). Argument social puissant pour le branding.

### 3.26 Moujihi Parents — Contenu dédié aux parents

Feed séparé dans l'espace parent :
- "Comment accompagner votre enfant dans son orientation"
- "Les 10 filières les plus demandées en 2026"
- "Comprendre le système des prépas au Maroc"
- Notifications de fierté : "Votre enfant a été accepté à..."
- Contenu disponible en **arabe/darija** (beaucoup de parents ne lisent pas le français)

**Growth organique :** un parent qui partage dans un groupe WhatsApp de parents d'élèves = acquisition massive et gratuite.

### 3.27 Moujihi Map — Carte interactive du Maroc

Carte interactive avec :
- Toutes les écoles par ville, filtres (filière, budget, public/privé)
- Heatmap de densité de candidats par ville
- "Dans ta ville, les étudiants postulent surtout à..."
- Distance domicile → école
- Coût de la vie estimé par ville (loyer, transport, restauration)

Visuel, engageant, chaque interaction = donnée comportementale.

### 3.28 Moujihi Network — Réseau social d'orientation

Réseau social structurellement limité à l'orientation. Pas de chat privé, pas de profil personnel, pas de photos. Chaque connexion est liée à un objectif éducatif.

#### Accès au réseau de contacts

**Méthode 1 — Code Massar :** le Code Massar identifie le lycée et la classe. L'IA regroupe automatiquement les étudiants du même lycée sans accéder au répertoire téléphonique.

**Méthode 2 — Contacts téléphoniques (opt-in) :** l'étudiant autorise l'accès → Moujihi identifie quels contacts sont inscrits.

**Méthode 3 — Parrainage :** chaque parrainage crée automatiquement un lien.

#### 4 types de connexions

**1. "Anciens camarades" (même lycée/classe) :**
- Détection automatique via Code Massar (même établissement + année + filière)
- Visible : prénom, filière bac, domaines d'intérêt, statut candidatures
- Invisible : notes, score Predict, budget, coordonnées
- Actions : féliciter, voir le parcours, rejoindre un Cercle commun
- Pas de message privé

**2. "Même destination" (postulent à la même école) :**
- Cercle créé automatiquement quand 5+ étudiants postulent à la même école
- Infos épinglées par l'IA (dates concours, places, conseils)
- Discussions modérées par l'IA (modérateur + expert + commercial subtil)
- Messages texte uniquement, pas de photos/vocaux entre étudiants

**3. "Profil similaire" (même RIASEC, mêmes intérêts) :**
- Algorithme de matching : 40% RIASEC + 25% intérêts + 20% zone géo + 15% filière bac
- L'étudiant voit le parcours d'un profil similaire + suggestions de candidature
- Chaque suggestion = funnel de conversion ("Sara a été acceptée à FST, tu veux postuler ?")
- Pas de chat direct — uniquement suivre le parcours et réactions (bravo)

**4. "Éclaireur" (déjà inscrit dans une école ciblée) :**
- Étudiants de l'année précédente recrutés via le suivi post-inscription
- Format Q&A structuré avec questions prédéfinies + questions personnalisées filtrées par l'IA
- Réponses publiques enrichissent la fiche de l'école (contenu authentique gratuit)
- Score de l'éclaireur (étoiles) basé sur la qualité et utilité des réponses

#### Garde-fous — 5 couches de protection

**Couche 1 — Architecture anti-dérive :**
Pas de photo perso, pas de bio libre, pas de messages privés, pas de recherche d'utilisateurs, pas de "X est en ligne". Si ça ne sert pas l'orientation, ça n'existe pas.

**Couche 2 — Modération IA temps réel :**
Chaque message analysé en <500ms. VERT = publié. ORANGE = publié avec avertissement. ROUGE = bloqué. Bloque automatiquement : coordonnées personnelles, contenu inapproprié, hors-sujet, tentatives de contact privé.

**Couche 3 — Système de réputation :**
Score de confiance invisible. Messages utiles = +points. Messages bloqués = -points. Score bas → modération stricte → suspension → exclusion des fonctionnalités sociales.

**Couche 4 — Contrôle parental :**
Le parent voit les Cercles de son enfant, ses messages, peut désactiver l'accès social, reçoit une alerte si un message est bloqué.

**Couche 5 — Revue humaine :**
Messages ROUGES empilés pour revue hebdomadaire. Signalements traités sous 24h. Rapport mensuel de modération.

#### Classement des lycées

Chaque lycée reçoit un **score Moujihi** :
```
Score = 30% taux d'acceptation + 25% étudiants actifs + 20% diversité acceptations
      + 15% qualité acceptations + 10% engagement plateforme
```

**Vues :** national (Top 100), régional (par académie), par filière, par ville.

**Moteur de viralité :**
- Boucle 1 : étudiant accepté → lycée monte → il partage → camarades s'inscrivent → lycée monte
- Boucle 2 : compétition entre lycées rivaux → invitation massive de camarades
- Boucle 3 : profs et directeurs encouragent l'utilisation → partenariats B2B potentiels

**Cards partageables :** image stylée avec le rang du lycée, nombre d'acceptés, top filières. Optimisée WhatsApp/Instagram.

**Récompenses :**
- Top 10 national : badge "Excellence" + 10 packs Essentiel offerts
- Top 3 régional : badge + 5 packs offerts
- Premier lycée d'une ville : badge "Pionnier" + 3 packs offerts
- 50+ étudiants inscrits : Moujihi Prep gratuit pour tout le lycée

### 3.29 Suivi post-inscription

Après l'inscription, Moujihi continue à accompagner l'étudiant :
- Check-in IA périodique : "Comment se passe ton intégration ?"
- Détection de difficultés (via conversation IA)
- Suggestion de réorientation si nécessaire
- L'étudiant reste dans l'écosystème → données enrichies → valeur long terme
- Feedback sur l'école → améliore le Quality Score et les recommandations futures

### 3.18 Dashboard admin Moujihi

Tableau de bord pour l'équipe Moujihi :
- Nombre d'étudiants inscrits (par jour/semaine/mois)
- Sessions d'orientation réalisées
- Taux de conversion (inscription → paiement → session → candidature → inscription école)
- Candidatures envoyées par école
- Revenus par source (packs étudiants, commissions, ads, insights, events, prep, logement)
- Coûts API (Claude, Deepgram, ElevenLabs, D-ID)
- Marge par étudiant et par école
- Alertes (erreurs scraping, portails en panne, soldes écoles bas)
- Métriques de rétention (DAU, MAU, temps moyen sur la plateforme, taux de retour)

---

## 4. Modèle économique

### 4.1 Revenu B2C — Packs étudiants (mars → septembre)

| Formule | Prix | Contenu |
|---------|------|---------|
| **Moujihi Essentiel** | **199 MAD** | Bilan d'Orientation complet (domaines recommandés, PAS les noms d'écoles) + rapport PDF + accès parent |
| **Moujihi Premium** | **499 MAD** | Essentiel + noms des écoles recommandées + candidatures automatiques (jusqu'à 10 écoles) + alertes inscriptions + Bourse Moujihi |
| **Moujihi Illimité** | **799 MAD** | Premium + candidatures illimitées + suivi prioritaire + relance automatique si dossier incomplet |

**Justification :**
- Paiement unique (pas d'abonnement) — adapté aux familles marocaines
- 10x moins cher qu'un conseiller privé (~5000 MAD)
- La fenêtre saisonnière crée l'urgence naturelle
- Garantie "orienté ou remboursé" sur le pack Essentiel (coût API ~5 MAD/session)

### 4.2 Revenu B2B — Commission écoles privées

| Élément | Détail |
|---------|--------|
| Commission par inscription | **1 500 MAD** par étudiant inscrit définitivement |
| Solde prépayé minimum | **15 000 MAD** (= 10 étudiants) |
| Pénalité contournement | **5 000 MAD** par étudiant + résiliation possible |
| Bourse Moujihi (à charge de l'école) | **2 000 à 5 000 MAD** de réduction sur les frais de scolarité |

**Projection revenus année 1 :**

| Source | Calcul | Montant |
|--------|--------|---------|
| Packs étudiants | 5 000 étudiants × ~400 MAD moyen | ~2 000 000 MAD |
| Commissions inscriptions | 2 000 inscriptions × 1 500 MAD | ~3 000 000 MAD |
| Moujihi Ads (enchères CPC) | 50 écoles × ~2 000 MAD/mois × 6 mois | ~600 000 MAD |
| Moujihi Boost (feed sponsorisé) | 30 écoles × ~500 MAD/jour × 90 jours haute saison | ~1 350 000 MAD |
| Moujihi Events | 20 événements × 10 000 MAD | ~200 000 MAD |
| Moujihi Insights | 15 rapports × 10 000 MAD moyen | ~150 000 MAD |
| Moujihi Prep | 1 000 étudiants × 150 MAD moyen | ~150 000 MAD |
| Moujihi Logement | 500 réservations × 200 MAD commission | ~100 000 MAD |
| **Total année 1** | | **~7 550 000 MAD** |
| **Phase 2+ (Talent + Data)** | | **+2 000 000 MAD estimé** |

### 4.3 Moyens de paiement

**Étudiants :**
- Carte bancaire marocaine (CMI)
- Mobile Money (inwi money, Orange Money, CashPlus)

**Écoles :**
- Virement bancaire
- Recharge solde prépayé en ligne (carte ou virement)

---

## 5. Langues

| Langue | STT | TTS | Avatar | Interface |
|--------|-----|-----|--------|-----------|
| Français | ✅ Deepgram | ✅ ElevenLabs | ✅ D-ID | ✅ |
| Arabe (fusha + darija) | ✅ Deepgram | ✅ ElevenLabs | ✅ D-ID | ✅ |
| Anglais | ✅ Deepgram | ✅ ElevenLabs | ✅ D-ID | ✅ |
| Espagnol | ✅ Deepgram | ✅ ElevenLabs | ✅ D-ID | ✅ |
| Tamazight | ⚠️ Fallback FR | ⚠️ Fallback FR | ⚠️ Fallback FR | ✅ (interface traduite) |

**Stratégie tamazight :** interface traduite en tifinagh, mais conversation en français avec termes amazighs. Amélioration via modèle STT/TTS custom en phase 2.

---

## 6. Stack technique

### 6.1 Architecture : Next.js frontend + Go backend monolithique

| Couche | Technologie | Raison |
|--------|-------------|--------|
| **Frontend** | Next.js 15 (App Router) | SSR/SSG pour le SEO, mobile-first, stack maîtrisée |
| **Style** | TailwindCSS v4 + shadcn/ui | Composants accessibles, design system rapide |
| **State** | Zustand | Léger, simple, performant |
| **Forms** | React Hook Form + Zod | Validation type-safe |
| **i18n** | next-intl | FR/AR/EN/ES/TZ avec support RTL |
| **Charts** | Recharts | Graphiques RIASEC, stats dashboards |
| **Maps** | Mapbox GL JS | Carte interactive Moujihi Map |
| **PWA** | next-pwa | Mode offline, installation mobile |
| **Backend** | Go (Fiber framework) | Ultra performant, 1M+ connexions, goroutines pour le parallélisme |
| **ORM** | sqlc | Requêtes SQL type-safe compilées, zéro injection SQL |
| **DB principale** | PostgreSQL 16 | Robuste, JSONB, full-text search, pg_trgm |
| **Cache/Realtime** | Redis 7 (Upstash) | Sessions, scoring temps réel, enchères, pub/sub WebSocket |
| **Search** | Meilisearch | Recherche écoles instantanée, facettes (ville, filière, budget) |
| **Auth** | Supabase Auth | Social login (Google, Apple), JWT RS256 |
| **Stockage** | Supabase Storage | Documents, photos, médias (chiffré) |
| **LLM** | Claude API (Anthropic) | Orientation, modération, scoring, contenu feed |
| **STT** | Deepgram Nova 3 | Streaming temps réel, arabe/français |
| **TTS** | ElevenLabs Multilingual v2 | Voix naturelle multilingue |
| **Avatar** | D-ID Streaming API | Avatar temps réel animé |
| **OCR** | Google Vision API | Extraction documents (relevés, CIN) |
| **PDF** | Go wkhtmltopdf | Génération Bilan d'Orientation |
| **WhatsApp** | Meta Cloud API | Notifications, alertes |
| **Email** | Resend | Transactionnel, rapports |
| **Paiement** | CMI + CashPlus API | Cartes bancaires + Mobile Money marocain |
| **Scraping** | Rod (headless Chrome en Go) | Natif Go, parallèle, performant |
| **CI/CD** | GitHub Actions | Auto-deploy sur push |
| **Déploiement** | Coolify sur Hetzner | Docker, contrôle total, ~50€/mois |
| **CDN/WAF** | Cloudflare | DDoS protection, CDN global, SSL |
| **Monitoring** | Grafana + Prometheus | Métriques, alertes |
| **Logs** | Loki | Centralisation des logs |
| **Erreurs** | Sentry | Tracking erreurs frontend + backend |

### 6.2 Structure du monolithe Go

```
moujihi-api/
├── cmd/
│   └── server/main.go              ← Point d'entrée
├── internal/
│   ├── orientation/                 ← Session IA, RIASEC, profiling
│   ├── school/                      ← Base écoles, vitrines, matching
│   ├── application/                 ← Candidatures, Gateway, codes CIM
│   ├── billing/                     ← Paiements, commissions, solde prépayé
│   ├── ads/                         ← Enchères, Quality Score, CPC
│   ├── notification/                ← WhatsApp, email, feed IA
│   ├── social/                      ← Cercles, Network, classement lycées
│   ├── scraper/                     ← Scraping portails, détection inscriptions
│   ├── analytics/                   ← Dashboard admin, stats écoles
│   ├── auth/                        ← Middleware auth (Supabase JWT)
│   └── common/                      ← Utils, config, erreurs
├── pkg/
│   ├── claude/                      ← Client Claude API
│   ├── deepgram/                    ← Client Deepgram
│   ├── elevenlabs/                  ← Client ElevenLabs
│   ├── did/                         ← Client D-ID
│   ├── whatsapp/                    ← Client Meta Cloud API
│   └── payment/                     ← Client CMI + CashPlus
├── migrations/                      ← SQL migrations PostgreSQL
├── config/
│   └── config.go                    ← Variables d'environnement
├── Dockerfile
├── docker-compose.yml
└── go.mod
```

Organisé par domaine métier. Chaque dossier `internal/` peut être extrait en microservice indépendant si nécessaire.

## 7. Sécurité

### 7.1 Conformité légale (Maroc)

| Réglementation | Obligation | Implémentation |
|---------------|-----------|----------------|
| Loi 09-08 (données personnelles) | Déclaration CNDP, consentement, droit suppression | Déclaration avant lancement, consentement granulaire, bouton "Supprimer mon compte" |
| Loi 31-08 (protection consommateur) | Transparence prix, droit rétractation | CGV claires, politique remboursement |
| Loi 05-20 (cybersécurité) | Notification DGSSI en cas de breach | Plan réponse incidents, notification sous 72h |
| Protection des mineurs | Consentement parental -18 ans | Consentement parent obligatoire, contrôle parental intégré |

### 7.2 Chiffrement

| Donnée | Au repos | En transit |
|--------|----------|------------|
| Mots de passe | Argon2id (Supabase Auth) | HTTPS/TLS 1.3 |
| CIN, Code Massar | AES-256-GCM (chiffrement applicatif Go) | HTTPS/TLS 1.3 |
| Documents uploadés | AES-256 (Supabase Storage encrypted) | HTTPS/TLS 1.3 |
| Conversations | AES-256-GCM | WSS (WebSocket sécurisé) |
| Données de paiement | Jamais stockées (tokenisation CMI) | PCI DSS |
| Coordonnées (tél, email) | AES-256-GCM | HTTPS/TLS 1.3 |

### 7.3 Sécurité applicative (OWASP Top 10)

| Menace | Protection |
|--------|-----------|
| Injection SQL | sqlc (requêtes paramétrées compilées) |
| XSS | Next.js escape par défaut + CSP headers + sanitization |
| CSRF | Tokens CSRF + SameSite cookies |
| Broken Auth | Supabase JWT RS256 + refresh token rotation + rate limiting |
| IDOR | Middleware Go : vérification user_id == resource.owner_id |
| Mass Assignment | Structs Go strictes |
| Rate Limiting | Redis-based par IP + user + endpoint |
| File Upload | Validation MIME + taille max + scan ClamAV |
| SSRF | Whitelist domaines externes |
| Dépendances | govulncheck + npm audit en CI/CD |

### 7.4 Infrastructure

```
Internet → Cloudflare (WAF, DDoS, CDN, SSL)
    → Coolify/Hetzner (reverse proxy Traefik)
        → Next.js (frontend, pas d'accès DB)
        → Go API (seul accès aux données)
        → PostgreSQL (port fermé, réseau Docker interne)
        → Redis (port fermé, réseau Docker interne)
```

- SSH par clé uniquement, firewall UFW (ports 80/443 seuls)
- Backups PostgreSQL automatiques quotidiens, rétention 30 jours, restore test mensuel
- Logs de sécurité séparés, rétention 1 an, immuables

### 7.5 Sécurité paiements

- PCI DSS : jamais de numéros de carte stockés (tokenisation CMI)
- Vérification serveur (montant non modifiable côté client)
- Webhooks signés HMAC
- Comptabilité double entrée PostgreSQL (transactions atomiques)
- Logs financiers immuables (append-only)

### 7.6 Sécurité IA

| Risque | Protection |
|--------|-----------|
| Prompt injection | System prompt blindé + validation outputs |
| Data leakage cross-user | Chaque session reçoit uniquement les données de l'étudiant en cours |
| Modération contournée | Double couche : regex rapide + analyse Claude |
| Hallucination | Recommandations matchées contre la base PostgreSQL |
| Coût API explosion | Budget max/session, rate limit/étudiant |

### 7.7 Gestion des incidents

Détection (Grafana) → Classification → Confinement → Notification CNDP/DGSSI si breach (<72h) → Notification utilisateurs → Correction → Post-mortem

### 7.8 Tests de sécurité

| Test | Fréquence |
|------|-----------|
| govulncheck + npm audit | Chaque CI/CD |
| Tests injection SQL | Chaque CI/CD |
| Scan OWASP ZAP | Hebdomadaire |
| Pentest externe | Avant lancement + annuel |
| Backup restore test | Mensuel |

## 8. SEO & Référencement

### 8.1 Architecture SEO-native

Pages publiques indexables (SSR/SSG) :
```
moujihi.ma/                                    ← Landing
moujihi.ma/ecoles                              ← Annuaire écoles
moujihi.ma/ecoles/[ville]                      ← Écoles par ville
moujihi.ma/ecoles/[ville]/[filiere]            ← Écoles par ville + filière
moujihi.ma/ecole/[slug]                        ← Fiche école publique
moujihi.ma/ecole/[slug]/avis                   ← Avis éclaireurs
moujihi.ma/filieres                            ← Toutes les filières
moujihi.ma/filiere/[slug]                      ← Page filière
moujihi.ma/classement-lycees                   ← Classement national
moujihi.ma/classement-lycees/[region]          ← Classement régional
moujihi.ma/blog/[slug]                         ← Contenu SEO IA
moujihi.ma/stories                             ← Stories étudiants
moujihi.ma/simulation-salaire                  ← Outil interactif (lead magnet)
moujihi.ma/carte                               ← Carte interactive
moujihi.ma/prix                                ← Pricing
moujihi.ma/ecoles-partenaires                  ← Landing B2B
```

Pages privées (noindex) : /dashboard/*, /parent/*, /ecole-admin/*, /admin/*, /session/*

### 8.2 Meta tags & Open Graph

Chaque page publique contient :
- Title optimisé (mot-clé + marque)
- Meta description unique
- Canonical URL
- Open Graph complet (Facebook, WhatsApp, LinkedIn)
- Twitter Card (summary_large_image)
- Images OG dynamiques générées par le backend Go (logo école + stats)
- Hreflang pour les versions FR/AR

### 8.3 Structured Data (Schema.org)

- `EducationalOrganization` → fiches écoles (rich snippets Google)
- `Course` → filières
- `ItemList` → classements
- `FAQPage` → pages filières
- `Event` → Moujihi Live
- `Article` → blog SEO
- `VideoObject` → Stories
- `BreadcrumbList` → fil d'ariane

### 8.4 SEO technique

| Élément | Implémentation |
|---------|---------------|
| Sitemap XML | Généré par Go, mis à jour automatiquement, soumis à Search Console |
| Sitemap vidéo | Séparé pour Stories et replays (Google Video Search) |
| robots.txt | Allow public, Disallow private |
| Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| Images | WebP/AVIF via Next.js Image, lazy loading, alt descriptif |
| URLs | Slugs lisibles en français (/ecole/ensa-marrakech) |
| Pagination | rel="next"/"prev" |
| 404 | Page custom avec suggestions + recherche |
| Redirections 301 | Si URL change |
| Compression | Brotli via Cloudflare |
| PageSpeed mobile | Score > 90 |

### 8.5 SEO Social — Par plateforme

**TikTok :** Stories Moujihi = contenu natif, hashtags #bac2026 #orientationmaroc, challenges "#MonParcoursMoujihi"

**Instagram :** Cards acceptation (Stories 9:16 + Posts 1:1), carrousels "Top 5 écoles", Reels = Stories reformatées

**Facebook :** OG parfait (preview riche), Facebook Pixel pour retargeting, groupes parents ciblés

**WhatsApp :** Preview riche via OG tags, bouton partage wa.me, contenu parent conçu pour groupes WhatsApp

**YouTube :** Replays Live uploadés auto, SEO titres/descriptions, Shorts = Stories

**LinkedIn :** Page entreprise pour crédibilité B2B, articles repurposés

### 8.6 Contenu SEO généré par l'IA

2-3 articles/semaine en haute saison, générés par Claude, revus avant publication.
Exemples : "Meilleures écoles de commerce Casablanca 2026", "Salaire ingénieur Maroc", "ENSA vs ENCG comparaison"

Mots-clés longue traîne : "orientation après bac maroc", "inscription ensa 2026", "frais scolarité uir rabat", "que faire après bac svt maroc"

### 8.7 Backlinks

- Écoles partenaires → lien "Postuler via Moujihi" sur leur site
- Lycées classés → badge à afficher sur leur site
- Presse marocaine → articles couverture
- Annuaires éducation marocains

### 8.8 Analytics SEO

Google Search Console, Google Analytics 4, Facebook Pixel, TikTok Pixel, Cloudflare Analytics, dashboard interne (classement mots-clés, conversion SEO → inscription)

## 9. Design & Identité visuelle

### 9.1 Principes de design

- **Mobile-first** : 80%+ du trafic sera mobile
- **Simple et clair** : les étudiants n'ont pas la patience pour une UI complexe
- **Bilingue natif** : FR (LTR) et AR (RTL) supportés dès le premier pixel
- **Mode sombre** : activé par défaut (préférence jeunes), mode clair disponible
- **Accessible** : WCAG 2.1 AA minimum

### 9.2 Support RTL (arabe) et Tifinagh

- Toute l'interface bascule en RTL quand la langue est arabe
- Utilisation de CSS logical properties (margin-inline-start au lieu de margin-left)
- Tailwind RTL plugin
- Police arabe : IBM Plex Arabic (lisible, moderne)
- Police tifinagh : Noto Sans Tifinagh (Google Fonts)
- Police latine : Inter (standard, lisible)
- Graphiques (RIASEC radar, stats) : inversés en RTL
- Swipe Moujihi Match : inversé en RTL (droite = pas intéressé, gauche = intéressé)
- Tests visuels automatisés en FR et AR pour chaque composant

### 9.3 Avatar Moujihi

L'avatar du conseiller IA :
- Apparence : jeune adulte marocain/e (25-30 ans), professionnel/le mais chaleureux/se
- Genre neutre ou choix offert à l'étudiant (homme/femme)
- Tenue : smart casual (pas de costume cravate, pas trop décontracté)
- Expression : souriante, rassurante, regard direct
- Customisé via D-ID avec une photo/avatar haute qualité propre à Moujihi

### 9.4 Micro-interactions et animations

- Swipe Moujihi Match : animation fluide avec feedback haptique (vibration mobile)
- Badge débloqué : animation celebration (confettis)
- Acceptation école : animation spéciale + son
- Barre de progression : animation smooth
- Feed : pull-to-refresh avec animation branded
- Transitions de page : slide fluide (pas de rechargement complet)

## 10. Performance

### 10.1 Budget performance (réseau marocain 3G/4G)

| Métrique | Cible |
|----------|-------|
| Page d'accueil (poids total) | < 500 KB |
| First Contentful Paint (3G) | < 2 secondes |
| Largest Contentful Paint (3G) | < 3 secondes |
| Time to Interactive (3G) | < 4 secondes |
| Cumulative Layout Shift | < 0.1 |

### 10.2 Mode dégradé automatique

Si le réseau est lent, le système s'adapte automatiquement :
- Réseau rapide (4G+) → session vidéo complète (avatar D-ID + voix)
- Réseau moyen (3G) → session voix uniquement (pas d'avatar vidéo, image statique)
- Réseau lent (2G/Edge) → session texte uniquement (chat écrit)
- Hors-ligne → mode Moujihi Offline (fiches pré-chargées, vocaux en queue)

### 10.3 Optimisations

- Images : WebP/AVIF, srcset responsive, lazy loading, CDN Cloudflare
- JS : code splitting par route, tree shaking, bundle analyzer
- Fonts : subset (uniquement les caractères utilisés), preload, font-display swap
- API : pagination cursor-based, compression gzip/brotli, cache Redis agressif
- Fiches écoles : ISR (Incremental Static Regeneration) — régénérées toutes les heures, pas à chaque requête

## 11. Onboarding — Premier contact

### 11.1 Flow d'onboarding (maximum 3 étapes avant la valeur)

```
Étape 1 : Landing → "Découvre ton orientation en 30 min" → [Commencer gratuitement]
Étape 2 : Inscription rapide (prénom + téléphone uniquement, pas de CIN/Massar)
Étape 3 : Démo gratuite de 1 minute avec l'avatar
         → L'avatar se présente, pose 2 questions simples
         → L'étudiant voit que ça marche, il est accroché
Étape 4 : "Pour continuer et recevoir ton Bilan complet" → choix du pack → paiement
Étape 5 : Compléter le profil (Code Massar, CIN) → session complète de 30 min
```

**Principe : valeur AVANT le paiement.** L'étudiant goûte à l'expérience gratuitement, puis paie pour la suite.

### 11.2 Profil progressif

Ne pas tout demander d'un coup. Collecter les infos au fur et à mesure :
- Inscription : prénom + téléphone (10 secondes)
- Après la démo : Code Massar + langue (30 secondes)
- Après le paiement : CIN + ville (1 minute)
- Après le bilan : upload documents (quand l'étudiant est engagé)

## 12. Support client

### 12.1 Niveaux de support

| Niveau | Canal | Traitement |
|--------|-------|-----------|
| 1 — Automatique | Chatbot IA sur la plateforme | Résout 80% des demandes (FAQ, statut candidature, problème technique simple) |
| 2 — Humain | WhatsApp Business | Problèmes complexes (paiement échoué, documents rejetés, litige école). Réponse < 2h en haute saison |
| 3 — Escalade | Email + appel | Litiges financiers, bugs critiques, plaintes. Réponse < 24h |

### 12.2 FAQ dynamique

Générée automatiquement par l'IA à partir des questions récurrentes du chatbot. Indexée par Google (SEO). Disponible en FR/AR.

## 13. Analyse concurrentielle

| Concurrent | Ce qu'il fait | Ce qu'il ne fait PAS (= avantage Moujihi) |
|-----------|--------------|-------------------------------------------|
| **Tojihi.ma** | Portail d'orientation, formulaires | Pas d'IA, pas de candidature auto, pas de marketplace |
| **9rayti.com** | Contenu éducatif, guides filières | Pas d'orientation personnalisée, pas de candidature |
| **Supmaroc.com** | Annuaire écoles | Pas d'IA, pas de candidature, pas de scoring |
| **Conseillers privés** | Orientation personnalisée | 3000-5000 MAD, pas scalable, pas de candidature auto |
| **Parcoursup (France)** | Candidature centralisée | N'existe pas au Maroc, pas d'IA conversationnelle |

**Positionnement Moujihi :** le SEUL acteur qui combine IA conversationnelle + candidature automatique + marketplace école + système d'enchères. Aucun concurrent ne fait tout ça.

## 14. Go-to-Market (Plan de lancement)

### 14.1 Phase pilote (mois 1-2)

- 5 lycées partenaires pilotes (Casablanca, Rabat, Fès, Marrakech, Tanger)
- 10 écoles privées partenaires (négociation Convention + Bourse Moujihi)
- 200 étudiants beta-testeurs (gratuit)
- Collecte de feedback, ajustements UX
- Production des premières Stories et cards partageables

### 14.2 Lancement public (mois 3 — mars)

- Campagne TikTok/Instagram : vidéos "avant/après" orientation, témoignages beta-testeurs
- Partenariats influenceurs éducation marocains (5-10 influenceurs)
- Contenu SEO : 20 articles fondamentaux publiés avant le lancement
- Groupes WhatsApp parents : infiltration organique avec contenu utile
- Presse marocaine : communiqué "La startup qui révolutionne l'orientation au Maroc"

### 14.3 Croissance (mois 4-7 — haute saison)

- Moujihi Ads activé pour les écoles
- Classement lycées publié → viralité lycée par lycée
- Cards acceptation partagées → growth organique
- Parrainage activé → effet boule de neige
- Moujihi Live hebdomadaire → rendez-vous récurrent

### 14.4 Objectifs lancement

| Jalon | Timing | Objectif |
|-------|--------|---------|
| Beta privée | Janvier-Février | 200 étudiants, 10 écoles |
| Lancement public | Mars | 500 étudiants première semaine |
| Première acceptation CIM | Juillet | Première inscription validée via Gateway |
| Break-even | Août | Revenus > coûts (API + infra + marketing) |

## 15. Équipe nécessaire

| Rôle | Profil | Phase |
|------|--------|-------|
| **Dev full-stack** (toi + Claude Code) | Next.js + Go + PostgreSQL | Dès le début |
| **Designer UI/UX** (freelance) | Design system, cards partageables, avatar | Phase 1 |
| **Commercial B2B** | Démarcher écoles privées, signer Conventions | Phase 2 |
| **Community manager** | TikTok, Instagram, WhatsApp, modération Cercles | Phase 2 |
| **Juriste** (freelance) | Convention partenariat, CGU, conformité CNDP | Avant lancement |
| **Data analyst** | Optimisation scoring, enchères, analytics | Phase 3 |

## 16. Disaster Recovery

### 16.1 Haute disponibilité (haute saison juin-août)

| Composant | Stratégie |
|-----------|-----------|
| Serveur Go | 2 instances minimum (load balancer Traefik) |
| PostgreSQL | Read replica pour les requêtes de lecture (dashboards, recherche) |
| Redis | Redis Sentinel (failover automatique) |
| Candidatures | File d'attente Redis Streams — si portail école down, candidature en queue + retry automatique |
| Backups | Quotidiens automatiques + rétention 30 jours + stockage externe (S3) |
| Monitoring | Alertes Grafana → SMS en < 1 minute si downtime |

### 16.2 Plan de continuité

| Scénario | Action |
|----------|--------|
| Serveur Go down | Failover automatique sur instance 2 (< 30 secondes) |
| PostgreSQL down | Promotion read replica en primary (< 5 minutes) |
| Cloudflare down | DNS failover vers IP directe Hetzner |
| D-ID/ElevenLabs down | Fallback mode texte (chat écrit au lieu de vidéo/voix) |
| Pic de trafic inattendu | Auto-scaling horizontal Go (ajout instances Docker) |

## 17. Stratégie de test

| Type | Outil | Scope | Fréquence |
|------|-------|-------|-----------|
| Tests unitaires Go | `go test` | Logique métier (scoring, matching, enchères, Gateway) | Chaque commit |
| Tests unitaires Frontend | Vitest | Composants React, utils | Chaque commit |
| Tests d'intégration | `go test` + testcontainers | API complète (inscription → session → candidature → CIM) | Chaque PR |
| Tests E2E | Playwright | Parcours complet étudiant + école dans le navigateur | Quotidien |
| Tests de charge | K6 | Simuler 10 000 utilisateurs simultanés | Hebdomadaire |
| Tests de sécurité | OWASP ZAP | Vulnérabilités web automatisées | Hebdomadaire |
| Tests RTL | Playwright + screenshots | Vérification visuelle FR vs AR | Chaque PR |
| Tests offline | Lighthouse + simulation réseau | Mode dégradé automatique | Hebdomadaire |

---

## 18. Saisonnalité et calendrier

| Période | Activité |
|---------|----------|
| Mars - Mai | Pré-bac : étudiants commencent leur orientation, premiers bilans |
| Juin | Résultats bac : pic de trafic, rush des inscriptions |
| Juillet - Août | Inscriptions ouvertes : candidatures automatiques en masse |
| Septembre | Rentrée : dernières candidatures, résultats finaux |
| Octobre - Février | Hors saison : maintenance, ajout d'écoles, amélioration du produit |

---

## 19. Parcours utilisateur détaillé

### Étudiant
```
1. Découvre Moujihi (réseaux sociaux, bouche-à-oreille, pub)
2. S'inscrit (email + téléphone)
3. Complète son profil (Code Massar + CIN)
4. Choisit sa formule et paie (CMI ou Mobile Money)
5. Lance la session d'orientation
   → Autorise caméra + micro
   → Choisit sa langue
   → Discute 30 min avec l'avatar Moujihi
6. Reçoit son Bilan d'Orientation (PDF)
7. Consulte les écoles recommandées + comparateur
8. Sélectionne les écoles ciblées (recommandées + choix perso)
9. Uploade ses documents (relevés, CIN, photo)
   → OCR extrait les infos automatiquement
   → Vérification de cohérence avec la session
10. Moujihi surveille les ouvertures d'inscription
11. Reçoit une notification WhatsApp : "Les inscriptions ENSA sont ouvertes !"
12. Moujihi postule automatiquement
13. Suit le statut des candidatures dans son dashboard
14. Reçoit les résultats (accepté/refusé/liste d'attente)
```

### Parent
```
1. Reçoit un code d'invitation de son enfant
2. Crée son compte parent
3. Accède au Bilan d'Orientation de son enfant
4. Peut ajouter/modifier les écoles ciblées
5. Reçoit les mêmes notifications que l'étudiant
6. Suit les candidatures en temps réel
```

### École partenaire
```
1. Crée son compte école sur Moujihi
2. Télécharge la Convention de partenariat
3. Signe, cachète et uploade la Convention + RC + Patente + ICE + Autorisation + RIB
4. Validation par l'équipe Moujihi (vérification documents)
5. Dépose le solde prépayé initial (min 15 000 MAD)
6. Configure sa vitrine (description, filières, frais, médias)
7. Définit la Bourse Moujihi offerte (réduction scolarité)
8. Reçoit des candidatures d'étudiants qualifiés (dossier partiel)
9. Accepte ou refuse les dossiers
10. Paie la commission (débit automatique du solde) → code CIM activé
11. Reçoit les coordonnées complètes de l'étudiant
12. Scanne le QR code CIM quand l'étudiant se présente
13. Inscription validée (double confirmation étudiant + école)
```

---

## 20. Métriques de succès (KPIs)

| Métrique | Objectif année 1 |
|----------|-----------------|
| Étudiants inscrits | 5 000 |
| Sessions d'orientation complétées | 3 500 |
| Taux de conversion inscription → paiement | 40% |
| Candidatures automatiques envoyées | 15 000 |
| Inscriptions confirmées via code CIM | 2 000 |
| Écoles partenaires actives | 50+ |
| Écoles utilisant Moujihi Ads | 30+ |
| Temps moyen quotidien sur la plateforme | > 8 min |
| Taux de retour quotidien (DAU/MAU) | > 35% |
| Taux de parrainage | 20% des étudiants parrainent au moins 1 ami |
| Partages sociaux (acceptation cards) | 1 500+ |
| Taux de satisfaction (NPS) | > 50 |
| Revenu total | ~7.5M MAD |

---

## 21. Risques et mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Portails d'écoles publiques instables/changeants | Candidatures échouent | Monitoring 24/7, alertes, fallback manuel assisté |
| Tamazight mal supporté par les APIs | Exclusion d'une partie des étudiants | Interface tifinagh + fallback FR, modèle custom en phase 2 |
| Légalité du scraping/postulation automatique | Blocage juridique | Partenariats officiels prioritaires, CGU claires, consentement étudiant explicite |
| Coûts API élevés en pic de saison | Marge réduite | Caching intelligent, limiter D-ID aux moments clés, modèle Claude Haiku pour les échanges simples |
| Confiance des parents | Faible adoption | Garantie remboursement, rapport professionnel, témoignages, transparence |
| Données personnelles (RGPD/loi 09-08 Maroc) | Conformité légale | Chiffrement, consentement explicite, droit à l'effacement, hébergement Maroc si possible |
| Contournement par l'école (inscription directe sans Moujihi) | Perte de revenus B2B | Système Gateway 5 couches : infos masquées, Bourse Moujihi, code CIM, clause contractuelle, suivi post-orientation |
| Contournement par l'étudiant (contact direct école) | Perte de revenus B2B | Noms d'écoles masqués dans le pack Essentiel + Bourse Moujihi rend le contournement financièrement désavantageux |
| École ne recharge pas son solde prépayé | Blocage des inscriptions | Alerte automatique à 3 000 MAD, suspension des candidatures si solde à 0 |

---

## 22. Phases de livraison

### Phase 1 — MVP Orientation (4 semaines)
- Inscription étudiant (email + téléphone + Code Massar)
- Session d'orientation vidéo (avatar D-ID + voix)
- Profiling IA complet (RIASEC, données implicites, comportementales)
- Bilan d'Orientation PDF (domaines recommandés, pas noms d'écoles)
- Base de données écoles (Top 50)
- Paiement pack Essentiel (CMI + Mobile Money)
- Feed IA basique (notifications sociales)
- Moujihi Voice Notes (mini-sessions vocales asynchrones)
- Moujihi Predict basique (score de chances par école)

### Phase 2 — Marketplace Écoles (4 semaines)
- Espace école : onboarding, Convention de partenariat, upload documents
- Vitrine école (description, filières, frais, médias)
- Système Moujihi Gateway complet (code CIM, solde prépayé, double confirmation)
- Bourse Moujihi (négociation avantages exclusifs)
- Upload documents étudiant + OCR + vérification
- Candidature via plateforme (écoles privées partenaires)
- Moujihi Match (swipe écoles)
- Packs Premium et Illimité
- Espace parent (co-gestion)
- Moujihi Parents (feed dédié en arabe/darija)
- Notifications WhatsApp + Email
- Moujihi Simulation de Salaire

### Phase 3 — Rétention & Ads (4 semaines)
- Feed IA complet (FOMO, contenu éducatif personnalisé)
- Gamification (badges, streaks, barre de progression)
- Moujihi Défi (challenges hebdomadaires personnalisés)
- Partage social (cards acceptation, timeline publique)
- Système de parrainage
- Moujihi Circles (communautés par filière/ville)
- Moujihi Stories (mini-vidéos verticales)
- Moujihi Ads (enchères CPC, positionnement payant)
- Moujihi Boost (feed sponsorisé)
- Dashboard école IA (insights, scoring leads, benchmarking)
- Quality Score
- Comparateur d'écoles
- Moujihi Map (carte interactive)

### Phase 4 — Scale & Revenus (4 semaines)
- Couverture complète des écoles (public + privé + OFPPT)
- Scraping portails publics (candidature automatique)
- Moujihi Events / Live (portes ouvertes virtuelles + Q&A hebdo)
- Moujihi Insights (rapports IA marché)
- Moujihi Prep (préparation concours IA)
- Moujihi Offline (mode hors-ligne zones rurales)
- Dashboard admin complet
- Suivi post-inscription
- Prix dynamique enchères (saisonnalité, offre/demande)

### Phase 5 — Écosystème (en continu)
- Moujihi Logement (résidences étudiantes)
- Moujihi Talent (stages/alternances)
- Moujihi Data (données agrégées)
- Support tamazight amélioré (modèle STT/TTS custom)
- App mobile native (si demande justifiée)
- Expansion géographique (Tunisie, Algérie, Afrique francophone)
