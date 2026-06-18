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
      <div className="absolute -inset-1 zk-slash bg-white/[0.06] blur-xl opacity-70 animate-glow-pulse" />
      <TiltCard>
        <div className="relative zk-slash border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-white/[0.04] to-transparent animate-scanline" />
          </div>

          <div className="flex items-center justify-between mb-6 relative">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1 flex items-center gap-2 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-white opacity-40" />
                  <span className="relative inline-flex h-2 w-2 bg-white" />
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
            <div className="text-7xl font-black tabular-nums tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              {score}
            </div>
            <p className="text-sm text-white/30 mt-1 font-mono">out of 850</p>
          </div>

          <div className="space-y-3 relative">
            <div className="h-2 bg-white/[0.06] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-neutral-600 via-white to-neutral-400 transition-all duration-300 shadow-[0_0_12px_rgba(255,255,255,0.15)] relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-bar" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="border border-white/10 bg-white/[0.02] p-3 hover:border-white/25 transition-colors">
                <p className="text-white/40 mb-1">Stellar Base</p>
                <p className="font-mono font-bold text-white/80">142 / 150</p>
              </div>
              <div className="border border-white/10 bg-white/[0.02] p-3 hover:border-white/25 transition-colors">
                <p className="text-white/40 mb-1">Partner Events</p>
                <p className="font-mono font-bold text-white/80">545 / 700</p>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
