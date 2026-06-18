# Contributing to ZCore Landing

Thanks for your interest in contributing! This repo is the ZCore marketing landing page. The authenticated dapp lives in a separate repo. ZCore is open source and part of the **GrantFox OSS** program — contributions may be eligible for rewards or bounties.

---

## Quick start

```bash
git clone https://github.com/Zcorehub/Zcore-Landing.git
cd Zcore-Landing
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To run the backend locally, see [ZCore-dev](https://github.com/Zcorehub/ZCore-dev).

---

## How to contribute

1. **Pick an issue** — look for issues labeled [`good first issue`](https://github.com/Zcorehub/Zcore-Landing/issues?q=label%3A%22good+first+issue%22) to get started.
2. **Comment on the issue** to let maintainers know you're working on it.
3. **Fork & branch** — branch off `main` with a descriptive name, e.g. `feat/score-card`.
4. **Build & test** — run `npm run dev` and verify your change works end-to-end.
5. **Open a PR** — reference the issue number in your PR description (e.g. `Closes #3`).

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | lucide-react |
| Auth | localStorage — wallet address only (no JWT) |

---

## Key conventions

- **No email, no password.** Auth is wallet-address only via `AuthService` in `lib/auth.ts`.
- **Stellar wallet format:** 56 chars starting with `G`. Use `isValidStellarWallet()` from `lib/utils.ts`.
- **API calls** go through `lib/api-client.ts`. No `Authorization: Bearer` header — the backend doesn't use JWT.
- **Dark theme** — background `#080B14`, accent indigo-500/violet. Match the existing style.
- No comments in code unless the reason is non-obvious.

---

## GrantFox OSS Program

Issues tagged **GrantFox OSS** and **Maybe Rewarded** are part of an official ZCore campaign. Merged contributions to these issues may receive a reward. See the issue for details.

---

## Questions?

Open a [GitHub Discussion](https://github.com/Zcorehub/Zcore-Landing/discussions) or ask in the issue thread.
