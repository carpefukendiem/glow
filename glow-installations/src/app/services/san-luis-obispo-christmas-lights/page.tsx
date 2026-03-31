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
  title: "San Luis Obispo Christmas Light Installation | Glow LLC",
  description:
    "Professional christmas light installation in San Luis Obispo County. Serving SLO, Paso Robles, Arroyo Grande & Nipomo. Local installers, free quote from Glow LLC.",
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
        imageAlt="Residential christmas lights installation on a single-story home — Central Coast CA"
      />

      <section className="px-6 py-16 bg-[var(--surface-warm)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
            SLO County&apos;s Christmas Lights Installation Company
          </h2>
          <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
            <p>
              San Luis Obispo County is home to some of the most beautiful residential and commercial properties on the
              California coast — and Glow Installations is proud to be the go-to christmas lights san luis obispo area
              residents and businesses trust for professional holiday lighting. From the wine country estates of Paso
              Robles to the beach communities near Arroyo Grande and Pismo, we provide full-service outdoor holiday
              lights installation across all of SLO County.
            </p>
            <p>
              As one of the most established lighting installation companies on the Central Coast, we&apos;ve completed
              hundreds of installations in the San Luis Obispo area — everything from modest single-story roofline
              packages for first-time clients to multi-acre ranch installations with hundreds of feet of tree wrapping.
              No job is too large or too small.
            </p>
            <p>
              Whether you&apos;re looking to install holiday lights near you for the first time or you&apos;ve been a
              DIY christmas decorator for years and are ready to hand it off to a pro, Glow&apos;s process makes it
              easy. We visit your property, design a custom display, provide a transparent quote, and handle the entire
              installation in a single visit. Holiday lights installation near you shouldn&apos;t be complicated — and
              with Glow, it isn&apos;t.
            </p>
          </div>
          <h3 className="font-display mt-10 mb-4 text-2xl text-[var(--text-dark)]">SLO County Communities We Serve</h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              "San Luis Obispo",
              "Paso Robles",
              "Arroyo Grande",
              "Nipomo",
              "Pismo Beach",
              "Atascadero",
              "Templeton",
              "Grover Beach",
            ].map((city) => (
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
              Request a free San Luis Obispo lighting quote →
            </Link>{" "}
            Browse our{" "}
            <Link href="/services/residential-service" className="text-[var(--crimson)] hover:underline">
              residential christmas light packages
            </Link>{" "}
            and{" "}
            <Link href="/services/commercial-service" className="text-[var(--crimson)] hover:underline">
              commercial holiday lighting services.
            </Link>{" "}
            Questions?{" "}
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
              src="/images/residential-family.webp"
              alt="Family home with warm white LED christmas lights — residential installation SLO County"
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
