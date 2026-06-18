"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CreditEvent } from "@/lib/api-client";
import { formatEventDate, formatPlatformName, stellarTxUrl } from "@/lib/format";

interface EventRowProps {
  event: CreditEvent;
}

export function EventRow({ event }: EventRowProps) {
  const [copied, setCopied] = useState(false);
  const positive = event.scoreImpact >= 0;

  function handleCopy() {
    navigator.clipboard.writeText(event.txHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0 gap-4">
      <div className="min-w-0">
        <div className="text-sm font-medium truncate">
          {formatPlatformName(event.platform)}
        </div>
        <div className="text-xs text-white/40 truncate">
          {event.eventType} · {formatEventDate(event.date)}
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="hidden sm:inline text-sm text-white/60 font-mono">
          {event.amount} {event.currency}
        </span>
        <span
          className={`text-sm font-semibold tabular-nums ${positive ? "text-emerald-400" : "text-red-400"}`}
        >
          {positive ? "+" : ""}
          {event.scoreImpact}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="text-white/30 hover:text-white/70 h-7 w-7"
          aria-label={copied ? "Copied" : "Copy transaction hash"}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </Button>
        <a
          href={stellarTxUrl(event.txHash)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-white/60 transition-colors"
          aria-label="View on Stellar explorer"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
