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
  title: "ZCore",
  description:
    "Discover, access, and activate on-chain credit on Stellar. No banks. No forms. Just your wallet.",
  openGraph: {
    title: "ZCore",
    description:
      "All-in-one portable credit scoring for Stellar. Built from real on-chain proof.",
    type: "website",
    images: ["/logo_name.png"],
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
