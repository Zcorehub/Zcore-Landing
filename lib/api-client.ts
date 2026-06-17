const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";

async function request<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error ?? `Request failed: ${res.status}`);
  }
  return data.data as T;
}

export type ScoreData = {
  walletAddress: string;
  score: number;
  tier: "A" | "B" | "C" | "REJECTED";
  breakdown: {
    stellarBase: number;
    eventsScore: number;
    totalEvents: number;
    platforms: string[];
  };
  lastUpdated: string;
};

export type CreditEvent = {
  eventId: string;
  platform: string;
  eventType: string;
  amount: number;
  currency: string;
  scoreImpact: number;
  txHash: string;
  date: string;
};

export type HistoryData = {
  events: CreditEvent[];
  totalPositive: number;
  totalNegative: number;
};

export const api = {
  register(walletAddress: string) {
    return request<{ score: number }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ walletAddress }),
    });
  },

  login(walletAddress: string) {
    return request<{ score: number }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ walletAddress }),
    });
  },

  getScore(wallet: string) {
    return request<ScoreData>(`/api/user/${wallet}/score`);
  },

  getHistory(wallet: string) {
    return request<HistoryData>(`/api/user/${wallet}/history`);
  },

  getProfile(wallet: string) {
    return request<{
      walletAddress: string;
      score: number;
      profileTier: string;
      createdAt: string;
      updatedAt: string;
    }>(`/api/user/${wallet}/profile`);
  },
};
