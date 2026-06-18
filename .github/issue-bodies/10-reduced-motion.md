## Summary

The landing uses parallax, scroll reveals, counters, marquee, and glow animations. Users with `prefers-reduced-motion: reduce` should get a calmer, accessible experience.

## What to build

- Detect `prefers-reduced-motion` (hook or CSS media query)
- Disable or simplify:
  - `MouseParallaxBg` mouse tracking and drifting grid
  - `Reveal` / scroll-triggered animations in `motion.tsx`
  - `AnimatedCounter` and `AnimatedGradientText` in `text-effects.tsx`
  - Hero entrance animations (show final state immediately)
- Keep layout and content identical; only motion changes

## Acceptance criteria

- [ ] With reduced motion enabled, page loads without continuous or scroll-driven animation
- [ ] No regression on default (motion allowed) experience
- [ ] Tested in Chrome DevTools → Rendering → prefers-reduced-motion

## Files

- `components/landing/motion.tsx`
- `components/landing/text-effects.tsx`
- `components/landing/hero.tsx`
- `app/globals.css` (if using CSS overrides)

---

## How to contribute

1. Comment on this issue before starting
2. Fork → branch (`feat/reduced-motion`)
3. See `CONTRIBUTING.md` for setup
4. PR with `Closes #12`

> Part of the **GrantFox OSS** program.
