import { DEEPGRAM_LANGUAGE_MAP, Language } from "@/types";

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY!;

export async function transcribeAudio(
  audioBuffer: Buffer,
  language: Language
): Promise<string> {
  const response = await fetch(
    "https://api.deepgram.com/v1/listen?" +
      new URLSearchParams({
        language: DEEPGRAM_LANGUAGE_MAP[language],
        model: "nova-3",
        smart_format: "true",
      }),
    {
      method: "POST",
      headers: {
        Authorization: `Token ${DEEPGRAM_API_KEY}`,
        "Content-Type": "audio/webm",
      },
      body: audioBuffer,
    }
  );

  if (!response.ok) {
    throw new Error(`Deepgram error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results?.channels?.[0]?.alternatives?.[0]?.transcript ?? "";
}
