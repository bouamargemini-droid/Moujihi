"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  price: number;
  popular?: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Essentiel",
    price: 199,
    features: [
      "Session 30 min",
      "Bilan PDF",
      "Profil RIASEC",
      "Accès parent",
    ],
  },
  {
    name: "Premium",
    price: 499,
    popular: true,
    features: [
      "Tout dans Essentiel",
      "Noms des écoles",
      "10 candidatures auto",
      "Alertes inscriptions",
      "Bourse Moujihi",
    ],
  },
  {
    name: "Illimité",
    price: 799,
    features: [
      "Tout dans Premium",
      "Candidatures illimitées",
      "Suivi prioritaire",
      "Relance auto",
    ],
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border p-8",
        plan.popular
          ? "scale-105 border-white/[0.1] bg-white/[0.05]"
          : "border-white/[0.05] bg-white/[0.03]"
      )}
    >
      {plan.popular && (
        <>
          <BorderBeam
            size={150}
            duration={8}
            colorFrom="#3B82F6"
            colorTo="#7C3AED"
            borderWidth={1}
          />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-1 text-xs font-semibold text-white">
              Populaire
            </span>
          </div>
        </>
      )}

      <h3 className="text-lg font-semibold text-white">{plan.name}</h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        <span className="text-sm text-white/40">MAD</span>
      </div>

      <p className="mt-1 text-xs text-white/30">Un seul paiement. Pas d&apos;abonnement.</p>

      <ul className="mt-8 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
            <Check className="h-4 w-4 shrink-0 text-blue-400" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Link
          href="/inscription"
          className={cn(
            "flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all",
            plan.popular
              ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              : "border border-white/10 text-white/70 hover:border-white/20 hover:text-white"
          )}
        >
          Commencer
        </Link>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Tarifs
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Un investissement, pas une dépense
          </h2>
          <p className="mt-4 text-base text-white/50">
            10x moins cher qu&apos;un conseiller privé. Un seul paiement.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
