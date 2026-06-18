const PLATFORM_NAMES: Record<string, string> = {
  "trustless-work": "Trustless Work",
  "blend-protocol": "Blend Protocol",
  vaquita: "Vaquita",
  stellar: "Stellar",
};

export function formatPlatformName(slug: string): string {
  return (
    PLATFORM_NAMES[slug] ??
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

export function formatEventDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatScoreDate(isoDate: string): string {
  return formatEventDate(isoDate);
}

export const STELLAR_EXPLORER_TX =
  "https://stellar.expert/explorer/testnet/tx";

export function stellarTxUrl(txHash: string): string {
  return `${STELLAR_EXPLORER_TX}/${txHash}`;
}
