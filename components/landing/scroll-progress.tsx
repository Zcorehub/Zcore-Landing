"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-white/[0.03]">
      <div
        className="h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
