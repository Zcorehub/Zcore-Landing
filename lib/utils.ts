import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const STELLAR_WALLET_REGEX = /^G[A-Z2-7]{55}$/;

export function isValidStellarWallet(address: string): boolean {
  return STELLAR_WALLET_REGEX.test(address);
}
