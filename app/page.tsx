import { MouseParallaxBg } from "@/components/landing/motion";
import { Builders } from "@/components/landing/builders";
import { Community } from "@/components/landing/community";
import { Cta } from "@/components/landing/cta";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LandingNav } from "@/components/landing/landing-nav";
import { Marquee } from "@/components/landing/marquee";
import { Partners } from "@/components/landing/partners";
import { Problem } from "@/components/landing/problem";
import { ScoreSystem } from "@/components/landing/score-system";
import { ScrollProgress } from "@/components/landing/scroll-progress";
import { SectionBeam } from "@/components/landing/section-beam";
import { Solution } from "@/components/landing/solution";
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
        <Problem />
        <SectionBeam />
        <Solution />
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
        <SectionBeam />
        <Faq />
        <SectionBeam />
        <Community />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
