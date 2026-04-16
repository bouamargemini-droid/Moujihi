"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { LanguageSelector } from "@/components/language-selector";
import { useSessionStore } from "@/stores/session-store";
import { api } from "@/lib/api";
import type { Language } from "@/types";

export default function InscriptionPage() {
  const router = useRouter();
  const setStudent = useSessionStore((s) => s.setStudent);
  const setLanguage = useSessionStore((s) => s.setLanguage);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLang] = useState<Language>("fr");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const student = await api.register({ name, email, phone, language });
      setStudent(student.id, name);
      setLanguage(language);
      router.push("/session");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-border/40 px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <h1 className="mb-2 text-2xl font-bold tracking-tight">Créer ton compte</h1>
          <p className="mb-8 text-muted-foreground">
            Inscris-toi en 30 secondes pour commencer ta session d&apos;orientation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Prénom
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ton prénom"
                className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton.email@exemple.com"
                className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                Téléphone
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="06 XX XX XX XX"
                className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Langue de la session
              </label>
              <LanguageSelector value={language} onChange={setLang} />
            </div>

            {error && (
              <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Inscription en cours...
                </>
              ) : (
                "Commencer ma session"
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
