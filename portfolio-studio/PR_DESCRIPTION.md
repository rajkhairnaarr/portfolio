# Editorial Layout & shadcn/ui Integration

## Summary

This PR transforms the portfolio from a generic card-based layout to an editorial NewGenre-style layout with shadcn/ui primitives, implementing precise spacing constraints, full-width project bands, and consistent UI components.

## Changes Overview

### Layout Tokens & Dependencies
- ✅ Added editorial spacing utilities (96px gutter, 540px narrow text, 120px/80px/48px vertical rhythm)
- ✅ Installed shadcn/ui dependencies: class-variance-authority, clsx, tailwind-merge, lucide-react
- ✅ Created cn() utility for Tailwind class merging

### shadcn/ui Components (NEW)
- ✅ `src/components/ui/button.jsx` - Button with variants (default, outline, ghost, link) and sizes
- ✅ `src/components/ui/badge.jsx` - Badge component for tags
- ✅ `src/lib/utils.js` - Class merge utility

### Editorial Components
- ✅ **ProjectBand (NEW)** - Replaces ProjectCard with full-width horizontal stripes
  - Two-column grid (5/7 split): narrow text left, full-bleed image right
  - Alternates text/image order by index
  - Uses hairline separators (1px) instead of card shadows
  - lucide-react ArrowRight icon for CTA

### Updated Components
- ✅ **Hero** - Editorial grid layout with left-aligned narrow text, 80vh min-height
- ✅ **FilterPills** - Migrated to shadcn Button with aria-pressed states
- ✅ **CTA** - Increased padding (96-140px), narrow copy (760px max)
- ✅ **Header** - lucide-react Menu/X icons for mobile toggle
- ✅ **Home** - Stacked ProjectBand components with vertical rhythm spacing

### Removed Components
- ❌ `src/components/ProjectCard.jsx` - Replaced by ProjectBand
- ❌ `src/components/ProjectsGrid.jsx` - Replaced by direct ProjectBand stack
- ❌ `src/__tests__/ProjectCard.test.jsx` - Replaced by ProjectBand.test.jsx

### Tests
- ✅ Created `src/__tests__/ProjectBand.test.jsx` with full coverage
- ✅ Added IntersectionObserver and matchMedia mocks in test setup
- ✅ All tests passing with ProjectBand component

### Styling
- ✅ Editorial utilities: `.editorial-gutter`, `.editorial-text-narrow`, `.hairline-separator`
- ✅ Responsive gutter (96px desktop, 24px mobile)
- ✅ Removed old card-based styles

## Editorial Design Rules Applied

- **Left gutter:** 96px on desktop (24px mobile) ✅
- **Narrow text column:** Max 540px ✅
- **Hero min-height:** 80vh ✅
- **Vertical rhythm:** 120px desktop / 80px tablet / 48px mobile ✅
- **CTA padding:** 96-140px range ✅
- **Project bands:** Full-width stripes with 5/7 grid split ✅
- **No boxed cards:** Replaced with hairline-separated bands ✅

## TODOs for Deployment

Before deploying to production, replace placeholder assets and content:

### Images to Replace
- [ ] `/public/assets/hero.png` - High-quality hero image
- [ ] `/public/assets/project-1.jpg` - Project 1 preview
- [ ] `/public/assets/project-2.jpg` - Project 2 preview
- [ ] `/public/assets/project-3.jpg` - Project 3 preview
- [ ] `/public/assets/project-4.jpg` - Project 4 preview
- [ ] `/public/assets/footer-flower.png` - Decorative footer image

### Content to Update
- [ ] Hero headline and lead text in `src/components/Hero.jsx`
- [ ] CTA headline and body in `src/components/CTA.jsx`
- [ ] Project data in `src/data/projects.js`:
  - Titles, roles, tags
  - Short descriptions
  - Metrics
  - Full case study content

### Integration
- [ ] Contact form integration (currently placeholder - see `src/components/ContactForm.jsx`)
- [ ] Social media links in `src/components/Footer.jsx`
- [ ] Email address updates

## Testing

```bash
npm install
npm run build  # ✅ Build successful
npm test       # ✅ All tests passing
```

## Build Output

- Production build: ✅ Successful
- Bundle sizes:
  - CSS: 22.79 kB (4.93 kB gzipped)
  - JS: 347.07 kB (110.21 kB gzipped)

## Documentation

Complete changelog available in `CLAUDE-CHANGES.md` with:
- Detailed diff summaries for every modified file
- Rationale for each change
- Explicit TODOs for asset/content replacement

## Breaking Changes

None - This is a visual/layout overhaul. All routes, data structures, and functionality remain unchanged.

## Screenshots

Before: Card-based layout with centered content and boxed shadows
After: Editorial bands with left-aligned narrow text and full-bleed imagery

---

**Branch:** `claude/editorial-shadcn-fix-01GTu19P7RYdFpJQHnbBzNUN`
**Commits:** 7
**Files Changed:** 20+ files created/modified/deleted
**Reference:** See `CLAUDE-CHANGES.md` for complete modification log
