import { Github } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";
import { siteConfig } from "@/lib/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const LINKS = [
  {
    label: "X",
    href: siteConfig.social.x,
    icon: XIcon,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: Github,
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
            Follow {siteConfig.social.xHandle} on X for product updates,
            integrations, and ecosystem news.
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
