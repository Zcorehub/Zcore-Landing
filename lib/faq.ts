export type FaqCategory =
  | "about"
  | "users"
  | "developers"
  | "partners"
  | "general";

export const FAQ_CATEGORIES: { id: FaqCategory; label: string }[] = [
  { id: "about", label: "About ZCore" },
  { id: "users", label: "For users" },
  { id: "developers", label: "For developers" },
  { id: "partners", label: "For partners" },
  { id: "general", label: "General & technical" },
];

export const FAQ_ITEMS: Record<
  FaqCategory,
  { question: string; answer: string }[]
> = {
  about: [
    {
      question: "What is ZCore?",
      answer:
        "ZCore is an all-in-one platform that unifies access to on-chain credit on Stellar. Users can discover their score, share portable proof, and unlock better lending terms through verified wallet activity. The platform aggregates multiple protocols and partner events into a single interface. ZCore also offers APIs so other apps can integrate credit scoring.",
    },
    {
      question: "How does ZCore connect on-chain activity to credit?",
      answer:
        "ZCore reads Stellar base activity via Horizon (wallet age, volume, success rate, balance) and partner protocol events (escrows, loans, tandas). Two engines produce one 0-850 score with a full transparent breakdown.",
    },
    {
      question: "What makes ZCore different from traditional credit?",
      answer:
        "No banks, no forms, no gatekeepers. Your wallet is your identity. Scores are built from on-chain proof that cannot be faked, portable across the Stellar ecosystem, and fully transparent.",
    },
    {
      question: "What blockchains does ZCore support?",
      answer:
        "ZCore is built for Stellar. Wallet addresses use the G-prefix format. Partner protocols on Stellar testnet and mainnet feed verified events into the scoring engine.",
    },
  ],
  users: [
    {
      question: "Do I need an email or password?",
      answer:
        "No. Your Stellar wallet is your only credential. Connect, get your score, and share your breakdown without creating an account.",
    },
    {
      question: "How is my score calculated?",
      answer:
        "Stellar base activity accounts for up to 150 points. Partner events account for up to 700 points. Every component maps to verifiable on-chain data with a public breakdown.",
    },
    {
      question: "Can I improve my score?",
      answer:
        "Yes. More verified activity on Stellar and partner protocols increases your score. Complete escrows, repay loans, and participate in tandas to stack points.",
    },
    {
      question: "Is my data private?",
      answer:
        "ZCore does not collect PII. Scoring uses public on-chain data only. ZCore does not custody funds or store personal information.",
    },
  ],
  developers: [
    {
      question: "How do I integrate the API?",
      answer:
        "Use the ZCore backend API to query any wallet score and breakdown. Check the Builders section or the backend repo for endpoint documentation and examples.",
    },
    {
      question: "What endpoints are available?",
      answer:
        "GET /api/user/{wallet}/score returns score, tier, breakdown, total events, and connected platforms. Additional endpoints are documented in the backend repository.",
    },
    {
      question: "Is the backend open source?",
      answer:
        "Yes. The scoring engine and API are open source. Contribute via GitHub or open an issue for integration support.",
    },
  ],
  partners: [
    {
      question: "How do I become a partner protocol?",
      answer:
        "Building on Stellar? Open an issue on GitHub or reach out through Discussions. Partner protocols submit verified on-chain events that stack into user scores.",
    },
    {
      question: "What events can partners submit?",
      answer:
        "Examples include escrow_completed, loan_repaid, and tanda_cycle_complete. Each event type has a defined point value in the scoring breakdown.",
    },
  ],
  general: [
    {
      question: "Does ZCore lend money?",
      answer:
        "No. ZCore scores wallets and surfaces risk bands. Lenders and protocols decide their own exposure and terms.",
    },
    {
      question: "Does ZCore custody funds?",
      answer:
        "No. ZCore never holds user assets. It reads public chain data and returns scores.",
    },
    {
      question: "Does ZCore collect PII?",
      answer:
        "No. No email, no KYC forms, no personal data collection. Wallet-only identity.",
    },
  ],
};
