"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticWrap } from "@/components/landing/motion";
import { Reveal } from "@/components/landing/reveal";
import { AnimatedGradientText } from "@/components/landing/text-effects";
import { getDappUrl } from "@/lib/site";

export function Cta() {
  return (
    <section id="launch" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-indigo-500/10 animate-spin-slow" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-violet-500/10 animate-spin-slower" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <Reveal variant="scale">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none animate-glow-pulse" />
            <div className="relative">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-5 leading-[1.1]">
                STOP ASKING
                <br />
                <AnimatedGradientText>START PROVING.</AnimatedGradientText>
              </h2>
              <p className="text-white/45 text-lg mb-10 max-w-lg mx-auto">
                Register your Stellar wallet. Get your score. Own your credit
                history — permanently on-chain.
              </p>
              <MagneticWrap strength={0.25}>
                <a href={getDappUrl("/register")}>
                  <Button
                    size="lg"
                    className="px-10 h-14 text-base shadow-[0_0_40px_rgba(99,102,241,0.45)] animate-shimmer bg-[length:200%_100%]"
                  >
                    Launch the app
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </MagneticWrap>
              <p className="mt-6 text-white/25 text-sm flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500/60" />
                No email · No password · Wallet only
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
