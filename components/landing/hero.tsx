"use client";

import { ArrowRight } from "lucide-react";
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
      <div className="absolute top-20 right-0 w-64 h-64 opacity-[0.03] pointer-events-none hidden lg:block">
        <div
          className="w-full h-full bg-white"
          style={{
            clipPath: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] px-4 py-1.5 mb-8 zk-badge animate-fade-in opacity-0"
              style={fadeUp(100)}
            >
              <span className="w-1.5 h-1.5 bg-white animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white/60">
                Zero-Knowledge · On-chain only
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6">
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
              className="text-base sm:text-lg text-white/45 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed tracking-wide animate-slide-up opacity-0"
              style={fadeUp(400)}
            >
              All-in-one portable credit scoring for Stellar. Discover your
              score, access better rates, and activate your on-chain reputation
              in one place.
            </p>

            <p
              className="text-sm text-white/35 max-w-xl mx-auto lg:mx-0 mb-10 tracking-wide animate-slide-up opacity-0"
              style={fadeUp(450)}
            >
              No banks. No forms. No gatekeepers. Built from real on-chain proof,
              not paperwork.
            </p>

            <div
              className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-4 animate-slide-up opacity-0"
              style={fadeUp(580)}
            >
              <MagneticWrap strength={0.2}>
                <a href={getDappUrl("/register")}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-8 h-14 text-sm uppercase tracking-zk glow-white"
                  >
                    Launch app
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </MagneticWrap>
              <MagneticWrap strength={0.15}>
                <a href="#score">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 h-14 text-sm uppercase tracking-zk"
                  >
                    Explore score
                  </Button>
                </a>
              </MagneticWrap>
              <MagneticWrap strength={0.12}>
                <a href="#how-it-works">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto px-6 h-14 text-sm uppercase tracking-zk text-white/50"
                  >
                    How it works
                  </Button>
                </a>
              </MagneticWrap>
            </div>

            <div
              className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 animate-slide-up opacity-0"
              style={fadeUp(720)}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white tabular-nums">0-850</div>
                <div className="text-[10px] uppercase tracking-zk-wide text-white/30 mt-1">
                  Score range
                </div>
              </div>
              <div className="text-center lg:text-left border-l border-white/10 pl-4">
                <div className="text-2xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={3} suffix="+" duration={1400} />
                </div>
                <div className="text-[10px] uppercase tracking-zk-wide text-white/30 mt-1">
                  Protocols
                </div>
              </div>
              <div className="text-center lg:text-left border-l border-white/10 pl-4">
                <div className="text-2xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={0} prefix="$" duration={1600} />
                </div>
                <div className="text-[10px] uppercase tracking-zk-wide text-white/30 mt-1">
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
