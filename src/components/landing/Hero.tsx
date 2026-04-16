"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, User } from "lucide-react";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BackgroundBeams } from "./BackgroundBeams";

const stats = [
  { value: 300, suffix: "K+", label: "bacheliers" },
  { value: 30, suffix: " min", label: "session" },
  { value: 5, suffix: "", label: "langues" },
  { value: 4.9, suffix: "★", label: "note", decimals: 1 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <BackgroundBeams />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-600" />
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-xs font-medium text-transparent">
            Propulsé par l&apos;intelligence artificielle
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Ton orientation
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
            guidée par l&apos;IA
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/50 sm:text-lg md:text-xl"
        >
          Parle avec un conseiller IA qui analyse ton profil, recommande les
          meilleures filières et postule à ta place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="/inscription">
            <PulsatingButton
              pulseColor="rgba(59,130,246,0.4)"
              className="h-12 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 text-sm font-semibold text-white"
            >
              Commencer gratuitement <ArrowRight className="ml-2 inline h-4 w-4" />
            </PulsatingButton>
          </Link>
          <a
            href="#features"
            className="inline-flex h-12 items-center rounded-xl border border-white/10 px-8 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
          >
            Découvrir
          </a>
        </motion.div>

        {/* Mock browser */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-16 w-full max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
            <BorderBeam
              size={200}
              duration={8}
              colorFrom="#3B82F6"
              colorTo="#7C3AED"
              borderWidth={1}
            />
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md bg-white/[0.03] text-[10px] text-white/30">
                moujihi.ma/session
              </div>
            </div>
            {/* Chat mockup */}
            <div className="flex flex-col gap-4 p-6">
              {/* AI message */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-white/[0.05] px-4 py-3 text-left text-sm text-white/80">
                  Salut ! Je suis ton conseiller Moujihi. Parle-moi de tes
                  matières préférées et de ce qui te passionne 🎓
                </div>
              </div>
              {/* User message */}
              <div className="flex items-start justify-end gap-3">
                <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-blue-500/20 to-violet-600/20 px-4 py-3 text-right text-sm text-white/80">
                  J&apos;aime les maths et la physique, je veux devenir
                  ingénieur
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <User className="h-4 w-4 text-white/60" />
                </div>
              </div>
              {/* AI message */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-white/[0.05] px-4 py-3 text-left text-sm text-white/80">
                  Excellent choix ! Ton profil RIASEC est très compatible avec
                  les ENSA et EMI. Parlons de tes notes...
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid w-full max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold text-white">
                <NumberTicker
                  value={stat.value}
                  decimalPlaces={stat.decimals ?? 0}
                  className="text-2xl font-bold text-white"
                />
                <span className="text-white/70">{stat.suffix}</span>
              </div>
              <span className="text-xs text-white/40">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
