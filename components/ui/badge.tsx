import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-3 py-1 text-[10px] font-bold uppercase tracking-zk transition-colors",
  {
    variants: {
      variant: {
        A: "border-white/30 bg-white/10 text-white",
        B: "border-white/20 bg-white/[0.06] text-white/80",
        C: "border-white/15 bg-white/[0.04] text-white/60",
        REJECTED: "border-white/10 bg-white/[0.02] text-white/40",
        default: "border-white/10 bg-white/[0.05] text-white/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
