import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPlatformName } from "@/lib/format";

const MAX_SCORE = 850;
const STELLAR_MAX = 150;
const EVENTS_MAX = 700;

export interface ScoreBreakdownProps {
  stellarBase: number;
  eventsScore: number;
  platforms: string[];
}

export function ScoreBreakdown({
  stellarBase,
  eventsScore,
  platforms,
}: ScoreBreakdownProps) {
  const unlocked = stellarBase + eventsScore;
  const remaining = MAX_SCORE - unlocked;
  const stellarPct = (stellarBase / MAX_SCORE) * 100;
  const eventsPct = (eventsScore / MAX_SCORE) * 100;
  const remainingPct = (remaining / MAX_SCORE) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Score Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-3">
          <div className="flex h-4 rounded-full overflow-hidden bg-white/[0.04]">
            <div
              className="bg-indigo-500 transition-all duration-700"
              style={{ width: `${stellarPct}%` }}
              title={`Stellar Base: ${stellarBase} pts`}
            />
            <div
              className="bg-violet-500 transition-all duration-700"
              style={{ width: `${eventsPct}%` }}
              title={`Partner Events: ${eventsScore} pts`}
            />
            <div
              className="bg-white/[0.06] transition-all duration-700"
              style={{ width: `${remainingPct}%` }}
              title={`Unlocked potential: ${remaining} pts`}
            />
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span className="text-white/70">Stellar Base</span>
              </div>
              <span className="font-mono text-white">
                {stellarBase}
                <span className="text-white/30"> / {STELLAR_MAX}</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                <span className="text-white/70">Partner Events</span>
              </div>
              <span className="font-mono text-white">
                {eventsScore}
                <span className="text-white/30"> / {EVENTS_MAX}</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="text-white/50">Unlocked potential</span>
              </div>
              <span className="font-mono text-white/40">{remaining} pts</span>
            </div>
          </div>
        </div>

        {platforms.length > 0 && (
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-2">
              Active platforms
            </p>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {formatPlatformName(platform)}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
