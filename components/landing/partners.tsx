import { BarChart3, ExternalLink, Shield, Zap } from "lucide-react";
import { TiltCard } from "@/components/landing/motion";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";
import { siteConfig } from "@/lib/site";

const PARTNERS = [
  {
    name: "Trustless Work",
    desc: "Escrow completions verified on Stellar",
    event: "escrow_completed",
    points: "+60",
    icon: Shield,
  },
  {
    name: "Blend Protocol",
    desc: "Loan repayments that prove reliability",
    event: "loan_repaid",
    points: "+80",
    icon: BarChart3,
  },
  {
    name: "Vaquita",
    desc: "Tanda cycles: community credit, on-chain",
    event: "tanda_cycle_complete",
    points: "+100",
    icon: Zap,
  },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal variant="blur" className="text-center mb-16">
          <SectionLabel>Ecosystem</SectionLabel>
          <SectionHeading>Partner protocols</SectionHeading>
          <p className="text-white/40 text-sm tracking-wide max-w-xl mx-auto">
            Every verified event stacks points. More activity = higher score =
            better access.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {PARTNERS.map(({ name, desc, event, points, icon: Icon }, i) => (
            <Reveal key={name} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
              <TiltCard>
                <div className="group h-full p-7 zk-slash border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]">
                  <div className="w-12 h-12 bg-white/[0.03] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-zk mb-2">{name}</h3>
                  <p className="text-white/40 text-xs mb-5 tracking-wide">{desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <code className="text-[10px] tracking-wide text-white/50 bg-white/[0.04] px-2 py-1">
                      {event}
                    </code>
                    <span className="text-base font-bold text-white group-hover:scale-110 transition-transform inline-block tabular-nums">
                      {points}
                      <span className="text-xs font-normal text-white/30 ml-1">
                        pts
                      </span>
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} variant="up" className="mt-10 text-center">
          <p className="text-white/30 text-xs tracking-wide">
            Building on Stellar?{" "}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
            >
              Become a partner <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
