import { BackgroundEffects } from "@/components/landing/background";
import { Builders } from "@/components/landing/builders";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LandingNav } from "@/components/landing/landing-nav";
import { Marquee } from "@/components/landing/marquee";
import { Partners } from "@/components/landing/partners";
import { ScoreSystem } from "@/components/landing/score-system";
import { Tiers } from "@/components/landing/tiers";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030508] text-white relative">
      <BackgroundEffects />
      <LandingNav />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Partners />
        <ScoreSystem />
        <Tiers />
        <Builders />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
