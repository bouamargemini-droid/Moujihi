const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

class ApiClient {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({ error: res.statusText }));
      throw new Error(error.error || "Request failed");
    }

    return res.json();
  }

  // Auth
  async register(data: {
    name: string;
    email: string;
    phone: string;
    language: string;
  }) {
    return this.request<{
      id: string;
      moujihi_id: string;
      email: string;
    }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Student
  async getMe() {
    return this.request<{ id: string; name: string; language: string }>(
      "/api/student/me"
    );
  }

  // Orientation
  async createSession(language: string) {
    return this.request<{ id: string; status: string }>(
      "/api/orientation/session",
      {
        method: "POST",
        body: JSON.stringify({ language }),
      }
    );
  }

  async chat(sessionId: string, text: string) {
    return this.request<{
      text: string;
      audio_url?: string;
      video_url?: string;
    }>("/api/orientation/chat", {
      method: "POST",
      body: JSON.stringify({ session_id: sessionId, text }),
    });
  }

  async chatWithAudio(sessionId: string, audio: Blob) {
    const buffer = await audio.arrayBuffer();
    const base64 = btoa(
      new Uint8Array(buffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    return this.request<{
      text: string;
      audio_url?: string;
      video_url?: string;
    }>("/api/orientation/chat", {
      method: "POST",
      body: JSON.stringify({
        session_id: sessionId,
        audio: base64,
      }),
    });
  }

  async completeSession(sessionId: string) {
    return this.request<{ profile: unknown }>("/api/orientation/complete", {
      method: "POST",
      body: JSON.stringify({ session_id: sessionId }),
    });
  }

  async getReport(sessionId: string) {
    return this.request<unknown>(`/api/orientation/report/${sessionId}`);
  }
}

export const api = new ApiClient();
