"use client";

import {
  Mic,
  Globe,
  FileText,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { WobbleCard } from "./WobbleCard";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  size: "large" | "small";
  demo?: React.ReactNode;
}

function RadarChartSVG() {
  const points = [
    { x: 100, y: 30 },  // R
    { x: 160, y: 65 },  // I
    { x: 160, y: 135 }, // A
    { x: 100, y: 170 }, // S
    { x: 40, y: 135 },  // E
    { x: 40, y: 65 },   // C
  ];
  const labels = ["R", "I", "A", "S", "E", "C"];
  const values = [0.8, 0.6, 0.4, 0.7, 0.5, 0.9];

  const center = { x: 100, y: 100 };

  const valuePoints = values.map((v, i) => ({
    x: center.x + (points[i].x - center.x) * v,
    y: center.y + (points[i].y - center.y) * v,
  }));

  const polygon = valuePoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox="0 0 200 200" className="h-32 w-32 opacity-60">
      {/* Grid */}
      {[0.25, 0.5, 0.75, 1].map((scale) => (
        <polygon
          key={scale}
          points={points
            .map(
              (p) =>
                `${center.x + (p.x - center.x) * scale},${center.y + (p.y - center.y) * scale}`
            )
            .join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.5"
        />
      ))}
      {/* Value area */}
      <polygon
        points={polygon}
        fill="url(#radarGradient)"
        stroke="rgba(59,130,246,0.6)"
        strokeWidth="1"
      />
      {/* Labels */}
      {points.map((p, i) => {
        const lx = center.x + (p.x - center.x) * 1.2;
        const ly = center.y + (p.y - center.y) * 1.2;
        return (
          <text
            key={labels[i]}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-white/30 text-[10px]"
          >
            {labels[i]}
          </text>
        );
      })}
      <defs>
        <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0.2)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const features: Feature[] = [
  {
    title: "Conversation IA",
    description:
      "Discute naturellement avec un avatar IA qui te comprend",
    icon: Mic,
    size: "large",
    demo: (
      <div className="mt-4 rounded-xl bg-white/[0.02] p-3">
        <TypingAnimation
          className="text-sm text-white/50"
          duration={80}
          words={[
            "Quelles matières te passionnent ?",
            "Parle-moi de tes ambitions...",
            "Quel métier te fait rêver ?",
          ]}
          loop
        />
      </div>
    ),
  },
  {
    title: "5 Langues",
    description: "Français, arabe, anglais, espagnol, tamazight",
    icon: Globe,
    size: "small",
  },
  {
    title: "Bilan d'Orientation",
    description:
      "Profil RIASEC, points forts, recommandations personnalisées",
    icon: FileText,
    size: "large",
    demo: (
      <div className="mt-4 flex justify-center">
        <RadarChartSVG />
      </div>
    ),
  },
  {
    title: "Bourse Moujihi",
    description: "Économise jusqu'à 5000 MAD sur tes frais",
    icon: Shield,
    size: "small",
  },
  {
    title: "Moujihi Predict",
    description: "Découvre tes chances d'être accepté en temps réel",
    icon: TrendingUp,
    size: "small",
  },
  {
    title: "Candidature Auto",
    description:
      "Moujihi surveille, prépare et postule à ta place",
    icon: Zap,
    size: "large",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <WobbleCard
      containerClassName="h-full"
      className={cn(
        "h-full rounded-3xl border border-white/[0.05] bg-white/[0.03] p-8 transition-colors duration-300 hover:border-white/[0.1]"
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/50">
        {feature.description}
      </p>
      {feature.demo}
    </WobbleCard>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Fonctionnalités
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tout ce dont tu as besoin
          </h2>
          <p className="mt-4 text-base text-white/50">
            Une plateforme complète pour ton orientation post-bac
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Row 1 */}
          <div className="md:col-span-2">
            <FeatureCard feature={features[0]} />
          </div>
          <div>
            <FeatureCard feature={features[1]} />
          </div>

          {/* Row 2 */}
          <div>
            <FeatureCard feature={features[3]} />
          </div>
          <div className="md:col-span-2">
            <FeatureCard feature={features[2]} />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-2">
            <FeatureCard feature={features[5]} />
          </div>
          <div>
            <FeatureCard feature={features[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
