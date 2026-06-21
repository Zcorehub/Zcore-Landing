export type LandingNavLink = {
  href: `#${string}`;
  label: string;
  header?: boolean;
  footer?: boolean;
};

export const landingSectionLinks = [
  { href: "#problem", label: "Problem", header: true, footer: true },
  { href: "#solution", label: "Solution", header: true, footer: true },
  { href: "#how-it-works", label: "How it works", header: true, footer: true },
  { href: "#partners", label: "Partners", footer: true },
  { href: "#score", label: "Score", header: true, footer: true },
  { href: "#tiers", label: "Tiers", footer: true },
  { href: "#community", label: "Community", footer: true },
  { href: "#faq", label: "FAQ", header: true, footer: true },
  { href: "#launch", label: "Launch", footer: true },
] satisfies LandingNavLink[];

export const headerLandingLinks = landingSectionLinks.filter(
  (link) => link.header
);

export const footerLandingLinks = landingSectionLinks.filter(
  (link) => link.footer
);
