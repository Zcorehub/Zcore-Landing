## Summary

Social previews currently use `logo_name.png` and minimal metadata. A proper OG image improves link sharing on X, Discord, and LinkedIn.

## What to build

- Create `public/og.png` (1200×630) with ZCore wordmark on black ZK background
- Update `app/layout.tsx` metadata:
  - `openGraph.url` → `siteConfig.url`
  - `openGraph.images` → dedicated OG asset with width/height/alt
  - `twitter.images` aligned with OG
- Optional: add `robots` and `alternates.canonical` using `siteConfig.url`

## Acceptance criteria

- [ ] Sharing https://zcore.vercel.app shows a branded preview card
- [ ] `metadataBase` resolves OG image URLs correctly
- [ ] Image stays monochrome (no color accents)

## Files

- `public/og.png` (new)
- `app/layout.tsx`
- `lib/site.ts` (if centralizing metadata helpers)

---

## How to contribute

1. Comment before starting
2. Fork → branch (`feat/og-metadata`)
3. Validate with opengraph.xyz or Vercel OG debugger
4. PR with `Closes #13`

> Part of the **GrantFox OSS** program.
