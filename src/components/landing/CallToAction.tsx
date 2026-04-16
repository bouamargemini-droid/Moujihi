"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Particles } from "@/components/ui/particles";

export function CallToAction() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 px-8 py-20 text-center sm:px-16">
          {/* Particles */}
          <Particles
            className="absolute inset-0"
            quantity={60}
            color="#ffffff"
            size={0.6}
            staticity={30}
          />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Prêt à construire ton avenir ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
              Rejoins les étudiants qui ont déjà trouvé leur voie.
            </p>
            <Link
              href="/inscription"
              className="mt-8 inline-flex h-12 items-center rounded-xl bg-white px-8 text-sm font-semibold text-gray-900 transition-transform hover:scale-105"
            >
              Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
