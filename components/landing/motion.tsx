"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MouseParallaxBgProps {
  className?: string;
}

export function MouseParallaxBg({ className }: MouseParallaxBgProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      if (!el) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none fixed inset-0 overflow-hidden -z-10",
        className
      )}
      style={{ "--mx": 0, "--my": 0 } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-[#030508]" />
      <div
        className="absolute inset-0 opacity-[0.35] animate-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 w-[900px] h-[900px] rounded-full bg-indigo-600/[0.12] blur-[140px] animate-glow-pulse transition-transform duration-700 ease-out"
        style={{
          transform:
            "translate(calc(-50% + var(--mx) * 40px), calc(0px + var(--my) * 30px))",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/[0.08] blur-[120px] animate-float transition-transform duration-700 ease-out"
        style={{
          transform: "translate(calc(var(--mx) * -25px), calc(var(--my) * 20px))",
        }}
      />
      <div
        className="absolute bottom-0 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.05] blur-[100px] animate-float-delayed transition-transform duration-700 ease-out"
        style={{
          transform: "translate(calc(var(--mx) * 20px), calc(var(--my) * -15px))",
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <FloatingParticles />
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    delay: `${(i * 0.7) % 5}s`,
    duration: `${4 + (i % 4)}s`,
    size: i % 3 === 0 ? 2 : 1,
  }));

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-indigo-400/30 animate-particle-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </>
  );
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("transition-transform duration-200 ease-out will-change-transform", className)}
    >
      {children}
    </div>
  );
}

interface MagneticWrapProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticWrap({
  children,
  className,
  strength = 0.25,
}: MagneticWrapProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("inline-block transition-transform duration-300 ease-out", className)}
    >
      {children}
    </div>
  );
}
