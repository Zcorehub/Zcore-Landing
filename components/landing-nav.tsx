"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#partners", label: "Partners" },
  { href: "#score", label: "Score System" },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#080B14]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={closeMenu}
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-xs font-bold">Z</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">ZCore</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-white/70 hover:text-white transition-colors px-3 py-1.5"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="text-sm bg-indigo-600 hover:bg-indigo-500 transition-colors text-white px-4 py-1.5 rounded-lg font-medium"
          >
            Get Started
          </Link>
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
          "md:hidden border-t border-white/[0.08] bg-[#080B14] overflow-hidden transition-all duration-200",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-t-0"
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
            <Link
              href="/login"
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors text-center"
            >
              Log In
            </Link>
            <Link
              href="/register"
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-center transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
