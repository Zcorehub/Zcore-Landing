import { TiltCard } from "@/components/landing/motion";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    tier: "A",
    range: "600-850",
    maxLtv: "≤ 70%",
    defaultRisk: "3-6%",
    rate: "10-14%",
    badge: "border-white/40 bg-white/10 text-white",
    glow: "hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]",
    bar: "from-white to-neutral-300",
    width: "100%",
  },
  {
    tier: "B",
    range: "350-599",
    maxLtv: "≤ 50%",
    defaultRisk: "10-18%",
    rate: "14-20%",
    badge: "border-white/25 bg-white/[0.06] text-white/80",
    glow: "hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]",
    bar: "from-neutral-300 to-neutral-500",
    width: "70%",
  },
  {
    tier: "C",
    range: "100-349",
    maxLtv: "≤ 30%",
    defaultRisk: "25-40%",
    rate: "20-28%",
    badge: "border-white/15 bg-white/[0.03] text-white/60",
    glow: "hover:border-white/15",
    bar: "from-neutral-500 to-neutral-600",
    width: "40%",
  },
  {
    tier: "X",
    range: "0-99",
    maxLtv: "N/A",
    defaultRisk: "50%+",
    rate: "N/A",
    badge: "border-white/10 bg-white/[0.02] text-white/40",
    glow: "hover:border-white/10",
    bar: "from-neutral-700 to-neutral-800",
    width: "15%",
    label: "REJECTED",
  },
];

export function Tiers() {
  return (
    <section id="tiers" className="py-24 px-4 sm:px-6 bg-[#050505]/80">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="blur" className="text-center mb-16">
          <SectionLabel>Access Levels</SectionLabel>
          <SectionHeading>Credit tiers</SectionHeading>
          <p className="text-white/40 text-sm tracking-wide max-w-xl mx-auto">
            Risk bands in percentages, not loan offers. Lenders and protocols
            decide how much exposure they take on each wallet.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map(
            (
              { tier, range, maxLtv, defaultRisk, rate, badge, glow, bar, width, label },
              i
            ) => (
              <Reveal key={tier} delay={i * 80} variant="scale">
                <TiltCard>
                  <div
                    className={cn(
                      "group h-full p-6 zk-slash border border-white/[0.08] bg-[#0a0a0a]/60 transition-all duration-500",
                      glow
                    )}
                  >
                    <div
                      className={cn(
                        "inline-flex px-3 py-1 text-[10px] font-bold uppercase tracking-zk border mb-5 group-hover:scale-105 transition-transform",
                        badge
                      )}
                    >
                      {label ?? `Tier ${tier}`}
                    </div>
                    <div className="text-2xl font-bold mb-1 group-hover:text-white transition-colors tabular-nums tracking-zk">
                      {range}
                    </div>
                    <div className="h-1 bg-white/[0.06] mb-4 overflow-hidden">
                      <div
                        className={cn(
                          "h-full bg-gradient-to-r transition-all duration-700 ease-out group-hover:opacity-100 opacity-60",
                          bar
                        )}
                        style={{ width }}
                      />
                    </div>
                    <div className="space-y-2 text-xs tracking-wide">
                      <div className="flex justify-between gap-3">
                        <span className="text-white/40 shrink-0">Max LTV</span>
                        <span className="font-semibold tabular-nums text-right">
                          {maxLtv}
                        </span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <span className="text-white/40 shrink-0">Est. default</span>
                        <span className="font-semibold tabular-nums text-right">
                          {defaultRisk}
                        </span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <span className="text-white/40 shrink-0">APR range</span>
                        <span className="font-semibold tabular-nums text-right">
                          {rate}
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            )
          )}
        </div>

        <Reveal delay={200} variant="up" className="mt-8 text-center">
          <p className="text-white/25 text-[10px] uppercase tracking-zk-wide max-w-lg mx-auto">
            Indicative only. ZCore does not lend, set rates, or guarantee any
            exposure. You choose the risk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
