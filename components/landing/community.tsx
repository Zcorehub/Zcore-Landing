import { Github, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";
import { siteConfig } from "@/lib/site";

const LINKS = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: "Discussions",
    href: siteConfig.discussions,
    icon: MessageCircle,
  },
  {
    label: "Issues",
    href: siteConfig.issues,
    icon: MessageCircle,
  },
];

export function Community() {
  return (
    <section id="community" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal variant="blur">
          <SectionLabel>Community</SectionLabel>
          <SectionHeading>Stay connected</SectionHeading>
          <p className="text-white/40 text-sm tracking-wide max-w-lg mx-auto mb-10">
            Follow ZCore for product updates, integrations, and ecosystem news.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/[0.02] text-xs font-bold uppercase tracking-zk text-white/60 hover:text-white hover:border-white/25 transition-colors zk-slash"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
