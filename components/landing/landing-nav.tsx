"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { cn } from "@/lib/utils";
import { LANDING_NAV_LINKS } from "@/lib/landing-nav";
import { getDappUrl } from "@/lib/site";

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  const dappUrl = getDappUrl("/register");

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.08] bg-black/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo size="sm" href="/" onClick={closeMenu} className="group" />

        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-xs text-white/40 uppercase tracking-zk">
          {LANDING_NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/60 after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={getDappUrl("/login")}>
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </a>
          <a href={dappUrl}>
            <Button size="sm">
              Launch ZCore
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-white/[0.08] bg-black/95 backdrop-blur-xl overflow-hidden transition-all duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {LANDING_NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="block px-3 py-2.5 text-xs text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors uppercase tracking-zk"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t border-white/[0.08] space-y-2">
            <a href={getDappUrl("/login")} onClick={closeMenu}>
              <Button variant="outline" className="w-full">
                Log In
              </Button>
            </a>
            <a href={dappUrl} onClick={closeMenu}>
              <Button className="w-full">
                Launch ZCore
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
