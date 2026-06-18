import { Layers, Search, Wallet } from "lucide-react";
import { TiltCard } from "@/components/landing/motion";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";

const PROBLEMS = [
  {
    title: "Fragmented ecosystem",
    desc: "Credit signals live across disconnected Stellar apps with no unified view. Users jump between wallets, explorers, and protocols just to understand their standing.",
    icon: Layers,
  },
  {
    title: "No consumer-friendly discovery",
    desc: "On-chain reputation is not presented in a way everyday users can read. There is no simple place to explore, compare, or share credit like other crypto assets.",
    icon: Search,
  },
  {
    title: "Idle wallet history",
    desc: "Most on-chain activity sits unused after it happens. It does not unlock better rates, liquidity, or lending access across the ecosystem.",
    icon: Wallet,
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 px-4 sm:px-6 bg-[#050505]/60">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="blur" className="text-center mb-16">
          <SectionLabel>The Problem</SectionLabel>
          <SectionHeading>
            Credit exists on-chain.
            <br />
            <span className="text-white/50">But access is broken.</span>
          </SectionHeading>
          <p className="text-white/40 text-sm tracking-wide max-w-2xl mx-auto">
            Real financial activity is moving on-chain, but everyday users still
            face a fragmented, complex, and unproductive experience.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {PROBLEMS.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 100} variant="scale">
              <TiltCard>
                <div className="group h-full p-7 zk-slash border border-white/[0.08] bg-[#0a0a0a]/60 transition-all duration-500 hover:border-white/15">
                  <div className="w-11 h-11 bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/25 transition-colors">
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
