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
    "Expert Christmas light installation in Santa Barbara & Montecito. Licensed & insured. Residential & commercial. Free quote from Glow LLC.",
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
      />

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container mx-auto max-w-[800px] text-center">
          <p className="text-lg leading-relaxed text-white/80">
            Glow LLC brings professional Christmas light installation to Santa Barbara and Montecito,
            handling everything from custom design to removal and storage.
          </p>
        </div>
      </section>

      <FeaturesSection />

      <section className="section-full bg-[var(--night)]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/estate-night-display.webp"
              alt="Estate holiday lighting at night"
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
                    alt={`Project photo — ${review.name}`}
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
