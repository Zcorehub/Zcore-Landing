"use client";

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

  return (
    <div
      className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {doubled.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="mx-8 text-xs font-bold uppercase tracking-[0.25em] text-white/25 flex items-center gap-8 hover:text-white/50 transition-colors"
        >
          {item}
          <span className="w-1 h-1 rounded-full bg-indigo-500/60" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section className="group border-y border-white/[0.06] bg-[#050810]/80 overflow-hidden py-3 relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />
      <div className="space-y-2 group-hover:[&_*]:[animation-play-state:paused]">
        <MarqueeRow items={ROW_A} />
        <MarqueeRow items={ROW_B} reverse />
      </div>
    </section>
  );
}
