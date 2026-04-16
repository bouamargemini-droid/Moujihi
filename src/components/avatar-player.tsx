"use client";

import { useRef, useEffect } from "react";
import { useSessionStore } from "@/stores/session-store";
import { Bot } from "lucide-react";

export function AvatarPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const avatarVideoUrl = useSessionStore((s) => s.avatarVideoUrl);
  const audioUrl = useSessionStore((s) => s.audioUrl);
  const isProcessing = useSessionStore((s) => s.isProcessing);

  useEffect(() => {
    if (avatarVideoUrl && videoRef.current) {
      videoRef.current.src = avatarVideoUrl;
      videoRef.current.play().catch(() => {});
    }
  }, [avatarVideoUrl]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
      {avatarVideoUrl ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          playsInline
          autoPlay
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground">
          <div className={`rounded-full bg-primary/10 p-6 ${isProcessing ? "animate-pulse" : ""}`}>
            <Bot className="h-12 w-12 text-primary" />
          </div>
          <p className="text-sm">
            {isProcessing
              ? "Moujihi réfléchit..."
              : "Appuie sur le micro pour commencer"}
          </p>
        </div>
      )}

      {/* Audio-only fallback if no video but has audio */}
      {!avatarVideoUrl && audioUrl && (
        <audio src={audioUrl} autoPlay className="hidden" />
      )}
    </div>
  );
}
