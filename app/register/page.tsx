"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  WalletInput,
  isWalletSubmitReady,
} from "@/components/wallet-input";
import { api } from "@/lib/api-client";
import { AuthService } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const canSubmit = isWalletSubmitReady(wallet);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError(
        "Invalid Stellar wallet address. Must start with G and be 56 characters."
      );
      return;
    }

    setLoading(true);
    try {
      await api.register(wallet);
      AuthService.setWallet(wallet);
      router.push("/dashboard");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Registration failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#080B14] flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-sm font-bold">Z</span>
          </div>
          <span className="text-xl font-semibold">ZCore</span>
        </div>

        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
          <h1 className="text-2xl font-bold mb-1">Register</h1>
          <p className="text-white/50 text-sm mb-7">
            Register your Stellar wallet to generate your on-chain credit score.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="wallet"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Stellar Wallet Address
              </label>
              <WalletInput
                id="wallet"
                value={wallet}
                onChange={setWallet}
                showValidationIcon
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading || !canSubmit}
              className="w-full h-12"
            >
              {loading ? "Registering..." : "Generate my score"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl">
            <p className="text-xs text-white/40 leading-relaxed">
              ZCore will read your wallet&apos;s history from{" "}
              <span className="text-white/60">Stellar Horizon</span> to
              calculate your base score. No funds are moved. No private key
              required.
            </p>
          </div>

          <p className="text-center text-sm text-white/40 mt-5">
            Already have a score?{" "}
            <Link
              href="/login"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-white/20 mt-6">
          Need a testnet wallet?{" "}
          <a
            href="https://laboratory.stellar.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/60 underline"
          >
            Stellar Laboratory
          </a>
        </p>
      </div>
    </div>
  );
}
