import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold transition-colors",
  {
    variants: {
      variant: {
        A: "border-emerald-500/30 bg-emerald-500/20 text-emerald-400",
        B: "border-blue-500/30 bg-blue-500/20 text-blue-400",
        C: "border-yellow-500/30 bg-yellow-500/20 text-yellow-400",
        REJECTED: "border-red-500/30 bg-red-500/20 text-red-400",
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
