"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, RefreshCw, Clock, ExternalLink } from "lucide-react";
import { AuthService } from "@/lib/auth";
import { api, ScoreData, CreditEvent } from "@/lib/api-client";

function ScorePlaceholder({ score, tier }: { score: number; tier: string }) {
  return (
    <div className="p-8 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-center">
      <div className="text-6xl font-black mb-2">{score}</div>
      <div className="text-lg text-white/60">Tier {tier}</div>
    </div>
  );
}

function BreakdownPlaceholder({
  breakdown,
}: {
  breakdown: ScoreData["breakdown"];
}) {
  return (
    <div className="p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl">
      <h3 className="font-semibold mb-4">Score Breakdown</h3>
      <div className="space-y-2 text-sm text-white/60">
        <div className="flex justify-between">
          <span>Stellar Base</span>
          <span className="text-white">{breakdown.stellarBase} pts</span>
        </div>
        <div className="flex justify-between">
          <span>Partner Events</span>
          <span className="text-white">{breakdown.eventsScore} pts</span>
        </div>
        <div className="flex justify-between">
          <span>Total Events</span>
          <span className="text-white">{breakdown.totalEvents}</span>
        </div>
      </div>
    </div>
  );
}

function EventRow({ event }: { event: CreditEvent }) {
  const positive = event.scoreImpact >= 0;
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
      <div>
        <div className="text-sm font-medium">{event.platform}</div>
        <div className="text-xs text-white/40">
          {event.eventType} · {event.date}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-white/60 font-mono">
          {event.amount} {event.currency}
        </span>
        <span
          className={`text-sm font-semibold ${positive ? "text-emerald-400" : "text-red-400"}`}
        >
          {positive ? "+" : ""}
          {event.scoreImpact}
        </span>
        <a
          href={`https://stellar.expert/explorer/testnet/tx/${event.txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-white/60 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [wallet, setWallet] = useState<string | null>(null);
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [events, setEvents] = useState<CreditEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const w = AuthService.getWallet();
    if (!w) {
      router.replace("/login");
      return;
    }
    setWallet(w);
    loadData(w);
  }, [router]);

  async function loadData(w: string) {
    setLoading(true);
    setError("");
    try {
      const [score, history] = await Promise.all([
        api.getScore(w),
        api.getHistory(w),
      ]);
      setScoreData(score);
      setEvents(history.events.slice(0, 5));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    AuthService.logout();
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-[#080B14] text-white">
      {/* Nav */}
      <nav className="border-b border-white/[0.06] px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-[10px] font-bold">Z</span>
          </div>
          <span className="font-semibold">ZCore</span>
        </div>

        <div className="flex items-center gap-3">
          {wallet && (
            <span className="hidden sm:block text-xs font-mono text-white/30">
              {wallet.slice(0, 6)}...{wallet.slice(-4)}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:block">Log out</span>
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {loading && (
          <div className="flex items-center justify-center py-20 text-white/40">
            <RefreshCw className="w-5 h-5 animate-spin mr-2" />
            Loading your score...
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 text-red-300 text-sm">
            {error}
          </div>
        )}

        {!loading && !error && scoreData && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <ScorePlaceholder score={scoreData.score} tier={scoreData.tier} />
              <BreakdownPlaceholder breakdown={scoreData.breakdown} />
            </div>

            {/* Recent events */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent Events</h3>
                <div className="flex items-center gap-1 text-xs text-white/30">
                  <Clock className="w-3 h-3" />
                  <span>Last 5</span>
                </div>
              </div>
              {events.length === 0 ? (
                <p className="text-white/30 text-sm py-4 text-center">
                  No credit events yet. Use Trustless Work, Blend, or Vaquita
                  to start building your history.
                </p>
              ) : (
                events.map((ev) => <EventRow key={ev.eventId} event={ev} />)
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
