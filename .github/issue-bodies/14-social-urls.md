## Summary

`SocialButtons` renders all four platforms (Instagram, X, LinkedIn, Discord) but only X is active. The other three show as disabled until URLs are added to `lib/site.ts`.

## What to build

Once official URLs are confirmed:

- Add `instagram`, `linkedin`, and `discord` to `siteConfig.social` in `lib/site.ts`
- Verify `components/landing/social-buttons.tsx` activates all buttons automatically
- Update README with social links section
- Optional: add social links to footer Resources column

## Placeholder (update before PR)

```ts
social: {
  x: "https://x.com/z_core_",
  instagram: "TBD",
  linkedin: "TBD",
  discord: "TBD",
}
```

## Acceptance criteria

- [ ] All configured social URLs open in a new tab from footer and Community section
- [ ] No hardcoded URLs outside `site.ts`
- [ ] Disabled state remains for any platform still `undefined`

## Files

- `lib/site.ts`
- `components/landing/social-buttons.tsx`
- `README.md`

---

## How to contribute

1. Comment with the URLs you will use (or ask maintainers)
2. Fork → branch (`feat/social-urls`)
3. PR with `Closes #16`

> Part of the **GrantFox OSS** program.
