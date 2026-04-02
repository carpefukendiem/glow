# 🎨 CURSOR PROMPT: Glow Installations — Visual Design & Graphics Overhaul
> Site: https://glow-installations.vercel.app  
> Goal: Dramatically elevate graphics, full-width layouts, visual impact, and premium feel across every page

---

## 🔍 AUDIT FINDINGS — WHAT NEEDS TO BE FIXED

After reviewing the live Vercel build, here are the specific design problems to solve:

### Critical Issues:
1. **Hero section** — Plain dark overlay on a stock photo. No visual differentiation. Looks like every other contractor site.
2. **Service cards** — Flat rectangular cards with no depth, no imagery, no visual hierarchy.
3. **Features grid** — 6 plain icon + text cards in a grid. Generic, forgettable.
4. **Section transitions** — Hard cuts between sections with solid background colors. No visual flow.
5. **Sub-service pages** — Essentially text on white. No hero imagery, no visual story.
6. **Reviews section** — Plain text cards. No photographic proof, no visual credibility signals.
7. **About page** — Team cards are avatar placeholders on a plain background.
8. **FAQ page** — Accordion on white. Pricing cards are basic lists.
9. **No atmospheric photography usage** — The business installs beautiful lights but the site barely shows it.
10. **No motion or animation** — Static page with zero scroll animation or interactivity.
11. **Full-width sections aren't truly full-bleed** — Content is contained but sections don't use edge-to-edge visual design.
12. **CTA banner** — Flat crimson red box with text. Should be dramatic and memorable.

---

## 🎨 DESIGN DIRECTION: "Premium Nighttime Luxury"

**Concept:** This is a premium service. The entire site should feel like looking at a beautifully lit home on a crisp December night. Think: deep navies, rich blacks, warm amber-gold accents, pops of crimson red — the exact color palette of a stunning Christmas light display seen from the street at night.

**Aesthetic references:**
- Luxury home services (pool companies, landscape architecture firms)
- High-end hotel/resort websites
- Premium seasonal brands (think the visual language of Tiffany holiday, not Home Depot)

**Key design principles:**
- Dark, atmospheric sections interspersed with light editorial sections
- Photography is the hero — every section should have a background or adjacent photo
- Generous whitespace — the lights breathe
- Gold/amber glow effects on key elements
- Subtle bokeh/light blur CSS effects in backgrounds
- Typography that feels crafted — Playfair Display at large sizes for drama

---

## 🖼️ PHOTOGRAPHY SOURCING

**Download and optimize these Unsplash images** (all free for commercial use):

```bash
# Hero images
https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3 # House with Christmas lights at night
https://images.unsplash.com/photo-1512389142860-9c449e58a543 # Warm roofline Christmas lights
https://images.unsplash.com/photo-1576919228236-a097c32a5cd4 # Night home lit up with lights
https://images.unsplash.com/photo-1482517967863-00e15c9b44be # Commercial string lights patio
https://images.unsplash.com/photo-1543589923-4f5724f3498f # Christmas tree estate yard
https://images.unsplash.com/photo-1467293622093-9f15c96be70f # Bokeh Christmas lights background
https://images.unsplash.com/photo-1453728013993-6d66e9c9123a # Soft warm bokeh lights abstract
https://images.unsplash.com/photo-1511285560929-80b456fea0bc # Homes with lights on street
https://images.unsplash.com/photo-1491466424936-e304919aada7 # Premium home exterior night
```

**Download all using:**
```bash
# Use ?w=1920&q=85&fm=webp for hero images
# Use ?w=800&q=80&fm=webp for card thumbnails
# Save to /public/images/
```

**Also use existing CDN images from live site** (already in the Webflow CDN):
```
https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff5069352b9d932081fd6a_96in-LED-Sequoia-Wreath-PMDisplay-07266.jpg
https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66790d025123e922b5a0f7eb_jimmy-conover-fyEin27bHZ8-unsplash-Smaler.jpg
https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2a42430cc4c6e719defd8_96in-LED-Sequoia-Wreath-PMDisplay-07255-edit.jpg
https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2a4359b9dbc5deb3e9dcd_M5-LED-WW-twinkle-Icicle-Lights-Roofline-6382.jpg
https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/644f63224feacc142012e140_steven-van-elk-6yiGt1PpPcQ-unsplash.jpg
https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66790d08f6b14715f40f5f7e_juliana-malta-NH7oHjePWUs-unsplash.jpg
https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/6679180578e62421afc8a6ee_thalia-ruiz-lHu6SF2Uar0-unsplash.jpg
https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e29938901069436b3021cb_sequoia-lifestyle-LED-24inch-3.jpg
https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e297d1f4402c4e44757f07_sequoia-lifestyle-LED-48inch.jpg
```

Download all, convert to WebP, save to `/public/images/`.

---

## 🏗️ GLOBAL DESIGN SYSTEM CHANGES

### Install required packages:
```bash
npm install framer-motion @radix-ui/react-accordion class-variance-authority
```

### Update `globals.css` — Full Design System:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;600;700&display=swap');

:root {
  /* Brand palette */
  --crimson: #8B060B;
  --crimson-light: #C41E26;
  --crimson-glow: rgba(139, 6, 11, 0.25);
  --gold: #F5C842;
  --gold-dark: #D4A017;
  --gold-glow: rgba(245, 200, 66, 0.2);
  --gold-warm: #E8A020;

  /* Dark atmosphere palette */
  --night: #0A0A0F;
  --night-blue: #0D1117;
  --deep-navy: #0F1B2E;
  --navy: #162035;
  --navy-mid: #1E2D42;
  --navy-light: #253350;

  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255,255,255,0.75);
  --text-muted: rgba(255,255,255,0.5);
  --text-dark: #1A1A1A;
  --text-dark-secondary: #4A4A4A;

  /* Light surface palette */
  --surface-white: #FFFFFF;
  --surface-warm: #FBF9F6;
  --surface-cream: #F5F0E8;

  /* Glow effects */
  --glow-gold: 0 0 40px rgba(245, 200, 66, 0.3), 0 0 80px rgba(245, 200, 66, 0.1);
  --glow-crimson: 0 0 40px rgba(139, 6, 11, 0.4);
  --glow-warm: 0 0 60px rgba(232, 160, 32, 0.2);

  /* Card shadows */
  --shadow-card: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
  --shadow-card-hover: 0 12px 48px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.06);
  --shadow-card-dark: 0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2);

  /* Spacing */
  --section-padding: clamp(80px, 10vw, 140px);
  --section-padding-sm: clamp(40px, 5vw, 80px);
  --container-max: 1280px;
  --container-px: clamp(16px, 5vw, 80px);
}

/* Typography */
.font-display { font-family: 'Playfair Display', Georgia, serif; }
.font-sans { font-family: 'Inter', system-ui, sans-serif; }
.font-ui { font-family: 'Montserrat', system-ui, sans-serif; }

/* Full-bleed section base */
.section-full {
  width: 100%;
  padding: var(--section-padding) var(--container-px);
}

.section-full .container {
  max-width: var(--container-max);
  margin: 0 auto;
}

/* Atmospheric effects */
.bokeh-bg {
  position: relative;
  overflow: hidden;
}
.bokeh-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 300px 300px at 20% 30%, rgba(245, 200, 66, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 200px 200px at 80% 60%, rgba(139, 6, 11, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 400px 400px at 50% 10%, rgba(245, 200, 66, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* Grain texture overlay for depth */
.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
}

/* Gold divider line */
.divider-gold {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 24px auto;
}

/* Eyebrow label above headings */
.eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}
```

---

## 🏠 HOME PAGE — SECTION BY SECTION REDESIGN

### SECTION 1: Hero — Full-Viewport Cinematic

**Replace the current hero with this design:**

```tsx
// components/sections/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Full-bleed background photo */}
      <Image
        src="/images/hero-home-christmas-lights.webp"
        alt="Beautifully lit home with professional Christmas light installation"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Multi-layer atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/30 via-[#0A0A0F]/60 to-[#0A0A0F]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/80 via-transparent to-transparent" />

      {/* Bokeh light dots — CSS only, no images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Generate 20 bokeh dots with varied sizes, positions, animation delays */}
        {Array.from({length: 20}).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${8 + (i % 5) * 6}px`,
              height: `${8 + (i % 5) * 6}px`,
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 23 + 10) % 80}%`,
              background: i % 3 === 0
                ? 'rgba(245, 200, 66, 0.4)'
                : i % 3 === 1
                ? 'rgba(255, 220, 120, 0.3)'
                : 'rgba(232, 160, 32, 0.25)',
              filter: `blur(${4 + (i % 3) * 3}px)`,
              animationDelay: `${(i * 0.4) % 3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-16 pt-24 pb-16">
        <div className="max-w-3xl">

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 backdrop-blur-sm mb-8"
          >
            <span className="text-[var(--gold)]">★★★★★</span>
            <span className="text-white/80 text-sm font-medium">5-Star Rated · Licensed & Insured · Central Coast's #1 Installer</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6"
          >
            We Install
            <br />
            <span className="text-[var(--gold)] italic">Christmas</span>
            <br />
            Lights.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-xl md:text-2xl font-light mb-10 max-w-xl"
          >
            Residential & Commercial Properties — Paso Robles to Ventura
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--crimson)] hover:bg-[var(--crimson-light)] text-white font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,6,11,0.5)] hover:scale-105 font-ui"
            >
              Get Started →
            </Link>
            <a
              href="tel:+18057202559"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-white/60 text-white font-medium text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 font-ui"
            >
              📞 (805) 720-2559
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-white/60 text-sm"
          >
            {['Free Design Consultation', 'No Commitment Until You Approve', 'Licensed & Insured', 'COI Available'].map(item => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-[var(--gold)]">✓</span> {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>

    </section>
  );
}
```

---

### SECTION 2: Service Area Banner — Horizontal Marquee Strip

**Replace the plain text section with a full-width animated strip:**

```tsx
// components/sections/ServiceAreaBanner.tsx
const cities = ['Paso Robles', 'San Luis Obispo', 'Arroyo Grande', 'Nipomo', 'Santa Maria', 'Buellton', 'San Ynez', 'Santa Barbara', 'Montecito', 'Summerland', 'Ventura'];

export function ServiceAreaBanner() {
  return (
    <div className="relative bg-[var(--crimson)] py-4 overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--crimson)] to-transparent z-10" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--crimson)] to-transparent z-10" />

      {/* Marquee track — CSS animation, no JS library needed */}
      <div className="flex gap-0 animate-marquee whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite' }}>
        {[...cities, ...cities, ...cities].map((city, i) => (
          <span key={i} className="flex items-center gap-4 px-6 text-white/90 text-sm font-medium tracking-wide font-ui">
            <span className="text-[var(--gold)]">★</span>
            {city}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
```

---

### SECTION 3: Services Split — Full-Bleed Photo Panels

**Replace the two flat cards with dramatic split-screen photo panels:**

```tsx
// components/sections/ServicesSplit.tsx
// Two side-by-side full-height panels. On desktop: 50/50 split. On mobile: stacked.
// Each panel has a full-bleed photo, dark overlay, content centered.

export function ServicesSplit() {
  const services = [
    {
      title: 'Residential',
      tagline: 'No place like home.',
      body: 'Make it yours without all the work. From rooflines to trees, custom designed for your home.',
      price: 'Starting at $1,200',
      href: '/services/residential-service',
      image: '/images/residential-christmas-lights.webp',
      icon: '🏠',
    },
    {
      title: 'Commercial',
      tagline: 'Impress every customer.',
      body: 'Welcome guests with a unique holiday experience. Full service for any size business.',
      price: 'Starting at $1,500',
      href: '/services/commercial-service',
      image: '/images/commercial-christmas-lights.webp',
      icon: '🏢',
    },
  ];

  return (
    <section className="flex flex-col md:flex-row" style={{ minHeight: '70vh' }}>
      {services.map((svc, idx) => (
        <a
          key={svc.title}
          href={svc.href}
          className="relative flex-1 group overflow-hidden flex items-end"
          style={{ minHeight: '60vw', maxHeight: '80vh' }}
        >
          {/* Photo */}
          <Image
            src={svc.image}
            alt={`${svc.title} Christmas light installation`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />

          {/* Vertical divider line on desktop */}
          {idx === 0 && (
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/10 z-10" />
          )}

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 w-full">
            {/* Icon pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 mb-4 backdrop-blur-sm">
              <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest font-ui">{svc.title}</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-white italic mb-2">{svc.tagline}</h2>
            <p className="text-white/70 text-base md:text-lg mb-4 max-w-xs">{svc.body}</p>

            <div className="flex items-center justify-between">
              <span className="text-[var(--gold)] font-semibold text-sm font-ui">{svc.price}</span>
              <span className="inline-flex items-center gap-2 text-white text-sm group-hover:gap-3 transition-all">
                View Services <span className="text-[var(--gold)]">→</span>
              </span>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
```

---

### SECTION 4: Features — Dark Atmospheric Section with Icons

**Replace the plain 6-card grid with a dark, immersive features section:**

```tsx
// components/sections/FeaturesSection.tsx
// Dark navy background. Left side: large headline + photo. Right side: features list.

const features = [
  { icon: '✦', title: 'Custom Design', body: 'We design a display suitable for your home and your wallet before scheduling your install.' },
  { icon: '⚡', title: 'Professional Installation', body: 'Every bulb placed precisely. Licensed & insured. COI available on request.' },
  { icon: '🔧', title: 'All-Inclusive Maintenance', body: 'Anything looks off? We fix it fast, keeping your display perfect all season.' },
  { icon: '❄', title: 'Careful Removal', body: 'We remove every clip and strand, leaving your home exactly as we found it.' },
  { icon: '📦', title: 'Year-Round Storage', body: 'Your lights stored safe with us. Nothing to pack away, ever.' },
  { icon: '✓', title: 'Full Service Guaranteed', body: 'Design · Install · Maintenance · Removal · Storage. All included.' },
];

export function FeaturesSection() {
  return (
    <section className="bg-[var(--deep-navy)] relative overflow-hidden" style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>

      {/* Background bokeh */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(245,200,66,0.4) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(139,6,11,0.4) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="eyebrow">How We Work</span>
          <div className="divider-gold" />
          <h2 className="font-display text-4xl md:text-6xl text-white mt-4">
            A Hassle-Free Service,{' '}
            <span className="text-[var(--gold)] italic">Always</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
            With so much going on during the holiday season, we want to help by doing it all for you so you can focus on what matters most.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--gold)]/30 hover:bg-white/8 transition-all duration-300"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden rounded-tl-2xl">
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[24px] border-l-[var(--gold)]/30 border-b-[24px] border-b-transparent" />
              </div>

              {/* Icon */}
              <span className="text-[var(--gold)] text-2xl mb-4 block">{f.icon}</span>

              {/* Content */}
              <h3 className="text-white text-xl font-semibold mb-2 font-display">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### SECTION 5: Photo Gallery — Full-Width Masonry Strip

**Add a visually dramatic full-width photo section:**

```tsx
// components/sections/PhotoStrip.tsx
// Full-width, edge-to-edge. 4 images in a horizontal strip. 
// On hover, image scales and shows overlay.

export function PhotoStrip() {
  const photos = [
    { src: '/images/gallery-sequoia-wreath.webp', alt: 'Large sequoia wreath installation' },
    { src: '/images/gallery-icicle-roofline.webp', alt: 'LED icicle lights on roofline' },
    { src: '/images/gallery-estate-night.webp', alt: 'Large estate with Christmas lights at night' },
    { src: '/images/gallery-led-trunk-wrap.webp', alt: 'LED trunk wrap on trees' },
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row" style={{ height: 'clamp(300px, 45vw, 600px)' }}>
        {photos.map((photo, i) => (
          <div key={i} className="relative flex-1 group overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover reveal overlay */}
            <div className="absolute inset-0 bg-[var(--crimson)]/0 group-hover:bg-[var(--crimson)]/20 transition-all duration-500" />
            {/* Thin gold border on hover */}
            <div className="absolute inset-0 border-4 border-[var(--gold)]/0 group-hover:border-[var(--gold)]/40 transition-all duration-500 rounded-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### SECTION 6: Reviews — Dark Cards with Photo Proof

**Redesign the reviews section with visual impact:**

```tsx
// components/sections/Reviews.tsx
// Dark background. 3 cards in a grid. Each has a review photo (from their Google reviews).
// Large quotation mark. Star rating. Name + verified badge.

const reviews = [
  {
    name: 'Lisa R.',
    photo: '/images/review-lisa-r.webp',
    projectPhoto: '/images/review-project-halloween-display.webp',
    stars: 5,
    text: 'Zuar and Alex have installed lights on our house for the last three years. These guys are the best — professional, on time, and very detail oriented. Supporting local business and great guys is a double bonus.',
  },
  {
    name: 'Mike S.',
    photo: '/images/review-mike-s.webp',
    projectPhoto: '/images/review-project-halloween-2.webp',
    stars: 5,
    text: 'We have never seen our house look this good! We were hesitant about the price but the amount of joy we got after seeing our finished display was totally worth it. Alex and Zuar were very professional and careful.',
  },
  {
    name: 'Serena R.',
    photo: '/images/review-serena-r.webp',
    projectPhoto: '/images/review-project-christmas.webp',
    stars: 5,
    text: 'We loved working with Zuar and Alex!!! They did an awesome job putting up our Christmas lights!!! So professional and nice. We will definitely be utilizing their services again!!!',
  },
];

export function Reviews() {
  return (
    <section className="bg-[var(--night)] relative overflow-hidden" style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <span className="eyebrow">Real Customers</span>
          <div className="divider-gold" />
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            What the Central Coast Says
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="relative rounded-2xl overflow-hidden bg-[var(--navy)] border border-white/10 flex flex-col">

              {/* Project photo — top of card */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={review.projectPhoto}
                  alt={`Christmas light installation by Glow — ${review.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                {/* Google badge */}
                <div className="absolute top-3 right-3 bg-white/95 rounded-lg px-2 py-1 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  <span style={{ fontSize: '11px', color: '#333', fontWeight: 600 }}>Google</span>
                </div>
              </div>

              {/* Review content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({length: review.stars}).map((_, i) => (
                    <span key={i} className="text-[var(--gold)] text-lg">★</span>
                  ))}
                </div>

                {/* Quote mark */}
                <span className="text-[var(--gold)]/20 text-8xl font-display leading-none -mt-4 mb-2">"</span>

                {/* Text */}
                <p className="text-white/75 text-sm leading-relaxed flex-1 -mt-8">{review.text}</p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center text-black font-bold text-xs">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{review.name}</p>
                    <p className="text-white/40 text-xs">Verified Google Review</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating bar */}
        <div className="flex items-center justify-center gap-6 mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-center">
            <p className="text-[var(--gold)] text-5xl font-display font-bold">5.0</p>
            <p className="text-white/50 text-xs mt-1">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex flex-col gap-1">
            {[5,4,3,2,1].map(n => (
              <div key={n} className="flex items-center gap-2">
                <span className="text-white/40 text-xs w-2">{n}</span>
                <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-[var(--gold)]" style={{ width: n === 5 ? '100%' : '0%' }} />
                </div>
              </div>
            ))}
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-white text-2xl font-bold">4</p>
            <p className="text-white/50 text-xs mt-1">Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### SECTION 7: Community Section — Editorial Layout

**Redesign with a large-photo editorial split:**

```tsx
// components/sections/CommunitySection.tsx
// Light cream background. Left: 60% large photo with rounded corners.
// Right: 40% editorial text with large display typography.

export function CommunitySection() {
  return (
    <section className="bg-[var(--surface-cream)]" style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Photo — 60% width */}
          <div className="relative w-full lg:w-[58%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
            <Image
              src="/images/community-night-display.webp"
              alt="Beautiful neighborhood Christmas light display on the Central Coast"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            {/* Gold frame accent */}
            <div className="absolute inset-3 rounded-2xl border border-white/20 pointer-events-none" />

            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 bg-[var(--night)]/90 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <p className="text-[var(--gold)] text-3xl font-display font-bold">5★</p>
              <p className="text-white text-sm">Rated on Google</p>
            </div>
          </div>

          {/* Text — 40% width */}
          <div className="w-full lg:w-[42%]">
            <span className="eyebrow" style={{ color: 'var(--crimson)' }}>Our Why</span>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--text-dark)] leading-tight mt-4 mb-6">
              It's About More Than Just Lights.
            </h2>
            <p className="text-[var(--text-dark-secondary)] text-lg leading-relaxed mb-6">
              Why even put up lights? We like to think it's because it makes us feel like we're part of something bigger. Being part of our community and sharing in what makes the holidays special is why we exist.
            </p>
            <p className="text-[var(--text-dark-secondary)] text-base leading-relaxed mb-8">
              Join our vibrant Christmas Light-loving community and let's illuminate the season together! At Glow LLC, we're about creating magical moments that unite neighborhoods and businesses — fostering connections, spreading joy, and transforming ordinary spaces into enchanting winter wonderlands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--crimson)] hover:bg-[var(--crimson-light)] text-white rounded-full font-semibold transition-all font-ui">
                Meet the Team →
              </Link>
              <div className="flex items-center gap-3">
                {/* Social icons */}
                <a href="https://www.facebook.com/glowinstallations" target="_blank" rel="noopener" aria-label="Facebook" className="w-10 h-10 rounded-full border border-[var(--text-dark)]/20 flex items-center justify-center hover:border-[var(--crimson)] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://instagram.com/glowinstallations" target="_blank" rel="noopener" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[var(--text-dark)]/20 flex items-center justify-center hover:border-[var(--crimson)] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### SECTION 8: CTA Banner — Dramatic Full-Bleed Section

**Replace the flat crimson box with something memorable:**

```tsx
// components/sections/CtaBanner.tsx
// Full-viewport-width. Photo background of a beautifully lit home at night.
// Heavy dark overlay. Centered content with large display type.
// Two CTAs: Get Started (red pill) + Call Now (outlined white).

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center text-center" style={{ minHeight: '70vh' }}>

      {/* Background photo */}
      <Image
        src="/images/cta-banner-night-home.webp"
        alt="Stunning Christmas light installation on a Central Coast home"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered dark overlays */}
      <div className="absolute inset-0 bg-[#0A0A0F]/75" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(245,200,66,0.06) 0%, transparent 70%)'
      }} />

      {/* Animated bokeh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute rounded-full animate-pulse"
            style={{
              width: `${10 + (i % 4) * 8}px`,
              height: `${10 + (i % 4) * 8}px`,
              left: `${(i * 13 + 7) % 100}%`,
              top: `${(i * 19 + 10) % 90}%`,
              background: i % 2 === 0 ? 'rgba(245, 200, 66, 0.35)' : 'rgba(232, 100, 32, 0.2)',
              filter: `blur(${5 + (i % 3) * 4}px)`,
              animationDelay: `${(i * 0.5) % 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <span className="eyebrow block mb-4">Get Your GLOW On</span>
        <h2 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight">
          Let Your Holidays{' '}
          <span className="text-[var(--gold)] italic">Shine Bright</span>
        </h2>
        <p className="text-white/70 text-xl mb-10">
          It's more than just lights. Let us help your festivities glow this season. Schedule your installation today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[var(--crimson)] hover:bg-[var(--crimson-light)] text-white font-bold text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_60px_rgba(139,6,11,0.6)] hover:scale-105 font-ui"
          >
            Get Started →
          </Link>
          <a
            href="tel:+18057202559"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-white/40 hover:border-white text-white font-semibold text-lg rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10 font-ui"
          >
            📞 (805) 720-2559
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

## 📄 SUB-SERVICE PAGES — Visual Redesign Template

**All 7 sub-service pages currently have no imagery. Apply this template to each:**

```tsx
// Template: ServicePageHero component
// Each service page gets:
// 1. Full-viewport hero with relevant photo
// 2. A "Features at a Glance" row with 3 icon-stats
// 3. Photo + text editorial split (alternating left/right per section)
// 4. Reviews carousel (same 3-4 reviews)
// 5. Related services grid
// 6. CTA banner

// Service-specific hero photos to use:
const serviceImages = {
  'residential-service': '/images/hero-residential.webp',
  'commercial-service': '/images/hero-commercial-sequoia-wreath.webp',
  'single-story-homes': '/images/hero-single-story.webp',
  'multi-story-homes': '/images/hero-multi-story-roofline.webp',
  'estates': '/images/hero-estate-night.webp',
  'ranch': '/images/hero-ranch-grove.webp',
  'restaurants': '/images/hero-restaurant-patio.webp',
};

// Page hero pattern for every service page:
export function ServicePageHero({ title, tagline, image, price }: Props) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover object-center" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-[#0A0A0F]/10" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-16 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/40 text-sm mb-4 font-ui">
          <Link href="/" className="hover:text-white/70">Home</Link>
          <span>›</span>
          <Link href="/services/residential-service" className="hover:text-white/70">Services</Link>
          <span>›</span>
          <span className="text-white/70">{title}</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/30 mb-4">
          <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest font-ui">{price}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-white italic mb-4">{tagline}</h1>
        <p className="text-white/70 text-xl max-w-xl mb-8">{title}</p>
        <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--crimson)] hover:bg-[var(--crimson-light)] text-white font-bold rounded-full transition-all font-ui">
          Get a Free Quote →
        </Link>
      </div>
    </section>
  );
}
```

---

## 🧑 ABOUT PAGE — Team Cards Redesign

```tsx
// Replace plain name/title cards with premium profile cards

// Each team member card:
// - Tall card with photo area (gradient background for placeholder, real photo if available)
// - Crimson/gold accent bar at top
// - Name in Playfair Display
// - Title in Montserrat
// - Brief fun bio line
// Real photos: Alex Nava (/images/team-alex-nava.webp), Zuar (/images/team-zuar-mendoza.webp)
// Others: elegant placeholder with gold initials on dark navy

// Values section: 3 full-width panels with background photos and overlay text
// Safety → use a photo of Christmas lights being installed
// Delivering Joy → use a photo of a completed display
// Community → use a neighborhood photo
```

---

## 📋 FAQ PAGE — Visual Upgrade

```tsx
// Pricing cards:
// - NOT flat text lists
// - Premium glassmorphism cards on dark navy background
// - Large dollar amount displayed prominently
// - Feature list with gold checkmarks
// - "Most Popular" badge on Commercial card
// - Pulsing glow effect on card border for the recommended plan

// Accordion items:
// - On dark background (deep navy) 
// - Gold expand/collapse indicators
// - Subtle border animations on open
// - Answer text uses lighter color for good readability

// Section intro: Full-width dark photo banner with the FAQ headline
```

---

## 📱 MOBILE DESIGN REQUIREMENTS

Apply these patterns on all pages at mobile breakpoints:

```tsx
// 1. Mobile sticky bottom CTA bar (already exists but improve it):
// Glass morphism effect, centered, full-width minus 32px padding
// "Call Now" + "Get a Quote" side by side with icons

// 2. Hero on mobile:
// Text 48px (not 80px) — scale down with clamp()
// Both CTA buttons full-width stacked
// Trust bar wraps to 2 columns

// 3. Service split on mobile:
// Stack vertically, each panel 60vw height
// Keep photo + overlay content format

// 4. Feature cards on mobile:
// Single column
// Reduce padding from 32px to 20px

// 5. Reviews on mobile:
// Horizontal scroll carousel using scroll-snap
// Show 1.2 cards (peek of next card visible)
```

---

## 🌐 HEADER & NAVIGATION REDESIGN

```tsx
// Header changes:
// 1. Transparent on hero, transitions to dark navy/blur on scroll
// 2. Logo: full Glow Installations logo, white version on dark bg
// 3. Nav links: Montserrat 13px, letter-spacing 0.05em, white/80
// 4. "Get Started →" button: crimson pill with subtle glow on hover
// 5. Phone number: gold color on desktop
// 6. Services dropdown: dark navy card, 2-column layout showing all 7 service pages
//    with mini descriptions, slides down smoothly

// Scroll behavior:
// useScrollPosition hook → when y > 80px:
//   - background: rgba(10, 10, 15, 0.85) + backdrop-blur(20px)
//   - border-bottom: 1px solid rgba(255,255,255,0.08)
//   - transition: all 0.3s ease
```

---

## 🦶 FOOTER REDESIGN

```tsx
// Full-bleed dark footer with:
// 1. Top area: Full-width divider with "Get Your GLOW On" text centered + gold line
// 2. Main footer area: Dark navy (#0F1B2E)
// 3. Logo + tagline on left (white logo)
// 4. Navigation columns in center
// 5. Service area cities on right
// 6. Social icons: circular bordered buttons
// 7. Bottom bar: copyright + "Made with ❤️ on the Central Coast"
// 8. Subtle background texture matching the grain effect
// 9. Gold gradient line at very top of footer
```

---

## ✅ FINAL DESIGN CHECKLIST

### Typography:
- [ ] All major headings use `Playfair Display` — loaded via `next/font/google`
- [ ] All UI elements (buttons, nav, badges, labels) use `Montserrat`
- [ ] Body copy uses `Inter`
- [ ] Headings above 48px use `font-weight: 700` or `900` for drama
- [ ] Italic `Playfair Display` used for emotional emphasis words (e.g., "Christmas", "Shine", "Glow")

### Atmospheric Effects (CSS only, no heavy libraries):
- [ ] Bokeh dot animations on hero and CTA sections
- [ ] Radial gradient glow effects behind CTAs and headlines
- [ ] Gold divider lines between major sections
- [ ] `backdrop-blur` on glass cards and nav
- [ ] Grain texture overlay on dark sections (SVG data URI, performance safe)

### Photos:
- [ ] Every page has a full-bleed hero photo
- [ ] All photos downloaded + converted to WebP
- [ ] Hero photos use `priority={true}` + `loading="eager"`
- [ ] All photos have explicit `width`, `height`, `alt`, `sizes`
- [ ] Review cards show actual project photos from the Google reviews

### Framer Motion Animations (apply site-wide):
- [ ] Hero content: staggered fade-up on load (delay 0, 0.1, 0.25, 0.35, 0.5s)
- [ ] Feature cards: `whileInView` fade-up with stagger
- [ ] Service cards: `whileInView` fade-up
- [ ] Review cards: `whileInView` fade-up with stagger
- [ ] All animations: `viewport={{ once: true, margin: '-50px' }}`
- [ ] `prefers-reduced-motion` respected: wrap all Framer Motion with `useReducedMotion()`

### Full-Width Sections:
- [ ] Hero: `min-h-screen`, photo fills entire viewport edge-to-edge
- [ ] Service split: no side padding, photo panels touch viewport edges
- [ ] Photo strip: zero padding, images flush to edges
- [ ] CTA banner: full viewport width, photo edge-to-edge
- [ ] Footer: full width
- [ ] Marquee banner: full width, no container constraints
- [ ] **Content inside sections**: max-width `1280px`, centered, with `clamp(16px, 5vw, 80px)` padding

### Dark/Light Section Rhythm (maintain this order on homepage):
1. 🌙 DARK — Hero (full photo)
2. 🔴 CRIMSON — Marquee service area strip
3. 🌙 DARK — Services split (photo panels)
4. 🌙 DARK NAVY — Features grid
5. ⬜ NONE — Photo strip (pure imagery)
6. 🌙 DARK — Reviews
7. 🤍 CREAM — Community editorial
8. 🌙 DARK — CTA banner (full photo)
9. 🌙 DARK NAVY — Footer
