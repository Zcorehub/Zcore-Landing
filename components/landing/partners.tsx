import { BarChart3, ExternalLink, Shield, Zap } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { siteConfig } from "@/lib/site";

const PARTNERS = [
  {
    name: "Trustless Work",
    desc: "Escrow completions verified on Stellar",
    event: "escrow_completed",
    points: "+60",
    icon: Shield,
    glow: "hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]",
  },
  {
    name: "Blend Protocol",
    desc: "Loan repayments that prove reliability",
    event: "loan_repaid",
    points: "+80",
    icon: BarChart3,
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
  },
  {
    name: "Vaquita",
    desc: "Tanda cycles — community credit, on-chain",
    event: "tanda_cycle_complete",
    points: "+100",
    icon: Zap,
    glow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]",
  },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/[0.15] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal className="text-center mb-16">
          <SectionLabel>Ecosystem</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Partner protocols
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Every verified event stacks points. More activity = higher score =
            better access.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {PARTNERS.map(({ name, desc, event, points, icon: Icon, glow }, i) => (
            <Reveal key={name} delay={i * 100}>
              <div
                className={`group h-full p-7 rounded-2xl border border-white/[0.08] bg-[#0a0e1a]/60 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 ${glow}`}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                <p className="text-white/45 text-sm mb-5">{desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <code className="text-[11px] font-mono text-indigo-300/80 bg-indigo-500/10 px-2 py-1 rounded">
                    {event}
                  </code>
                  <span className="text-lg font-black text-emerald-400">
                    {points}
                    <span className="text-xs font-normal text-white/30 ml-1">
                      pts
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-10 text-center">
          <p className="text-white/35 text-sm">
            Building on Stellar?{" "}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 font-medium"
            >
              Become a partner <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
