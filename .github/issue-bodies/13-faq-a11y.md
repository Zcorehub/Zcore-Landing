## Summary

The FAQ accordion (`components/landing/faq.tsx`) works visually but lacks full keyboard and screen-reader semantics for an accessible disclosure pattern.

## What to build

- Add `aria-expanded`, `aria-controls`, and unique `id`s on FAQ toggle buttons
- Link answer panels with `role="region"` and `aria-labelledby`
- Ensure category filter buttons have clear `aria-pressed` state
- Verify focus order and visible focus rings (ZK monochrome style)
- Optional: arrow keys to move between open items

## Acceptance criteria

- [ ] FAQ passes basic axe/Lighthouse accessibility checks for the accordion
- [ ] Keyboard-only users can open/close all items
- [ ] No visual regression in ZK theme

## Files

- `components/landing/faq.tsx`

---

## How to contribute

1. Comment before starting
2. Fork → branch (`feat/faq-a11y`)
3. Test with keyboard and VoiceOver/NVDA if possible
4. PR with `Closes #15`

> Part of the **GrantFox OSS** program.
