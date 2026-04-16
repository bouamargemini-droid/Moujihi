import { create } from "zustand";
import { type Language, type Message } from "@/types";
import { api } from "@/lib/api";

interface SessionStore {
  // Auth
  studentId: string | null;
  studentName: string | null;

  // Session
  sessionId: string | null;
  language: Language;
  messages: Message[];
  isRecording: boolean;
  isProcessing: boolean;
  avatarVideoUrl: string | null;
  audioUrl: string | null;
  subtitles: string;
  sessionStatus: "idle" | "active" | "completed";

  // Actions
  setStudent: (id: string, name: string) => void;
  setLanguage: (lang: Language) => void;
  startSession: () => Promise<void>;
  sendMessage: (text: string) => Promise<void>;
  sendAudio: (audio: Blob) => Promise<void>;
  setRecording: (recording: boolean) => void;
  endSession: () => Promise<void>;
}

export const useSessionStore = create<SessionStore>((set, get) => ({
  studentId: null,
  studentName: null,
  sessionId: null,
  language: "fr",
  messages: [],
  isRecording: false,
  isProcessing: false,
  avatarVideoUrl: null,
  audioUrl: null,
  subtitles: "",
  sessionStatus: "idle",

  setStudent: (id, name) => {
    api.setToken(id);
    set({ studentId: id, studentName: name });
  },

  setLanguage: (lang) => set({ language: lang }),

  startSession: async () => {
    const { language } = get();
    const session = await api.createSession(language);
    set({ sessionId: session.id, sessionStatus: "active", messages: [] });
  },

  sendMessage: async (text) => {
    const { sessionId, messages } = get();
    if (!sessionId) return;

    set({ isProcessing: true, subtitles: "" });

    const userMsg: Message = {
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    set({ messages: [...messages, userMsg] });

    try {
      const response = await api.chat(sessionId, text);

      const assistantMsg: Message = {
        role: "assistant",
        content: response.text,
        timestamp: Date.now(),
      };

      set((state) => ({
        messages: [...state.messages, assistantMsg],
        subtitles: response.text,
        audioUrl: response.audio_url || null,
        avatarVideoUrl: response.video_url || null,
        isProcessing: false,
      }));
    } catch {
      set({ isProcessing: false });
    }
  },

  sendAudio: async (audio) => {
    const { sessionId, messages } = get();
    if (!sessionId) return;

    set({ isProcessing: true, subtitles: "" });

    try {
      const response = await api.chatWithAudio(sessionId, audio);

      const userMsg: Message = {
        role: "user",
        content: "(audio)",
        timestamp: Date.now(),
      };

      const assistantMsg: Message = {
        role: "assistant",
        content: response.text,
        timestamp: Date.now(),
      };

      set({
        messages: [...messages, userMsg, assistantMsg],
        subtitles: response.text,
        audioUrl: response.audio_url || null,
        avatarVideoUrl: response.video_url || null,
        isProcessing: false,
      });
    } catch {
      set({ isProcessing: false });
    }
  },

  setRecording: (recording) => set({ isRecording: recording }),

  endSession: async () => {
    const { sessionId } = get();
    if (!sessionId) return;

    set({ isProcessing: true });
    try {
      await api.completeSession(sessionId);
      set({ sessionStatus: "completed", isProcessing: false });
    } catch {
      set({ isProcessing: false });
    }
  },
}));
