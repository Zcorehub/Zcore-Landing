import { MouseParallaxBg } from "@/components/landing/motion";
import { Builders } from "@/components/landing/builders";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LandingNav } from "@/components/landing/landing-nav";
import { Marquee } from "@/components/landing/marquee";
import { Partners } from "@/components/landing/partners";
import { ScoreSystem } from "@/components/landing/score-system";
import { ScrollProgress } from "@/components/landing/scroll-progress";
import { SectionBeam } from "@/components/landing/section-beam";
import { Tiers } from "@/components/landing/tiers";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative font-zk">
      <ScrollProgress />
      <MouseParallaxBg />
      <LandingNav />
      <main>
        <Hero />
        <Marquee />
        <SectionBeam />
        <HowItWorks />
        <SectionBeam />
        <Partners />
        <SectionBeam />
        <ScoreSystem />
        <SectionBeam />
        <Tiers />
        <SectionBeam />
        <Builders />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
