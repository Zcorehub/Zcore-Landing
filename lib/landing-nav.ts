export type LandingNavLink = {
  href: `#${string}`;
  label: string;
  showInHeader?: boolean;
  showInFooter?: boolean;
};

export const LANDING_SECTION_LINKS: LandingNavLink[] = [
  {
    href: "#problem",
    label: "Problem",
    showInHeader: true,
    showInFooter: true,
  },
  {
    href: "#solution",
    label: "Solution",
    showInHeader: true,
    showInFooter: true,
  },
  {
    href: "#how-it-works",
    label: "How It Works",
    showInHeader: true,
    showInFooter: true,
  },
  { href: "#partners", label: "Partners", showInFooter: true },
  { href: "#score", label: "Score", showInHeader: true, showInFooter: true },
  { href: "#tiers", label: "Tiers", showInFooter: true },
  { href: "#community", label: "Community", showInFooter: true },
  { href: "#faq", label: "FAQ", showInHeader: true, showInFooter: true },
  { href: "#launch", label: "Launch", showInFooter: true },
];

export const HEADER_NAV_LINKS = LANDING_SECTION_LINKS.filter(
  ({ showInHeader }) => showInHeader
);

export const FOOTER_NAV_LINKS = LANDING_SECTION_LINKS.filter(
  ({ showInFooter }) => showInFooter
);
