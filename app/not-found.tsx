import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Logo } from "@/components/landing/logo";
import { MouseParallaxBg } from "@/components/landing/motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white relative flex items-center justify-center px-4 font-zk">
      <MouseParallaxBg />
      <div className="w-full max-w-lg text-center relative animate-fade-in">
        <div className="flex justify-center mb-10">
          <Logo size="lg" />
        </div>

        <p className="text-[10px] font-bold uppercase tracking-zk-wide text-white/40 mb-4">
          Error 404
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-black tracking-tight mb-4">
          LOST IN
          <br />
          <span className="gradient-text">THE CHAIN.</span>
        </h1>
        <p className="text-white/45 mb-10 leading-relaxed">
          This page doesn&apos;t exist. Maybe it hasn&apos;t been built yet.
          Want to help ship it?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button className="w-full sm:w-auto px-8">
              <ArrowLeft className="w-4 h-4" />
              Back home
            </Button>
          </Link>
          <a
            href={siteConfig.issues}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full sm:w-auto px-8">
              Open an issue
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
