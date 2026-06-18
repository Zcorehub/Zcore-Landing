import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

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
  title: "ZCore — Your Wallet Is Your Credit | Stellar DeFi",
  description:
    "Portable on-chain credit scoring for Stellar. No banks. No forms. Just verified wallet history turned into a 0–850 score.",
  openGraph: {
    title: "ZCore — Your Wallet Is Your Credit",
    description:
      "Portable on-chain credit scoring for Stellar DeFi. Built from real on-chain proof.",
    type: "website",
    images: ["/logo.jpeg"],
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
