import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-4 sm:px-6 bg-[#030508]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <span className="text-xs font-black">Z</span>
            </div>
            <div>
              <p className="font-bold">ZCore</p>
              <p className="text-xs text-white/30">{siteConfig.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm text-white/30">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.backendRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              API
            </a>
            <a
              href={siteConfig.issues}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Contribute
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/20">
          {[
            "does not lend",
            "does not custody",
            "does not collect PII",
            "open source",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-red-500/50" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
