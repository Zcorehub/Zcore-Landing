## Summary

The navbar and footer only link to a subset of landing sections. Several anchors exist on the page but are not reachable from navigation.

## Current gaps

**Navbar** (`components/landing/landing-nav.tsx`): Problem, Solution, Score, FAQ only.

**Footer** (`components/landing/footer.tsx`): Problem, Solution, FAQ, Contact only.

**Sections with IDs not linked in both places:**
- `#how-it-works`
- `#partners`
- `#tiers`
- `#community`
- `#launch` (CTA)

## What to build

- Define a single shared nav config (e.g. `lib/landing-nav.ts`) used by navbar and footer
- Include the most useful section anchors without overcrowding the UI
- Keep monochrome ZK styling and existing mobile menu behavior
- Ensure footer "Links" and desktop nav stay in sync

## Acceptance criteria

- [ ] Navbar and footer pull from the same link source
- [ ] All major sections are reachable via at least one nav surface
- [ ] Mobile menu closes on link click (existing behavior preserved)
- [ ] `npm run build` passes

## Files

- `components/landing/landing-nav.tsx`
- `components/landing/footer.tsx`
- `lib/landing-nav.ts` (new, suggested)

---

## How to contribute

1. Comment on this issue before starting
2. Fork → branch off `main` (e.g. `feat/sync-nav-links`)
3. `npm install && npm run dev` — see `CONTRIBUTING.md`
4. Open a PR with `Closes #11`

> Part of the **GrantFox OSS** program.
