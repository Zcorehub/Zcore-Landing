"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/lib/auth";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (AuthService.isAuthenticated()) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#080B14] flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
    </div>
  );
}
