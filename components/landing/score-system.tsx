import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";

const SCORE_COMPONENTS = [
  { component: "Wallet age", max: 40, source: "Stellar Horizon" },
  { component: "Transaction activity", max: 60, source: "Stellar Horizon" },
  { component: "Transaction success rate", max: 30, source: "Stellar Horizon" },
  { component: "XLM balance", max: 20, source: "Stellar Horizon" },
  { component: "Escrow completed", max: 60, source: "Trustless Work" },
  { component: "Loan repaid", max: 80, source: "Blend Protocol" },
  { component: "Tanda round paid", max: 30, source: "Vaquita" },
  { component: "Tanda cycle complete", max: 100, source: "Vaquita" },
];

export function ScoreSystem() {
  return (
    <section id="score" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal variant="right">
            <SectionLabel>Scoring Engine</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              0-850. Fully transparent.
            </h2>
            <p className="text-white/40 text-lg mb-8 leading-relaxed">
              Two engines. One score. Stellar base activity (150 pts max) +
              partner events (700 pts max). Every point traceable to on-chain
              proof.
            </p>

            <div className="space-y-4">
              <div className="p-5 zk-slash border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-14 bg-gradient-to-b from-white/60 to-white/20" />
                  <div>
                    <p className="font-bold text-lg">Stellar Base</p>
                    <p className="text-white/40 text-sm">
                      Age, volume, success rate, balance
                    </p>
                    <p className="text-white/60 font-mono text-sm mt-2">
                      max 150 pts
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 zk-slash border border-white/[0.08] bg-white/[0.015]">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-14 bg-gradient-to-b from-white/40 to-white/10" />
                  <div>
                    <p className="font-bold text-lg">Partner Events</p>
                    <p className="text-white/40 text-sm">
                      Escrows, loans, tandas, verified by protocols
                    </p>
                    <p className="text-white/50 font-mono text-sm mt-2">
                      max 700 pts
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-3 overflow-hidden flex bg-white/[0.04]">
                <div className="w-[17.6%] bg-white/70" title="Stellar 150/850" />
                <div className="w-[82.4%] bg-white/30" title="Events 700/850" />
              </div>
              <p className="text-[11px] text-white/25 uppercase tracking-widest font-mono">
                Score composition at maximum
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} variant="left">
            <div className="zk-slash border border-white/[0.08] bg-[#0a0a0a]/80 overflow-hidden">
              <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-white/40 font-mono">
                  Breakdown
                </span>
                <span className="text-[10px] font-mono text-white/30">
                  v1.0
                </span>
              </div>
              <div className="px-5 py-2 border-b border-white/[0.06] text-[10px] font-medium text-white/30 uppercase tracking-widest grid grid-cols-3 font-mono">
                <span>Component</span>
                <span className="text-center">Max</span>
                <span className="text-right">Source</span>
              </div>
              {SCORE_COMPONENTS.map(({ component, max, source }) => (
                <div
                  key={component}
                  className="px-5 py-3 border-b border-white/[0.04] last:border-0 grid grid-cols-3 items-center hover:bg-white/[0.02] transition-colors group"
                >
                  <span className="text-sm text-white/75 group-hover:text-white transition-colors">
                    {component}
                  </span>
                  <span className="text-sm text-center font-mono font-bold text-white/80">
                    {max}
                  </span>
                  <span className="text-[11px] text-right text-white/35">
                    {source}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
