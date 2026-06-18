import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-400/80 mb-4",
        className
      )}
    >
      {children}
    </span>
  );
}
