export const siteConfig = {
  name: "ZCore",
  url: "https://zcore.vercel.app",
  dappUrl: "https://dapp-zcore.vercel.app",
  tagline: "Discover, access, and activate on-chain credit. All in one place.",
  description:
    "Turn your on-chain payment history into a verifiable credit score. No banks. No forms. Just your wallet.",
  github: "https://github.com/Zcorehub",
  backendRepo: "https://github.com/Zcorehub/ZCore-dev",
  landingRepo: "https://github.com/Zcorehub/Zcore-Landing",
  issues: "https://github.com/Zcorehub/Zcore-Landing/issues",
  discussions: "https://github.com/Zcorehub/Zcore-Landing/discussions",
  social: {
    x: "https://x.com/z_core_",
    xHandle: "@z_core_",
    instagram: undefined as string | undefined,
    linkedin: undefined as string | undefined,
    discord: undefined as string | undefined,
  },
};

export function getDappUrl(path = ""): string {
  const base =
    process.env.NEXT_PUBLIC_DAPP_URL?.replace(/\/$/, "") || siteConfig.dappUrl;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
