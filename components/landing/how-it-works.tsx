import { BarChart3, Globe, Lock } from "lucide-react";
import { TiltCard } from "@/components/landing/motion";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";

const STEPS = [
  {
    n: "01",
    title: "Connect your wallet",
    desc: "Your Stellar address is your identity. G-prefix, 56 chars. No email. No password. No signup friction.",
    icon: Lock,
    accent: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/20",
  },
  {
    n: "02",
    title: "We read the chain",
    desc: "Horizon pulls your history. Partner protocols feed verified events — escrows, loans, tandas — all on-chain.",
    icon: Globe,
    accent: "from-violet-500/20 to-violet-500/5 border-violet-500/20",
  },
  {
    n: "03",
    title: "Score drops. Rates drop.",
    desc: "Get a 0–850 breakdown you can share with any lender. Better tier = lower collateral, better rates.",
    icon: BarChart3,
    accent: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="blur" className="text-center mb-16">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Three steps. Zero bullshit.
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            From wallet to credit score in seconds — powered by data that
            can&apos;t be faked.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map(({ n, title, desc, icon: Icon, accent }, i) => (
            <Reveal key={n} delay={i * 120} variant="scale">
              <TiltCard>
                <div
                  className={`group relative h-full p-7 rounded-2xl border bg-gradient-to-b ${accent} transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]`}
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-black text-white/[0.06] group-hover:text-indigo-500/25 transition-colors duration-500">
                      {n}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="w-5 h-5 text-indigo-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
