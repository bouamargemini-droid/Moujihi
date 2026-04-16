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
  TrendingUp,
  Users,
  Check,
  Zap,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-zinc-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Moujihi
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#features" className="hidden sm:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              Fonctionnalites
            </Link>
            <Link href="#pricing" className="hidden sm:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              Tarifs
            </Link>
            <Link
              href="/inscription"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all hover:scale-105 hover:shadow-xl hover:shadow-zinc-900/20"
            >
              Commencer
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-32 px-5">
        {/* Animated gradient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-200/60 to-purple-200/60 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-pink-200/50 to-orange-200/50 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-cyan-200/40 to-blue-200/40 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5"
          >
            <Zap className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-sm font-semibold text-indigo-600">
              L&apos;orientation reinventee par l&apos;IA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]"
          >
            <span className="block text-zinc-900">Trouve ta voie.</span>
            <span className="mt-2 block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              L&apos;IA te guide.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-8 max-w-xl text-lg sm:text-xl text-zinc-500 leading-relaxed"
          >
            Parle avec un conseiller IA qui analyse ton profil,
            recommande les meilleures filieres et postule a ta place.
            <span className="font-semibold text-zinc-700"> En 30 minutes.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/inscription"
              className="group relative inline-flex h-14 items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 text-base font-bold text-white shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Commencer gratuitement
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#how"
              className="inline-flex h-14 items-center gap-2 rounded-2xl bg-zinc-100 px-8 text-base font-semibold text-zinc-700 transition-all hover:bg-zinc-200"
            >
              Comment ca marche ?
            </Link>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { icon: "🇲🇦", text: "+300K bacheliers/an" },
              { icon: "🎓", text: "50+ ecoles partenaires" },
              { icon: "⭐", text: "4.9/5 satisfaction" },
              { icon: "🌍", text: "5 langues" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm"
              >
                <span className="text-base">{badge.icon}</span>
                {badge.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-600 mb-4">
              3 etapes simples
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Comment ca marche ?
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Mic,
                step: "1",
                title: "Parle a Moujihi",
                desc: "Active ton micro et discute naturellement avec l'avatar IA. Il comprend le francais, l'arabe, l'anglais, l'espagnol et le tamazight.",
                color: "indigo",
                gradient: "from-indigo-500 to-blue-500",
                bg: "bg-indigo-50",
                border: "border-indigo-100",
              },
              {
                icon: FileText,
                step: "2",
                title: "Recois ton Bilan",
                desc: "En 30 minutes, decouvre ton profil RIASEC, tes points forts et les domaines faits pour toi dans un bilan personnalise.",
                color: "purple",
                gradient: "from-purple-500 to-pink-500",
                bg: "bg-purple-50",
                border: "border-purple-100",
              },
              {
                icon: GraduationCap,
                step: "3",
                title: "Postule en 1 clic",
                desc: "Moujihi detecte les ouvertures d'inscription, prepare ton dossier et postule aux ecoles automatiquement.",
                color: "pink",
                gradient: "from-pink-500 to-orange-500",
                bg: "bg-pink-50",
                border: "border-pink-100",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeIn}
                className={`group relative rounded-3xl border ${item.border} ${item.bg} p-8 transition-all hover:shadow-xl hover:shadow-${item.color}-500/5 hover:-translate-y-1`}
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg mb-6`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <div className="absolute top-8 right-8 text-7xl font-black text-zinc-900/[0.03]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-5 py-20 sm:py-28 bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <span className="inline-block rounded-full bg-purple-50 border border-purple-200 px-4 py-1.5 text-sm font-semibold text-purple-600 mb-4">
              Tout ce qu&apos;il te faut
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Une plateforme complete
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: "IA conversationnelle", desc: "Un vrai echange naturel, pas un formulaire. L'avatar te comprend et s'adapte.", gradient: "from-indigo-500 to-blue-500" },
              { icon: Globe, title: "5 langues", desc: "Francais, arabe, anglais, espagnol, tamazight. Parle dans ta langue.", gradient: "from-emerald-500 to-teal-500" },
              { icon: Shield, title: "Bourse Moujihi", desc: "Economise jusqu'a 5 000 MAD sur tes frais de scolarite. Exclusif Moujihi.", gradient: "from-orange-500 to-amber-500" },
              { icon: TrendingUp, title: "Predict", desc: "Decouvre tes chances d'etre accepte dans chaque ecole, en temps reel.", gradient: "from-pink-500 to-rose-500" },
              { icon: Users, title: "Communaute", desc: "Retrouve tes camarades, echange avec des etudiants deja inscrits.", gradient: "from-purple-500 to-violet-500" },
              { icon: Zap, title: "Candidature auto", desc: "Moujihi surveille, prepare et envoie tes dossiers. Zero effort.", gradient: "from-cyan-500 to-blue-500" },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeIn}
                className="group rounded-3xl border border-zinc-200 bg-white p-7 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-zinc-300"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} shadow-md mb-4`}>
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-4 py-1.5 text-sm font-semibold text-amber-600 mb-4">
              Pas d&apos;abonnement
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Un seul paiement. C&apos;est tout.
            </h2>
            <p className="mx-auto max-w-lg text-zinc-500 text-lg">
              Valable toute la saison mars — septembre. 10x moins cher qu&apos;un conseiller prive.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Essentiel",
                price: "199",
                desc: "Decouvre ton profil",
                features: ["Session 30 min avec l'avatar IA", "Bilan d'Orientation PDF", "Profil RIASEC complet", "Acces parent"],
                highlighted: false,
                gradient: "",
              },
              {
                name: "Premium",
                price: "499",
                desc: "Postule aux ecoles",
                features: ["Tout dans Essentiel", "Ecoles recommandees par nom", "10 candidatures automatiques", "Alertes inscriptions", "Bourse Moujihi"],
                highlighted: true,
                gradient: "from-indigo-500 via-purple-500 to-pink-500",
              },
              {
                name: "Illimite",
                price: "799",
                desc: "Maximise tes chances",
                features: ["Tout dans Premium", "Candidatures illimitees", "Suivi prioritaire", "Relance auto dossier"],
                highlighted: false,
                gradient: "",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeIn}
                className={`relative flex flex-col rounded-3xl p-8 transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/20 sm:scale-105 sm:-my-4"
                    : "border border-zinc-200 bg-white hover:shadow-lg hover:border-zinc-300"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900 shadow-lg">
                    Le + populaire
                  </span>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : ""}`}>{plan.name}</h3>
                  <p className={`text-sm mt-1 ${plan.highlighted ? "text-white/70" : "text-zinc-400"}`}>{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`ml-1 text-lg ${plan.highlighted ? "text-white/60" : "text-zinc-400"}`}>MAD</span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-indigo-500"}`} />
                      <span className={plan.highlighted ? "text-white/90" : "text-zinc-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inscription"
                  className={`inline-flex h-12 items-center justify-center rounded-2xl text-sm font-bold transition-all hover:scale-105 ${
                    plan.highlighted
                      ? "bg-white text-indigo-600 shadow-lg hover:shadow-xl"
                      : "bg-zinc-900 text-white shadow-md hover:shadow-lg"
                  }`}
                >
                  Commencer
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            variants={fadeIn}
            className="mt-10 text-center text-sm text-zinc-400"
          >
            Garantie &quot;oriente ou rembourse&quot; sur tous les packs.
            Paiement par carte bancaire ou Mobile Money.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          variants={fadeIn}
          className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12 sm:p-16 text-center shadow-2xl shadow-purple-500/20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Pret a construire ton avenir ?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto">
            Rejoins des milliers d&apos;etudiants qui ont deja trouve leur voie grace a Moujihi.
          </p>
          <Link
            href="/inscription"
            className="group inline-flex h-14 items-center gap-2 rounded-2xl bg-white px-10 text-base font-bold text-indigo-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            Commencer maintenant
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-zinc-400">
              Moujihi — Orientation post-bac propulsee par l&apos;IA
            </span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <Link href="#pricing" className="hover:text-zinc-600 transition-colors">Tarifs</Link>
            <Link href="/ecoles-partenaires" className="hover:text-zinc-600 transition-colors">Ecoles</Link>
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
          }),
        }}
      />
    </div>
  );
}
