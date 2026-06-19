# Contributing to ZCore

Thanks for your interest in contributing! This repo is **landing only**: marketing page, animations, and CTAs. The authenticated dapp (dashboard, login, history) and backend API live in separate repos.

ZCore is open source and part of the **GrantFox OSS** program: contributions may be eligible for rewards or bounties.

---

## Table of contents

- [Quick start](#quick-start)
- [What belongs in this repo](#what-belongs-in-this-repo)
- [How to contribute](#how-to-contribute)
- [Pull request guidelines](#pull-request-guidelines)
- [Design system](#design-system)
- [Code conventions](#code-conventions)
- [Project structure](#project-structure)
- [Testing checklist](#testing-checklist)
- [GrantFox OSS Program](#grantfox-oss-program)

---

## Quick start

```bash
git clone https://github.com/Zcorehub/Zcore-Landing.git
cd Zcore-Landing
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production: [zcore.vercel.app](https://zcore.vercel.app).

Set `NEXT_PUBLIC_DAPP_URL=https://dapp-zcore.vercel.app` in `.env.local` so CTA buttons link to the canonical deployed dapp.

```bash
npm run build   # verify production build before opening a PR
npm run lint    # check for lint errors
```

---

## What belongs in this repo

| ✅ In scope | ❌ Out of scope |
|---|---|
| Landing sections (`components/landing/`) | Auth flows (login, register) |
| Animations, parallax, scroll effects | Dashboard, score history |
| Navbar, footer, 404 page | Backend API routes |
| CTA links via `getDappUrl()` | Database, wallet signing logic |
| Copy, layout, responsive design | Partner protocol integrations |

If your change touches dapp functionality, open the PR in the [dapp repo](https://github.com/Zcorehub/ZCore-dev) instead. Landing CTAs should keep pointing to `https://dapp-zcore.vercel.app`; see ZCore-dev issue #22 for the cross-repo URL contract.

---

## How to contribute

1. **Find or open an issue**: check [existing issues](https://github.com/Zcorehub/Zcore-Landing/issues) or create one describing the change.
2. **Comment on the issue** to claim it and avoid duplicate work.
3. **Fork the repo** and create a branch:
   - `feat/short-description`: new section or feature
   - `fix/short-description`: bug fix
   - `style/short-description`: visual / copy changes
   - `docs/short-description`: README, CONTRIBUTING, templates
4. **Make atomic commits**: one logical change per commit when possible.
5. **Test locally**: dev server + responsive breakpoints (mobile, tablet, desktop).
6. **Open a pull request**: the PR template will guide you.

---

## Pull request guidelines

Use the [PR template](.github/pull_request_template.md). Every PR should:

- Reference the issue (`Closes #12` or `Relates to #12`).
- Include screenshots or a short screen recording for visual changes.
- Confirm `npm run build` passes.
- Keep scope focused: one section or concern per PR when possible.
- Not introduce dapp routes or backend logic.

### PR title format

```
type: short description
```

Examples:

- `feat: add diagonal grid to hero background`
- `fix: mobile nav menu not closing on link click`
- `style: tighten tier card spacing on sm breakpoint`
- `docs: update README deploy section`

### Review expectations

- Maintainers may request changes on design consistency, accessibility, or scope.
- Squash merge is optional; atomic commits are appreciated for history clarity.

---

## Design system

The landing uses a **monochrome zero-knowledge** aesthetic. Do not introduce color accents (indigo, violet, cyan, emerald, etc.) unless explicitly requested.

### Colors

| Token | Value | Usage |
|---|---|---|
| Background | `#000000` | Page, sections |
| Surface | `#0a0a0a` | Cards, panels |
| Foreground | `#ffffff` | Primary text |
| Muted | `white/40`-`white/60` | Body copy, labels |
| Border | `white/[0.08]`-`white/[0.15]` | Cards, dividers |

### Typography

| Context | Font | Class |
|---|---|---|
| Hero headline | Inter | `font-display` / `font-black` |
| ZK badge | JetBrains Mono | `font-mono uppercase tracking-widest` |
| Everything else | Space Mono | `font-zk`, `tracking-zk` |
| Section titles | Space Mono | `SectionHeading` component |

**Do not change** the hero headline or badge typography without explicit approval.

### Components & utilities

- `zk-slash`: angular bottom-right clip on cards
- `zk-badge`: angular badge clip
- `card-glass`: frosted card surface
- `glow-white`: subtle white glow on primary CTAs
- `SectionLabel`: small uppercase section tag
- `SectionHeading`: section `h2` in ZK style

### Logo usage

- **Primary logo:** `public/logo_name.png`: used in navbar, footer, and 404 via `components/landing/logo.tsx`.
- **Favicon only:** `public/logo.jpeg`: the Z mark; do not use in page UI.
- Do not duplicate the logo in hero, CTA, or other sections.

### Partner protocols

Trustless Work, Blend, and Vaquita appear **only** in the Partners section: not in score preview or other sections.

### Tier data

Tiers show **percentage-based risk bands** (Max LTV, Est. default, APR range): not dollar lending limits. ZCore does not lend; lenders choose their own exposure.

---

## Code conventions

- **Landing components** live in `components/landing/`: one file per section.
- **CTAs** use `getDappUrl()` from `lib/site.ts`: never hardcode dapp URLs.
- **Site config** (links, tagline) lives in `lib/site.ts`.
- Prefer Tailwind utilities over custom CSS unless adding reusable tokens in `globals.css`.
- Match existing animation patterns (`Reveal`, `TiltCard`, `MagneticWrap` from `motion.tsx`).
- No comments in code unless the reason is non-obvious.
- Do not use em dashes or en dashes in copy, docs, or metadata. Use commas, colons, periods, or regular hyphens.
- Keep diffs minimal: don't refactor unrelated code in the same PR.

---

## Project structure

```
app/
  page.tsx              # Landing page assembly
  layout.tsx            # Fonts, metadata, OG image
  globals.css           # ZK utilities and tokens
  not-found.tsx         # Custom 404

components/
  landing/
    hero.tsx            # Hero + score preview slot
    landing-nav.tsx     # Navbar + mobile menu
    how-it-works.tsx    # 3-step process
    partners.tsx        # Protocol partners
    score-system.tsx    # Scoring engine breakdown
    tiers.tsx           # Risk tier cards
    builders.tsx        # API section for devs
    cta.tsx             # Final CTA
    footer.tsx
    motion.tsx          # Parallax, tilt, magnetic effects
    logo.tsx            # Logo component
    section-heading.tsx # Shared section h2
    section-label.tsx   # Shared section tag
    …
  ui/                   # shadcn primitives

lib/
  site.ts               # siteConfig + getDappUrl()
  utils.ts              # cn()
```

---

## Testing checklist

Before submitting a PR, verify:

- [ ] `npm run dev`: page loads without console errors
- [ ] `npm run build`: production build succeeds
- [ ] `npm run lint`: no new lint errors
- [ ] Mobile (375px): navbar menu works, sections readable
- [ ] Tablet (768px): grid layouts correct
- [ ] Desktop (1280px+): parallax and animations perform well
- [ ] CTAs resolve correctly with and without `NEXT_PUBLIC_DAPP_URL`
- [ ] No color accents introduced outside the monochrome palette
- [ ] `logo_name.png` used for UI logo; `logo.jpeg` reserved for favicon only

---

## Issues for this repo

| Issue | Scope |
|---|---|
| #6 Mobile hamburger menu | ✅ Landing nav |
| #7 Custom 404 page | ✅ `app/not-found.tsx` |
| #1-#5, #8 | Dapp: contribute in the dapp repo |

Browse [open issues](https://github.com/Zcorehub/Zcore-Landing/issues) for `good first issue` or `landing` labels.

---

## GrantFox OSS Program

Issues tagged **GrantFox OSS** and **Maybe Rewarded** may receive a reward upon merge. See the issue description for eligibility and payout details.

---

## Questions?

- Open a [GitHub Discussion](https://github.com/Zcorehub/Zcore-Landing/discussions)
- Comment on the relevant issue thread
- Check the [README](./README.md) for setup and deploy info
