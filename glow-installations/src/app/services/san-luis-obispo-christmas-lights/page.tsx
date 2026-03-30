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
  title: "San Luis Obispo Christmas Light Installation | Glow",
  description:
    "Professional Christmas light installation in San Luis Obispo County. Serving SLO, Arroyo Grande, Nipomo & Paso Robles. Free quote from Glow LLC.",
  path: "/services/san-luis-obispo-christmas-lights",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Christmas Light Installation in San Luis Obispo County",
  provider: {
    "@type": "LocalBusiness",
    name: "Glow Installations",
    "@id": `${SITE_URL}/#business`,
  },
  areaServed: [
    { "@type": "City", name: "San Luis Obispo", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Paso Robles", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Arroyo Grande", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Nipomo", containedInPlace: { "@type": "State", name: "California" } },
  ],
  description:
    "Professional holiday lighting for homes and businesses across San Luis Obispo County and the Central Coast.",
  offers: {
    "@type": "Offer",
    price: "1200",
    priceCurrency: "USD",
    description: "Starting at $1,200 for residential installations",
  },
};

export default function SanLuisObispoServicePage() {
  return (
    <div className="bg-[var(--night)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SchemaMarkup
        pageType="service"
        title="Christmas Light Installation in San Luis Obispo, CA"
        description="Holiday lighting for SLO County homes and businesses."
        path="/services/san-luis-obispo-christmas-lights"
      />
      <ServicePageHero
        tagline="Christmas Light Installation in San Luis Obispo, CA"
        title="As the heart of the Central Coast, San Luis Obispo and the surrounding communities deserve to shine during the holidays."
        image="/images/residential-hero.webp"
        price="Residential from $1,200"
        breadcrumbLabel="San Luis Obispo"
        titleItalic={false}
        imageObjectPosition="center center"
      />

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container mx-auto max-w-[800px] text-center">
          <p className="text-lg leading-relaxed text-white/80">
            Glow LLC provides professional Christmas light installation across SLO County — from Paso Robles wine
            country to the beaches of Arroyo Grande and Nipomo.
          </p>
        </div>
      </section>

      <FeaturesSection />

      <section className="section-full bg-[var(--night)]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/residential-family.webp"
              alt="Family home with holiday lights in SLO County"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-white md:text-4xl">Areas we cover</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• San Luis Obispo</li>
              <li>• Paso Robles</li>
              <li>• Arroyo Grande</li>
              <li>• Nipomo</li>
              <li>• Pismo Beach &amp; surrounding areas</li>
            </ul>
            <Link
              href="/quote"
              className="font-ui mt-6 inline-flex rounded-full bg-[var(--gold)] px-6 py-3 font-bold text-[var(--crimson)] transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Request your free quote →
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
