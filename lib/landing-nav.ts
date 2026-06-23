export type LandingNavLink = {
  href: string;
  label: string;
  header?: boolean;
  footer?: boolean;
};

export const landingNavLinks = [
  { href: "#problem", label: "Problem", header: true, footer: true },
  { href: "#solution", label: "Solution", header: true, footer: true },
  { href: "#how-it-works", label: "Process", header: true, footer: true },
  { href: "#partners", label: "Partners", header: true, footer: true },
  { href: "#score", label: "Score", header: true, footer: true },
  { href: "#tiers", label: "Tiers", footer: true },
  { href: "#faq", label: "FAQ", header: true, footer: true },
  { href: "#community", label: "Community", footer: true },
  { href: "#launch", label: "Launch", footer: true },
] as const satisfies readonly LandingNavLink[];

export const headerLandingLinks = landingNavLinks.filter(
  (link) => link.header
);

export const footerLandingLinks = landingNavLinks.filter(
  (link) => link.footer
);