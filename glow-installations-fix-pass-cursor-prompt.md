# 🔧 CURSOR PROMPT: Glow Installations — Fix & Polish Pass
> Dev site: https://glow-installations.vercel.app  
> This is a targeted fix pass. Do NOT rebuild from scratch. Apply each fix surgically.

---

## 📋 COMPLETE FIX LIST (7 areas)

1. Logo — replace text/placeholder with real logo file
2. Hero image — replace thermostat photo with Christmas lights photo
3. Brand colors — fix header, nav, and color variables site-wide
4. Images — fix compression, alignment, and use ALL live site images
5. Missing pages — build 2 geo SEO pages that are absent
6. Animations & interactivity — add smooth loading and scroll animations
7. PageSpeed / Accessibility — fix every flagged issue from the audit

---

## FIX 1 — LOGO

The logo file has been uploaded to `/public/images/Glow_Installations_Logo.png` (or `.webp`).

**Find every place the logo is rendered** — header, footer, mobile nav — and replace with the real image:

```tsx
// In Header.tsx, Footer.tsx, MobileNav.tsx
// REMOVE: any <span>, text node, or placeholder rendering "Glow Installations" as the logo
// REPLACE WITH:

import Image from 'next/image';

// Header logo (white version works on dark crimson header):
<Link href="/" aria-label="Glow Installations - Home">
  <Image
    src="/images/Glow_Installations_Logo.png"
    alt="Glow Installations Logo"
    width={180}
    height={48}
    priority
    className="h-10 w-auto object-contain"
    style={{ filter: 'brightness(0) invert(1)' }}  // makes it white on dark bg
  />
</Link>

// Footer logo (same image, slightly larger):
<Image
  src="/images/Glow_Installations_Logo.png"
  alt="Glow Installations"
  width={200}
  height={54}
  className="h-12 w-auto object-contain"
  style={{ filter: 'brightness(0) invert(1)' }}
/>
```

**Note:** If the original logo file already has a transparent background and white/light text, remove the `filter` style. Test visually — the logo must be clearly legible on the `#8B060A` header background.

---

## FIX 2 — HERO IMAGE

**Problem:** The current hero background is an unrelated thermostat/home interior photo.

**Action:** Replace it with a high-quality outdoor Christmas lighting photo.

### Step 1 — Download the right image:
```bash
# Download from Unsplash (free commercial license)
# This is a beautiful house with warm Christmas lights at night:
curl -L "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1920&q=85&fm=webp" \
  -o public/images/hero-home-christmas-lights.webp

# Fallback option (roofline icicle lights, warm evening):
curl -L "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1920&q=85&fm=webp" \
  -o public/images/hero-home-christmas-lights.webp

# Second fallback (warm neighborhood Christmas lights):
curl -L "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=1920&q=85&fm=webp" \
  -o public/images/hero-home-christmas-lights.webp
```

### Step 2 — Update the hero component:
Find the hero section in `src/app/page.tsx` or `src/components/sections/Hero.tsx` (whichever holds the hero Image component) and update:

```tsx
<Image
  src="/images/hero-home-christmas-lights.webp"
  alt="Professional Christmas light installation on a beautiful home — Central Coast CA"
  fill
  priority                    // ← MUST have priority on LCP image
  fetchPriority="high"        // ← Explicitly set for LCP discovery
  quality={85}
  sizes="100vw"
  className="object-cover object-center"
  // object-position: focus on the house/lights, not sky
  style={{ objectPosition: 'center 60%' }}
/>
```

### Step 3 — Add preload link to `<head>` in `layout.tsx`:
```tsx
// In app/layout.tsx, inside the <head> metadata or using Next.js metadata:
// Add this to ensure LCP image is discovered immediately:
export const metadata: Metadata = {
  // ... existing metadata
};

// Also add to the layout's <head> section:
// <link rel="preload" as="image" href="/images/hero-home-christmas-lights.webp" fetchpriority="high" />
```

Or in layout.tsx using the `<head>` export pattern:
```tsx
import { Metadata } from 'next';
// In the root layout component, add before </head>:
<link
  rel="preload"
  as="image"
  href="/images/hero-home-christmas-lights.webp"
  // @ts-ignore
  fetchpriority="high"
/>
```

---

## FIX 3 — BRAND COLORS

**Problem:** The header is white. The site should use `#8B060A` (crimson) as primary and `#E2CAA2` (warm gold/cream) as secondary.

### Step 1 — Update `globals.css` color variables:
```css
:root {
  /* PRIMARY — Crimson red */
  --crimson: #8B060A;
  --crimson-hover: #A50810;
  --crimson-dark: #6B0408;
  --crimson-glow: rgba(139, 6, 10, 0.25);

  /* SECONDARY — Warm gold/cream */
  --gold: #E2CAA2;
  --gold-dark: #C9A97A;
  --gold-bright: #F5C842;
  --gold-glow: rgba(226, 202, 162, 0.2);

  /* Keep dark atmosphere palette as-is */
  --night: #0A0A0F;
  --deep-navy: #0F1B2E;
  --navy: #162035;
}
```

### Step 2 — Fix the Header background:
Find `Header.tsx` (or wherever the `<header>` element lives). Update:

```tsx
// BEFORE (broken):
// className="bg-white ..." or className="bg-transparent ..."

// AFTER:
// Default state: solid crimson
// Scrolled state: slightly darker crimson with blur

// In the header element:
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-[#6B0408]/95 backdrop-blur-md shadow-lg'
      : 'bg-[#8B060A]'
  }`}
>
```

### Step 3 — Fix nav link colors on crimson header:
All nav links must be legible on the crimson background:

```tsx
// Nav links:
className="text-white/85 hover:text-[#E2CAA2] transition-colors font-medium text-sm"

// Active/current page:
className="text-[#E2CAA2] font-semibold"

// Phone number in header:
className="text-[#E2CAA2] font-semibold hover:text-white transition-colors"

// "Get Started" CTA button in header:
className="bg-[#E2CAA2] text-[#8B060A] hover:bg-white font-bold rounded-full px-5 py-2 transition-all text-sm"
```

### Step 4 — Fix contrast ratio (Accessibility fix — see FIX 7):
The logo anchor `<a class="font-display text-2xl font-semibold text-white">` on a crimson background has been flagged for low contrast. The logo image (Fix 1) resolves this by replacing text with an image. But if any text links remain on the crimson header, ensure they use `text-white` (not `text-white/60` or similar reduced opacity).

### Step 5 — Update accent colors site-wide:
Replace all instances of the old gold `#F5C842` with the brand secondary `#E2CAA2` for:
- CTA button backgrounds (secondary style)
- Eyebrow labels
- Star ratings
- Divider lines
- Border accents
- Price highlights

```bash
# Find all instances to update:
grep -r "#F5C842\|var(--gold-bright)\|var(--gold)" src/ --include="*.tsx" --include="*.css" -l
```

---

## FIX 4 — IMAGES: COMPRESSION, ALIGNMENT & LIVE SITE IMAGES

### Part A — Download ALL images currently used on the live site (glowinstallations.com)

These are the exact CDN URLs from the live Webflow site. Download, convert to WebP, and save to `/public/images/`:

```bash
#!/bin/bash
# Run from project root
mkdir -p public/images

# Logo (already handled in Fix 1 — skip if done)

# Residential service photos
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66790d025123e922b5a0f7eb_jimmy-conover-fyEin27bHZ8-unsplash-Smaler.jpg" -o public/images/residential-hero.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66790d08f6b14715f40f5f7e_juliana-malta-NH7oHjePWUs-unsplash.jpg" -o public/images/residential-family.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/6679180578e62421afc8a6ee_thalia-ruiz-lHu6SF2Uar0-unsplash.jpg" -o public/images/residential-lights-detail.jpg

# Commercial service photos
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2a42430cc4c6e719defd8_96in-LED-Sequoia-Wreath-PMDisplay-07255-edit.jpg" -o public/images/commercial-wreath-display.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2a4359b9dbc5deb3e9dcd_M5-LED-WW-twinkle-Icicle-Lights-Roofline-6382.jpg" -o public/images/commercial-icicle-roofline.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2a48e8bc07952f9f83eb6_Wintergreen-Commercial-Trees-Brochure_12.jpg" -o public/images/commercial-trees.jpg

# Gallery / product photos
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff5069352b9d932081fd6a_96in-LED-Sequoia-Wreath-PMDisplay-07266.jpg" -o public/images/gallery-sequoia-wreath-large.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff506943aabdc76e1d116f_sequoia-lifestyle-LED-24inch-3.jpg" -o public/images/gallery-sequoia-lifestyle.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff506958bdd9f9b44b38c1_24in-LED-Sequoia-Wreath-Fence-00494.jpg" -o public/images/gallery-fence-wreath.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff5069dd07492f0ca3f399_LED-Warm-White-5MM-Brown-Wire-Trunk-Wrap-02.jpg" -o public/images/gallery-trunk-wrap.jpg

# Sub-service photos
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2aa891f4ee7c377b2d98e_LED-Column-Wrap-StretchNet-CW-White-Wire-01824.jpg" -o public/images/single-story-column.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e29b3cc7fae07ea779756f_24in-LED-Sequoia-Wreath-Fence-00494.jpg" -o public/images/estates-fence.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e29938901069436b3021cb_sequoia-lifestyle-LED-24inch-3.jpg" -o public/images/multi-story-lifestyle.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e297d1f4402c4e44757f07_sequoia-lifestyle-LED-48inch.jpg" -o public/images/ranch-sequoia-48.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/667917a33350139f176f46d8_kenny-eliason-A59lWOrZVnw-unsplash.jpg" -o public/images/restaurant-interior.jpg

# About / estate night photo
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/644f63224feacc142012e140_steven-van-elk-6yiGt1PpPcQ-unsplash.jpg" -o public/images/estate-night-display.jpg

# Review photos
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/68d04f067a6cbec1fe06201b_Stunning%20Halloween%20Display%20Installation%202024%20In%20Santa%20Ynez%20-%20Lisa%20R.jpg" -o public/images/review-project-lisa.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66f469871bff855b6c0bc858_IMG_20240925_084859.jpg" -o public/images/review-project-mike.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66f63de178d9bf36e6f01218_2024-01-20.jpg" -o public/images/review-project-serena.jpg
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/68d0ef36154cca5f96ab998a_Amazing%20Christmas%20Installation%20in%20Old%20Orcutt%202024%20-%20Nathalie%20A.JPG" -o public/images/review-project-nathalie.jpg

# Team photos
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/6538ca9c1a41e3c2f89532eb_Alex_small.png" -o public/images/team-alex-nava.png
curl -L "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/6538caa6a3276a7a6a6f1b75_Zuar_small.png" -o public/images/team-zuar-mendoza.png

echo "All images downloaded."
```

### Part B — Convert all downloaded JPG/PNG to optimized WebP:
```bash
# Install sharp CLI if not already installed
npm install -g sharp-cli

# Convert all downloaded images to WebP
for f in public/images/*.jpg public/images/*.JPG; do
  [ -f "$f" ] || continue
  out="${f%.*}.webp"
  sharp "$f" --format webp --quality 82 -o "$out"
  rm "$f"
  echo "Converted: $out"
done

# Convert PNGs (keep originals for logo, convert others)
for f in public/images/review-*.png public/images/team-*.png; do
  [ -f "$f" ] || continue
  out="${f%.*}.webp"
  sharp "$f" --format webp --quality 82 -o "$out"
  echo "Converted: $out"
done

echo "Done. All images are now WebP."
```

### Part C — Fix image compression on gallery photos:
The PageSpeed audit flagged 4 gallery images as oversized (combined 91 KiB waste). Re-optimize:

```bash
# Gallery images at 25vw display size need max ~600px source width
sharp public/images/gallery-sequoia-wreath-large.webp --resize 800 --format webp --quality 75 -o public/images/gallery-sequoia-wreath-large.webp
sharp public/images/gallery-trunk-wrap.webp --resize 800 --format webp --quality 75 -o public/images/gallery-trunk-wrap.webp
sharp public/images/gallery-icicle-roofline.webp --resize 800 --format webp --quality 75 -o public/images/gallery-icicle-roofline.webp
sharp public/images/estate-night-display.webp --resize 800 --format webp --quality 75 -o public/images/estate-night-display.webp
```

Also update the `sizes` prop on gallery images:
```tsx
// Before (wrong — telling browser full viewport):
sizes="(max-width: 768px) 100vw, 25vw"

// After (correct — matches actual rendered size):
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
quality={75}
```

### Part D — Fix image alignment and cropping issues:

For every image that looks "too big" or misaligned, apply the correct `object-position`:

```tsx
// Hero background — focus on the house, not sky
<Image style={{ objectPosition: 'center 65%' }} />

// Residential hero — focus center
<Image className="object-cover object-center" />

// Estate night photo — focus on the lit building, not dark sky
<Image style={{ objectPosition: 'center 40%' }} />

// Product/wreath photos — center crop
<Image className="object-cover object-center" />

// Team headshots — top-center crop (shows face, not torso)
<Image style={{ objectPosition: 'center 20%' }} />

// Review project photos — center, slight top bias
<Image style={{ objectPosition: 'center 35%' }} />
```

For images that appear "too large" for their container, ensure the parent has `overflow: hidden` and the image has `fill` with correct aspect ratio container:

```tsx
// Card image container pattern — use this everywhere:
<div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
  <Image fill className="object-cover object-center" sizes="..." />
</div>

// Portrait/square containers:
<div className="relative w-full aspect-square overflow-hidden rounded-xl">
  <Image fill className="object-cover object-center" />
</div>
```

### Part E — Map all live site images to components:

| Component | Image to use | Path |
|-----------|-------------|------|
| Hero (home) | Christmas lights on house | `/images/hero-home-christmas-lights.webp` |
| Services split — Residential | Family home with lights | `/images/residential-hero.webp` |
| Services split — Commercial | Sequoia wreath display | `/images/commercial-wreath-display.webp` |
| Gallery strip image 1 | Sequoia wreath large | `/images/gallery-sequoia-wreath-large.webp` |
| Gallery strip image 2 | Lifestyle wreath | `/images/gallery-sequoia-lifestyle.webp` |
| Gallery strip image 3 | Fence wreath | `/images/gallery-fence-wreath.webp` |
| Gallery strip image 4 | Trunk wrap | `/images/gallery-trunk-wrap.webp` |
| Reviews — Lisa R. | Halloween display | `/images/review-project-lisa.webp` |
| Reviews — Mike S. | Halloween install | `/images/review-project-mike.webp` |
| Reviews — Serena R. | Christmas display | `/images/review-project-serena.webp` |
| Reviews — Nathalie A. | Orcutt install | `/images/review-project-nathalie.webp` |
| About / Community section | Estate night | `/images/estate-night-display.webp` |
| About — Alex | Team headshot | `/images/team-alex-nava.webp` |
| About — Zuar | Team headshot | `/images/team-zuar-mendoza.webp` |
| Commercial page hero | Icicle roofline | `/images/commercial-icicle-roofline.webp` |
| Commercial page section | Trees brochure | `/images/commercial-trees.webp` |
| Single-story page | Column wrap | `/images/single-story-column.webp` |
| Multi-story page | Lifestyle wreath | `/images/multi-story-lifestyle.webp` |
| Estates page | Fence/estate wreath | `/images/estates-fence.webp` |
| Ranch page | 48-inch sequoia | `/images/ranch-sequoia-48.webp` |
| Restaurant page | Restaurant interior | `/images/restaurant-interior.webp` |

**Update every service page** to use its corresponding image from the table above. Currently many sub-service pages are using placeholder or no images.

---

## FIX 5 — MISSING PAGES (2 pages to build)

Both pages confirmed absent from dev site. Build both now.

### Page A: `/services/santa-barbara-christmas-lights`

Create `src/app/services/santa-barbara-christmas-lights/page.tsx`:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Santa Barbara Christmas Light Installation | Glow LLC',
  description: 'Expert Christmas light installation in Santa Barbara & Montecito. Licensed & insured. Residential & commercial. Free quote from Glow LLC.',
};

// Schema:
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Christmas Light Installation in Santa Barbara",
  "provider": { "@type": "LocalBusiness", "name": "Glow Installations", "@id": "https://www.glowinstallations.com/#business" },
  "areaServed": [
    { "@type": "City", "name": "Santa Barbara", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "Montecito", "containedInPlace": { "@type": "State", "name": "California" } }
  ],
  "description": "Professional Christmas light installation for residential and commercial properties in Santa Barbara and Montecito, CA.",
  "offers": { "@type": "Offer", "price": "1200", "priceCurrency": "USD", "description": "Starting at $1,200 for residential installations" }
};

// Page sections:
// 1. Hero: "Christmas Light Installation in Santa Barbara, CA"
//    H1: "Christmas Light Installation in Santa Barbara, CA"
//    Photo: use commercial-wreath-display.webp or estate-night-display.webp
//    Price badge: "Residential from $1,200"
//
// 2. Intro section:
//    "Santa Barbara is one of the most beautiful cities on the Central Coast — and your home or 
//     business deserves a holiday display that matches. Glow LLC brings professional Christmas 
//     light installation to Santa Barbara and Montecito, handling everything from custom design 
//     to removal and storage."
//
// 3. Services offered (same 6-feature grid as homepage)
//
// 4. Areas covered:
//    - Santa Barbara
//    - Montecito
//    - Summerland
//    - Nearby areas (reach out for availability)
//
// 5. Reviews section (reuse the 4 reviews)
//
// 6. CTA banner
```

### Page B: `/services/san-luis-obispo-christmas-lights`

Create `src/app/services/san-luis-obispo-christmas-lights/page.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'San Luis Obispo Christmas Light Installation | Glow',
  description: 'Professional Christmas light installation in San Luis Obispo County. Serving SLO, Arroyo Grande, Nipomo & Paso Robles. Free quote from Glow LLC.',
};

// Schema: same pattern as Santa Barbara page, areaServed:
// San Luis Obispo, Paso Robles, Arroyo Grande, Nipomo

// Page sections:
// 1. Hero: "Christmas Light Installation in San Luis Obispo, CA"
//    H1: "Christmas Light Installation in San Luis Obispo, CA"
//    Photo: residential-hero.webp
//    Price badge: "Residential from $1,200"
//
// 2. Intro:
//    "As the heart of the Central Coast, San Luis Obispo and the surrounding communities 
//     deserve to shine during the holidays. Glow LLC provides professional Christmas light 
//     installation across SLO County — from Paso Robles wine country to the beaches of 
//     Arroyo Grande and Nipomo."
//
// 3. Areas covered:
//    - San Luis Obispo
//    - Paso Robles
//    - Arroyo Grande
//    - Nipomo
//    - Pismo Beach & surrounding areas
//
// 4. Services grid (same 6 features)
// 5. Reviews
// 6. CTA
```

**Add both pages to the sitemap.** Find `src/app/sitemap.ts` (or wherever sitemap is generated) and add:
```ts
{ url: 'https://www.glowinstallations.com/services/santa-barbara-christmas-lights', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: 'https://www.glowinstallations.com/services/san-luis-obispo-christmas-lights', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
```

---

## FIX 6 — SMOOTH LOADING & INTERACTIVITY

### Part A — Page transition loading bar:
Install and configure a top progress bar for route changes:

```bash
npm install nextjs-toploader
```

In `src/app/layout.tsx`:
```tsx
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#E2CAA2"           // brand secondary gold
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #E2CAA2, 0 0 5px #E2CAA2"
        />
        {children}
      </body>
    </html>
  );
}
```

### Part B — Scroll-triggered animations using Framer Motion:

Install if not already present:
```bash
npm install framer-motion
```

Create a reusable animation wrapper `src/components/ui/FadeUp.tsx`:
```tsx
'use client';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Apply FadeUp to these elements across the site:**
```tsx
// Feature cards — staggered:
{features.map((f, i) => (
  <FadeUp key={f.title} delay={i * 0.08}>
    <FeatureCard {...f} />
  </FadeUp>
))}

// Review cards — staggered:
{reviews.map((r, i) => (
  <FadeUp key={r.name} delay={i * 0.1}>
    <ReviewCard {...r} />
  </FadeUp>
))}

// Section headings:
<FadeUp><h2 className="...">...</h2></FadeUp>

// Service cards:
<FadeUp delay={0}><ServiceCard /></FadeUp>
<FadeUp delay={0.1}><ServiceCard /></FadeUp>

// Team cards:
{team.map((member, i) => (
  <FadeUp key={member.name} delay={i * 0.07}>
    <TeamCard {...member} />
  </FadeUp>
))}

// FAQ accordion items:
{faqs.map((faq, i) => (
  <FadeUp key={faq.question} delay={i * 0.04}>
    <AccordionItem {...faq} />
  </FadeUp>
))}
```

### Part C — Hero entrance animation (already in hero, verify it's working):
```tsx
// In Hero.tsx — ensure these are applied on mount, not on scroll:
// Trust badge: initial opacity 0, animate to 1, delay 0s
// H1: initial y:30 opacity:0, animate y:0 opacity:1, delay 0.15s
// Subheading: delay 0.28s
// CTAs: delay 0.40s
// Trust bar: delay 0.52s
// Scroll indicator: delay 1.0s
// All use transition duration 0.6s with ease: [0.22, 1, 0.36, 1]
```

### Part D — Header scroll behavior:
```tsx
// In Header.tsx — smooth transition from transparent/crimson to blurred crimson on scroll:
'use client';
import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#6B0408]/95 backdrop-blur-md border-b border-white/10 py-3'
        : 'bg-[#8B060A] py-4'
    }`}>
      {/* ... */}
    </header>
  );
}
```

### Part E — Button hover micro-interactions:
Apply to all CTA buttons:
```tsx
// Primary CTA (crimson):
className="... transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(139,6,10,0.5)] active:scale-[0.98]"

// Secondary CTA (outlined):
className="... transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"

// Card hover:
className="... transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
```

### Part F — Smooth image reveal on load:
```tsx
// On all non-hero images, add a blur-to-sharp reveal:
// Use Next.js built-in placeholder blur:
<Image
  placeholder="blur"
  blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoEAAMAAkA4JZQCdAEO/gHOAAD++P///////////////////////wAAAAA="
  // ... other props
/>
```

---

## FIX 7 — PAGESPEED & ACCESSIBILITY (All flagged issues)

### Issue 1: Render-blocking CSS (saves 150ms)

**Problem:** `chunks/108342r-rbwfg.css` is render-blocking.  
**Fix:** This is a Next.js generated CSS chunk. To eliminate it:

In `next.config.ts`, ensure experimental CSS optimization is enabled:
```ts
const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,           // ← inlines critical CSS, defers rest
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // ... other config
};
```

Also, ensure all Google Fonts are loaded via `next/font` (not `@import url()` in CSS):
```tsx
// In app/layout.tsx — CORRECT way (eliminates font render blocking):
import { Playfair_Display, Inter, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  weight: ['400', '500', '600', '700', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

// In layout return:
<html lang="en" className={`${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
```

**Remove** any `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com">` from the HTML — these are now UNUSED (PageSpeed flagged them) because fonts are served locally via `next/font`. Delete them from `layout.tsx`.

### Issue 2: LCP image not discoverable / missing fetchpriority (fix LCP)

**Problem:** The hero image has `decoding="async"` but is missing `fetchpriority="high"` and isn't being preloaded.

**Fix — in the hero `<Image>` component:**
```tsx
<Image
  src="/images/hero-home-christmas-lights.webp"
  alt="Professional Christmas light installation — Central Coast CA"
  fill
  priority                          // ← sets loading="eager" automatically
  fetchPriority="high"              // ← explicit browser hint
  quality={85}
  sizes="100vw"
  className="object-cover"
  style={{ objectPosition: 'center 65%' }}
/>
```

**Important:** `priority={true}` in Next.js automatically:
- Sets `loading="eager"` (removes lazy load)
- Adds a `<link rel="preload">` in `<head>`
- Sets `fetchpriority="high"`

So just ensure `priority` is set and `loading="lazy"` is NOT on the hero image. Do NOT manually add `loading="lazy"` anywhere on above-the-fold images.

### Issue 3: Improve image delivery — gallery images oversized (saves 91 KiB)

Already covered in Fix 4C. Summary:
- Re-compress gallery images to quality 75 at max 800px width
- Update `sizes` prop to `"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"`
- Set `quality={75}` on gallery `<Image>` components

### Issue 4: Legacy JavaScript (saves 14 KiB)

**Problem:** Polyfills for `Array.prototype.at`, `Array.prototype.flat`, `Array.prototype.flatMap`, `Object.fromEntries`, `Object.hasOwn`, `String.prototype.trimEnd`, `String.prototype.trimStart` are being bundled unnecessarily.

**Fix — update `package.json` browserslist** (or create `.browserslistrc`):
```
# .browserslistrc
last 2 Chrome versions
last 2 Firefox versions
last 2 Safari versions
last 2 Edge versions
not dead
> 0.5%
```

**Fix — update `next.config.ts`:**
```ts
const nextConfig: NextConfig = {
  compiler: {
    // Remove dead code
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Target modern browsers:
  // Next.js 14+ uses SWC which respects browserslist
};
```

### Issue 5: Reduce unused JavaScript (saves 135 KiB)

**Problem:** Three chunks have high unused byte ratios:
- `chunks/0~srtbhjxqsqa.js` — 82 KiB, 100% unused (this is a dynamically loaded chunk loading eagerly)
- `chunks/00nvzi6qb_-1r.js` — 70 KiB, 28 KiB unused (polyfill bundle)
- `chunks/0noccmdfbu35a.js` — 44 KiB, 23 KiB unused

**Fix 1 — Dynamic import heavy components:**
```tsx
// Any component using heavy libraries (framer-motion animations, accordion, etc.)
// that isn't needed above the fold → lazy load it:

import dynamic from 'next/dynamic';

// FAQ accordion (not above fold):
const FaqAccordion = dynamic(() => import('@/components/FaqAccordion'), {
  loading: () => <div className="animate-pulse h-96 bg-white/5 rounded-xl" />,
});

// Reviews carousel (not above fold):
const ReviewsSection = dynamic(() => import('@/components/sections/Reviews'));

// Blog section:
const BlogPreview = dynamic(() => import('@/components/sections/BlogPreview'));
```

**Fix 2 — Tree-shake framer-motion:**
```tsx
// Import only what you use — never import the full library:
// WRONG:
import { motion, AnimatePresence, useScroll, ... } from 'framer-motion';

// RIGHT — import only what's needed per file:
import { motion } from 'framer-motion';
// or
import { useReducedMotion } from 'framer-motion';
```

**Fix 3 — Audit `package.json` for unused dependencies:**
```bash
npx depcheck
```
Remove anything not actually imported.

### Issue 6: Avoid long main-thread tasks (2 found)

**Fix — defer non-critical third-party scripts:**
```tsx
// In layout.tsx — GA4 and any analytics:
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="lazyOnload"       // ← defers until after page is interactive
/>
<Script id="google-analytics" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### Issue 7: Accessibility — Low contrast text (fails WCAG AA)

**Problem:** Logo anchor text `<a class="font-display text-2xl font-semibold text-white">` on `#8B060A` background fails contrast.

**Fix A:** Replace the text logo with the logo image (Fix 1 resolves this entirely).

**Fix B:** If any text elements remain on the crimson header, check contrast:
- White `#FFFFFF` on `#8B060A` = 5.1:1 ratio ✅ (passes AA)
- `text-white/80` (80% opacity white) on `#8B060A` ≈ 4.0:1 ⚠️ (borderline)
- `text-white/60` on `#8B060A` ≈ 2.9:1 ❌ (fails)

**Rule:** On the crimson header, only use `text-white` (full opacity) or `text-[#E2CAA2]`. Never use opacity-reduced white (`text-white/70`, `text-white/60`, etc.) for interactive or important text.

**Fix C:** Update body background check:
```tsx
// Flagged: body.min-h-full with bg-[var(--night)] 
// Ensure any text on --night (#0A0A0F) background uses at minimum text-white/75
// For body text: use text-white/80 minimum
// For secondary text: text-white/65 is borderline — upgrade to text-white/70 minimum
// For muted text: text-white/50 on dark backgrounds FAILS contrast — use text-white/60 minimum
```

Run a contrast check after changes:
```bash
# Install axe-core CLI for automated a11y checking:
npx @axe-core/cli https://glow-installations.vercel.app/ --exit
```

### Issue 8: Unused preconnect hints — remove them

**Problem:** `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com">` are present but unused (since fonts now load via `next/font` locally).

**Fix:** Search `layout.tsx` and remove both:
```tsx
// DELETE THESE LINES from layout.tsx:
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
```

---

## ✅ FINAL VERIFICATION CHECKLIST

Run through every item before marking this pass complete:

### Logo:
- [ ] Real `Glow_Installations_Logo.png` renders in header (not text/placeholder)
- [ ] Logo is white/legible on `#8B060A` background
- [ ] Logo renders in footer
- [ ] Logo has correct `width`, `height`, and `alt` attributes

### Hero Image:
- [ ] Hero shows a beautiful Christmas lights exterior photo (NOT a thermostat)
- [ ] `priority={true}` is set on the hero `<Image>`
- [ ] `fetchPriority="high"` is set
- [ ] No `loading="lazy"` on hero image
- [ ] Image is cropped attractively (`objectPosition: 'center 65%'`)

### Brand Colors:
- [ ] Header background is `#8B060A` (crimson) in all states
- [ ] Nav links are `text-white` on header (full opacity, WCAG AA passes)
- [ ] "Get Started" button in header uses `#E2CAA2` background with `#8B060A` text
- [ ] Phone number in header is `text-[#E2CAA2]`
- [ ] Accent gold color is `#E2CAA2` (not `#F5C842`) throughout

### Images:
- [ ] All 20+ live site images downloaded and saved as WebP in `/public/images/`
- [ ] Every sub-service page uses its correct image
- [ ] Review cards show real project photos
- [ ] About page shows real team headshots for Alex and Zuar
- [ ] Gallery strip uses all 4 live site gallery images
- [ ] No image appears cropped badly or misaligned

### Missing Pages:
- [ ] `/services/santa-barbara-christmas-lights` — 200 OK ✓
- [ ] `/services/san-luis-obispo-christmas-lights` — 200 OK ✓
- [ ] Both pages appear in `sitemap.xml`
- [ ] Both pages have correct schema markup

### Page Count — All 26 pages confirmed:
| # | URL | Status |
|---|-----|--------|
| 1 | / | ✓ |
| 2 | /about | ✓ |
| 3 | /contact | ✓ |
| 4 | /faq | ✓ |
| 5 | /quote | ✓ |
| 6 | /blog | ✓ |
| 7 | /open-roles | ✓ |
| 8 | /gallery | ✓ |
| 9 | /services/residential-service | ✓ |
| 10 | /services/commercial-service | ✓ |
| 11 | /services/single-story-homes | ✓ |
| 12 | /services/multi-story-homes | ✓ |
| 13 | /services/estates | ✓ |
| 14 | /services/ranch | ✓ |
| 15 | /services/restaurants | ✓ |
| 16 | /services/santa-barbara-christmas-lights | 🔴 BUILD |
| 17 | /services/san-luis-obispo-christmas-lights | 🔴 BUILD |
| 18 | /post/the-ultimate-guide-to-... | ✓ |
| 19 | /post/why-we-use-leds-... | ✓ |
| 20 | /post/why-professional-... | ✓ |
| 21 | /open-roles/general-application | ✓ |
| 22 | /open-roles/installer-helper | ✓ |
| 23 | /open-roles/installer-lead | ✓ |
| 24 | /open-roles/sales-representative | ✓ |
| 25 | /open-roles/exterior-designer | ✓ |
| 26 | /open-roles/aliqua-tempor-do-lorem | ✓ |

### Animations & Interactivity:
- [ ] `nextjs-toploader` shows gold progress bar on page navigation
- [ ] `FadeUp` component created and applied to feature cards, review cards, team cards, section headings
- [ ] Hero entrance animation works (staggered fade-up)
- [ ] Header transitions smoothly from solid crimson → blurred crimson on scroll
- [ ] All CTA buttons have hover scale + glow effect
- [ ] `useReducedMotion()` disables all animations for accessibility

### PageSpeed — All issues resolved:
- [ ] Render-blocking CSS: `optimizeCss: true` in next.config.ts
- [ ] Google Fonts: loaded via `next/font`, NOT `@import` or `<link>` tags
- [ ] Unused preconnect hints: both font preconnects REMOVED from layout.tsx
- [ ] LCP image: `priority={true}` + `fetchPriority="high"` on hero image
- [ ] Gallery images: recompressed to quality 75, max 800px, correct `sizes` prop
- [ ] Legacy JS: `.browserslistrc` updated to modern browsers
- [ ] Unused JS: heavy components dynamically imported with `next/dynamic`
- [ ] Long main-thread tasks: GA4 loaded with `strategy="lazyOnload"`
- [ ] Low-contrast text: logo is now an image; all header text is `text-white` full opacity
