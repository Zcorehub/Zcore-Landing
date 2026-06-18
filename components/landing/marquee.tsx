const ITEMS = [
  "NO EMAIL REQUIRED",
  "NO CUSTODY",
  "NO KYC FORMS",
  "STELLAR TESTNET LIVE",
  "OPEN SOURCE",
  "PORTABLE SCORE",
  "ON-CHAIN PROOF",
  "ZERO USER FEES",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section className="border-y border-white/[0.06] bg-[#050810]/80 overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 text-xs font-bold uppercase tracking-[0.25em] text-white/25 flex items-center gap-8"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-indigo-500/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
