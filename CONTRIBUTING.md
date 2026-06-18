# Contributing to ZCore Landing

Thanks for your interest in contributing! This repo is **landing only** — marketing page, animations, and CTAs. The authenticated dapp (dashboard, login, history) lives in a separate repo.

ZCore is open source and part of the **GrantFox OSS** program — contributions may be eligible for rewards or bounties.

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

Set `NEXT_PUBLIC_DAPP_URL` in `.env.local` so CTA buttons link to the deployed dapp.

---

## Issues for this repo

| Issue | Scope |
|---|---|
| #6 Mobile hamburger menu | ✅ Landing nav |
| #7 Custom 404 page | ✅ `app/not-found.tsx` |
| #1–#5, #8 | Dapp — contribute in the dapp repo |

---

## How to contribute

1. **Pick an issue** labeled for landing / good first issue.
2. **Comment on the issue** to claim it.
3. **Fork & branch** — e.g. `feat/hero-animation`.
4. **Build & test** — `npm run dev` and verify responsive layout.
5. **Open a PR** — reference the issue (`Closes #6`).

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Icons | lucide-react |

---

## Key conventions

- **Dark theme** — background `#030508`, indigo/violet/cyan accents.
- **Landing components** live in `components/landing/`.
- **CTAs** use `getDappUrl()` from `lib/site.ts` — never hardcode dapp URLs.
- No comments in code unless the reason is non-obvious.

---

## GrantFox OSS Program

Issues tagged **GrantFox OSS** and **Maybe Rewarded** may receive a reward upon merge. See the issue for details.

---

## Questions?

Open a [GitHub Discussion](https://github.com/Zcorehub/Zcore-Landing/discussions) or ask in the issue thread.
