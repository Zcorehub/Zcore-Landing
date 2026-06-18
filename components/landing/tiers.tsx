import { TiltCard } from "@/components/landing/motion";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    tier: "A",
    range: "600–850",
    limit: "$10,000+",
    rate: "8–12%",
    badge: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
    glow: "hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    bar: "from-emerald-500 to-emerald-400",
    width: "100%",
  },
  {
    tier: "B",
    range: "350–599",
    limit: "$2K–$10K",
    rate: "12–18%",
    badge: "border-blue-500/40 bg-blue-500/10 text-blue-400",
    glow: "hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    bar: "from-blue-500 to-blue-400",
    width: "70%",
  },
  {
    tier: "C",
    range: "100–349",
    limit: "$200–$2K",
    rate: "18–25%",
    badge: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
    glow: "hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.12)]",
    bar: "from-yellow-500 to-yellow-400",
    width: "40%",
  },
  {
    tier: "X",
    range: "0–99",
    limit: "No access",
    rate: "—",
    badge: "border-red-500/40 bg-red-500/10 text-red-400",
    glow: "hover:border-red-500/50",
    bar: "from-red-500 to-red-400",
    width: "15%",
    label: "REJECTED",
  },
];

export function Tiers() {
  return (
    <section id="tiers" className="py-24 px-4 sm:px-6 bg-[#050810]/50">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="blur" className="text-center mb-16">
          <SectionLabel>Access Levels</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Credit tiers
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Your tier unlocks lending limits and rates across the entire Stellar
            ecosystem.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map(({ tier, range, limit, rate, badge, glow, bar, width, label }, i) => (
            <Reveal key={tier} delay={i * 80} variant="scale">
              <TiltCard>
                <div
                  className={cn(
                    "group h-full p-6 rounded-2xl border border-white/[0.08] bg-[#0a0e1a]/60 transition-all duration-500",
                    glow
                  )}
                >
                  <div
                    className={cn(
                      "inline-flex px-3 py-1 rounded-full text-xs font-black border mb-5 group-hover:scale-105 transition-transform",
                      badge
                    )}
                  >
                    {label ?? `Tier ${tier}`}
                  </div>
                  <div className="text-3xl font-black mb-1 group-hover:text-white transition-colors">
                    {range}
                  </div>
                  <div className="h-1 rounded-full bg-white/[0.06] mb-4 overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out group-hover:opacity-100 opacity-60",
                        bar
                      )}
                      style={{ width }}
                    />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/40">Limit</span>
                      <span className="font-semibold">{limit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Rate</span>
                      <span className="font-semibold">{rate}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
