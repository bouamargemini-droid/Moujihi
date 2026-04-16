"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Download, ArrowLeft, Share2 } from "lucide-react";
import { api } from "@/lib/api";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface Profile {
  name?: string;
  bacType?: string;
  interests?: string[];
  personality?: {
    realistic: number;
    investigative: number;
    artistic: number;
    social: number;
    enterprising: number;
    conventional: number;
  };
  selfEfficacy?: number;
  recommendations?: Array<{
    domain: string;
    reasoning: string;
    score: number;
  }>;
}

export default function RapportPage() {
  const params = useParams();
  const sessionId = params.id as string;
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = (await api.getReport(sessionId)) as {
          student_profile: string;
        };
        const parsed =
          typeof data.student_profile === "string"
            ? JSON.parse(data.student_profile)
            : data.student_profile;
        setProfile(parsed);
      } catch {
        console.error("Failed to load report");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="flex min-h-full items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Chargement du Bilan...
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Bilan introuvable</p>
        <Link href="/" className="text-sm text-primary hover:underline">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  const riasecData = profile.personality
    ? [
        { trait: "Réaliste", value: profile.personality.realistic },
        { trait: "Investigateur", value: profile.personality.investigative },
        { trait: "Artistique", value: profile.personality.artistic },
        { trait: "Social", value: profile.personality.social },
        { trait: "Entreprenant", value: profile.personality.enterprising },
        { trait: "Conventionnel", value: profile.personality.conventional },
      ]
    : [];

  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center justify-between border-b border-border/40 px-4 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Accueil
        </Link>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted">
            <Share2 className="h-3.5 w-3.5" />
            Partager
          </button>
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"}/api/orientation/report/${sessionId}?format=pdf`}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
          >
            <Download className="h-3.5 w-3.5" />
            PDF
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 py-8">
        <h1 className="mb-1 text-2xl font-bold">Bilan d&apos;Orientation</h1>
        <p className="mb-8 text-muted-foreground">
          {profile.name && `${profile.name} — `}
          {profile.bacType && `Bac ${profile.bacType}`}
        </p>

        {/* RIASEC */}
        {riasecData.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">
              Profil RIASEC
            </h2>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={riasecData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="trait"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    domain={[0, 10]}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                  />
                  <Radar
                    dataKey="value"
                    stroke="hsl(210, 100%, 56%)"
                    fill="hsl(210, 100%, 56%)"
                    fillOpacity={0.2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}

        {/* Auto-efficacité */}
        {profile.selfEfficacy && (
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Confiance en soi</h2>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-muted-foreground">Score d&apos;auto-efficacité</span>
                <span className="font-semibold">{profile.selfEfficacy}/10</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                  style={{ width: `${profile.selfEfficacy * 10}%` }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Centres d'intérêt */}
        {profile.interests && profile.interests.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Centres d&apos;intérêt</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Recommandations */}
        {profile.recommendations && profile.recommendations.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Domaines recommandés</h2>
            <div className="space-y-3">
              {profile.recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold">{rec.domain}</h3>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {rec.score}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.reasoning}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
