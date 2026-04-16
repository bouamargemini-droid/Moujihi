const DID_API_KEY = process.env.DID_API_KEY!;
const DID_AVATAR_URL =
  process.env.DID_AVATAR_URL ||
  "https://d-id-public-bucket.s3.us-west-2.amazonaws.com/alice.jpg";

const DID_BASE_URL = "https://api.d-id.com";

export interface TalkResponse {
  id: string;
  status: string;
  result_url?: string;
}

export async function createTalkStream(
  audioUrl: string
): Promise<TalkResponse> {
  const response = await fetch(`${DID_BASE_URL}/talks`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${DID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      source_url: DID_AVATAR_URL,
      script: {
        type: "audio",
        audio_url: audioUrl,
      },
      config: {
        fluent: true,
        pad_audio: 0.5,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`D-ID error: ${response.statusText}`);
  }

  return response.json();
}

export async function getTalkStatus(talkId: string): Promise<TalkResponse> {
  const response = await fetch(`${DID_BASE_URL}/talks/${talkId}`, {
    headers: {
      Authorization: `Basic ${DID_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`D-ID status error: ${response.statusText}`);
  }

  return response.json();
}
