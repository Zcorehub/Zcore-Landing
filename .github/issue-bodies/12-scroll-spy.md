## Summary

Navbar section links do not indicate which part of the page the user is viewing. A scroll-spy active state improves orientation on long landing pages.

## What to build

- In `components/landing/landing-nav.tsx`, track the visible section via `IntersectionObserver` or scroll position
- Highlight the active nav link (e.g. `text-white` + underline, matching hover style)
- Update active state on scroll and when clicking anchor links
- Works on desktop nav; optional on mobile menu

## Acceptance criteria

- [ ] Active section link is visually distinct while scrolling
- [ ] No layout shift or jank on fast scroll
- [ ] Respects `prefers-reduced-motion` if issue #12 is merged first
- [ ] `npm run build` passes

## Files

- `components/landing/landing-nav.tsx`
- `lib/landing-nav.ts` (if shared nav config from #11 exists)

---

## How to contribute

1. Comment before starting
2. Fork → branch (`feat/nav-scroll-spy`)
3. Test at 375px and 1280px viewports
4. PR with `Closes #14`

> Part of the **GrantFox OSS** program.
