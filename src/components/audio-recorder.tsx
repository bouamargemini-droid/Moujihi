"use client";

import { useRef, useCallback } from "react";
import { Mic, Square } from "lucide-react";
import { useSessionStore } from "@/stores/session-store";

export function AudioRecorder() {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const isRecording = useSessionStore((s) => s.isRecording);
  const isProcessing = useSessionStore((s) => s.isProcessing);
  const setRecording = useSessionStore((s) => s.setRecording);
  const sendAudio = useSessionStore((s) => s.sendAudio);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      });

      chunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        stream.getTracks().forEach((t) => t.stop());
        sendAudio(blob);
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setRecording(true);
    } catch {
      console.error("Microphone access denied");
    }
  }, [sendAudio, setRecording]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  }, [setRecording]);

  return (
    <button
      type="button"
      onMouseDown={startRecording}
      onMouseUp={stopRecording}
      onTouchStart={startRecording}
      onTouchEnd={stopRecording}
      disabled={isProcessing}
      className={`flex h-16 w-16 items-center justify-center rounded-full transition-all ${
        isRecording
          ? "scale-110 bg-red-500 text-white shadow-lg shadow-red-500/30"
          : isProcessing
            ? "bg-muted text-muted-foreground opacity-50"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
      }`}
    >
      {isRecording ? (
        <Square className="h-6 w-6" />
      ) : (
        <Mic className="h-6 w-6" />
      )}
    </button>
  );
}
