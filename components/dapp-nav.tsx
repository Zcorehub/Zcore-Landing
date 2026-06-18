"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/lib/auth";
import { cn } from "@/lib/utils";

interface DappNavProps {
  wallet?: string | null;
  onLogout?: () => void;
}

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/history", label: "History", icon: History },
];

export function DappNav({ wallet, onLogout }: DappNavProps) {
  const pathname = usePathname();

  return (
    <nav className="border-b border-white/[0.06] px-4 sm:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-[10px] font-bold">Z</span>
          </div>
          <span className="font-semibold">ZCore</span>
        </Link>

        <div className="hidden sm:flex items-center gap-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors",
                  active
                    ? "bg-white/[0.06] text-white"
                    : "text-white/50 hover:text-white/80"
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {wallet && (
          <span className="hidden sm:block text-xs font-mono text-white/30">
            {wallet.slice(0, 6)}...{wallet.slice(-4)}
          </span>
        )}
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onLogout}
          className="text-white/40 hover:text-white/70"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Log out</span>
        </Button>
      </div>
    </nav>
  );
}
