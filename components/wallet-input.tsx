"use client";

import { CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { isValidStellarWallet } from "@/lib/utils";
import { cn } from "@/lib/utils";

const STELLAR_WALLET_LENGTH = 56;

interface WalletInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  showValidationIcon?: boolean;
}

export function WalletInput({
  id,
  value,
  onChange,
  placeholder = "GAYR3DYYONO...",
  showValidationIcon = false,
}: WalletInputProps) {
  const isValid = isValidStellarWallet(value);
  const hasValue = value.length > 0;
  const counterColor =
    value.length === STELLAR_WALLET_LENGTH
      ? "text-emerald-400"
      : "text-white/30";

  return (
    <div>
      <div className="relative">
        <Input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value.trim())}
          placeholder={placeholder}
          className={cn(showValidationIcon && hasValue && "pr-10")}
          autoComplete="off"
          spellCheck={false}
        />
        {showValidationIcon && hasValue && (
          <>
            {isValid ? (
              <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
            ) : (
              <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400/80" />
            )}
          </>
        )}
      </div>

      <div className="flex items-center justify-between mt-1.5 gap-2">
        <p className="text-white/30 text-xs">
          {hasValue && !isValid ? (
            <span className="text-red-400/80">
              Must start with G and use base32 characters (A-Z, 2-7)
            </span>
          ) : (
            "56 characters, starts with G"
          )}
        </p>
        <span className={cn("text-xs font-mono tabular-nums", counterColor)}>
          {value.length} / {STELLAR_WALLET_LENGTH}
        </span>
      </div>
    </div>
  );
}

export function isWalletSubmitReady(value: string): boolean {
  return isValidStellarWallet(value);
}
