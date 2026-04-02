# CURSOR PROMPT: Mobile PageSpeed Performance Fixes
> Current score: 84 → Target: 95+
> Current LCP: 4.1s → Target: <2.5s
> Constraint: Fix performance ONLY. Zero design, layout, color, or content changes.

---

## THE 5 ISSUES TO FIX (from PageSpeed report, in priority order)

| # | Issue | Savings | File |
|---|-------|---------|------|
| 1 | Render-blocking CSS | ~300ms | `chunks/12kcsk9rlw3wn.css` |
| 2 | Hero image oversized | 34.9 KiB | `holiday-light-installation-experts.webp` |
| 3 | `residential-hero.webp` served too large | 27.1 KiB | `residential-hero.webp` |
| 4 | Legacy JS polyfills | 13.7 KiB | `chunks/01yho-7.j1fdj.js` |
| 5 | Unused JS chunks | 131.3 KiB | 3 JS chunks loading eagerly |
| 6 | Forced reflow | 61ms | unattributed JS |

---

## FIX 1 — RENDER-BLOCKING CSS (saves ~300ms on LCP)

**Root cause:** Next.js is generating a large CSS chunk (`12.0 KiB`) that blocks the initial render. This is the single biggest LCP contributor alongside the hero image.

### Step A — Enable CSS optimization in `next.config.ts`:

```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,          // ← inlines critical CSS, defers the rest
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-accordion',
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
```

### Step B — Install the required `critters` package:

`optimizeCss: true` requires `critters` to be installed separately — Next.js will throw a build error without it:

```bash
npm install critters
```

### Step C — Verify fonts are NOT using `@import` in CSS:

The render-blocking chunk is likely caused by a Google Fonts `@import` statement somewhere in a CSS file. Search and remove any instances:

```bash
# Find any @import url() font references:
grep -r "@import url" src/ --include="*.css" --include="*.tsx" --include="*.ts"
```

If found, remove them entirely. Fonts must be loaded exclusively via `next/font/google` in `layout.tsx`:

```tsx
// app/layout.tsx — ONLY font loading method allowed:
import { Playfair_Display, Inter, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});
```

### Step D — Remove unused preconnect hints:

If `layout.tsx` has these, delete them — they're now unused and flagged by PageSpeed:

```tsx
// DELETE if present:
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
```

---

## FIX 2 — HERO IMAGE OVERSIZED (saves 34.9 KiB on mobile LCP)

**Problem:** `holiday-light-installation-experts.webp` is being served at a size larger than necessary for mobile. PageSpeed reports 51.9 KiB actual vs an estimated optimal of ~17 KiB for a 390px viewport.

### Step A — Re-compress the hero image:

```bash
node -e "
const sharp = require('sharp');
sharp('public/images/holiday-light-installation-experts.webp')
  .resize(1400, null, { withoutEnlargement: true })
  .webp({ quality: 60, effort: 6 })
  .toFile('public/images/holiday-light-installation-experts-opt.webp')
  .then(info => {
    const fs = require('fs');
    fs.renameSync(
      'public/images/holiday-light-installation-experts-opt.webp',
      'public/images/holiday-light-installation-experts.webp'
    );
    console.log('Hero recompressed:', info);
  });
"
```

**Why quality 60 is safe here:** The hero image has a heavy dark overlay applied via CSS gradient — the darkened/blurred effect means compression artifacts are invisible to the viewer. Quality 60 at 1400px max is indistinguishable from quality 85 through a 50–75% opacity dark overlay.

### Step B — Verify the hero `<Image>` component settings (no design changes):

```tsx
// Find the hero Image in src/components/sections/Hero.tsx or src/app/page.tsx
// Confirm these props are set exactly as follows:

<Image
  src="/images/holiday-light-installation-experts.webp"
  alt="Professional christmas light installation on a Central Coast home at night"
  fill
  priority                    // ← already confirmed in report (fetchpriority=high ✓)
  fetchPriority="high"
  quality={60}                // ← lower quality is fine under dark overlay
  sizes="100vw"
  className="object-cover"
  style={{ objectPosition: 'center 60%' }}
/>
```

The `priority` prop is already set correctly (PageSpeed confirmed `fetchpriority="high"` is present). Just update `quality` to `60`.

---

## FIX 3 — RESIDENTIAL HERO SERVED TOO LARGE (saves 27.1 KiB)

**Problem:** `residential-hero.webp` is being served at 750×489px but only displayed at 412×275px on mobile — wasting 27.1 KiB.

### Step A — Resize the source image:

```bash
node -e "
const sharp = require('sharp');
sharp('public/images/residential-hero.webp')
  .resize(600, null, { withoutEnlargement: true })
  .webp({ quality: 68 })
  .toFile('public/images/residential-hero-opt.webp')
  .then(info => {
    const fs = require('fs');
    fs.renameSync(
      'public/images/residential-hero-opt.webp',
      'public/images/residential-hero.webp'
    );
    console.log('Residential hero resized:', info);
  });
"
```

### Step B — Fix the `sizes` prop on the residential hero `<Image>`:

Find the `residential-hero.webp` usage in the services split or residential page and update the `sizes` attribute:

```tsx
// BEFORE (wrong — tells browser it might be full width on mobile):
sizes="(max-width: 768px) 100vw, 50vw"

// AFTER (correct — matches actual rendered size more precisely):
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
quality={68}
```

---

## FIX 4 — LEGACY JS POLYFILLS (saves 13.7 KiB)

**Problem:** The build is shipping polyfills for JavaScript features that have been baseline in all modern browsers since 2020: `Array.prototype.at`, `Array.prototype.flat`, `Array.prototype.flatMap`, `Object.fromEntries`, `Object.hasOwn`, `String.prototype.trimEnd`, `String.prototype.trimStart`.

### Step A — Create `.browserslistrc` in the project root:

```
# .browserslistrc
last 2 Chrome versions
last 2 Firefox versions
last 2 Safari versions
last 2 Edge versions
not dead
> 0.5%
not IE 11
```

This tells the SWC compiler to stop generating polyfills for these baseline features.

### Step B — Verify no legacy target in `package.json`:

Check `package.json` for a `browserslist` field that might override `.browserslistrc`:

```bash
grep -A 5 '"browserslist"' package.json
```

If found, remove it — `.browserslistrc` takes precedence when it exists, but it's cleaner to have only one source of truth.

### Step C — After adding `.browserslistrc`, trigger a fresh build:

```bash
# Clear Next.js cache and rebuild:
rm -rf .next
npm run build
```

The polyfill chunk (`chunks/01yho-7.j1fdj.js`) should shrink by ~14 KiB after a clean build.

---

## FIX 5 — UNUSED JAVASCRIPT (saves 131.3 KiB)

**Problem:** Three JS chunks are loading eagerly on the homepage but contain code that isn't needed until the user scrolls down:

| Chunk | Size | Wasted | Likely contents |
|-------|------|--------|----------------|
| `chunks/11x85frrg5e6d.js` | 73.8 KiB | 73.8 KiB (100%) | Below-fold page sections |
| `chunks/0y8.u75n~3_82.js` | 39.9 KiB | 29.6 KiB (74%) | Framer Motion or Radix UI |
| `chunks/01yho-7.j1fdj.js` | 71.9 KiB | 27.9 KiB (39%) | Polyfills + misc |

### Step A — Dynamic import all below-fold sections in `src/app/page.tsx`:

```tsx
// src/app/page.tsx

import { Hero } from '@/components/sections/Hero';           // above fold — static import
import { ServiceAreaBanner } from '@/components/sections/ServiceAreaBanner'; // above fold — static

// Everything below — dynamic import:
import dynamic from 'next/dynamic';

const ServicesSplit = dynamic(
  () => import('@/components/sections/ServicesSplit').then(m => ({ default: m.ServicesSplit })),
  { ssr: true }  // keep ssr:true so HTML renders, just defers JS
);

const FeaturesSection = dynamic(
  () => import('@/components/sections/FeaturesSection').then(m => ({ default: m.FeaturesSection })),
  { ssr: true }
);

const PhotoStrip = dynamic(
  () => import('@/components/sections/PhotoStrip').then(m => ({ default: m.PhotoStrip })),
  { ssr: true }
);

const Reviews = dynamic(
  () => import('@/components/sections/Reviews').then(m => ({ default: m.Reviews })),
  { ssr: true }
);

const CommunitySection = dynamic(
  () => import('@/components/sections/CommunitySection').then(m => ({ default: m.CommunitySection })),
  { ssr: true }
);

const CtaBanner = dynamic(
  () => import('@/components/sections/CtaBanner').then(m => ({ default: m.CtaBanner })),
  { ssr: true }
);
```

**Important:** Use `ssr: true` (or omit it — it defaults to `true`) on all these. This ensures:
- The HTML is still server-rendered (good for SEO and no layout shift)
- The JS for these components is deferred into separate chunks that only load after the critical path

**Do NOT use `ssr: false`** unless the component has browser-only APIs — `ssr: false` removes server rendering which would cause layout shift and hurt SEO.

### Step B — Lazy-load the FadeUp animation wrapper:

The `FadeUp` component imports `framer-motion`. If it's statically imported in multiple above-fold sections, it forces framer-motion into the main bundle. Ensure `FadeUp` is NOT imported in `Hero.tsx` or `ServiceAreaBanner.tsx`:

```tsx
// In Hero.tsx — use CSS animations for the initial load instead of framer-motion:
// The hero entrance already works with CSS keyframes which are zero-JS.
// Remove any framer-motion import from Hero.tsx if present.

// Only use FadeUp (framer-motion) in below-fold sections that are already dynamic-imported.
```

### Step C — Check for barrel imports that pull in whole libraries:

```bash
# Find any imports that might be pulling in entire libraries:
grep -r "from 'framer-motion'" src/components/sections/Hero.tsx
grep -r "from 'framer-motion'" src/components/layout/Header.tsx
grep -r "from 'lucide-react'" src/app/page.tsx
```

For any hits in above-fold files, replace the full library import with only the specific items needed, or move to a dynamic import.

---

## FIX 6 — FORCED REFLOW (saves ~61ms from main thread blocking)

**Problem:** JavaScript is reading layout properties (like `offsetWidth`, `offsetHeight`, or `getBoundingClientRect`) after modifying the DOM, causing the browser to synchronously recalculate layout. The report shows 61ms of forced reflow from unattributed JS.

### Step A — Find the source:

```bash
grep -rn "offsetWidth\|offsetHeight\|clientWidth\|clientHeight\|getBoundingClientRect\|scrollHeight\|scrollTop" \
  src/ --include="*.tsx" --include="*.ts"
```

### Step B — Fix pattern: batch reads before writes, use `requestAnimationFrame` for measurements:

**The most common cause** in Next.js sites is the Services dropdown or sticky header measuring element dimensions. Look specifically in:
- `src/components/layout/Header.tsx`
- `src/components/layout/MobileNav.tsx`
- Any dropdown or accordion component

```tsx
// WRONG — forced reflow pattern:
element.classList.add('open');          // DOM write
const h = element.scrollHeight;         // DOM read immediately after write → REFLOW
element.style.maxHeight = h + 'px';

// CORRECT — read first, then write:
const h = element.scrollHeight;         // DOM read
element.classList.add('open');          // DOM write
element.style.maxHeight = h + 'px';     // DOM write

// ALSO CORRECT — use requestAnimationFrame to defer:
requestAnimationFrame(() => {
  const h = element.scrollHeight;
  element.style.maxHeight = h + 'px';
});
```

### Step C — Fix accordion animation if using height measurement:

If the FAQ accordion animates height using JS measurement, replace with CSS max-height transition instead:

```tsx
// Instead of measuring scrollHeight in JS:
// Use Radix UI Accordion (already installed) which handles this with CSS data attributes:
// or use CSS grid trick for zero-JS height animation:

<div
  style={{
    display: 'grid',
    gridTemplateRows: open ? '1fr' : '0fr',
    transition: 'grid-template-rows 0.3s ease',
  }}
>
  <div style={{ overflow: 'hidden' }}>
    {/* accordion content */}
  </div>
</div>
// This animates height with zero JavaScript, zero reflow.
```

---

## VERIFICATION — RUN AFTER ALL FIXES

After implementing all fixes, run a local lighthouse audit to confirm improvement before pushing:

```bash
# Build and start production server:
npm run build && npm start

# In a separate terminal, run Lighthouse CLI:
npx lighthouse http://localhost:3000 \
  --only-categories=performance \
  --form-factor=mobile \
  --throttling-method=simulate \
  --output=html \
  --output-path=./lighthouse-report.html

# Open the report:
open lighthouse-report.html
```

**Expected results after all 6 fixes:**
- LCP: 4.1s → ~2.0–2.4s ✅
- FCP: 1.5s → ~1.0–1.3s ✅  
- Performance score: 84 → ~93–97 ✅
- TBT: already 0ms ✅
- CLS: already 0 ✅

---

## ✅ CHECKLIST — CONFIRM BEFORE PUSHING

Performance fixes (zero design changes):
- [ ] `npm install critters` completed
- [ ] `experimental.optimizeCss: true` in `next.config.ts`
- [ ] `experimental.optimizePackageImports` set for framer-motion, lucide-react
- [ ] `compiler.removeConsole: true` in production
- [ ] No `@import url()` font calls in any CSS file
- [ ] No `<link rel="preconnect">` to Google Fonts in `layout.tsx`
- [ ] Hero image recompressed: `holiday-light-installation-experts.webp` → quality 60, max 1400px
- [ ] Residential hero resized: `residential-hero.webp` → 600px wide, quality 68
- [ ] `residential-hero.webp` `sizes` prop updated to `"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"`
- [ ] `.browserslistrc` created in project root with modern browser targets
- [ ] No `"browserslist"` key in `package.json` conflicting with `.browserslistrc`
- [ ] `.next` cache cleared and fresh build run after `.browserslistrc` creation
- [ ] All below-fold homepage sections use `next/dynamic` with `ssr: true`
- [ ] `framer-motion` is NOT imported in `Hero.tsx` or `Header.tsx` (above-fold files)
- [ ] Forced reflow source identified — reads batched before writes, or rAF used
- [ ] FAQ accordion uses CSS grid-template-rows trick (zero JS height measurement)
- [ ] Local Lighthouse score confirmed ≥ 93 before pushing to Vercel
