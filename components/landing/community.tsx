import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";
import { SocialButtons } from "@/components/landing/social-buttons";
import { siteConfig } from "@/lib/site";

export function Community() {
  return (
    <section id="community" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal variant="blur">
          <SectionLabel>Community</SectionLabel>
          <SectionHeading>Stay connected</SectionHeading>
          <p className="text-white/40 text-sm tracking-wide max-w-lg mx-auto mb-10">
            Follow {siteConfig.social.xHandle} on X for product updates,
            integrations, and ecosystem news.
          </p>

          <div className="flex justify-center">
            <SocialButtons size="md" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
