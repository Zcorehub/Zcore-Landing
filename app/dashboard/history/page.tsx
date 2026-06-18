"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import { DappNav } from "@/components/dapp-nav";
import { EventRow } from "@/components/event-row";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AuthService } from "@/lib/auth";
import { api, CreditEvent, HistoryData } from "@/lib/api-client";

function HistorySkeleton() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid sm:grid-cols-2 gap-4">
        <Skeleton className="h-24 rounded-2xl" />
        <Skeleton className="h-24 rounded-2xl" />
      </div>
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between py-2">
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-56" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HistoryPage() {
  const router = useRouter();
  const [wallet, setWallet] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const w = AuthService.getWallet();
    if (!w) {
      router.replace("/login");
      return;
    }
    setWallet(w);
    loadHistory(w);
  }, [router]);

  async function loadHistory(w: string) {
    setLoading(true);
    setError("");
    try {
      const data = await api.getHistory(w);
      const sorted = [...data.events].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setHistory({ ...data, events: sorted });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load history");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    AuthService.logout();
    router.push("/login");
  }

  const events = history?.events ?? [];

  return (
    <div className="min-h-screen bg-[#080B14] text-white">
      <DappNav wallet={wallet} onLogout={handleLogout} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Event History</h1>
          <p className="text-white/50 text-sm">
            Full credit event history from all partner protocols.
          </p>
        </div>

        {loading && <HistorySkeleton />}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 text-red-300 text-sm flex items-center justify-between gap-4">
            <span>{error}</span>
            {wallet && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => loadHistory(wallet)}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Retry
              </Button>
            )}
          </div>
        )}

        {!loading && !error && history && (
          <div className="space-y-6 animate-slide-up">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                  Total positive
                </p>
                <p className="text-3xl font-bold text-emerald-400">
                  +{history.totalPositive}
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/5">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                  Total negative
                </p>
                <p className="text-3xl font-bold text-red-400">
                  {history.totalNegative}
                </p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
              {events.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-white/40 mb-2">No events yet</p>
                  <p className="text-white/30 text-sm max-w-md mx-auto">
                    Start building your credit history with Trustless Work,
                    Blend Protocol, or Vaquita on Stellar testnet.
                  </p>
                </div>
              ) : (
                events.map((ev: CreditEvent) => (
                  <EventRow key={ev.eventId} event={ev} />
                ))
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
