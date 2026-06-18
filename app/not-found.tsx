import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { MouseParallaxBg } from "@/components/landing/motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030508] text-white relative flex items-center justify-center px-4">
      <MouseParallaxBg />
      <div className="w-full max-w-lg text-center relative animate-fade-in">
        <div className="inline-flex items-center gap-2.5 mb-10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_24px_rgba(99,102,241,0.4)]">
            <span className="text-sm font-black">Z</span>
          </div>
          <span className="text-2xl font-black tracking-tight">ZCore</span>
        </div>

        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-400/70 mb-4">
          Error 404
        </p>
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
          LOST IN
          <br />
          <span className="gradient-text">THE CHAIN.</span>
        </h1>
        <p className="text-white/45 mb-10 leading-relaxed">
          This page doesn&apos;t exist. Maybe it hasn&apos;t been built yet —
          want to help ship it?
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
