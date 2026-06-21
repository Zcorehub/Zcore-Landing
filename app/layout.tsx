import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "ZCore on-chain credit score preview",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "ZCore",
  description:
    "Discover, access, and activate on-chain credit on Stellar. No banks. No forms. Just your wallet.",
  openGraph: {
    title: "ZCore",
    description:
      "All-in-one portable credit scoring for Stellar. Built from real on-chain proof.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@z_core_",
    creator: "@z_core_",
    title: "ZCore",
    description:
      "All-in-one portable credit scoring for Stellar. Built from real on-chain proof.",
    images: [ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} ${spaceMono.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
