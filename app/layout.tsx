import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZCore — Portable Credit Scoring for Stellar DeFi",
  description:
    "Turn your on-chain payment history into a verifiable credit score. Unlock better lending rates across the Stellar ecosystem.",
  openGraph: {
    title: "ZCore — Portable Credit Scoring for Stellar DeFi",
    description:
      "Turn your on-chain payment history into a verifiable credit score.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080B14] text-white antialiased">{children}</body>
    </html>
  );
}
