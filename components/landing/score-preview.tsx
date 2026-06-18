"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/landing/motion";

export function ScorePreview() {
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const target = 687;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

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
  }, [visible]);

  const progress = (score / 850) * 100;

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/40 via-violet-500/30 to-cyan-500/20 blur-xl opacity-70 animate-glow-pulse" />
      <TiltCard>
        <div className="relative rounded-2xl border border-white/10 bg-[#0a0e1a]/90 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-cyan-400/10 to-transparent animate-scanline" />
          </div>

          <div className="flex items-center justify-between mb-6 relative">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Live Score Preview
              </p>
              <p className="text-xs font-mono text-white/40 animate-pulse-subtle">
                GAYR...3DYY
              </p>
            </div>
            <Badge variant="A" className="animate-scale-in">
              Tier A
            </Badge>
          </div>

          <div className="text-center mb-6 relative">
            <div className="text-7xl font-black tabular-nums tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              {score}
            </div>
            <p className="text-sm text-white/30 mt-1">out of 850</p>
          </div>

          <div className="space-y-3 relative">
            <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-300 shadow-[0_0_12px_rgba(99,102,241,0.6)] relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-bar" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3 hover:border-indigo-500/40 transition-colors">
                <p className="text-white/40 mb-1">Stellar Base</p>
                <p className="font-mono font-bold text-indigo-300">142 / 150</p>
              </div>
              <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 hover:border-violet-500/40 transition-colors">
                <p className="text-white/40 mb-1">Partner Events</p>
                <p className="font-mono font-bold text-violet-300">545 / 700</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 relative">
            {["Trustless Work", "Blend", "Vaquita"].map((p, i) => (
              <span
                key={p}
                className="text-[10px] px-2 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/50 animate-fade-in opacity-0"
                style={{
                  animationDelay: `${800 + i * 120}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
