import Image from "next/image";
import Link from "next/link";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { GEO_REVIEWS } from "@/lib/geo-reviews";
import { SITE_URL } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Santa Barbara Christmas Light Installation | Glow LLC",
  description:
    "Local christmas light installers serving Santa Barbara, Montecito & Summerland. Professional outdoor holiday lighting installation from Glow LLC. Free quote.",
  path: "/services/santa-barbara-christmas-lights",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Christmas Light Installation in Santa Barbara",
  provider: {
    "@type": "LocalBusiness",
    name: "Glow Installations",
    "@id": `${SITE_URL}/#business`,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Santa Barbara",
      containedInPlace: { "@type": "State", name: "California" },
    },
    {
      "@type": "City",
      name: "Montecito",
      containedInPlace: { "@type": "State", name: "California" },
    },
  ],
  description:
    "Professional Christmas light installation for residential and commercial properties in Santa Barbara and Montecito, CA.",
  offers: {
    "@type": "Offer",
    price: "1200",
    priceCurrency: "USD",
    description: "Starting at $1,200 for residential installations",
  },
};

export default function SantaBarbaraServicePage() {
  return (
    <div className="bg-[var(--night)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SchemaMarkup
        pageType="service"
        title="Christmas Light Installation in Santa Barbara, CA"
        description="Local Santa Barbara and Montecito holiday lighting services by Glow LLC."
        path="/services/santa-barbara-christmas-lights"
      />
      <ServicePageHero
        tagline="Christmas Light Installation in Santa Barbara, CA"
        title="Santa Barbara is one of the most beautiful cities on the Central Coast — and your home or business deserves a holiday display that matches."
        image="/images/commercial-wreath-display.webp"
        price="Residential from $1,200"
        breadcrumbLabel="Santa Barbara"
        titleItalic={false}
        imageObjectPosition="center center"
        imageAlt="Large sequoia wreath display — commercial christmas light installation"
      />

      <section className="px-6 py-16 bg-[var(--surface-warm)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
            Santa Barbara&apos;s Local Christmas Light Installation Company
          </h2>
          <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
            <p>
              Santa Barbara is one of the most beautiful cities in California — and your home deserves a holiday
              display that lives up to it. Glow Installations provides professional outdoor christmas light installation
              for Santa Barbara homeowners and businesses, bringing the same full-service experience that has made us
              the Central Coast&apos;s most trusted christmas lighting company.
            </p>
            <p>
              When you search for christmas light hanging near me in the Santa Barbara area, you want local christmas
              light installers who know the region, understand the architecture, and will be there if something needs
              attention mid-season. That&apos;s Glow. Our team services Santa Barbara, Montecito, Summerland, and the
              surrounding communities — and we&apos;re fully licensed, insured, and COI-ready.
            </p>
            <p>
              Santa Barbara&apos;s Mediterranean architecture — tile roofs, stucco exteriors, arched windows, lush
              landscaping — creates some of the most stunning backdrops for holiday lighting on the California coast.
              Our outdoor lighting installers are experienced with these architectural details, using clip systems and
              attachment methods suited for tile and Spanish-style rooflines.
            </p>
            <p>
              Among the many holiday lighting companies near Santa Barbara, Glow stands out for one simple reason: we
              handle everything. Design, installation, maintenance, removal, and storage — one company, one point of
              contact, zero hassle for you.
            </p>
          </div>
          <h3 className="font-display mt-10 mb-4 text-2xl text-[var(--text-dark)]">
            Santa Barbara Area Communities We Serve
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {["Santa Barbara", "Montecito", "Summerland", "Goleta", "Carpinteria", "Hope Ranch"].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 rounded-xl border border-[var(--text-dark)]/10 bg-[var(--surface-cream)] p-3"
              >
                <span className="text-[var(--crimson)]">★</span>
                <span className="text-sm text-[var(--text-dark-secondary)]">{city}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[var(--text-dark-secondary)]">
            <Link href="/quote" className="font-semibold text-[var(--crimson)] hover:underline">
              Request your free Santa Barbara lighting quote →
            </Link>{" "}
            Read{" "}
            <Link
              href="/post/why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home"
              className="text-[var(--crimson)] hover:underline"
            >
              why professional holiday lights are the best investment for your Santa Barbara home
            </Link>
            . Browse{" "}
            <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
              residential packages
            </Link>{" "}
            and{" "}
            <Link href="/services/commercial-service" className="text-[var(--crimson)] hover:underline">
              commercial holiday lighting
            </Link>
            . Questions?{" "}
            <Link href="/faq" className="text-[var(--crimson)] hover:underline">
              See our FAQ.
            </Link>
          </p>
        </div>
      </section>

      <FeaturesSection />

      <section className="section-full bg-[var(--night)]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/estate-night-display.webp"
              alt="Large estate with professional christmas light installation at night — Central Coast"
              fill
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-white md:text-4xl">Areas we cover</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Santa Barbara</li>
              <li>• Montecito</li>
              <li>• Summerland</li>
              <li>• Nearby areas — reach out for availability</li>
            </ul>
            <Link
              href="/quote"
              className="font-ui mt-6 inline-flex rounded-full bg-[var(--gold)] px-6 py-3 font-bold text-[var(--crimson)] transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Get a free quote →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container">
          <h2 className="font-display mb-10 text-center text-3xl text-white md:text-4xl">
            What neighbors say
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {GEO_REVIEWS.map((review) => (
              <article
                key={review.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={review.projectPhoto}
                    alt={review.imageAlt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 35%" }}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={75}
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs leading-relaxed text-white/80">{review.text}</p>
                  <p className="mt-3 font-ui text-sm font-semibold text-[var(--gold)]">{review.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
