import Link from "next/link";
import { Mic, FileText, GraduationCap, ArrowRight, Brain, Globe, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Moujihi <span className="text-muted-foreground text-sm font-normal">موجهي</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/inscription"
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Commencer
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Brain className="h-4 w-4" />
            Propulsé par l&apos;intelligence artificielle
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ton orientation,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              guidée par l&apos;IA
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Moujihi est ton conseiller d&apos;orientation personnel. Discute avec un avatar IA
            qui analyse ton profil et te recommande les meilleures filières pour ton avenir.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/inscription"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Commencer gratuitement
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#comment-ca-marche"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-base font-medium transition-colors hover:bg-muted"
            >
              Comment ça marche ?
            </Link>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="border-t border-border/40 bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Comment ça marche ?
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                <Mic className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">1. Discute avec Moujihi</h3>
              <p className="text-sm text-muted-foreground">
                Active ton micro et parle naturellement. L&apos;avatar IA te pose des questions
                pour comprendre ton profil, tes passions et tes ambitions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-violet-500">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">2. Reçois ton Bilan</h3>
              <p className="text-sm text-muted-foreground">
                En 30 minutes, Moujihi génère ton Bilan d&apos;Orientation : profil RIASEC,
                points forts, et domaines recommandés pour toi.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">3. Postule automatiquement</h3>
              <p className="text-sm text-muted-foreground">
                Moujihi postule aux écoles à ta place. Tu reçois des alertes quand les
                inscriptions ouvrent et quand tu es accepté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Pourquoi Moujihi ?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <Brain className="mb-3 h-6 w-6 text-blue-500" />
              <h3 className="mb-2 font-semibold">IA conversationnelle</h3>
              <p className="text-sm text-muted-foreground">
                Pas de formulaire ennuyeux. Une vraie conversation avec un avatar qui
                t&apos;écoute et te comprend.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <Globe className="mb-3 h-6 w-6 text-violet-500" />
              <h3 className="mb-2 font-semibold">5 langues</h3>
              <p className="text-sm text-muted-foreground">
                Parle en français, arabe, anglais, espagnol ou tamazight. Moujihi s&apos;adapte
                à ta langue.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <Shield className="mb-3 h-6 w-6 text-green-500" />
              <h3 className="mb-2 font-semibold">Bourse Moujihi</h3>
              <p className="text-sm text-muted-foreground">
                Économise 2 000 à 5 000 MAD sur tes frais de scolarité grâce aux avantages
                exclusifs négociés avec nos écoles partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border/40 bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            Tarifs
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Un seul paiement. Pas d&apos;abonnement. Valable toute la saison (mars — septembre).
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Essentiel */}
            <div className="flex flex-col rounded-xl border border-border/60 bg-card p-6">
              <h3 className="mb-1 font-semibold">Essentiel</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">199</span>
                <span className="text-muted-foreground"> MAD</span>
              </div>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-muted-foreground">
                <li>Session d&apos;orientation 30 min</li>
                <li>Bilan d&apos;Orientation PDF</li>
                <li>Profil RIASEC complet</li>
                <li>Accès parent</li>
              </ul>
              <Link
                href="/inscription"
                className="inline-flex h-10 items-center justify-center rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                Commencer
              </Link>
            </div>

            {/* Premium */}
            <div className="flex flex-col rounded-xl border-2 border-blue-500 bg-card p-6 shadow-lg shadow-blue-500/10">
              <div className="mb-2 inline-flex self-start rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-500">
                Populaire
              </div>
              <h3 className="mb-1 font-semibold">Premium</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">499</span>
                <span className="text-muted-foreground"> MAD</span>
              </div>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-muted-foreground">
                <li>Tout dans Essentiel</li>
                <li>Noms des écoles recommandées</li>
                <li>Candidatures auto (10 écoles)</li>
                <li>Alertes inscriptions</li>
                <li>Bourse Moujihi</li>
              </ul>
              <Link
                href="/inscription"
                className="inline-flex h-10 items-center justify-center rounded-full bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-600"
              >
                Choisir Premium
              </Link>
            </div>

            {/* Illimité */}
            <div className="flex flex-col rounded-xl border border-border/60 bg-card p-6">
              <h3 className="mb-1 font-semibold">Illimité</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">799</span>
                <span className="text-muted-foreground"> MAD</span>
              </div>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-muted-foreground">
                <li>Tout dans Premium</li>
                <li>Candidatures illimitées</li>
                <li>Suivi prioritaire</li>
                <li>Relance auto dossier incomplet</li>
              </ul>
              <Link
                href="/inscription"
                className="inline-flex h-10 items-center justify-center rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                Choisir Illimité
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>Moujihi (موجهي) — Orientation post-bac propulsée par l&apos;IA</p>
          <div className="flex gap-6">
            <Link href="/prix" className="hover:text-foreground">Tarifs</Link>
            <Link href="/ecoles-partenaires" className="hover:text-foreground">Écoles partenaires</Link>
          </div>
        </div>
      </footer>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Moujihi",
            alternateName: "موجهي",
            url: "https://moujihi.ma",
            description:
              "Plateforme d'orientation post-bac propulsée par l'IA pour les bacheliers marocains",
            foundingDate: "2026",
            areaServed: {
              "@type": "Country",
              name: "Morocco",
            },
          }),
        }}
      />
    </div>
  );
}
