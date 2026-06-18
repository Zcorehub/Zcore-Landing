<p align="center">
  <img src="public/logo.jpeg" alt="ZCore" width="80" />
</p>

<h1 align="center">ZCore Landing</h1>

<p align="center">
  Official landing page for <strong>ZCore</strong> — portable credit scoring for Stellar DeFi.<br/>
  Zero-knowledge, on-chain only. No banks. No forms. Just your wallet.
</p>

<p align="center">
  <a href="./CONTRIBUTING.md">Contributing</a> ·
  <a href="https://github.com/Zcorehub/Zcore-Landing/issues">Issues</a>
</p>

---

## What is this repo?

This repository contains **only the ZCore landing page**: marketing, animations, informational sections, and CTAs to the dapp.

| Includes | Does not include |
|---|---|
| Hero, partners, scoring, tiers, builders | Login / register |
| Animations and visual effects | Dashboard |
| Dapp links via env var | Backend API |
| Custom 404 page | Event history |

The authenticated dapp and backend live in separate repos. See [ZCore-dev](https://github.com/Zcorehub/ZCore-dev).

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

### Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_DAPP_URL` | No | Deployed dapp URL. Without it, CTAs point to `#launch`. |

```env
NEXT_PUBLIC_DAPP_URL=https://app.zcore.xyz
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Post-build server |
| `npm run lint` | ESLint |

---

## Landing sections

| Section | Component | Description |
|---|---|---|
| Hero | `hero.tsx` | Headline, ZK badge, animated score preview |
| Marquee | `marquee.tsx` | Claim ticker (no custody, open source, etc.) |
| How It Works | `how-it-works.tsx` | 3 steps: wallet → chain → score |
| Partners | `partners.tsx` | Trustless Work, Blend, Vaquita |
| Score System | `score-system.tsx` | 0–850 engine, transparent breakdown |
| Tiers | `tiers.tsx` | Risk bands in % (LTV, default, APR) |
| Builders | `builders.tsx` | API preview for integrators |
| CTA | `cta.tsx` | Final call-to-action to the dapp |

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom ZK utilities |
| UI base | shadcn/ui (`components/ui/`) |
| Icons | lucide-react |
| Fonts | Inter (headline), JetBrains Mono (badge), Space Mono (ZK UI) |

---

## Design

**Monochrome zero-knowledge** aesthetic: pure black, white, opaque grays. No color accents.

- Background: `#000000`
- ZK typography: `font-zk` (Space Mono) for UI, labels, and sections
- Hero headline: Inter bold — `YOUR WALLET IS YOUR CREDIT.`
- Badge: JetBrains Mono — `Zero-Knowledge · On-chain only`
- Angular corners: `zk-slash` and `zk-badge` utilities in `globals.css`
- Logo: navbar only (`components/landing/logo.tsx`)

---

## Project structure

```
app/
  page.tsx          # Main landing page
  layout.tsx        # Fonts and metadata
  not-found.tsx     # Custom 404
  globals.css       # ZK tokens and utilities

components/
  landing/          # Landing sections (one component per section)
  ui/               # shadcn primitives (Button, Badge, Card…)

lib/
  site.ts           # Site config + getDappUrl()
  utils.ts          # cn() and helpers

public/
  logo.jpeg         # ZCore logo
```

---

## Deploy on Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Next.js** (auto-detected).
3. Add `NEXT_PUBLIC_DAPP_URL` under Environment Variables.
4. Deploy.

```bash
npx vercel          # preview
npx vercel --prod   # production
```

---

## Contributing

Want to improve the landing? Read the full guide in [CONTRIBUTING.md](./CONTRIBUTING.md).

Quick flow:

1. Open or pick an [issue](https://github.com/Zcorehub/Zcore-Landing/issues).
2. Fork → branch (`feat/name`, `fix/name`, `style/name`).
3. `npm run dev` + verify responsive layout.
4. Open a PR using the [template](./.github/pull_request_template.md).

Issues in the **GrantFox OSS** program may be eligible for rewards on merge.
