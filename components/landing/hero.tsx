"use client";

import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticWrap } from "@/components/landing/motion";
import { ScorePreview } from "@/components/landing/score-preview";
import { AnimatedCounter, AnimatedGradientText } from "@/components/landing/text-effects";
import { getDappUrl } from "@/lib/site";

const fadeUp = (delay: number) =>
  ({
    animationDelay: `${delay}ms`,
    animationFillMode: "forwards" as const,
  });

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_24px_rgba(99,102,241,0.15)] animate-fade-in opacity-0"
              style={fadeUp(100)}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
                Stellar DeFi · On-chain only
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="block overflow-hidden">
                <span
                  className="block animate-slide-up opacity-0 text-white"
                  style={fadeUp(180)}
                >
                  YOUR WALLET
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block animate-slide-up opacity-0"
                  style={fadeUp(300)}
                >
                  <AnimatedGradientText>IS YOUR CREDIT.</AnimatedGradientText>
                </span>
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up opacity-0"
              style={fadeUp(450)}
            >
              No banks. No forms. No gatekeepers. ZCore turns verified Stellar
              activity into a portable 0–850 score — built from real on-chain
              proof, not paperwork.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-slide-up opacity-0"
              style={fadeUp(580)}
            >
              <MagneticWrap strength={0.2}>
                <a href={getDappUrl("/register")}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-8 h-14 text-base shadow-[0_0_32px_rgba(99,102,241,0.4)] hover:shadow-[0_0_48px_rgba(99,102,241,0.55)] animate-shimmer bg-[length:200%_100%]"
                  >
                    Check your score
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </MagneticWrap>
              <MagneticWrap strength={0.15}>
                <a href="#how-it-works">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 h-14 text-base border-white/15 hover:border-indigo-500/40"
                  >
                    See how it works
                  </Button>
                </a>
              </MagneticWrap>
            </div>

            <div
              className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 animate-slide-up opacity-0"
              style={fadeUp(720)}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-white">0–850</div>
                <div className="text-[11px] uppercase tracking-wider text-white/30 mt-1">
                  Score range
                </div>
              </div>
              <div className="text-center lg:text-left border-l border-white/10 pl-4">
                <div className="text-2xl font-black text-white">
                  <AnimatedCounter value={3} suffix="+" duration={1400} />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/30 mt-1">
                  Protocols
                </div>
              </div>
              <div className="text-center lg:text-left border-l border-white/10 pl-4">
                <div className="text-2xl font-black text-white">
                  <AnimatedCounter value={0} prefix="$" duration={1600} />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/30 mt-1">
                  User fees
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up opacity-0" style={fadeUp(350)}>
            <div className="lg:animate-float">
              <ScorePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
