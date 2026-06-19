"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { cn } from "@/lib/utils";
import { getDappUrl } from "@/lib/site";

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#score", label: "Score" },
  { href: "#faq", label: "FAQ" },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.getElementById(href.slice(1))
    ).filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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

        <div className="hidden md:flex items-center gap-8 text-xs text-white/40 uppercase tracking-zk">
          {NAV_LINKS.map(({ href, label }) => {
            const active = activeHref === href;

            return (
              <a
                key={href}
                href={href}
                onClick={() => setActiveHref(href)}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/60 after:transition-all hover:after:w-full",
                  active && "text-white after:w-full"
                )}
              >
                {label}
              </a>
            );
          })}
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
          {NAV_LINKS.map(({ href, label }) => {
            const active = activeHref === href;

            return (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setActiveHref(href);
                  closeMenu();
                }}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "block px-3 py-2.5 text-xs text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors uppercase tracking-zk",
                  active && "bg-white/[0.08] text-white"
                )}
              >
                {label}
              </a>
            );
          })}
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
