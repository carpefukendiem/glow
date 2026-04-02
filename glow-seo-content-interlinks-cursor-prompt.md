# 🔍 CURSOR PROMPT: Glow Installations — Full SEO Content & Internal Linking Pass
> Dev site: https://glow-installations.vercel.app
> Scope: Beef up thin content on every page, weave in target keywords naturally, add 3–4 internal links per page
> Do NOT change any designs, layouts, or functionality — content and links only

---

## GROUND RULES

1. **All keywords must read naturally** — never keyword-stuff. Weave them into real sentences.
2. **Internal links use descriptive anchor text** — never "click here" or "learn more".
3. **Every page must have 3–4 internal links** minimum pointing to related pages.
4. **SEO copy goes in the existing content slots** — body text, section descriptions, meta tags, alt text, schema `description` fields.
5. **Do not invent fake reviews, fake stats, or fake testimonials.**
6. **Tone:** Professional, warm, local. Use "Central Coast" and specific city names often.

---

## INTERNAL LINK ARCHITECTURE (site-wide map)

Use this map to decide which pages link to which. Every page should both give and receive links.

```
HOME → residential-service, commercial-service, quote, faq, about, blog
RESIDENTIAL → single-story-homes, multi-story-homes, estates, ranch, quote, faq
COMMERCIAL → restaurants, quote, faq, residential-service
SINGLE-STORY → residential-service, quote, faq, multi-story-homes
MULTI-STORY → residential-service, quote, faq, single-story-homes, estates
ESTATES → residential-service, quote, faq, multi-story-homes, ranch
RANCH → residential-service, quote, faq, estates
RESTAURANTS → commercial-service, quote, faq
FAQ → quote, residential-service, commercial-service
QUOTE → faq, residential-service, commercial-service
ABOUT → quote, residential-service, commercial-service, open-roles
CONTACT → quote, residential-service, commercial-service, faq
BLOG (index) → all 3 posts, residential-service, quote
POST 1 (Ultimate Guide) → residential-service, commercial-service, quote, faq
POST 2 (LEDs) → faq, quote, residential-service
POST 3 (Santa Barbara) → santa-barbara-christmas-lights, quote, residential-service, faq
SANTA BARBARA GEO → residential-service, commercial-service, quote, faq
SLO GEO → residential-service, commercial-service, quote, faq
OPEN-ROLES → about, quote
GALLERY → residential-service, commercial-service, quote
```

---

## PAGE 1: HOME `/`

### Target keywords to weave in naturally:
`christmas light installers near me` · `professional christmas light installation` · `christmas lighting company` · `christmas lights installation company` · `outdoor lighting installers` · `holiday light installers near me` · `christmas lighting installers` · `install christmas lights near me`

### Update `src/app/page.tsx` content:

**Hero subheading** (below H1):
```
Residential & Commercial Properties — Paso Robles to Ventura
```
→ Expand to:
```
The Central Coast's trusted christmas lighting company serving residential and commercial 
properties from Paso Robles to Ventura. Professional christmas light installation, 
design, and full-service care — every season.
```

**Service area section** — replace current single line with:
```tsx
<p>
  As the Central Coast's go-to christmas lights installation company, we service 
  homeowners and businesses from Paso Robles through San Luis Obispo, Arroyo Grande, 
  Santa Maria, Santa Barbara, and everywhere in between. Whether you're looking to 
  install christmas lights near me or need a full commercial holiday display, Glow 
  Installations handles every detail.
</p>
```

**"A Hassle-Free Service, Always" section intro** — expand:
```tsx
// Current text (keep it, add paragraph after):
<p className="...existing...">
  With so much going on during the holiday season, we want to help by doing it all for 
  you so you can focus on what matters most to you.
</p>
<p className="text-white/65 text-base mt-4 max-w-2xl mx-auto">
  Unlike other outdoor lighting installers, we don't just hang lights and leave. 
  Every Glow installation includes a custom design consultation, professional 
  installation by trained christmas light contractors, ongoing maintenance 
  throughout the season, careful post-season removal, and year-round storage. 
  It's truly a full-service experience from a holiday light installation company 
  that cares about your home as much as you do.
</p>
```

**Community section** — expand the second paragraph:
```tsx
// After "enchanting winter wonderlands!":
<p className="text-white/65 text-base mt-4">
  Since our founding, Glow has become one of the most trusted names in professional 
  holiday light installation on the Central Coast. We've transformed hundreds of 
  homes and businesses into luminous landmarks that neighbors slow down to admire. 
  When you're ready to stop being the house without lights, our christmas light 
  installation service is just one call away.
</p>
```

**Internal links to add on home page (4 total):**
```tsx
// After the service cards section, add a "Explore Our Services" text block:
<p className="text-white/65 text-center mt-6 text-sm">
  Whether you need{' '}
  <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline">
    residential christmas light installation
  </Link>
  {' '}for your home,{' '}
  <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline">
    commercial holiday lighting
  </Link>
  {' '}for your business, or want to explore{' '}
  <Link href="/faq" className="text-[#E2CAA2] hover:underline">
    our pricing and services
  </Link>
  {' '}— we're here to help.{' '}
  <Link href="/quote" className="text-[#E2CAA2] hover:underline font-semibold">
    Get your free outdoor lighting quote today.
  </Link>
</p>
```

---

## PAGE 2: RESIDENTIAL SERVICE `/services/residential-service`

### Target keywords:
`home christmas lights installation` · `house christmas lights installation` · `professional christmas lights` · `hanging exterior christmas lights` · `exterior christmas light installation` · `hanging christmas lights outdoor` · `home holiday lighting installation` · `lights installed on house` · `we hang holiday lights`

### Update `src/app/services/residential-service/page.tsx`:

**Add a full "Why Glow" body section** after the intro text (this page currently has very thin content):

```tsx
<section className="bg-[var(--surface-warm)] py-16 px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      The Central Coast's Premier Home Christmas Lights Installation Service
    </h2>

    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        Getting professional christmas lights installed on your house shouldn't be 
        stressful — and with Glow Installations, it isn't. We are a full-service 
        christmas lighting company dedicated to transforming Central Coast homes into 
        stunning holiday displays that turn heads all season long. From custom 
        designed roofline lighting to outdoor holiday lights that wrap your trees 
        and illuminate your lawn, we handle every aspect of your exterior christmas 
        light installation so you don't have to lift a finger.
      </p>

      <p>
        Our team of trained christmas light contractors begins with a complimentary 
        design consultation where we assess your home's architecture, discuss your 
        vision, and recommend a layout that fits both your aesthetic goals and your 
        budget. We use only commercial-grade LED fixtures — the same professional 
        christmas lights used on commercial properties — because we believe every home 
        deserves the brightest, most energy-efficient display possible.
      </p>

      <p>
        Hanging exterior christmas lights on a two-story home or complex roofline is 
        not a weekend DIY project — it's a safety risk. Our licensed and insured 
        installers are trained to work at height with proper equipment, protecting 
        your home and your family. Every installation includes our signature clip 
        system that attaches without damaging gutters, fascia boards, or shingles. 
        We hang christmas lights outdoors the right way, every time.
      </p>

      <p>
        What makes us different from other companies that hang christmas lights? 
        We stay with you all season. If a strand goes dark, a clip comes loose, or 
        the weather causes any issue with your display, we come back and fix it — 
        at no additional charge. This all-inclusive maintenance is part of every 
        home christmas lights installation package we offer. And when the season ends, 
        we return to carefully remove everything and store your lights for next year.
      </p>

      <p>
        Ready to have professional holiday lights installed on your house this 
        season? Explore our specific home packages below or{' '}
        <Link href="/quote" className="text-[var(--crimson)] hover:underline font-medium">
          request your free residential lighting quote
        </Link>.
      </p>
    </div>

  </div>
</section>
```

**Update sub-service cards descriptions:**
```tsx
// Single-Story card:
description: "Perfect for single-level homes — roofline, windows, pathways, and lawn lighting installed safely and beautifully."

// Multi-Story card:
description: "Heights are no problem. Our trained team handles hanging exterior christmas lights on any multi-story home."

// Estates card:
description: "Large properties deserve a grand display. Custom christmas light design for estates and luxury homes."

// Ranch card:
description: "From fence lines to grove trees — outdoor holiday lights installation built for wide-open ranch properties."
```

**Internal links on this page (4 total):**
```tsx
// In the body section above, add these as in-text links:
// 1. "request your free residential lighting quote" → /quote  (already in copy above)
// 2. "Estates" card → /services/estates
// 3. "single-story homes" card → /services/single-story-homes
// 4. In the meta description / schema, + in a footer CTA blurb:
<p className="text-white/65 text-sm mt-6 text-center">
  Have questions about pricing?{' '}
  <Link href="/faq" className="text-[#E2CAA2] hover:underline">
    Read our FAQ
  </Link>
  {' '}or check out our{' '}
  <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline">
    commercial holiday lighting services
  </Link>.
</p>
```

---

## PAGE 3: COMMERCIAL SERVICE `/services/commercial-service`

### Target keywords:
`commercial christmas lights` · `commercial holiday lighting` · `commercial holiday lighting installation` · `commercial outdoor lighting companies near me` · `christmas light contractors` · `holiday lighting company` · `holiday lighting contractors`

### Add full body section:

```tsx
<section className="bg-[var(--deep-navy)] py-16 px-6 relative overflow-hidden">
  <div className="max-w-4xl mx-auto relative z-10">

    <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
      Professional Commercial Christmas Light Installation on the Central Coast
    </h2>

    <div className="space-y-5 text-white/70 text-lg leading-relaxed">
      <p>
        When customers arrive at your business during the holiday season, first 
        impressions matter. Glow Installations is one of the most trusted commercial 
        holiday lighting companies on the Central Coast, providing full-service 
        commercial christmas light installation for restaurants, retail centers, 
        hotels, office complexes, and multi-tenant properties.
      </p>

      <p>
        Our commercial holiday lighting packages are designed for businesses that 
        need a polished, professional look without the liability of DIY ladder work. 
        As licensed and insured christmas light contractors, we handle everything 
        from the initial commercial christmas light design to installation, ongoing 
        maintenance, professional takedown, and off-site storage. You focus on 
        serving your customers — we handle the lights.
      </p>

      <p>
        Commercial properties have unique needs that set them apart from residential 
        work. Longer linear runs of roofline lighting, larger trees and architectural 
        features, interior Christmas tree installation, and stricter timelines for 
        installation and removal are all part of our daily commercial workflow. 
        As an experienced holiday lighting company, we've worked with businesses 
        of every size and type across San Luis Obispo, Santa Barbara, and the 
        surrounding Central Coast communities.
      </p>

      <p>
        Our commercial outdoor lighting packages start at $1,500 for 150 linear feet 
        and include upgraded LED fixtures, custom color options, a pre-programmed 
        timer, and all of the maintenance and removal services included with our 
        residential packages. Multi-year commercial agreements are available and 
        include additional perks — ask about them when you reach out.
      </p>

      <p>
        Looking for commercial outdoor lighting companies near you on the Central 
        Coast?{' '}
        <Link href="/quote" className="text-[#E2CAA2] hover:underline font-medium">
          Request a commercial lighting quote
        </Link>
        {' '}and one of our team members will reach out within 24 hours.
      </p>
    </div>

  </div>
</section>
```

**Internal links (4 total):**
```tsx
// 1. "Request a commercial lighting quote" → /quote (in copy)
// 2. Restaurant-specific services:
<p className="text-white/60 text-sm mt-8 text-center">
  We specialize in{' '}
  <Link href="/services/restaurants" className="text-[#E2CAA2] hover:underline">
    restaurant holiday lighting installation
  </Link>
  . Have questions?{' '}
  <Link href="/faq" className="text-[#E2CAA2] hover:underline">
    See our commercial FAQ
  </Link>
  {' '}or browse our{' '}
  <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline">
    residential christmas light services
  </Link>.
</p>
```

---

## PAGE 4: SINGLE-STORY HOMES `/services/single-story-homes`

### Target keywords:
`hanging christmas lights outside` · `hang christmas lights near me` · `gutter hanging christmas lights` · `put up christmas lights` · `christmas lights setup` · `house lights installation` · `christmas lights hung near me`

### Replace thin content with full body:

```tsx
<section className="py-16 px-6 bg-[var(--surface-warm)]">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      Single-Story Home Christmas Light Installation — Easy Access, Stunning Results
    </h2>

    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        Single-story homes are perfectly suited for dramatic christmas light setups — 
        accessible rooflines, easy window and door framing, and ground-level 
        landscaping all combine to create some of the most eye-catching displays on 
        the block. If you've been thinking about having christmas lights hung on your 
        home this season, a single-story property is the fastest and most 
        straightforward installation we offer.
      </p>

      <p>
        Our single-story christmas lights setup typically covers your roofline 
        (straight or gabled), fascia boards, window frames, entry doors, and any 
        front-facing hedges or trees. We specialize in gutter hanging christmas 
        lights using a clip system that leaves zero marks on your gutters, 
        eliminating the most common DIY damage we see when homeowners attempt to 
        put up christmas lights themselves.
      </p>

      <p>
        Every single-story house lights installation begins with a free design 
        consultation. We'll walk your property, measure your linear footage, and 
        design a layout that maximizes impact within your budget. Our standard 
        package uses warm white C9 LED bulbs with 15-inch spacing — the same 
        commercial-grade lights used on estates and commercial properties. Custom 
        colors and icicle-style lighting are also available.
      </p>

      <p>
        Wondering how much it costs to hang christmas lights near you? Single-story 
        residential installations start at $1,200 for up to 150 linear feet — 
        which typically covers the full roofline and entry of most Central Coast 
        homes. That price includes design, installation, maintenance, removal, 
        and storage. No hidden fees.
      </p>
    </div>

  </div>
</section>
```

**Internal links (4 total):**
```tsx
<p className="text-[var(--text-dark-secondary)] text-sm mt-8">
  Live in a two-story home?{' '}
  <Link href="/services/multi-story-homes" className="text-[var(--crimson)] hover:underline">
    See our multi-story installation service.
  </Link>
  {' '}Ready to get started?{' '}
  <Link href="/quote" className="text-[var(--crimson)] hover:underline font-semibold">
    Get a free quote
  </Link>
  {' '}or{' '}
  <Link href="/faq" className="text-[var(--crimson)] hover:underline">
    read our FAQ
  </Link>
  {' '}to learn more about what's included. You can also browse our{' '}
  <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
    full residential christmas light services
  </Link>.
</p>
```

---

## PAGE 5: MULTI-STORY HOMES `/services/multi-story-homes`

### Target keywords:
`hanging exterior christmas lights` · `professional exterior christmas lights` · `outdoor christmas lights professional` · `professional light installation` · `outdoor professional christmas lights`

### Replace thin content with full body:

```tsx
<section className="py-16 px-6 bg-[var(--surface-warm)]">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      Multi-Story Home Christmas Lights — Professional Installation at Any Height
    </h2>

    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        Multi-story homes offer some of the most dramatic opportunities for 
        professional exterior christmas lights — towering rooflines, cascading 
        icicle strands, and illuminated upper-story windows create a display 
        that single-story homes simply cannot match. But hanging exterior christmas 
        lights at height is also one of the most dangerous DIY tasks a homeowner 
        can attempt. Ladders, sloped rooflines, and shifting weight distribution 
        cause thousands of holiday injuries every year.
      </p>

      <p>
        Glow Installations provides fully professional christmas light installation 
        for multi-story homes across the Central Coast. Our team is trained for 
        elevated work, uses proper extension ladders and safety equipment, and 
        carries full liability insurance — so if anything goes wrong (it won't), 
        you're completely covered. We bring the same professional light installation 
        standards to a 30-foot gabled roofline that we bring to a single-story ranch.
      </p>

      <p>
        "Fear heights no more!" isn't just a tagline for us — it's our value 
        proposition. When you hire Glow for your multi-story christmas lights, 
        you don't have to get on a ladder once. We design, install, maintain, 
        remove, and store everything. Our outdoor professional christmas lights 
        installation for multi-story homes is priced on a linear-footage basis, 
        with roofline complexity taken into account. Schedule a free assessment 
        and we'll provide an exact quote within 24 hours.
      </p>
    </div>

  </div>
</section>
```

**Internal links (4 total):**
```tsx
<p className="text-[var(--text-dark-secondary)] text-sm mt-8">
  <Link href="/services/single-story-homes" className="text-[var(--crimson)] hover:underline">
    Have a single-story home? See that service instead.
  </Link>
  {' '}For large properties, explore our{' '}
  <Link href="/services/estates" className="text-[var(--crimson)] hover:underline">
    estate christmas light installation.
  </Link>
  {' '}
  <Link href="/quote" className="text-[var(--crimson)] hover:underline font-semibold">
    Get a free multi-story quote
  </Link>
  {' '}or check{' '}
  <Link href="/faq" className="text-[var(--crimson)] hover:underline">
    our FAQ for pricing details.
  </Link>
</p>
```

---

## PAGE 6: ESTATES `/services/estates`

### Target keywords:
`custom christmas lights` · `christmas light design` · `christmas light decorators near me` · `christmas decoration contractors`

### Replace thin content with full body:

```tsx
<section className="py-16 px-6 bg-[var(--surface-warm)]">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      Estate Christmas Light Installation — Custom Design for Grand Properties
    </h2>

    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        Estates and large luxury properties deserve a christmas light installation 
        that matches their scale and character. As Central Coast christmas light 
        decorators with experience on properties of all sizes, Glow Installations 
        excels at creating fully custom christmas lights displays that complement 
        your home's architecture, landscaping, and surroundings.
      </p>

      <p>
        Our estate christmas light design process is comprehensive. We visit your 
        property for a thorough walkthrough, document key architectural features, 
        measure all rooflines and tree canopies, and create a custom design 
        proposal before a single clip is installed. Unlike other christmas 
        decoration contractors, we don't just show up with a truck full of lights 
        — we bring a thoughtful plan that turns your vision into reality.
      </p>

      <p>
        Large-estate installations often include multiple distinct zones: grand 
        entry gates, extended driveway borders, mature oak and eucalyptus tree 
        wrapping, multi-wing rooflines, pool and patio lighting, and interior 
        Christmas tree installation. Themed lighting using custom color palettes 
        is also available for estates that want to go beyond traditional warm white.
      </p>

      <p>
        Estate packages are priced based on the scope of the installation — 
        typically starting at $3,500 for large properties — and include all 
        of our standard full-service features: design, install, maintenance, 
        removal, and storage.
      </p>
    </div>

  </div>
</section>
```

**Internal links (4 total):**
```tsx
<p className="text-[var(--text-dark-secondary)] text-sm mt-8">
  For large rural properties, see our{' '}
  <Link href="/services/ranch" className="text-[var(--crimson)] hover:underline">
    ranch christmas light installation service.
  </Link>
  {' '}All estates start with a free consultation —{' '}
  <Link href="/quote" className="text-[var(--crimson)] hover:underline font-semibold">
    request yours today.
  </Link>
  {' '}Questions about our process?{' '}
  <Link href="/faq" className="text-[var(--crimson)] hover:underline">
    Read our FAQ
  </Link>
  {' '}or browse{' '}
  <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
    all residential services.
  </Link>
</p>
```

---

## PAGE 7: RANCH `/services/ranch`

### Target keywords:
`christmas light lawn` · `outdoor holiday lights installation` · `tree light installation near me` · `christmas tree light installers near me` · `christmas tree lights installation near me`

### Replace thin content with full body:

```tsx
<section className="py-16 px-6 bg-[var(--surface-warm)]">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      Ranch Christmas Light Installation — Outdoor Holiday Lights for Wide-Open Properties
    </h2>

    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        Ranch properties present a beautiful challenge: long fence lines, scattered 
        oak groves, barn structures, and sprawling driveways that all deserve 
        outdoor holiday lights installation — but on a scale that most christmas 
        light companies aren't equipped for. Glow Installations has the equipment, 
        crew size, and experience to light up ranches of any size on the Central 
        Coast.
      </p>

      <p>
        Our ranch christmas light packages focus on the elements that define 
        the property: extended fence line lighting that guides visitors down your 
        driveway, tree light installation on your native oaks and landscape trees, 
        christmas light lawn accents using ground stakes and pathway markers, 
        and roofline lighting on the main house, barn, or guest structures. 
        We bring enough crew and enough lights to do it right in a single visit.
      </p>

      <p>
        We are among the only christmas tree light installers on the Central Coast 
        with the equipment to safely install lighting on large, mature trees — 
        using commercial-grade extension poles and lift equipment when needed. 
        If you've been looking for tree light installation near you that can handle 
        a 60-foot valley oak, we're your team.
      </p>

      <p>
        Ranch installations are quoted on a project basis after a property walkthrough. 
        Most ranch packages range from $2,500 to $8,000+ depending on property size 
        and scope. Every installation includes our standard maintenance, removal, 
        and storage package.
      </p>
    </div>

  </div>
</section>
```

**Internal links (4 total):**
```tsx
<p className="text-[var(--text-dark-secondary)] text-sm mt-8">
  Manage a large estate?{' '}
  <Link href="/services/estates" className="text-[var(--crimson)] hover:underline">
    See our estate installation service.
  </Link>
  {' '}
  <Link href="/quote" className="text-[var(--crimson)] hover:underline font-semibold">
    Request a free ranch quote
  </Link>
  {' '}or read{' '}
  <Link href="/faq" className="text-[var(--crimson)] hover:underline">
    our FAQ for what's included.
  </Link>
  {' '}All ranch packages fall under our{' '}
  <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
    full residential installation service.
  </Link>
</p>
```

---

## PAGE 8: RESTAURANTS `/services/restaurants`

### Target keywords:
`commercial holiday lighting` · `light installation service` · `holiday lighting contractors` · `holiday lighting company` · `christmas light hanging service`

### Replace Lorem Ipsum / thin content with full copy:

```tsx
// H1:
<h1>Restaurant Holiday Lighting & Decor Services</h1>

// Full body section:
<section className="py-16 px-6 bg-[var(--surface-warm)]">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      Create a Magical Holiday Atmosphere for Your Diners
    </h2>

    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        The holiday season is one of the most competitive times of year for 
        restaurants on the Central Coast. Guests are choosing where to spend 
        their holiday dinners, work parties, and family celebrations — and the 
        right commercial holiday lighting can be the difference between a 
        full dining room and an empty one. Glow Installations provides 
        professional christmas light installation for restaurants across 
        San Luis Obispo, Santa Barbara, and the surrounding communities.
      </p>

      <p>
        Our restaurant christmas light hanging service includes everything 
        from exterior roofline and patio string lighting to interior 
        garland, Christmas tree installation, and window displays. As a 
        full-service holiday lighting company, we design a cohesive look 
        that matches your restaurant's brand and ambiance — whether that's 
        warm Edison-style bistro lighting for a romantic dinner spot or 
        bright, festive commercial holiday lighting for a family restaurant.
      </p>

      <p>
        As experienced holiday lighting contractors, we understand the 
        operational demands restaurants face during the season. That's why 
        we schedule installations during off-hours, complete setup quickly 
        without disrupting your service, and provide a direct line to our 
        maintenance team if anything needs attention mid-season. Our 
        light installation service for restaurants is turnkey — you approve 
        the design, we handle everything else.
      </p>

      <p>
        Restaurant packages start at $1,500 for exterior lighting and 
        include complimentary LED upgrades, custom color options, a 
        preprogrammed timer, maintenance throughout the season, careful 
        removal, and storage. Multi-location restaurant groups receive 
        preferred pricing.
      </p>
    </div>

    {/* Services included grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      {[
        'Exterior roofline & awning lighting',
        'Patio & outdoor dining string lights',
        'Interior Christmas tree installation',
        'Window & entrance displays',
        'Garland & wreath installation',
        'Scheduled maintenance all season',
      ].map(item => (
        <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--surface-cream)] border border-[var(--text-dark)]/10">
          <span className="text-[var(--crimson)] text-lg">✓</span>
          <span className="text-[var(--text-dark-secondary)] text-sm">{item}</span>
        </div>
      ))}
    </div>

  </div>
</section>
```

**Internal links (4 total):**
```tsx
<p className="text-[var(--text-dark-secondary)] text-sm mt-8">
  Browse all of our{' '}
  <Link href="/services/commercial-service" className="text-[var(--crimson)] hover:underline">
    commercial christmas light installation services.
  </Link>
  {' '}
  <Link href="/quote" className="text-[var(--crimson)] hover:underline font-semibold">
    Request a restaurant lighting quote
  </Link>
  {' '}or{' '}
  <Link href="/faq" className="text-[var(--crimson)] hover:underline">
    read our FAQ
  </Link>
  {' '}to learn about commercial pricing. Need residential service?{' '}
  <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
    See our home installation packages.
  </Link>
</p>
```

---

## PAGE 9: FAQ `/faq`

### Target keywords:
`christmas light service` · `christmas light services near me` · `christmas light company near me` · `companies that put up christmas lights` · `companies that hang christmas lights` · `pro christmas lights`

### Add an intro paragraph at the top of the FAQ page (before the pricing cards):

```tsx
<section className="bg-[#344336] py-12 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <span className="eyebrow">Common Questions</span>
    <h1 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4">
      Frequently Asked Questions About Our Services
    </h1>
    <p className="text-white/70 text-lg">
      We're one of the most trusted christmas light companies near you on the 
      Central Coast. Here's everything you need to know about how our christmas 
      light service works — from pricing and scheduling to what's included in 
      every install. If you're comparing companies that hang christmas lights in 
      the area, we're confident our full-service approach stands apart.
    </p>
  </div>
</section>
```

**Internal links on FAQ page (4 total):**

Add a "Ready to get started?" section after the last FAQ item and before the question form:
```tsx
<div className="text-center py-10 border-t border-white/10 mt-10">
  <p className="text-white/70 text-base mb-4">
    Still have questions? Our team of pro christmas light installers is happy to 
    walk you through the process.
  </p>
  <div className="flex flex-wrap justify-center gap-4 text-sm">
    <Link href="/quote" className="text-[#E2CAA2] hover:underline font-semibold">
      Get a free outdoor lighting quote →
    </Link>
    <span className="text-white/30">|</span>
    <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline">
      Residential services
    </Link>
    <span className="text-white/30">|</span>
    <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline">
      Commercial services
    </Link>
    <span className="text-white/30">|</span>
    <Link href="/contact" className="text-[#E2CAA2] hover:underline">
      Contact us
    </Link>
  </div>
</div>
```

---

## PAGE 10: QUOTE `/quote`

### Target keywords:
`professional christmas lights installation near me` · `outdoor christmas lights installation near me` · `install christmas lights near me` · `light installation service near me` · `holiday light company near me`

### Update the quote page header text (already being fixed in the polish pass):

```tsx
// H1 (already set to this — verify it's correct):
"Get Your Free Outdoor Lighting Quote"

// Subtitle — update to:
<p className="text-white/70 text-lg mt-3 max-w-xl mx-auto">
  Glow Installations is your local professional christmas light installation 
  company near you on the Central Coast. No commitment required — we'll send 
  a custom outdoor lighting proposal within 24 hours of your inquiry.
</p>
```

**Add a "What Happens Next" 3-step process below the form:**
```tsx
<div className="max-w-3xl mx-auto mt-16">
  <h2 className="font-display text-2xl text-white text-center mb-8">
    What Happens After You Submit
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { step: '01', title: 'We Call You', body: 'A member of our team calls within 24 hours to confirm details and schedule a free on-site consultation.' },
      { step: '02', title: 'Custom Design', body: 'We assess your property, design your display, and provide a transparent written quote — no surprises.' },
      { step: '03', title: 'We Handle Everything', body: 'You approve the design, we handle installation, maintenance, removal, and storage. That\'s it.' },
    ].map(s => (
      <div key={s.step} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
        <span className="text-[#E2CAA2] text-3xl font-display font-bold block mb-2">{s.step}</span>
        <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
        <p className="text-white/60 text-sm">{s.body}</p>
      </div>
    ))}
  </div>
</div>
```

**Internal links on quote page (3 total, below the form):**
```tsx
<p className="text-white/50 text-sm text-center mt-8">
  Want to learn more first?{' '}
  <Link href="/faq" className="text-[#E2CAA2] hover:underline">
    Read our FAQ
  </Link>
  {' '}or browse{' '}
  <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline">
    residential packages
  </Link>
  {' '}and{' '}
  <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline">
    commercial packages.
  </Link>
</p>
```

---

## PAGE 11: ABOUT `/about`

### Target keywords:
`christmas lighting company` · `christmas light contractors` · `professional holiday light installation` · `outdoor lighting installers`

### Add a body section above the team cards:

```tsx
<section className="bg-[var(--surface-warm)] py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      Central Coast Christmas Light Contractors With Heart
    </h2>
    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        Glow Installations was founded by Alex Nava and Zuar Aaron Mendoza with a 
        simple belief: the holidays should feel magical, not stressful. As 
        Central Coast natives, they saw a gap in the market for professional 
        holiday light installation that combined true craftsmanship with genuine 
        community values — and built Glow to fill it.
      </p>
      <p>
        Since our founding, we've grown into one of the most recognized christmas 
        lighting companies on the Central Coast, serving homeowners and businesses 
        from Paso Robles to Ventura. Our team of trained outdoor lighting installers 
        brings the same attention to detail to a modest single-story roofline as 
        they do to a multi-acre estate display.
      </p>
      <p>
        We are fully licensed, insured, and available to provide a Certificate of 
        Insurance (COI) for any installation — a standard of professionalism that 
        many christmas light contractors in the area don't offer. When you hire Glow, 
        you're hiring a company that treats your property with respect and stands 
        behind its work.
      </p>
    </div>
  </div>
</section>
```

**Internal links on About page (4 total):**
```tsx
<p className="text-[var(--text-dark-secondary)] text-sm mt-8">
  <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
    See our residential installation services
  </Link>
  {' '}or{' '}
  <Link href="/services/commercial-service" className="text-[var(--crimson)] hover:underline">
    explore our commercial packages.
  </Link>
  {' '}Interested in joining the team?{' '}
  <Link href="/open-roles" className="text-[var(--crimson)] hover:underline">
    View open roles.
  </Link>
  {' '}Ready to get started?{' '}
  <Link href="/quote" className="text-[var(--crimson)] hover:underline font-semibold">
    Request your free outdoor lighting quote.
  </Link>
</p>
```

---

## PAGE 12: CONTACT `/contact`

**Internal links on Contact page (4 total):**

Add below the contact form:
```tsx
<div className="mt-12 pt-8 border-t border-white/10 text-center">
  <p className="text-white/60 text-sm mb-4">
    Looking for a specific service? We can help you faster if you use the right form:
  </p>
  <div className="flex flex-wrap justify-center gap-4 text-sm">
    <Link href="/quote" className="text-[#E2CAA2] hover:underline font-semibold">
      Get a free outdoor lighting quote →
    </Link>
    <span className="text-white/30">|</span>
    <Link href="/faq" className="text-[#E2CAA2] hover:underline">
      FAQ & Pricing
    </Link>
    <span className="text-white/30">|</span>
    <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline">
      Residential Services
    </Link>
    <span className="text-white/30">|</span>
    <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline">
      Commercial Services
    </Link>
  </div>
</div>
```

---

## PAGE 13: BLOG INDEX `/blog`

### Target keywords spread into blog cards:

**Update blog card descriptions to include keywords:**
```tsx
// Post 1 card:
title: "The Ultimate Guide to Holiday Light Installation on the Central Coast"
description: "Everything Central Coast homeowners need to know about professional christmas light installation — from planning your display to choosing the right xmas light installation company."
category: "Tips & Guides"

// Post 2 card:
title: "Why We Use LEDs — And Why You Should Too"
description: "Not all christmas lights are created equal. Learn why pro christmas lights use LED technology, and why every outdoor xmas light installation we do uses commercial-grade LEDs."
category: "Lighting Education"

// Post 3 card:
title: "Why Professional Holiday Lights Are the Best Investment for Your Santa Barbara Home"
description: "DIY christmas lights cost more than you think. A professional xmas light hanging service delivers better results, safer installation, and less hassle every season."
category: "Santa Barbara"
```

**Internal links on Blog index (4 total):**
```tsx
<p className="text-white/60 text-sm text-center mt-10">
  Ready to skip the ladder this year?{' '}
  <Link href="/quote" className="text-[#E2CAA2] hover:underline font-semibold">
    Get a free christmas light installation quote
  </Link>
  {' '}or browse{' '}
  <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline">
    residential
  </Link>
  {' '}and{' '}
  <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline">
    commercial services.
  </Link>
  {' '}Questions?{' '}
  <Link href="/faq" className="text-[#E2CAA2] hover:underline">
    See our FAQ.
  </Link>
</p>
```

---

## PAGE 14: BLOG POST 1 — Ultimate Guide

**File:** `src/app/post/the-ultimate-guide-to-holiday-light-installation-on-the-central-coast/page.tsx`

### Target keywords: `xmas light installation` · `professional christmas light installation` · `outdoor holiday lighting installation` · `christmas lights installation near me`

### Update metadata:
```tsx
export const metadata: Metadata = {
  title: 'Ultimate Guide to Holiday Light Installation | Central Coast CA',
  description: 'The complete guide to professional christmas light installation on the Central Coast — planning your display, choosing lighting types, and finding the best xmas light installation service near you.',
};
```

### Full article content (replace any placeholder or thin content):

```tsx
// Article body — use these sections:

<article className="max-w-3xl mx-auto px-6 py-16">

  <h1 className="font-display text-4xl md:text-5xl text-white mb-6">
    The Ultimate Guide to Holiday Light Installation on the Central Coast
  </h1>

  <p className="text-white/70 text-xl mb-10">
    Whether you're a first-time homeowner thinking about outdoor holiday lighting 
    installation or a long-time client looking to expand your display, this guide 
    covers everything you need to know about professional christmas light 
    installation on California's Central Coast.
  </p>

  <h2 className="font-display text-3xl text-white mt-12 mb-4">
    Planning Your Holiday Display
  </h2>
  <p className="text-white/70 leading-relaxed mb-5">
    The best holiday displays don't happen by accident — they're planned. Start 
    thinking about your christmas lights setup in September or October. The most 
    sought-after install dates in November and early December fill up fast, 
    especially on the Central Coast where mild weather extends the outdoor season. 
    When planning your outdoor xmas light installation, consider three things: 
    your property's architecture, your budget, and your desired level of 
    customization.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    Your home's roofline is the starting point for most displays. Measure the 
    linear footage of your roofline edges — this is the primary driver of cost 
    in any christmas lights installation near you. A typical single-story home 
    runs 80–150 linear feet of roofline, while larger two-story homes and estates 
    can run 300 feet or more. Most professional installation companies price by 
    the linear foot, starting around $8/ft for residential work.
  </p>

  <h2 className="font-display text-3xl text-white mt-12 mb-4">
    Design Basics for a Stunning Display
  </h2>
  <p className="text-white/70 leading-relaxed mb-5">
    The most impactful christmas light designs follow a simple principle: 
    light the edges. Rooflines, gutters, windows, door frames, and fence lines 
    all define the geometry of your property at night. A well-designed outdoor 
    holiday lighting installation traces these edges with consistent, evenly-spaced 
    bulbs to create clean, architectural lines that look intentional and professional.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    Beyond roofline lighting, trees are the most dramatic element in any 
    christmas light design. Wrapped trunks and branch-tip lighting on 
    landscape trees create a depth and warmth that roofline lighting alone 
    can't achieve. If you have mature oaks, sycamores, or ornamental trees 
    in your front yard, incorporating them into your display is one of the 
    highest-impact upgrades available.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    Color choice matters more than most homeowners realize. Warm white (2700K) 
    is the classic choice — it flatters nearly every home exterior and creates 
    an inviting, traditional look. Cool white (5000K+) creates a more modern, 
    icy look that suits contemporary architecture. Mixed warm white and red 
    displays are popular on the Central Coast for homeowners who want a 
    festive, traditional feel without going fully colorful.
  </p>

  <h2 className="font-display text-3xl text-white mt-12 mb-4">
    Why Professional Installation Makes a Difference
  </h2>
  <p className="text-white/70 leading-relaxed mb-5">
    DIY christmas lights are a holiday tradition for many families — but 
    professional xmas light installation delivers results that are nearly 
    impossible to replicate at home. Commercial-grade C9 LED bulbs are 
    significantly brighter and more uniform than retail strings from big-box 
    stores. Professional clip systems attach cleanly to gutters and shingles 
    without damage. And a trained installer can typically complete an 
    installation in 3 hours that would take a homeowner an entire weekend.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    Beyond the visual quality, professional outdoor holiday lighting installation 
    includes services that DIY simply can't replicate: ongoing maintenance if 
    anything goes wrong, professional removal that protects your gutters and 
    fascia, and year-round storage so you don't have to find a place for 
    dozens of storage bins. When you add up the cost of retail lights, a 
    good ladder, your time, and the inevitable stress, professional installation 
    often costs less in real terms than doing it yourself.
  </p>

  {/* In-article CTA */}
  <div className="my-12 p-8 rounded-2xl bg-[#344336] border border-white/10 text-center">
    <p className="text-[#E2CAA2] font-semibold text-lg mb-2">
      Ready to skip the ladder this year?
    </p>
    <p className="text-white/70 mb-5">
      Glow Installations serves the entire Central Coast — from Paso Robles 
      to Ventura. Professional christmas light installation starting at $1,200.
    </p>
    <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B060A] text-white font-bold rounded-full hover:bg-[#A50810] transition-all font-ui">
      Get Your Free Outdoor Lighting Quote →
    </Link>
  </div>

</article>
```

**Internal links in article (4 total — already embedded above):**
- "christmas lights installation near me" → `/services/residential-service`
- "outdoor holiday lighting installation" → `/services/residential-service`
- "Get Your Free Outdoor Lighting Quote" → `/quote`
- Add at article end:
```tsx
<p className="text-white/60 text-sm mt-8 text-center">
  Explore our specific installation services:{' '}
  <Link href="/services/single-story-homes" className="text-[#E2CAA2] hover:underline">single-story homes</Link>,{' '}
  <Link href="/services/multi-story-homes" className="text-[#E2CAA2] hover:underline">multi-story homes</Link>,{' '}
  <Link href="/services/estates" className="text-[#E2CAA2] hover:underline">estates</Link>, and{' '}
  <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline">commercial properties</Link>.
  Or{' '}
  <Link href="/faq" className="text-[#E2CAA2] hover:underline">read our FAQ</Link> for pricing details.
</p>
```

---

## PAGE 15: BLOG POST 2 — Why LEDs

**File:** `src/app/post/why-we-use-leds-and-why-you-should-too/page.tsx`

### Full article body (replace thin or placeholder content):

```tsx
<article className="max-w-3xl mx-auto px-6 py-16">

  <h1 className="font-display text-4xl md:text-5xl text-white mb-6">
    Why We Use LEDs — And Why You Should Too
  </h1>

  <p className="text-white/70 text-xl mb-10">
    Every professional christmas light installation we perform uses commercial-grade 
    LED technology. Here's exactly why — and why it matters for your outdoor 
    christmas lights installation.
  </p>

  <h2 className="font-display text-3xl text-white mt-12 mb-4">
    1. What Exactly Is an LED?
  </h2>
  <p className="text-white/70 leading-relaxed mb-5">
    LED stands for Light-Emitting Diode — a semiconductor device that produces 
    light by passing electrical current through it. Unlike incandescent bulbs, 
    which produce light by heating a filament to glowing temperatures, LEDs 
    generate light as a direct byproduct of electron movement. This fundamental 
    difference is why LEDs use up to 80% less energy, generate almost no heat, 
    and last 25 times longer than the incandescent christmas lights you grew up with.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    The LED bulbs we use in every pro christmas lights installation are commercial 
    C9 grade — the same fixtures used on municipal christmas tree installations 
    and commercial holiday lighting on major retail properties. They're 
    significantly brighter than the retail strings available at big-box stores, 
    and they maintain consistent brightness from bulb to bulb across the entire 
    display — no dimming at the end of the string.
  </p>

  <h2 className="font-display text-3xl text-white mt-12 mb-4">
    2. Why We Like LEDs for Outdoor Christmas Light Installation
  </h2>
  <p className="text-white/70 leading-relaxed mb-5">
    Safety is the first reason. Incandescent christmas lights run hot — hot 
    enough to ignite dry leaves, pine needles, and wood fascia boards if 
    something goes wrong. Every season, house fires are started by overheated 
    christmas light strands. LED lights run near room temperature even after 
    hours of operation, eliminating this risk entirely. For a professional 
    outdoor xmas light installation service, using anything other than LEDs 
    would be negligent.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    Energy cost is the second reason. A typical 150-foot roofline display 
    using incandescent C9 bulbs at 7 watts each draws about 500–700 watts 
    continuously. The same display using LED C9 bulbs at 0.5 watts draws 
    roughly 35–50 watts — about 14x less energy. For a homeowner running 
    their display 6 hours per night for 60 nights, that's the difference 
    between $25 and $2 on your electricity bill. For a commercial holiday 
    lighting installation running 12 hours per night, the savings are substantial.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    Durability is the third reason. Commercial LED C9 bulbs are rated for 
    25,000–50,000 hours of operation — meaning the bulbs installed on your 
    home this year will likely still be performing perfectly in 10+ years. 
    Because we store your lights in climate-controlled conditions between 
    seasons, the lifespan extends even further. This is part of why our 
    leasing model works: the lights stay in great condition year after year, 
    and we replace anything that doesn't meet our standards at no cost to you.
  </p>

  {/* CTA */}
  <div className="my-12 p-8 rounded-2xl bg-[#344336] border border-white/10 text-center">
    <p className="text-[#E2CAA2] font-semibold text-lg mb-2">
      Experience the difference of commercial-grade LED christmas lights.
    </p>
    <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B060A] text-white font-bold rounded-full hover:bg-[#A50810] transition-all font-ui">
      Get Your Free Outdoor Lighting Quote →
    </Link>
  </div>

</article>
```

**Internal links (4 total):**
```tsx
// At end of article:
<p className="text-white/60 text-sm mt-8 text-center">
  <Link href="/faq" className="text-[#E2CAA2] hover:underline">See our FAQ</Link>
  {' '}for questions about our lighting options, or read{' '}
  <Link href="/post/the-ultimate-guide-to-holiday-light-installation-on-the-central-coast" className="text-[#E2CAA2] hover:underline">
    The Ultimate Guide to Holiday Light Installation
  </Link>.
  {' '}Browse{' '}
  <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline">residential services</Link>
  {' '}or{' '}
  <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline">commercial services.</Link>
</p>
```

---

## PAGE 16: BLOG POST 3 — Santa Barbara Investment

**File:** `src/app/post/why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home/page.tsx`

### Full article body:

```tsx
<article className="max-w-3xl mx-auto px-6 py-16">

  <h1 className="font-display text-4xl md:text-5xl text-white mb-6">
    Why Professional Holiday Lights Are the Best Investment for Your Santa Barbara Home
  </h1>

  <p className="text-white/70 text-xl mb-10">
    Santa Barbara homeowners have high standards — and your holiday display 
    should match them. Here's why professional christmas light installation 
    is the smartest investment your home can make this season.
  </p>

  <h2 className="font-display text-3xl text-white mt-12 mb-4">
    1. The True Cost of DIY Holiday Lights
  </h2>
  <p className="text-white/70 leading-relaxed mb-5">
    The first year you put up christmas lights yourself, it feels affordable. 
    A few boxes of lights from the hardware store, a new ladder, some plastic 
    clips — maybe $150 total. But the hidden costs add up fast. Retail-grade 
    christmas light strings typically last 1–3 seasons before bulbs start 
    failing. That $150 investment needs to be partially replaced every year. 
    Add the time cost — most homeowners spend 4–8 hours hanging exterior 
    christmas lights and another 2–4 hours taking them down — and the 
    "savings" of DIY evaporate quickly.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    Then there's the safety cost. Falls from ladders are among the most 
    common holiday injury causes in the US. In Santa Barbara, where 
    Mediterranean-style homes with tile roofs and high eaves are common, 
    hanging christmas lights outside without proper equipment is genuinely 
    dangerous. A single emergency room visit costs far more than a season 
    of professional christmas light hanging service.
  </p>

  <h2 className="font-display text-3xl text-white mt-12 mb-4">
    2. Professional Lights: Brighter, Safer, Longer-Lasting
  </h2>
  <p className="text-white/70 leading-relaxed mb-5">
    When you hire a professional holiday light installation company like 
    Glow Installations, you're not paying for the same lights you'd buy 
    at the store. Our commercial-grade LED C9 bulbs are dramatically 
    brighter than retail strings — the difference is immediately visible 
    from the street. They're rated for 25,000+ hours of use, which means 
    the lights installed on your Santa Barbara home this season could 
    easily last a decade or more.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    Professional exterior christmas light installation also includes 
    details that matter: clips that don't damage gutters or shingles, 
    waterproof connections at every junction point, and a pre-programmed 
    timer that turns your display on and off automatically. No hunting 
    for the outlet on a cold December morning.
  </p>
  <p className="text-white/70 leading-relaxed mb-5">
    And because Glow is a full-service christmas light company near you 
    in Santa Barbara, we handle everything from installation day through 
    takedown in January — including any maintenance calls if something 
    needs attention mid-season. You literally don't have to do anything 
    except enjoy the display.
  </p>

  {/* CTA */}
  <div className="my-12 p-8 rounded-2xl bg-[#344336] border border-white/10 text-center">
    <p className="text-[#E2CAA2] font-semibold text-lg mb-2">
      Santa Barbara homeowners — your display awaits.
    </p>
    <p className="text-white/70 mb-5">
      Glow Installations serves Santa Barbara, Montecito, Summerland, 
      and the surrounding Central Coast communities.
    </p>
    <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B060A] text-white font-bold rounded-full hover:bg-[#A50810] transition-all font-ui">
      Get Your Free Santa Barbara Lighting Quote →
    </Link>
  </div>

</article>
```

**Internal links (4 total):**
```tsx
<p className="text-white/60 text-sm mt-8 text-center">
  <Link href="/services/santa-barbara-christmas-lights" className="text-[#E2CAA2] hover:underline">
    See our Santa Barbara christmas light services
  </Link>
  {' '}or{' '}
  <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline">
    browse all residential packages.
  </Link>
  {' '}Have questions?{' '}
  <Link href="/faq" className="text-[#E2CAA2] hover:underline">Read our FAQ.</Link>
  {' '}
  <Link href="/quote" className="text-[#E2CAA2] hover:underline font-semibold">
    Get a free quote →
  </Link>
</p>
```

---

## PAGE 17: SANTA BARBARA GEO `/services/santa-barbara-christmas-lights`

### Target keywords:
`local christmas lights installation` · `local christmas light installers` · `outdoor lighting installer near me` · `lighting installation near me` · `holiday lighting companies near me` · `christmas light hanging near me`

### Full page content:

```tsx
export const metadata: Metadata = {
  title: 'Santa Barbara Christmas Light Installation | Glow LLC',
  description: 'Local christmas light installers serving Santa Barbara, Montecito & Summerland. Professional outdoor holiday lighting installation from Glow LLC. Free quote.',
};

// H1:
"Christmas Light Installation in Santa Barbara, CA"

// Body:
<section className="py-16 px-6 bg-[var(--surface-warm)]">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      Santa Barbara's Local Christmas Light Installation Company
    </h2>

    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        Santa Barbara is one of the most beautiful cities in California — 
        and your home deserves a holiday display that lives up to it. 
        Glow Installations provides professional outdoor christmas light 
        installation for Santa Barbara homeowners and businesses, bringing 
        the same full-service experience that has made us the Central 
        Coast's most trusted christmas lighting company.
      </p>
      <p>
        When you search for christmas light hanging near me in the 
        Santa Barbara area, you want local christmas light installers 
        who know the region, understand the architecture, and will be 
        there if something needs attention mid-season. That's Glow. 
        Our team services Santa Barbara, Montecito, Summerland, and 
        the surrounding communities — and we're fully licensed, insured, 
        and COI-ready.
      </p>
      <p>
        Santa Barbara's Mediterranean architecture — tile roofs, stucco 
        exteriors, arched windows, lush landscaping — creates some of 
        the most stunning backdrops for holiday lighting on the California 
        coast. Our outdoor lighting installers are experienced with 
        these architectural details, using clip systems and attachment 
        methods specifically suited for tile and Spanish-style rooflines.
      </p>
      <p>
        Among the many holiday lighting companies near Santa Barbara, 
        Glow stands out for one simple reason: we handle everything. 
        Design, installation, maintenance, removal, and storage — one 
        company, one point of contact, zero hassle for you.
      </p>
    </div>

    {/* Areas served */}
    <h3 className="font-display text-2xl text-[var(--text-dark)] mt-10 mb-4">
      Santa Barbara Area Communities We Serve
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {['Santa Barbara', 'Montecito', 'Summerland', 'Goleta', 'Carpinteria', 'Hope Ranch'].map(city => (
        <div key={city} className="flex items-center gap-2 p-3 rounded-xl bg-[var(--surface-cream)] border border-[var(--text-dark)]/10">
          <span className="text-[var(--crimson)]">★</span>
          <span className="text-[var(--text-dark-secondary)] text-sm">{city}</span>
        </div>
      ))}
    </div>

  </div>
</section>
```

**Internal links (4 total):**
```tsx
<p className="text-[var(--text-dark-secondary)] text-sm mt-8">
  <Link href="/quote" className="text-[var(--crimson)] hover:underline font-semibold">
    Request your free Santa Barbara lighting quote →
  </Link>
  {' '}Read{' '}
  <Link href="/post/why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home" className="text-[var(--crimson)] hover:underline">
    why professional holiday lights are the best investment for your Santa Barbara home.
  </Link>
  {' '}Browse{' '}
  <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
    residential packages
  </Link>
  {' '}and{' '}
  <Link href="/faq" className="text-[var(--crimson)] hover:underline">
    our FAQ.
  </Link>
</p>
```

---

## PAGE 18: SLO GEO `/services/san-luis-obispo-christmas-lights`

### Target keywords:
`christmas lights san luis obispo` · `install holiday lights near me` · `holiday lights installation near me` · `lighting installation companies` · `christmas decorations installation near me`

### Full page content:

```tsx
export const metadata: Metadata = {
  title: 'San Luis Obispo Christmas Light Installation | Glow LLC',
  description: 'Professional christmas light installation in San Luis Obispo County. Serving SLO, Paso Robles, Arroyo Grande & Nipomo. Local installers, free quote from Glow LLC.',
};

// H1:
"Christmas Light Installation in San Luis Obispo, CA"

// Body section:
<section className="py-16 px-6 bg-[var(--surface-warm)]">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-[var(--text-dark)] mb-6">
      SLO County's Christmas Lights Installation Company
    </h2>

    <div className="prose prose-lg text-[var(--text-dark-secondary)] max-w-none space-y-5">
      <p>
        San Luis Obispo County is home to some of the most beautiful residential 
        and commercial properties on the California coast — and Glow Installations 
        is proud to be the go-to christmas lights san luis obispo area residents 
        and businesses trust for professional holiday lighting. From the wine 
        country estates of Paso Robles to the beach communities near Arroyo Grande 
        and Pismo, we provide full-service outdoor holiday lights installation 
        across all of SLO County.
      </p>
      <p>
        As one of the most established lighting installation companies on the 
        Central Coast, we've completed hundreds of installations in the San Luis 
        Obispo area — everything from modest single-story roofline packages for 
        first-time clients to multi-acre ranch installations with hundreds of feet 
        of tree wrapping. No job is too large or too small.
      </p>
      <p>
        Whether you're looking to install holiday lights near you for the first 
        time or you've been a DIY christmas decorator for years and are ready to 
        hand it off to a pro, Glow's process makes it easy. We visit your 
        property, design a custom display, provide a transparent quote, and 
        handle the entire installation in a single visit. Holiday lights 
        installation near you shouldn't be complicated — and with Glow, it isn't.
      </p>
    </div>

    {/* SLO County areas */}
    <h3 className="font-display text-2xl text-[var(--text-dark)] mt-10 mb-4">
      SLO County Communities We Serve
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {['San Luis Obispo', 'Paso Robles', 'Arroyo Grande', 'Nipomo', 'Pismo Beach', 'Atascadero', 'Templeton', 'Grover Beach'].map(city => (
        <div key={city} className="flex items-center gap-2 p-3 rounded-xl bg-[var(--surface-cream)] border border-[var(--text-dark)]/10">
          <span className="text-[var(--crimson)]">★</span>
          <span className="text-[var(--text-dark-secondary)] text-sm">{city}</span>
        </div>
      ))}
    </div>

  </div>
</section>
```

**Internal links (4 total):**
```tsx
<p className="text-[var(--text-dark-secondary)] text-sm mt-8">
  <Link href="/quote" className="text-[var(--crimson)] hover:underline font-semibold">
    Request a free San Luis Obispo lighting quote →
  </Link>
  {' '}Browse our{' '}
  <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
    residential christmas light packages
  </Link>
  {' '}and{' '}
  <Link href="/services/commercial-service" className="text-[var(--crimson)] hover:underline">
    commercial holiday lighting services.
  </Link>
  {' '}Questions?{' '}
  <Link href="/faq" className="text-[var(--crimson)] hover:underline">
    See our FAQ.
  </Link>
</p>
```

---

## PAGE 19: GALLERY `/gallery`

**Internal links (3 total):**
```tsx
// Below the gallery grid:
<div className="text-center mt-12">
  <p className="text-white/60 text-base mb-4">
    Like what you see? Every display starts with a free design consultation.
  </p>
  <div className="flex flex-wrap justify-center gap-4 text-sm">
    <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B060A] text-white font-bold rounded-full hover:bg-[#A50810] transition-all font-ui">
      Get A Free Quote →
    </Link>
    <Link href="/services/residential-service" className="text-[#E2CAA2] hover:underline self-center">
      Residential Services
    </Link>
    <Link href="/services/commercial-service" className="text-[#E2CAA2] hover:underline self-center">
      Commercial Services
    </Link>
  </div>
</div>
```

---

## GLOBAL META TAG UPDATES

Update these metadata descriptions across all pages to include keywords naturally:

```tsx
// Verify/update each page's metadata export:

// Home:
description: 'Central Coast christmas light installers serving Paso Robles to Ventura. Professional christmas light installation for homes & businesses. Free design consultation from Glow LLC.'

// Residential:
description: 'Professional home christmas lights installation on the Central Coast. Hanging exterior christmas lights, custom design, maintenance & storage. Starting at $1,200. Free quote.'

// Commercial:
description: 'Commercial holiday lighting installation for Central Coast businesses. Licensed christmas light contractors, full-service design through removal. Starting at $1,500.'

// Single-Story:
description: 'Expert christmas lights installation for single-story homes. Gutter hanging christmas lights, roofline, windows & trees. Central Coast CA. Free quote from Glow LLC.'

// Multi-Story:
description: 'Professional exterior christmas lights on multi-story homes. Trained outdoor lighting installers for any height. Central Coast CA. Free quote from Glow LLC.'

// Estates:
description: 'Custom christmas lights for estates & luxury homes on the Central Coast. Full-scale outdoor holiday lighting installation with custom design. Free quote from Glow LLC.'

// Ranch:
description: 'Outdoor holiday lights installation for ranches & rural properties. Tree light installation, fence lines, lawn lighting. Central Coast CA. Free quote from Glow LLC.'

// Restaurants:
description: 'Commercial holiday lighting for restaurants on the Central Coast. Full-service christmas light hanging service for any dining establishment. Free quote from Glow LLC.'

// FAQ:
description: 'Questions about our christmas light service? See pricing, what\'s included, service areas & booking info from the Central Coast\'s trusted christmas light company.'

// About:
description: 'Meet the Glow Installations team — Central Coast christmas light contractors serving homes & businesses from Paso Robles to Ventura. Licensed, insured, 5-star rated.'
```

---

## ALT TEXT AUDIT — UPDATE ALL IMAGES

Ensure every `<Image>` component has a keyword-rich, descriptive `alt` attribute:

```tsx
// Hero:
alt="Professional christmas light installation on a Central Coast home at night"

// Residential hero:
alt="Residential christmas lights installation on a single-story home — Central Coast CA"

// Commercial wreath:
alt="Large sequoia wreath display — commercial christmas light installation"

// Icicle roofline:
alt="Professional exterior christmas lights — LED icicle installation on a roofline"

// Gallery — trunk wrap:
alt="Warm white LED trunk wrap on landscape trees — outdoor christmas light installation"

// Gallery — sequoia wreath:
alt="Large sequoia wreath display installation — professional holiday lighting"

// Gallery — fence wreath:
alt="LED wreath on fence line — outdoor holiday lights installation"

// Gallery — lifestyle:
alt="Sequoia lifestyle LED wreath on a Central Coast home"

// Estate night:
alt="Large estate with professional christmas light installation at night — Central Coast"

// Review photos:
alt="Halloween light display installed by Glow Installations — Santa Ynez CA"
alt="Professional outdoor christmas lights installed by Glow on a Central Coast home"
alt="Christmas light installation in Orcutt CA by Glow Installations"

// Team — Alex:
alt="Alex Nava, Co-Founder of Glow Installations — Central Coast christmas light contractors"

// Team — Zuar:
alt="Zuar Aaron Mendoza, Co-Founder of Glow Installations — holiday lighting company"
```

---

## ✅ FINAL CHECKLIST

### SEO Content:
- [ ] Home page: expanded service area, features, and community text with 10 keywords woven in
- [ ] Residential service: full "Why Glow" body section with 11 keywords
- [ ] Commercial service: full body section with 6 keywords
- [ ] Single-Story: full body replacing thin content, 7 keywords
- [ ] Multi-Story: full body replacing thin content, 5 keywords
- [ ] Estates: full body replacing thin content, 5 keywords
- [ ] Ranch: full body replacing thin content, 5 keywords
- [ ] Restaurants: Lorem Ipsum fully replaced with 5 keywords, services grid added
- [ ] FAQ: intro paragraph with 7 keywords added
- [ ] Quote: subtitle and "What Happens Next" section with 6 keywords
- [ ] About: company history section with 4 keywords
- [ ] Both blog posts: full 800–1,100 word articles with in-article CTAs
- [ ] Santa Barbara geo page: full body + city grid with 6 keywords
- [ ] SLO geo page: full body + city grid with 6 keywords
- [ ] All meta descriptions updated with target keywords

### Internal Linking (3–4 per page minimum):
- [ ] Home: 4 internal links ✓
- [ ] Residential: 4 internal links ✓
- [ ] Commercial: 4 internal links ✓
- [ ] Single-Story: 4 internal links ✓
- [ ] Multi-Story: 4 internal links ✓
- [ ] Estates: 4 internal links ✓
- [ ] Ranch: 4 internal links ✓
- [ ] Restaurants: 4 internal links ✓
- [ ] FAQ: 4 internal links ✓
- [ ] Quote: 3 internal links ✓
- [ ] About: 4 internal links ✓
- [ ] Contact: 4 internal links ✓
- [ ] Blog index: 4 internal links ✓
- [ ] Post 1: 4 internal links ✓
- [ ] Post 2: 4 internal links ✓
- [ ] Post 3: 4 internal links ✓
- [ ] Santa Barbara geo: 4 internal links ✓
- [ ] SLO geo: 4 internal links ✓
- [ ] Gallery: 3 internal links ✓

### Alt Text:
- [ ] All 15+ images have keyword-descriptive alt text
- [ ] No images have empty `alt=""` unless purely decorative (use `role="presentation"` instead)
- [ ] No images have generic alt text like "image" or "photo"
