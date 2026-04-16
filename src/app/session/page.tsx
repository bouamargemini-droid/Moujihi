"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Send, PhoneOff, Loader2, Keyboard } from "lucide-react";
import { AvatarPlayer } from "@/components/avatar-player";
import { AudioRecorder } from "@/components/audio-recorder";
import { Subtitles } from "@/components/subtitles";
import { useSessionStore } from "@/stores/session-store";

export default function SessionPage() {
  const router = useRouter();
  const {
    studentId,
    sessionId,
    sessionStatus,
    messages,
    isProcessing,
    isRecording,
    startSession,
    sendMessage,
    endSession,
  } = useSessionStore();

  const [textInput, setTextInput] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);

  useEffect(() => {
    if (!studentId) {
      router.push("/inscription");
      return;
    }
    if (!sessionId && sessionStatus === "idle") {
      startSession();
    }
  }, [studentId, sessionId, sessionStatus, startSession, router]);

  useEffect(() => {
    if (sessionStatus === "completed" && sessionId) {
      router.push(`/rapport/${sessionId}`);
    }
  }, [sessionStatus, sessionId, router]);

  const handleSendText = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim() || isProcessing) return;
    await sendMessage(textInput.trim());
    setTextInput("");
  };

  const handleEnd = async () => {
    if (messages.length < 4) {
      if (!confirm("La session est courte. Tu veux vraiment terminer ?")) return;
    }
    await endSession();
  };

  if (!sessionId) {
    return (
      <div className="flex min-h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border/40 px-4 py-3">
        <div>
          <h1 className="text-sm font-semibold">Session d&apos;orientation</h1>
          <p className="text-xs text-muted-foreground">
            {messages.length} messages
          </p>
        </div>
        <button
          onClick={handleEnd}
          disabled={isProcessing}
          className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/20"
        >
          <PhoneOff className="h-3.5 w-3.5" />
          Terminer
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col gap-4 p-4">
        {/* Avatar */}
        <AvatarPlayer />

        {/* Subtitles */}
        <Subtitles />

        {/* Chat history (collapsed, scrollable) */}
        {messages.length > 0 && (
          <div className="max-h-40 overflow-y-auto rounded-lg border border-border/40 p-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 text-xs ${
                  msg.role === "user"
                    ? "text-right text-muted-foreground"
                    : "text-left"
                }`}
              >
                <span
                  className={`inline-block rounded-lg px-2 py-1 ${
                    msg.role === "user"
                      ? "bg-primary/10"
                      : "bg-muted"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Controls */}
      <div className="border-t border-border/40 p-4">
        {showTextInput ? (
          <form onSubmit={handleSendText} className="flex gap-2">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Écris ton message..."
              className="h-10 flex-1 rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-primary"
              autoFocus
            />
            <button
              type="submit"
              disabled={isProcessing || !textInput.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setShowTextInput(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted"
            >
              <Keyboard className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowTextInput(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted"
            >
              <Keyboard className="h-4 w-4" />
            </button>
            <div className="flex flex-col items-center gap-1">
              <AudioRecorder />
              <span className="text-xs text-muted-foreground">
                {isRecording
                  ? "Relâche pour envoyer"
                  : isProcessing
                    ? "Moujihi parle..."
                    : "Maintiens pour parler"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
