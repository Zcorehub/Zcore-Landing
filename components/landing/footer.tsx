import { Logo } from "@/components/landing/logo";
import { SocialButtons } from "@/components/landing/social-buttons";
import { FOOTER_NAV_LINKS } from "@/lib/landing-nav";
import { getDappUrl, siteConfig } from "@/lib/site";

const FOOTER_LINKS = {
  links: FOOTER_NAV_LINKS,
  resources: [
    { label: "GitHub", href: siteConfig.github, external: true },
    { label: "API", href: siteConfig.backendRepo, external: true },
    { label: "Contribute", href: siteConfig.issues, external: true },
    { label: "Discussions", href: siteConfig.discussions, external: true },
  ],
  app: [{ label: "ZCore", href: getDappUrl("/register"), external: true }],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-16 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="sm" />
            <p className="text-xs text-white/40 tracking-wide mt-3 max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-zk-wide text-white/30 mb-4">
              Links
            </p>
            <ul className="space-y-2">
              {FOOTER_LINKS.links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-white/50 hover:text-white transition-colors tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-zk-wide text-white/30 mb-4">
              Resources
            </p>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-xs text-white/50 hover:text-white transition-colors tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-zk-wide text-white/30 mb-4">
              ZCore
            </p>
            <ul className="space-y-2">
              {FOOTER_LINKS.app.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-xs text-white/50 hover:text-white transition-colors tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40 tracking-wide">
            {new Date().getFullYear()} ZCore. All rights reserved.
          </p>
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
}
