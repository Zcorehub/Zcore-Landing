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
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] border border-white/[0.04] animate-spin-slow" />
        <div className="absolute w-[350px] h-[350px] border border-white/[0.03] animate-spin-slower" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <Reveal variant="scale">
          <div className="relative">
            <div className="absolute inset-0 bg-white/[0.03] blur-[100px] pointer-events-none animate-glow-pulse" />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-zk mb-5 leading-[1.15]">
                STOP ASKING
                <br />
                <AnimatedGradientText>START PROVING.</AnimatedGradientText>
              </h2>
              <p className="text-white/45 text-base tracking-wide mb-10 max-w-lg mx-auto">
                Register your Stellar wallet. Get your score. Own your credit
                history, permanently on-chain.
              </p>
              <MagneticWrap strength={0.25}>
                <a href={getDappUrl("/register")}>
                  <Button
                    size="lg"
                    className="px-10 h-14 text-sm uppercase tracking-zk glow-white"
                  >
                    Launch the app
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </MagneticWrap>
              <p className="mt-6 text-white/25 text-xs flex items-center justify-center gap-2 uppercase tracking-zk-wide">
                <CheckCircle className="w-4 h-4 text-white/40" />
                No email · No password · Wallet only
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
