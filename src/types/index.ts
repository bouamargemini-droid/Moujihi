export type Language = "fr" | "ar" | "en" | "es" | "tz";

export const LANGUAGE_LABELS: Record<Language, string> = {
  fr: "Français",
  ar: "العربية",
  en: "English",
  es: "Español",
  tz: "ⵜⴰⵎⴰⵣⵉⵖⵜ",
};

export const DEEPGRAM_LANGUAGE_MAP: Record<Language, string> = {
  fr: "fr",
  ar: "ar",
  en: "en",
  es: "es",
  tz: "fr", // fallback — tamazight pas encore supporté nativement
};

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface StudentProfile {
  name?: string;
  language: Language;
  bacType?: string;
  grades?: Record<string, number>;
  interests: string[];
  personality: RIASECProfile;
  constraints: StudentConstraints;
  aspirations: string[];
  selfEfficacy: number; // 1-10
}

export interface RIASECProfile {
  realistic: number;
  investigative: number;
  artistic: number;
  social: number;
  enterprising: number;
  conventional: number;
}

export interface StudentConstraints {
  city?: string;
  budget?: "low" | "medium" | "high";
  sector?: "public" | "private" | "both";
  mobility?: boolean;
}

export interface Filiere {
  id: string;
  name: string;
  type: "public" | "private" | "prepa";
  city: string;
  domain: string;
  requirements: {
    minGrade?: number;
    bacTypes?: string[];
    concours?: boolean;
  };
  description: string;
  careerOutcomes: string[];
  riasecFit: Partial<RIASECProfile>;
}

export interface Recommendation {
  filiere: Filiere;
  score: number;
  reasoning: string;
}

export interface SessionData {
  id: string;
  studentId?: string;
  status: "in_progress" | "completed" | "abandoned";
  language: Language;
  conversation: Message[];
  profile?: StudentProfile;
  recommendations?: Recommendation[];
  createdAt: string;
  completedAt?: string;
}
