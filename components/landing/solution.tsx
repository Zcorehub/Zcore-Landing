import {
  ArrowLeftRight,
  BarChart3,
  Compass,
  Shield,
} from "lucide-react";
import { TiltCard } from "@/components/landing/motion";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";

const FEATURES = [
  {
    title: "Check your portable score",
    desc: "Get a 0-850 score from verified Stellar activity. Instantly, permissionlessly, and without paperwork.",
    icon: BarChart3,
  },
  {
    title: "Share proof with lenders",
    desc: "Portable breakdown any protocol can read. Better tier means lower collateral and tighter risk bands.",
    icon: Shield,
  },
  {
    title: "Discover your tier",
    desc: "See max LTV, estimated default, and APR ranges in one place. You decide how much risk to take.",
    icon: Compass,
  },
  {
    title: "Stack partner events",
    desc: "Escrows, loans, and tandas from partner protocols boost your score over time, all verified on-chain.",
    icon: ArrowLeftRight,
  },
];

export function Solution() {
  return (
    <section id="solution" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="blur" className="text-center mb-16">
          <SectionLabel>The Solution</SectionLabel>
          <SectionHeading>
            A better way to access
            <br />
            on-chain credit
          </SectionHeading>
          <p className="text-white/40 text-sm tracking-wide max-w-2xl mx-auto">
            ZCore unifies discovery, scoring, and access in one consumer-ready
            credit layer built for Stellar.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {FEATURES.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80} variant="scale">
              <TiltCard>
                <div className="group h-full p-7 zk-slash border border-white/[0.08] bg-[#0a0a0a]/40 transition-all duration-500 hover:border-white/15 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]">
                  <div className="w-11 h-11 bg-white/[0.03] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-zk mb-3">
                    {title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed tracking-wide">
                    {desc}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
