import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";
import { siteConfig } from "@/lib/site";

export function Builders() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative p-8 sm:p-12 zk-slash border border-white/[0.08] bg-[#0a0a0a]/80 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-[80px] pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-10 items-center relative">
              <div>
                <SectionLabel>For Builders</SectionLabel>
                <SectionHeading className="text-2xl sm:text-3xl">
                  One API. One question answered.
                </SectionHeading>
                <p className="text-white/40 mb-6 leading-relaxed text-sm tracking-wide">
                  <span className="text-white/80 font-semibold">
                    &ldquo;Has this wallet been reliable with money on
                    Stellar?&rdquo;
                  </span>{" "}
                  Integrate ZCore and make lending decisions with on-chain
                  proof, not guesswork.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.backendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 transition-all px-5 py-3 text-xs font-bold uppercase tracking-zk zk-slash"
                  >
                    Backend API <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={siteConfig.landingRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white/50 hover:text-white transition-colors px-5 py-3 text-xs uppercase tracking-zk"
                  >
                    This repo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="border border-white/[0.08] bg-black p-5 font-mono text-sm relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 bg-white/20" />
                  <span className="w-2.5 h-2.5 bg-white/30" />
                  <span className="w-2.5 h-2.5 bg-white/50" />
                </div>
                <div className="text-white/40 text-xs mb-3">
                  GET /api/user/{"{wallet}"}/score
                </div>
                <pre className="text-white/60 text-xs leading-relaxed overflow-x-auto">{`{
  "score": 687,
  "tier": "A",
  "breakdown": {
    "stellarBase": 142,
    "eventsScore": 545,
    "totalEvents": 23,
    "platforms": [
      "trustless-work",
      "blend-protocol",
      "vaquita"
    ]
  }
}`}</pre>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
