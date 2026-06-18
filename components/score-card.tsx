import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatScoreDate } from "@/lib/format";
import { cn } from "@/lib/utils";

const MAX_SCORE = 850;

export interface ScoreCardProps {
  score: number;
  tier: "A" | "B" | "C" | "REJECTED";
  lastUpdated: string;
}

export function ScoreCard({ score, tier, lastUpdated }: ScoreCardProps) {
  const progress = Math.min(100, Math.round((score / MAX_SCORE) * 100));

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-sm text-white/40 mb-2">Credit Score</p>
            <div className="text-6xl font-black tracking-tight">{score}</div>
          </div>
          <Badge variant={tier}>Tier {tier}</Badge>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/40">
            <span>0</span>
            <span>{MAX_SCORE}</span>
          </div>
          <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-700",
                tier === "A" && "bg-gradient-to-r from-emerald-500 to-emerald-400",
                tier === "B" && "bg-gradient-to-r from-blue-500 to-blue-400",
                tier === "C" && "bg-gradient-to-r from-yellow-500 to-yellow-400",
                tier === "REJECTED" &&
                  "bg-gradient-to-r from-red-500 to-red-400"
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-white/30 mt-5">
          Updated {formatScoreDate(lastUpdated)}
        </p>
      </CardContent>
    </Card>
  );
}
