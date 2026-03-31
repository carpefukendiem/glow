import Link from "next/link";

const linkGold = "text-[#E2CAA2] hover:underline";
const linkCrimson = "text-[var(--crimson)] hover:underline font-medium";

export function ServiceSeoBlocks({ slug }: { slug: string }) {
  switch (slug) {
    case "residential-service":
      return (
        <>
          <section className="bg-[var(--surface-warm)] px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
                The Central Coast&apos;s Premier Home Christmas Lights Installation Service
              </h2>
              <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
                <p>
                  Getting professional christmas lights installed on your house shouldn&apos;t be stressful — and
                  with Glow Installations, it isn&apos;t. We are a full-service christmas lighting company dedicated
                  to transforming Central Coast homes into stunning holiday displays that turn heads all season long.
                  From custom designed roofline lighting to outdoor holiday lights that wrap your trees and illuminate
                  your lawn, we handle every aspect of your exterior christmas light installation so you don&apos;t have
                  to lift a finger.
                </p>
                <p>
                  Our team of trained christmas light contractors begins with a complimentary design consultation where
                  we assess your home&apos;s architecture, discuss your vision, and recommend a layout that fits both
                  your aesthetic goals and your budget. We use only commercial-grade LED fixtures — the same professional
                  christmas lights used on commercial properties — because we believe every home deserves the brightest,
                  most energy-efficient display possible.
                </p>
                <p>
                  Hanging exterior christmas lights on a two-story home or complex roofline is not a weekend DIY
                  project — it&apos;s a safety risk. Our licensed and insured installers are trained to work at height
                  with proper equipment, protecting your home and your family. Every installation includes our signature
                  clip system that attaches without damaging gutters, fascia boards, or shingles. We hang christmas lights
                  outdoors the right way, every time.
                </p>
                <p>
                  What makes us different from other companies that hang christmas lights? We stay with you all season. If
                  a strand goes dark, a clip comes loose, or the weather causes any issue with your display, we come back
                  and fix it — at no additional charge. This all-inclusive maintenance is part of every home christmas
                  lights installation package we offer. And when the season ends, we return to carefully remove everything
                  and store your lights for next year.
                </p>
                <p>
                  Ready to have professional holiday lights installed on your house this season? Explore our specific
                  home packages below or{" "}
                  <Link href="/quote" className={linkCrimson}>
                    request your free residential lighting quote
                  </Link>
                  .
                </p>
              </div>
              <p className="mt-8 text-center text-sm text-[var(--text-dark-secondary)]">
                Have questions about pricing?{" "}
                <Link href="/faq" className={linkCrimson}>
                  Read our FAQ
                </Link>{" "}
                or check out our{" "}
                <Link href="/services/commercial-service" className={linkCrimson}>
                  commercial holiday lighting services
                </Link>
                .
              </p>
            </div>
          </section>
        </>
      );

    case "commercial-service":
      return (
        <section className="relative overflow-hidden bg-[var(--deep-navy)] px-6 py-16">
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="font-display mb-6 text-3xl text-white md:text-4xl">
              Professional Commercial Christmas Light Installation on the Central Coast
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                When customers arrive at your business during the holiday season, first impressions matter. Glow
                Installations is one of the most trusted commercial holiday lighting companies on the Central Coast,
                providing full-service commercial christmas light installation for restaurants, retail centers, hotels,
                office complexes, and multi-tenant properties.
              </p>
              <p>
                Our commercial holiday lighting packages are designed for businesses that need a polished, professional
                look without the liability of DIY ladder work. As licensed and insured christmas light contractors, we
                handle everything from the initial commercial christmas light design to installation, ongoing
                maintenance, professional takedown, and off-site storage. You focus on serving your customers — we
                handle the lights.
              </p>
              <p>
                Commercial properties have unique needs that set them apart from residential work. Longer linear runs of
                roofline lighting, larger trees and architectural features, interior Christmas tree installation, and
                stricter timelines for installation and removal are all part of our daily commercial workflow. As an
                experienced holiday lighting company, we&apos;ve worked with businesses of every size and type across
                San Luis Obispo, Santa Barbara, and the surrounding Central Coast communities.
              </p>
              <p>
                Our commercial outdoor lighting packages start at $1,500 for 150 linear feet and include upgraded LED
                fixtures, custom color options, a pre-programmed timer, and all of the maintenance and removal services
                included with our residential packages. Multi-year commercial agreements are available — ask about them
                when you reach out.
              </p>
              <p>
                Looking for commercial outdoor lighting companies near you on the Central Coast?{" "}
                <Link href="/quote" className={`${linkGold} font-medium`}>
                  Request a commercial lighting quote
                </Link>{" "}
                and one of our team members will reach out within 24 hours.
              </p>
            </div>
            <p className="mt-8 text-center text-sm text-white/60">
              We specialize in{" "}
              <Link href="/services/restaurants" className={linkGold}>
                restaurant holiday lighting installation
              </Link>
              . Have questions?{" "}
              <Link href="/faq" className={linkGold}>
                See our commercial FAQ
              </Link>{" "}
              or browse our{" "}
              <Link href="/services/residential-service" className={linkGold}>
                residential christmas light services
              </Link>
              .
            </p>
          </div>
        </section>
      );

    case "single-story-homes":
      return (
        <section className="bg-[var(--surface-warm)] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
              Single-Story Home Christmas Light Installation — Easy Access, Stunning Results
            </h2>
            <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
              <p>
                Single-story homes are perfectly suited for dramatic christmas light setups — accessible rooflines, easy
                window and door framing, and ground-level landscaping all combine to create some of the most
                eye-catching displays on the block. If you&apos;ve been thinking about having christmas lights hung on
                your home this season, a single-story property is the fastest and most straightforward installation we
                offer.
              </p>
              <p>
                Our single-story christmas lights setup typically covers your roofline (straight or gabled), fascia
                boards, window frames, entry doors, and any front-facing hedges or trees. We specialize in gutter
                hanging christmas lights using a clip system that leaves zero marks on your gutters, eliminating the most
                common DIY damage we see when homeowners attempt to put up christmas lights themselves.
              </p>
              <p>
                Every single-story house lights installation begins with a free design consultation. We&apos;ll walk
                your property, measure your linear footage, and design a layout that maximizes impact within your
                budget. Our standard package uses warm white C9 LED bulbs with 15-inch spacing — the same commercial-grade
                lights used on estates and commercial properties. Custom colors and icicle-style lighting are also
                available.
              </p>
              <p>
                Wondering how much it costs to hang christmas lights near you? Single-story residential installations
                start at $1,200 for up to 150 linear feet — which typically covers the full roofline and entry of most
                Central Coast homes. That price includes design, installation, maintenance, removal, and storage. No
                hidden fees.
              </p>
            </div>
            <p className="mt-8 text-sm text-[var(--text-dark-secondary)]">
              Live in a two-story home?{" "}
              <Link href="/services/multi-story-homes" className={linkCrimson}>
                See our multi-story installation service.
              </Link>{" "}
              Ready to get started?{" "}
              <Link href="/quote" className={`${linkCrimson} font-semibold`}>
                Get a free quote
              </Link>{" "}
              or{" "}
              <Link href="/faq" className={linkCrimson}>
                read our FAQ
              </Link>{" "}
              to learn more about what&apos;s included. You can also browse our{" "}
              <Link href="/services/residential-service" className={linkCrimson}>
                full residential christmas light services
              </Link>
              .
            </p>
          </div>
        </section>
      );

    case "multi-story-homes":
      return (
        <section className="bg-[var(--surface-warm)] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
              Multi-Story Home Christmas Lights — Professional Installation at Any Height
            </h2>
            <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
              <p>
                Multi-story homes offer some of the most dramatic opportunities for professional exterior christmas
                lights — towering rooflines, cascading icicle strands, and illuminated upper-story windows create a display
                that single-story homes simply cannot match. But hanging exterior christmas lights at height is also
                one of the most dangerous DIY tasks a homeowner can attempt. Ladders, sloped rooflines, and shifting
                weight distribution cause thousands of holiday injuries every year.
              </p>
              <p>
                Glow Installations provides fully professional christmas light installation for multi-story homes across
                the Central Coast. Our team is trained for elevated work, uses proper extension ladders and safety
                equipment, and carries full liability insurance — so if anything goes wrong (it won&apos;t), you&apos;re
                completely covered. We bring the same professional light installation standards to a 30-foot gabled
                roofline that we bring to a single-story ranch.
              </p>
              <p>
                &quot;Fear heights no more!&quot; isn&apos;t just a tagline for us — it&apos;s our value proposition.
                When you hire Glow for your multi-story christmas lights, you don&apos;t have to get on a ladder once. We
                design, install, maintain, remove, and store everything. Our outdoor professional christmas lights
                installation for multi-story homes is priced on a linear-footage basis, with roofline complexity taken
                into account. Schedule a free assessment and we&apos;ll provide an exact quote within 24 hours.
              </p>
            </div>
            <p className="mt-8 text-sm text-[var(--text-dark-secondary)]">
              <Link href="/services/single-story-homes" className={linkCrimson}>
                Have a single-story home? See that service instead.
              </Link>{" "}
              For large properties, explore our{" "}
              <Link href="/services/estates" className={linkCrimson}>
                estate christmas light installation.
              </Link>{" "}
              <Link href="/quote" className={`${linkCrimson} font-semibold`}>
                Get a free multi-story quote
              </Link>{" "}
              or check{" "}
              <Link href="/faq" className={linkCrimson}>
                our FAQ for pricing details.
              </Link>
            </p>
          </div>
        </section>
      );

    case "estates":
      return (
        <section className="bg-[var(--surface-warm)] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
              Estate Christmas Light Installation — Custom Design for Grand Properties
            </h2>
            <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
              <p>
                Estates and large luxury properties deserve a christmas light installation that matches their scale and
                character. As Central Coast christmas light decorators with experience on properties of all sizes, Glow
                Installations excels at creating fully custom christmas lights displays that complement your
                home&apos;s architecture, landscaping, and surroundings.
              </p>
              <p>
                Our estate christmas light design process is comprehensive. We visit your property for a thorough
                walkthrough, document key architectural features, measure all rooflines and tree canopies, and create a
                custom design proposal before a single clip is installed. Unlike other christmas decoration contractors,
                we don&apos;t just show up with a truck full of lights — we bring a thoughtful plan that turns your
                vision into reality.
              </p>
              <p>
                Large-estate installations often include multiple distinct zones: grand entry gates, extended driveway
                borders, mature oak and eucalyptus tree wrapping, multi-wing rooflines, pool and patio lighting, and
                interior Christmas tree installation. Themed lighting using custom color palettes is also available for
                estates that want to go beyond traditional warm white.
              </p>
              <p>
                Estate packages are priced based on the scope of the installation — typically starting at $3,500 for
                large properties — and include all of our standard full-service features: design, install, maintenance,
                removal, and storage.
              </p>
            </div>
            <p className="mt-8 text-sm text-[var(--text-dark-secondary)]">
              For large rural properties, see our{" "}
              <Link href="/services/ranch" className={linkCrimson}>
                ranch christmas light installation service.
              </Link>{" "}
              All estates start with a free consultation —{" "}
              <Link href="/quote" className={`${linkCrimson} font-semibold`}>
                request yours today.
              </Link>{" "}
              Questions about our process?{" "}
              <Link href="/faq" className={linkCrimson}>
                Read our FAQ
              </Link>{" "}
              or browse{" "}
              <Link href="/services/residential-service" className={linkCrimson}>
                all residential services.
              </Link>
            </p>
          </div>
        </section>
      );

    case "ranch":
      return (
        <section className="bg-[var(--surface-warm)] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
              Ranch Christmas Light Installation — Outdoor Holiday Lights for Wide-Open Properties
            </h2>
            <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
              <p>
                Ranch properties present a beautiful challenge: long fence lines, scattered oak groves, barn structures,
                and sprawling driveways that all deserve outdoor holiday lights installation — but on a scale that most
                christmas light companies aren&apos;t equipped for. Glow Installations has the equipment, crew size, and
                experience to light up ranches of any size on the Central Coast.
              </p>
              <p>
                Our ranch christmas light packages focus on the elements that define the property: extended fence line
                lighting that guides visitors down your driveway, tree light installation on your native oaks and landscape
                trees, christmas light lawn accents using ground stakes and pathway markers, and roofline lighting on the
                main house, barn, or guest structures. We bring enough crew and enough lights to do it right in a single
                visit.
              </p>
              <p>
                We are among the only christmas tree light installers on the Central Coast with the equipment to safely
                install lighting on large, mature trees — using commercial-grade extension poles and lift equipment when
                needed. If you&apos;ve been looking for tree light installation near you that can handle a 60-foot valley
                oak, we&apos;re your team.
              </p>
              <p>
                Ranch installations are quoted on a project basis after a property walkthrough. Most ranch packages range
                from $2,500 to $8,000+ depending on property size and scope. Every installation includes our standard
                maintenance, removal, and storage package.
              </p>
            </div>
            <p className="mt-8 text-sm text-[var(--text-dark-secondary)]">
              Manage a large estate?{" "}
              <Link href="/services/estates" className={linkCrimson}>
                See our estate installation service.
              </Link>{" "}
              <Link href="/quote" className={`${linkCrimson} font-semibold`}>
                Request a free ranch quote
              </Link>{" "}
              or read{" "}
              <Link href="/faq" className={linkCrimson}>
                our FAQ for what&apos;s included.
              </Link>{" "}
              All ranch packages fall under our{" "}
              <Link href="/services/residential-service" className={linkCrimson}>
                full residential installation service.
              </Link>
            </p>
          </div>
        </section>
      );

    case "restaurants":
      return (
        <>
          <section className="bg-[var(--surface-warm)] px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
                Create a Magical Holiday Atmosphere for Your Diners
              </h2>
              <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
                <p>
                  The holiday season is one of the most competitive times of year for restaurants on the Central Coast.
                  Guests are choosing where to spend their holiday dinners, work parties, and family celebrations — and
                  the right commercial holiday lighting can be the difference between a full dining room and an empty
                  one. Glow Installations provides professional christmas light installation for restaurants across San
                  Luis Obispo, Santa Barbara, and the surrounding communities.
                </p>
                <p>
                  Our restaurant christmas light hanging service includes everything from exterior roofline and patio string
                  lighting to interior garland, Christmas tree installation, and window displays. As a full-service holiday
                  lighting company, we design a cohesive look that matches your restaurant&apos;s brand and ambiance —
                  whether that&apos;s warm Edison-style bistro lighting for a romantic dinner spot or bright, festive
                  commercial holiday lighting for a family restaurant.
                </p>
                <p>
                  As experienced holiday lighting contractors, we understand the operational demands restaurants face
                  during the season. That&apos;s why we schedule installations during off-hours, complete setup quickly
                  without disrupting your service, and provide a direct line to our maintenance team if anything needs
                  attention mid-season. Our light installation service for restaurants is turnkey — you approve the
                  design, we handle everything else.
                </p>
                <p>
                  Restaurant packages start at $1,500 for exterior lighting and include complimentary LED upgrades,
                  custom color options, a preprogrammed timer, maintenance throughout the season, careful removal, and
                  storage. Multi-location restaurant groups receive preferred pricing.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  "Exterior roofline & awning lighting",
                  "Patio & outdoor dining string lights",
                  "Interior Christmas tree installation",
                  "Window & entrance displays",
                  "Garland & wreath installation",
                  "Scheduled maintenance all season",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[var(--text-dark)]/10 bg-[var(--surface-cream)] p-4"
                  >
                    <span className="text-lg text-[var(--crimson)]">✓</span>
                    <span className="text-sm text-[var(--text-dark-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-[var(--text-dark-secondary)]">
                Browse all of our{" "}
                <Link href="/services/commercial-service" className={linkCrimson}>
                  commercial christmas light installation services.
                </Link>{" "}
                <Link href="/quote" className={`${linkCrimson} font-semibold`}>
                  Request a restaurant lighting quote
                </Link>{" "}
                or{" "}
                <Link href="/faq" className={linkCrimson}>
                  read our FAQ
                </Link>{" "}
                to learn about commercial pricing. Need residential service?{" "}
                <Link href="/services/residential-service" className={linkCrimson}>
                  See our home installation packages.
                </Link>
              </p>
            </div>
          </section>
        </>
      );

    default:
      return null;
  }
}
