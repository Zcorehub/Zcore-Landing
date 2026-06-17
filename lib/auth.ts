const WALLET_KEY = "zcore_wallet";

export const AuthService = {
  setWallet(walletAddress: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(WALLET_KEY, walletAddress);
    }
  },

  getWallet(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(WALLET_KEY);
  },

  isAuthenticated(): boolean {
    return !!AuthService.getWallet();
  },

  logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(WALLET_KEY);
    }
  },
};
