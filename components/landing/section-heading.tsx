import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-4xl font-bold uppercase tracking-zk leading-tight mb-4 text-white",
        className
      )}
    >
      {children}
    </h2>
  );
}
