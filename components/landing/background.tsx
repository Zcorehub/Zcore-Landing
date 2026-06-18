export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-[#030508]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-indigo-600/[0.12] blur-[140px] animate-glow-pulse" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/[0.08] blur-[120px] animate-float" />
      <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.05] blur-[100px] animate-float-delayed" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
    </div>
  );
}
