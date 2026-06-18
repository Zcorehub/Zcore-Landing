"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export function ScorePreview() {
  const [score, setScore] = useState(0);
  const target = 687;

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 2200;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setScore(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const progress = (score / 850) * 100;

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/40 via-violet-500/30 to-cyan-500/20 blur-xl opacity-70 animate-glow-pulse" />
      <div className="relative rounded-2xl border border-white/10 bg-[#0a0e1a]/90 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">
              Live Score Preview
            </p>
            <p className="text-xs font-mono text-white/40">GAYR...3DYY</p>
          </div>
          <Badge variant="A">Tier A</Badge>
        </div>

        <div className="text-center mb-6">
          <div className="text-7xl font-black tabular-nums tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            {score}
          </div>
          <p className="text-sm text-white/30 mt-1">out of 850</p>
        </div>

        <div className="space-y-3">
          <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-300 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3">
              <p className="text-white/40 mb-1">Stellar Base</p>
              <p className="font-mono font-bold text-indigo-300">142 / 150</p>
            </div>
            <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-3">
              <p className="text-white/40 mb-1">Partner Events</p>
              <p className="font-mono font-bold text-violet-300">545 / 700</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Trustless Work", "Blend", "Vaquita"].map((p) => (
            <span
              key={p}
              className="text-[10px] px-2 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/50"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
