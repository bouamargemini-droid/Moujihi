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
  TrendingUp,
  Users,
  Zap,
  Check,
  ChevronRight,
} from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Particles } from "@/components/ui/particles";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const testimonials = [
  { name: "Youssef M.", city: "Casablanca", text: "Moujihi m'a aide a trouver ma voie en ingenierie. L'avatar IA etait incroyable !", avatar: "YM" },
  { name: "Salma R.", city: "Rabat", text: "Grace a la Bourse Moujihi, j'ai economise 3000 MAD sur mes frais de scolarite.", avatar: "SR" },
  { name: "Karim B.", city: "Fes", text: "Le bilan RIASEC m'a ouvert les yeux sur des filieres que je ne connaissais meme pas.", avatar: "KB" },
  { name: "Amina T.", city: "Marrakech", text: "J'ai pu postuler a 8 ecoles en un seul clic. Moujihi a tout fait pour moi.", avatar: "AT" },
  { name: "Omar L.", city: "Tanger", text: "La session en darija etait top ! Je me suis senti a l'aise directement.", avatar: "OL" },
  { name: "Fatima Z.", city: "Agadir", text: "Mes parents ont adore le rapport PDF. Ca les a rassures sur mon choix.", avatar: "FZ" },
];

const TestimonialCard = ({ name, city, text, avatar }: typeof testimonials[0]) => (
  <div className="w-72 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-xs font-bold text-white">
        {avatar}
      </div>
      <div>
        <p className="text-sm font-semibold text-zinc-900">{name}</p>
        <p className="text-xs text-zinc-400">{city}</p>
      </div>
    </div>
    <p className="text-sm text-zinc-600 leading-relaxed">{text}</p>
  </div>
);

const features = [
  {
    Icon: Brain,
    name: "IA conversationnelle",
    description: "Un vrai echange naturel avec un avatar. Pas de formulaire, pas de robot.",
    href: "/inscription",
    cta: "Essayer",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50" />
    ),
  },
  {
    Icon: Globe,
    name: "5 langues",
    description: "Francais, arabe, anglais, espagnol, tamazight. Parle dans ta langue.",
    href: "/inscription",
    cta: "Essayer",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50" />
    ),
  },
  {
    Icon: Shield,
    name: "Bourse Moujihi",
    description: "Economise jusqu'a 5 000 MAD sur tes frais de scolarite.",
    href: "/inscription",
    cta: "En savoir plus",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50" />
    ),
  },
  {
    Icon: TrendingUp,
    name: "Moujihi Predict",
    description: "Decouvre tes chances d'etre accepte dans chaque ecole, en temps reel.",
    href: "/inscription",
    cta: "Decouvrir",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50" />
    ),
  },
  {
    Icon: Zap,
    name: "Candidature automatique",
    description: "Moujihi detecte, prepare et envoie tes dossiers. Zero stress, zero effort.",
    href: "/inscription",
    cta: "Commencer",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50" />
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-zinc-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-sm font-black text-white">M</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight">Moujihi</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link href="#features" className="hidden sm:block text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Fonctionnalites</Link>
            <Link href="#pricing" className="hidden sm:block text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Tarifs</Link>
            <Link href="/inscription">
              <ShimmerButton
                shimmerColor="#a855f7"
                shimmerSize="0.06em"
                background="linear-gradient(135deg, #6366f1, #a855f7, #ec4899)"
                className="h-10 px-5 text-sm font-semibold"
              >
                Commencer <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-24 px-5">
        <Particles
          className="absolute inset-0"
          quantity={80}
          color="#6366f1"
          size={0.5}
          staticity={30}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <AnimatedGradientText
              speed={2}
              colorFrom="#6366f1"
              colorTo="#ec4899"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-semibold shadow-sm"
            >
              <Zap className="h-3.5 w-3.5" />
              Nouveau : candidature automatique disponible
              <ChevronRight className="h-3.5 w-3.5" />
            </AnimatedGradientText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
              <span className="block">Trouve ta voie.</span>
              <SparklesText
                className="mt-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                colors={{ first: "#6366f1", second: "#ec4899" }}
              >
                L&apos;IA te guide.
              </SparklesText>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl text-lg sm:text-xl text-zinc-500 leading-relaxed"
          >
            Parle avec un conseiller IA qui analyse ton profil,
            recommande les meilleures filieres et postule a ta place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/inscription">
              <ShimmerButton
                shimmerColor="#ffffff"
                shimmerSize="0.06em"
                background="linear-gradient(135deg, #6366f1, #a855f7, #ec4899)"
                className="h-14 px-8 text-base font-bold shadow-2xl shadow-indigo-500/20"
              >
                Commencer gratuitement <ArrowRight className="ml-2 h-4 w-4" />
              </ShimmerButton>
            </Link>
            <Link
              href="#how"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 text-base font-semibold text-zinc-700 shadow-sm transition-all hover:shadow-md hover:border-zinc-300"
            >
              Comment ca marche ?
            </Link>
          </motion.div>

          {/* Hero card preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative mx-auto mt-20 max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-2 shadow-2xl shadow-zinc-900/5">
              <div className="rounded-2xl bg-white p-8 sm:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Mic className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg">Session d&apos;orientation</p>
                    <p className="text-sm text-zinc-400">30 min avec l&apos;avatar Moujihi</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-indigo-600">M</span>
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-zinc-100 px-4 py-2.5 text-sm text-zinc-600 max-w-sm">
                      Salam ! Je suis Moujihi, ton conseiller d&apos;orientation. Parle-moi de toi, qu&apos;est-ce qui te passionne ?
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2.5 text-sm text-white max-w-sm">
                      J&apos;adore les maths et l&apos;informatique, je veux devenir ingenieur
                    </div>
                  </div>
                </div>
              </div>
              <BorderBeam colorFrom="#6366f1" colorTo="#ec4899" size={200} duration={8} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: 300000, suffix: "+", label: "Bacheliers/an" },
            { value: 30, suffix: " min", label: "Session orientation" },
            { value: 5, suffix: "", label: "Langues" },
            { value: 3000, suffix: " MAD", label: "Economies Bourse" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-zinc-900">
                <NumberTicker value={stat.value} delay={0.3 + i * 0.15} />
                <span className="text-indigo-500">{stat.suffix}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-5 py-20 sm:py-28 bg-zinc-50/80">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-bold text-emerald-700 mb-4">
              Simple et rapide
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              3 etapes. 30 minutes. C&apos;est tout.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Mic,
                step: "01",
                title: "Parle a Moujihi",
                desc: "Active ton micro et discute naturellement. L'avatar IA comprend 5 langues et s'adapte a toi.",
                gradient: "from-indigo-500 to-blue-500",
                bg: "bg-indigo-50",
                ring: "ring-indigo-100",
              },
              {
                icon: FileText,
                step: "02",
                title: "Recois ton Bilan",
                desc: "Decouvre ton profil RIASEC, tes forces, et les domaines faits pour toi. Telecharge le PDF.",
                gradient: "from-purple-500 to-pink-500",
                bg: "bg-purple-50",
                ring: "ring-purple-100",
              },
              {
                icon: GraduationCap,
                step: "03",
                title: "Postule en 1 clic",
                desc: "Moujihi surveille les inscriptions, prepare ton dossier et postule automatiquement.",
                gradient: "from-pink-500 to-orange-500",
                bg: "bg-pink-50",
                ring: "ring-pink-100",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative rounded-3xl ${item.bg} ring-1 ${item.ring} p-8 transition-all hover:shadow-xl hover:-translate-y-2`}
              >
                <span className="absolute top-6 right-6 text-6xl font-black text-zinc-900/[0.04]">{item.step}</span>
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg mb-6`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-extrabold mb-3">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-bold text-purple-700 mb-4">
              Tout-en-un
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Tout ce qu&apos;il te faut. En une app.
            </h2>
          </div>

          <BentoGrid className="auto-rows-[18rem] grid-cols-3 gap-4">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-20 sm:py-28 bg-zinc-50/80 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 mb-12 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-700 mb-4">
            Temoignages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Ils ont trouve leur voie
          </h2>
        </div>

        <Marquee pauseOnHover className="[--duration:30s]">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="mt-4 [--duration:35s]">
          {[...testimonials].reverse().map((t) => (
            <TestimonialCard key={t.name + "-r"} {...t} />
          ))}
        </Marquee>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-700 mb-4">
              Tarifs simples
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Un seul paiement. C&apos;est tout.
            </h2>
            <p className="mx-auto max-w-md text-zinc-500 text-lg">
              Valable toute la saison. 10x moins cher qu&apos;un conseiller prive.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Essentiel",
                price: 199,
                desc: "Decouvre ton profil",
                features: ["Session 30 min", "Bilan PDF", "Profil RIASEC", "Acces parent"],
                popular: false,
              },
              {
                name: "Premium",
                price: 499,
                desc: "Postule aux ecoles",
                features: ["Tout dans Essentiel", "Noms des ecoles", "10 candidatures auto", "Alertes inscriptions", "Bourse Moujihi"],
                popular: true,
              },
              {
                name: "Illimite",
                price: 799,
                desc: "Maximise tes chances",
                features: ["Tout dans Premium", "Candidatures illimitees", "Suivi prioritaire", "Relance auto"],
                popular: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col rounded-3xl p-8 transition-all",
                  plan.popular
                    ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25 sm:scale-105 sm:-my-4"
                    : "bg-white border border-zinc-200 shadow-sm hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-extrabold text-amber-900 shadow-lg">
                    Le + populaire
                  </span>
                )}
                <h3 className={cn("text-xl font-extrabold", plan.popular ? "text-white" : "")}>{plan.name}</h3>
                <p className={cn("text-sm mt-1 mb-6", plan.popular ? "text-white/60" : "text-zinc-400")}>{plan.desc}</p>
                <div className="mb-8">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={cn("ml-1 text-lg", plan.popular ? "text-white/50" : "text-zinc-300")}>MAD</span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className={cn("mt-0.5 h-4 w-4 flex-shrink-0", plan.popular ? "text-white" : "text-indigo-500")} />
                      <span className={plan.popular ? "text-white/90" : "text-zinc-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inscription"
                  className={cn(
                    "inline-flex h-12 items-center justify-center rounded-2xl text-sm font-bold transition-all hover:scale-105",
                    plan.popular
                      ? "bg-white text-indigo-600 shadow-lg"
                      : "bg-zinc-900 text-white shadow-md"
                  )}
                >
                  Commencer
                </Link>
                {plan.popular && <BorderBeam colorFrom="#facc15" colorTo="#f97316" size={100} duration={6} />}
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-zinc-400">
            Garantie &quot;oriente ou rembourse&quot;. Paiement par carte bancaire ou Mobile Money.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12 sm:p-20 text-center shadow-2xl shadow-purple-500/20"
        >
          <Particles
            className="absolute inset-0"
            quantity={40}
            color="#ffffff"
            size={0.6}
          />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Pret a construire ton avenir ?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              Rejoins les etudiants qui ont deja trouve leur voie.
            </p>
            <Link href="/inscription">
              <ShimmerButton
                shimmerColor="#a855f7"
                background="rgba(255,255,255,1)"
                className="h-14 px-10 text-base font-bold text-indigo-600 shadow-2xl"
              >
                Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
              </ShimmerButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">M</span>
            </div>
            <span className="text-sm text-zinc-400">
              Moujihi — Orientation post-bac par l&apos;IA
            </span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <Link href="#pricing" className="hover:text-zinc-600 transition-colors">Tarifs</Link>
            <Link href="/ecoles-partenaires" className="hover:text-zinc-600 transition-colors">Ecoles</Link>
          </div>
        </div>
      </footer>

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
