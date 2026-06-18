"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDappUrl } from "@/lib/site";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#partners", label: "Partners" },
  { href: "#score", label: "Score" },
  { href: "#tiers", label: "Tiers" },
];

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
          ? "border-b border-white/[0.08] bg-[#030508]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={closeMenu}
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-600 flex items-center justify-center shadow-[0_0_24px_rgba(99,102,241,0.45)] group-hover:shadow-[0_0_32px_rgba(99,102,241,0.6)] transition-shadow">
            <span className="text-xs font-black">Z</span>
          </div>
          <span className="text-lg font-bold tracking-tight">ZCore</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
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
            <Button size="sm" className="shadow-[0_0_20px_rgba(99,102,241,0.35)]">
              Launch App
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
          "md:hidden border-t border-white/[0.08] bg-[#030508]/95 backdrop-blur-xl overflow-hidden transition-all duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors"
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
                Launch App
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
