"use client";

import { useSessionStore } from "@/stores/session-store";

export function Subtitles() {
  const subtitles = useSessionStore((s) => s.subtitles);

  if (!subtitles) return null;

  return (
    <div className="rounded-lg bg-muted/80 px-4 py-3 text-center text-sm backdrop-blur-sm">
      {subtitles}
    </div>
  );
}
