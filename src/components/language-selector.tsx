"use client";

import { type Language, LANGUAGE_LABELS } from "@/types";

interface LanguageSelectorProps {
  value: Language;
  onChange: (lang: Language) => void;
}

const languages: Language[] = ["fr", "ar", "en", "es", "tz"];

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onChange(lang)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            value === lang
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          {LANGUAGE_LABELS[lang]}
        </button>
      ))}
    </div>
  );
}
