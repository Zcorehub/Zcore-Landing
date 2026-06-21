"use client";

import { usePrefersReducedMotion } from "@/components/landing/motion";
import { cn } from "@/lib/utils";

const ROW_A = [
  "NO EMAIL REQUIRED",
  "NO CUSTODY",
  "NO KYC FORMS",
  "STELLAR TESTNET LIVE",
];
const ROW_B = [
  "OPEN SOURCE",
  "PORTABLE SCORE",
  "ON-CHAIN PROOF",
  "ZERO USER FEES",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={cn(
        "flex whitespace-nowrap",
        !prefersReducedMotion &&
          (reverse ? "animate-marquee-reverse" : "animate-marquee")
      )}
    >
      {doubled.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="mx-8 text-[10px] font-bold uppercase tracking-zk-wide text-white/25 flex items-center gap-8 hover:text-white/50 transition-colors"
        >
          {item}
          <span className="w-1 h-1 bg-white/30" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section className="group border-y border-white/[0.06] bg-[#050505]/80 overflow-hidden py-3 relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      <div className="space-y-2 group-hover:[&_*]:[animation-play-state:paused]">
        <MarqueeRow items={ROW_A} />
        <MarqueeRow items={ROW_B} reverse />
      </div>
    </section>
  );
}
