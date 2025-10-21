# Tourm (Migrated to Next.js 15 App Router)

This project was originally bootstrapped with Create React App and has now been migrated to **Next.js 15 (App Router)** across all pages. The UI, class names, and asset paths have been preserved exactly to maintain the original design fidelity.

## Migration Status Summary

- Full replacement of `react-router-dom` with `next/link` (including edge cases like telephone/mail/social/gallery links converted to plain anchors).
- Dynamic route pages implemented (`/destination/[id]`, `/service/[id]`, `/shop/[id]`, `/blog/[id]`, `/resort/[id]`, `/tour/[id]`, `/guide/[id]`).
- Legacy `RouterPage.jsx` neutralized and effectively removed.
- All interactive legacy components marked as client via `"use client"` where needed (Swiper sliders, modals, counters, galleries, booking forms, blog widgets, etc.).
- Original CSS preserved through `<link>` elements in `app/layout.js` to avoid churn.
- Hydration mismatches mitigated (see below) by removing non‑deterministic render logic.

## Running (Development)

Install dependencies (including Next.js 15) and start the dev server:

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

## Building (Production)

```bash
npm run build
npm start
```

## File Structure (Relevant New Parts)

```
app/
	layout.js        # Global HTML shell & metadata (fonts, CSS links, favicons)
	page.js          # Home page in Next.js
next.config.js     # Next.js configuration (images unoptimized to preserve direct /assets usage)
```

## CSS & Assets

All existing CSS in `public/assets/css/` is preserved and linked in `layout.js` to avoid refactoring. Global CRA styles `src/index.css` and `src/App.css` are imported at the top of `layout.js`.

## Hydration & Stability Notes

During migration we addressed several potential hydration pitfalls:

1. Removed remaining `Link to=` usages that produced invalid `href` on blog detail pages (`BlogPost.jsx`, `BlogDetailsMain.jsx`).
2. Replaced `Math.random()` physics force generation in `ElementSection.jsx` with a deterministic pseudo‑random generator (LCG) so the server HTML snapshot and client animation startup do not diverge.
3. Simplified `LoadTop.jsx` scroll behavior and marked it with `"use client"` to avoid SSR branching on `typeof window`.
4. Converted phone (`tel:`) and email (`mailto:`) interactions from `Link` components to plain `<a>` anchors (eliminates undefined prop warnings and avoids hydration edge cases).
5. Ensured external/social links use `<a target="_blank" rel="noopener noreferrer">` instead of `next/link` to prevent routing side effects.

If any residual hydration warnings occur, consider client‑only loading for highly dynamic components via:
```jsx
import dynamic from 'next/dynamic';
const ElementSection = dynamic(() => import('@/Components/Elements/ElementSection'), { ssr: false });
```

## Next Improvements (Optional)

- Consolidate multiple header/footer variants to reduce bundle size.
- Extract reusable Swiper configuration to a single helper.
- Add automated route tests (Playwright or Cypress) for critical dynamic pages.
- Introduce image optimization by replacing `<img>` with `next/image` incrementally (keeping layout stable).
- Add incremental static regeneration (ISR) for data‑driven pages if backend/API introduced later.

## Legacy CRA Scripts

The original CRA scripts have been replaced with Next.js scripts:

| Command        | Purpose                      |
| -------------- | ---------------------------- |
| `npm run dev`  | Start Next.js development    |
| `npm run build`| Build production bundle      |
| `npm start`    | Run production server        |
| `npm test`     | (Legacy) CRA test runner     |

## Migration Checklist (Global)

- [x] Add Next.js dependencies & scripts
- [x] Create `app/` directory with `layout.js` & `page.js`
- [x] Port all pages & detail views to App Router dynamic segments
- [x] Replace every `react-router-dom` `Link` with `next/link` or plain anchor
- [x] Preserve CSS & font loading in layout
- [x] Verify Swiper & modal components as client components
- [x] Remove legacy router artifacts
- [x] Resolve blog detail invalid `href` errors
- [x] Mitigate hydration mismatches (randomness / window guards)
- [ ] Optional: Replace `<img>` with `next/image` progressively
- [ ] Optional: Implement route-level caching / ISR

## License

All rights reserved © 2025 House of Andalus.

