"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mic,
  FileText,
  GraduationCap,
  ArrowRight,
  Brain,
  Globe,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Star,
  Check,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {value}{suffix}
    </motion.span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Moujihi</span>
            <span className="text-xs text-white/40 font-arabic">موجهي</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="#pricing"
              className="hidden text-sm text-white/60 hover:text-white transition-colors sm:block"
            >
              Tarifs
            </Link>
            <Link
              href="/inscription"
              className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Commencer</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-700 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-blue-500/20 via-violet-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Propulse par l&apos;intelligence artificielle
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block">Ton orientation</span>
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              guidee par l&apos;IA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-white/50 sm:text-xl"
          >
            Discute avec un avatar IA qui comprend tes ambitions, analyse ton profil
            et te guide vers les meilleures filieres pour ton avenir au Maroc.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/inscription"
              className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 text-base font-semibold text-white shadow-2xl shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Commencer gratuitement
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-700 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="#comment-ca-marche"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
            >
              Decouvrir
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/30"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-violet-500"
                  />
                ))}
              </div>
              <span>+500 etudiants orientes</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="ml-1">4.9/5 satisfaction</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-7 rounded-full border border-white/20 p-1"
          >
            <div className="h-2 w-full rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-0 divide-x divide-white/5 sm:grid-cols-4">
          {[
            { value: "300K+", label: "Bacheliers/an au Maroc" },
            { value: "30 min", label: "Session d'orientation" },
            { value: "5", label: "Langues supportees" },
            { value: "-3000", label: "MAD avec la Bourse Moujihi" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="px-6 py-10 text-center"
            >
              <div className="text-2xl font-bold sm:text-3xl">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="mt-1 text-xs text-white/40 sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comment ca marche */}
      <section id="comment-ca-marche" className="relative px-4 py-24 sm:py-32">
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              Simple et rapide
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comment ca marche ?
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Mic,
                step: "01",
                title: "Discute avec Moujihi",
                desc: "Active ton micro et parle naturellement. L'avatar IA te pose des questions pour comprendre ton profil, tes passions et tes ambitions.",
                color: "blue",
              },
              {
                icon: FileText,
                step: "02",
                title: "Recois ton Bilan",
                desc: "En 30 minutes, Moujihi genere ton Bilan d'Orientation : profil RIASEC, points forts, et domaines recommandes.",
                color: "violet",
              },
              {
                icon: GraduationCap,
                step: "03",
                title: "Postule automatiquement",
                desc: "Moujihi postule aux ecoles a ta place. Tu recois des alertes quand les inscriptions ouvrent et quand tu es accepte.",
                color: "emerald",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-${item.color}-500/5 blur-2xl transition-all group-hover:bg-${item.color}-500/10`} />
                <span className="mb-6 block text-5xl font-bold text-white/5">{item.step}</span>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                  item.color === "blue" ? "from-blue-500/20 to-blue-600/20" :
                  item.color === "violet" ? "from-violet-500/20 to-violet-600/20" :
                  "from-emerald-500/20 to-emerald-600/20"
                }`}>
                  <item.icon className={`h-6 w-6 ${
                    item.color === "blue" ? "text-blue-400" :
                    item.color === "violet" ? "text-violet-400" :
                    "text-emerald-400"
                  }`} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative border-t border-white/5 bg-white/[0.01] px-4 py-24 sm:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
              Tout-en-un
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Pourquoi Moujihi ?
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "IA conversationnelle",
                desc: "Pas de formulaire ennuyeux. Une vraie conversation avec un avatar qui t'ecoute et te comprend.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Globe,
                title: "5 langues",
                desc: "Parle en francais, arabe, anglais, espagnol ou tamazight. Moujihi s'adapte a ta langue.",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                icon: Shield,
                title: "Bourse Moujihi",
                desc: "Economise 2 000 a 5 000 MAD sur tes frais de scolarite grace aux avantages exclusifs.",
                gradient: "from-emerald-500 to-green-500",
              },
              {
                icon: TrendingUp,
                title: "Moujihi Predict",
                desc: "Decouvre tes chances d'etre accepte dans chaque ecole en temps reel.",
                gradient: "from-orange-500 to-amber-500",
              },
              {
                icon: Users,
                title: "Communaute",
                desc: "Rejoins des cercles d'etudiants comme toi. Echange, partage, et progresse ensemble.",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Sparkles,
                title: "Candidature auto",
                desc: "Moujihi detecte les ouvertures d'inscription et postule a ta place. Zero stress.",
                gradient: "from-blue-500 to-violet-500",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative px-4 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-r from-blue-500/5 via-violet-500/10 to-purple-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Tarifs transparents
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Un seul paiement, zero surprise
            </h2>
            <p className="mx-auto max-w-xl text-white/40">
              Valable toute la saison (mars — septembre). 10x moins cher qu&apos;un conseiller prive.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Essentiel",
                price: "199",
                desc: "Pour decouvrir ton profil",
                features: [
                  "Session d'orientation 30 min",
                  "Bilan d'Orientation PDF",
                  "Profil RIASEC complet",
                  "Acces parent",
                ],
                cta: "Commencer",
                highlighted: false,
              },
              {
                name: "Premium",
                price: "499",
                desc: "Pour postuler aux ecoles",
                features: [
                  "Tout dans Essentiel",
                  "Noms des ecoles recommandees",
                  "Candidatures auto (10 ecoles)",
                  "Alertes inscriptions",
                  "Bourse Moujihi",
                ],
                cta: "Choisir Premium",
                highlighted: true,
              },
              {
                name: "Illimite",
                price: "799",
                desc: "Pour maximiser tes chances",
                features: [
                  "Tout dans Premium",
                  "Candidatures illimitees",
                  "Suivi prioritaire",
                  "Relance auto dossier",
                ],
                cta: "Choisir Illimite",
                highlighted: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-blue-500/30 bg-gradient-to-b from-blue-500/10 via-violet-500/5 to-transparent shadow-2xl shadow-blue-500/10 scale-105"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-blue-500 to-violet-600 px-12 py-1 text-xs font-semibold text-white">
                    Populaire
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-sm text-white/40">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-white/40">MAD</span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlighted ? "text-blue-400" : "text-white/20"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inscription"
                  className={`inline-flex h-12 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mt-8 text-center text-sm text-white/30"
          >
            Garantie &quot;oriente ou rembourse&quot; sur le pack Essentiel
          </motion.p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative border-t border-white/5 px-4 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pret a construire ton avenir ?
          </h2>
          <p className="mb-8 text-lg text-white/40">
            Rejoins les etudiants qui ont deja trouve leur voie grace a Moujihi.
          </p>
          <Link
            href="/inscription"
            className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-10 text-base font-semibold text-white shadow-2xl shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Commencer maintenant
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/30 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-600">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
            <span>Moujihi — Orientation post-bac propulsee par l&apos;IA</span>
          </div>
          <div className="flex gap-6">
            <Link href="#pricing" className="hover:text-white/60 transition-colors">Tarifs</Link>
            <Link href="/ecoles-partenaires" className="hover:text-white/60 transition-colors">Ecoles partenaires</Link>
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
            description: "Plateforme d'orientation post-bac propulsee par l'IA pour les bacheliers marocains",
            foundingDate: "2026",
            areaServed: { "@type": "Country", name: "Morocco" },
          }),
        }}
      />
    </div>
  );
}
