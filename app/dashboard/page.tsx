"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Clock, RefreshCw } from "lucide-react";
import { DappNav } from "@/components/dapp-nav";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";
import { EventRow } from "@/components/event-row";
import { ScoreBreakdown } from "@/components/score-breakdown";
import { ScoreCard } from "@/components/score-card";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/lib/auth";
import { api, CreditEvent, ScoreData } from "@/lib/api-client";

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
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-[#080B14] text-white">
      <DappNav wallet={wallet} onLogout={handleLogout} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {loading && <DashboardSkeleton />}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 text-red-300 text-sm flex items-center justify-between gap-4">
            <span>{error}</span>
            {wallet && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => loadData(wallet)}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Retry
              </Button>
            )}
          </div>
        )}

        {!loading && !error && scoreData && (
          <div className="space-y-6 animate-slide-up">
            <div className="grid sm:grid-cols-2 gap-6">
              <ScoreCard
                score={scoreData.score}
                tier={scoreData.tier}
                lastUpdated={scoreData.lastUpdated}
              />
              <ScoreBreakdown
                stellarBase={scoreData.breakdown.stellarBase}
                eventsScore={scoreData.breakdown.eventsScore}
                platforms={scoreData.breakdown.platforms}
              />
            </div>

            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent Events</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs text-white/30">
                    <Clock className="w-3 h-3" />
                    <span>Last 5</span>
                  </div>
                  <Link
                    href="/dashboard/history"
                    className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View all
                  </Link>
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
