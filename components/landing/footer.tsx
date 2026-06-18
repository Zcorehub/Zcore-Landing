import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold uppercase tracking-zk text-white">ZCore</p>
            <p className="text-xs text-white/30 tracking-wide mt-1">{siteConfig.tagline}</p>
          </div>

          <div className="flex items-center gap-8 text-xs text-white/30 uppercase tracking-zk">
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

        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] text-white/20 uppercase tracking-zk-wide">
          {[
            "does not lend",
            "does not custody",
            "does not collect PII",
            "open source",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-white/30" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
