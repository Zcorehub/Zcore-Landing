import { BarChart3, Globe, Lock } from "lucide-react";
import { TiltCard } from "@/components/landing/motion";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";

const STEPS = [
  {
    n: "01",
    title: "Connect your wallet",
    desc: "Your Stellar address is your identity. G-prefix, 56 chars. No email. No password. No signup friction.",
    icon: Lock,
    accent: "from-white/[0.06] to-transparent border-white/10",
  },
  {
    n: "02",
    title: "We read the chain",
    desc: "Horizon pulls your history. Partner protocols feed verified events — escrows, loans, tandas — all on-chain.",
    icon: Globe,
    accent: "from-white/[0.04] to-transparent border-white/[0.08]",
  },
  {
    n: "03",
    title: "Score drops. Rates drop.",
    desc: "Get a 0–850 breakdown you can share with any lender. Better tier = lower collateral, tighter default band.",
    icon: BarChart3,
    accent: "from-white/[0.03] to-transparent border-white/[0.06]",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="blur" className="text-center mb-16">
          <SectionLabel>Process</SectionLabel>
          <SectionHeading>Three steps. Zero bullshit.</SectionHeading>
          <p className="text-white/40 text-sm tracking-wide max-w-xl mx-auto">
            From wallet to credit score in seconds — powered by data that
            can&apos;t be faked.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map(({ n, title, desc, icon: Icon, accent }, i) => (
            <Reveal key={n} delay={i * 120} variant="scale">
              <TiltCard>
                <div
                  className={`group relative h-full p-7 zk-slash border bg-gradient-to-b ${accent} transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]`}
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-bold text-white/[0.04] group-hover:text-white/10 transition-colors duration-500 tabular-nums">
                      {n}
                    </span>
                    <div className="w-11 h-11 bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-white/25 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="w-5 h-5 text-white/60" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-zk mb-3">{title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed tracking-wide">{desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
