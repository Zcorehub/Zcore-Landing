import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-16 w-32" />
          <Skeleton className="h-2.5 w-full" />
          <Skeleton className="h-3 w-40" />
        </div>
        <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] space-y-4">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 space-y-4">
        <Skeleton className="h-5 w-32" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between py-2">
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-56" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
