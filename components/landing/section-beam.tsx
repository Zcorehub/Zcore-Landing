export function SectionBeam() {
  return (
    <div className="relative h-px max-w-6xl mx-auto px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent animate-beam-sweep" />
    </div>
  );
}
