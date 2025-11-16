# Changelog - Editorial Layout & shadcn/ui Integration

This document tracks all modifications made to transform the portfolio from a generic card-based layout to an editorial NewGenre-style layout with shadcn/ui primitives.

---

## `tailwind.config.js`

**Diff Summary:**
Added editorial layout tokens including left gutter spacing (96px), narrow text column max-width (540px), CTA text max-width (760px), and vertical rhythm spacing utilities (120px section, 80px tablet, 48px mobile). Existing gradient definitions remain unchanged.

**Reason:**
Editorial layout requires precise spacing constraints for left-aligned text columns and consistent vertical rhythm between major sections.

**TODOs:**
None - configuration tokens only.

---

## `package.json`

**Diff Summary:**
Added shadcn/ui dependencies: class-variance-authority, clsx, tailwind-merge, lucide-react. These enable component variants and icon usage.

**Reason:**
shadcn/ui components require these utility libraries for styling composition and icon rendering.

**TODOs:**
None - dependencies only.

---

## `src/lib/utils.js` (NEW)

**Diff Summary:**
Created utility module exporting cn() function that merges Tailwind classes using clsx and tailwind-merge.

**Reason:**
shadcn/ui components use cn() for conditional class composition without conflicts.

**TODOs:**
None - utility function only.

---

## `src/components/ui/button.jsx` (NEW)

**Diff Summary:**
Created shadcn/ui Button component with variants (default, outline, ghost, link) and sizes (default, sm, lg, icon). Uses class-variance-authority for variant logic and supports asChild pattern.

**Reason:**
Replace custom button classes with shadcn primitives for consistency and accessibility.

**TODOs:**
None - reusable component.

---

## `src/components/ui/badge.jsx` (NEW)

**Diff Summary:**
Created shadcn/ui Badge component with variants (default, secondary, outline) for tag rendering.

**Reason:**
Project tags need consistent styling across ProjectBand components.

**TODOs:**
None - reusable component.

---

## `src/index.css`

**Diff Summary:**
Removed .project-card styles (replaced by ProjectBand). Added editorial-gutter (96px left padding, 24px mobile), editorial-text-narrow (max 540px), hairline-separator (1px border), and .project-band hover states. Responsive gutter adjustment for mobile. Removed project-card prefers-reduced-motion rule.

**Reason:**
Editorial layout requires left-aligned gutter and narrow text columns instead of centered boxed cards. Hairline separators replace heavy shadows.

**TODOs:**
None - utility classes only.

---

## `src/components/ProjectBand.jsx` (NEW)

**Diff Summary:**
Created full-width editorial project band component replacing ProjectCard. Two-column grid (5/7 split): left text column (editorial-gutter, max 540px) with tags (Badge), title, role, description, and CTA arrow; right visual column fills to viewport edge. Alternates text/image order by index. No white card or shadow—just hairline separator. Uses lucide-react ArrowRight icon.

**Reason:**
Editorial layout demands horizontal stripes with left-aligned narrow text and full-bleed imagery, not boxed cards.

**TODOs:**
- Replace placeholder images in /assets/project-1.jpg through /assets/project-4.jpg with actual project visuals.
- Update project titles, roles, tags, and descriptions in src/data/projects.js.

---

## `src/components/Hero.jsx`

**Diff Summary:**
Changed from centered two-column layout to editorial grid (5/7 split). Left column uses editorial-gutter and editorial-text-narrow. Min-height increased to 80vh. Right column image fills to viewport edge (object-cover). Replaced btn-primary/btn-secondary with shadcn Button components (variant default/outline, size lg). Removed max-w-content wrapper.

**Reason:**
Hero must follow editorial gutter and narrow text rules for consistency with ProjectBands.

**TODOs:**
- Replace /assets/hero.png with high-quality hero image.
- Update hero headline and lead copy to match brand voice.

---

## `src/components/FilterPills.jsx`

**Diff Summary:**
Replaced motion.button and .filter-pill classes with shadcn Button component. Active filter uses variant="default", inactive uses variant="ghost" with border-2 border-gray-300. Size="sm" with rounded-full and px-6 for pill shape. Uses cn() for conditional styling.

**Reason:**
Consistent button primitives across UI using shadcn components.

**TODOs:**
None - filter logic unchanged.

---

## `src/pages/Home.jsx`

**Diff Summary:**
Replaced ProjectsGrid with stacked ProjectBand components. Added vertical rhythm spacing (py-section-mobile/tablet/section) around FilterPills and before CTA. Empty state now uses editorial-gutter. FilterPills wrapped in vertical rhythm div. Bands render in hairline-separated stack.

**Reason:**
Editorial layout uses stacked horizontal bands instead of grid cards, with 120px/80px/48px vertical rhythm between sections.

**TODOs:**
None - composition change only.

---

## `src/components/CTA.jsx`

**Diff Summary:**
Increased vertical padding to py-24 md:py-32 lg:py-40 (96-140px range). Changed max-width from max-w-3xl to max-w-cta-text (760px). Replaced custom button with shadcn Button (bg-white text-hero-top, lg size, px-12 py-6). Increased bottom margin on paragraph to mb-10.

**Reason:**
Editorial CTA requires larger breathing room (96-140px padding) and centered narrow copy (max 760px).

**TODOs:**
- Update CTA headline and body copy.
- Ensure CTA gradient blends smoothly into footer.

---

## `src/components/Header.jsx`

**Diff Summary:**
Replaced custom hamburger SVG with lucide-react Menu/X icons. Mobile menu button now uses shadcn Button (variant="ghost", size="icon"). Added Button import and lucide-react imports.

**Reason:**
Consistent icon usage via lucide-react and shadcn primitives for interactive elements.

**TODOs:**
None - navigation structure unchanged.

---

## `src/__tests__/ProjectBand.test.jsx` (NEW)

**Diff Summary:**
Created test suite for ProjectBand component mirroring ProjectCard.test.jsx. Tests verify title, role, tags, description rendering, and correct link href to /work/:slug path.

**Reason:**
ProjectBand replaces ProjectCard—tests ensure component renders correctly and links navigate properly.

**TODOs:**
None - test coverage complete.

---

