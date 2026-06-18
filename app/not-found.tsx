import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080B14] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-sm font-bold">Z</span>
          </div>
          <span className="text-xl font-semibold">ZCore</span>
        </div>

        <h1 className="text-4xl font-bold mb-3">404 — Page not found</h1>
        <p className="text-white/50 mb-8 leading-relaxed">
          This page doesn&apos;t exist. Maybe it hasn&apos;t been built yet —
          want to help?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button className="w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4" />
              Back home
            </Button>
          </Link>
          <a
            href="https://github.com/Zcorehub/Zcore-Landing/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full sm:w-auto">
              View open issues
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
