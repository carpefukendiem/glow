import Link from "next/link";
import Image from "next/image";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Santa Barbara Christmas Light Installation | Glow LLC",
  description:
    "Expert Christmas light installation in Santa Barbara & Montecito. Licensed & insured. Residential & commercial. Free quote from Glow LLC.",
  path: "/services/santa-barbara-christmas-lights",
});

export default function SantaBarbaraServicePage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup
        pageType="service"
        title="Christmas Light Installation in Santa Barbara, CA"
        description="Local Santa Barbara and Montecito holiday lighting services by Glow LLC."
        path="/services/santa-barbara-christmas-lights"
      />
      <ServicePageHero
        title="Christmas Light Installation in Santa Barbara and Montecito"
        tagline="Santa Barbara"
        image="/images/hero-santa-barbara.webp"
        price="Starting at $1,500"
        breadcrumbLabel="Santa Barbara"
      />
      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-display text-3xl text-white">What You Get</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
          <li>✓ Custom design matched to your architecture and goals</li>
          <li>✓ Professional installation by licensed and insured crews</li>
          <li>✓ In-season maintenance and fast repairs</li>
          <li>✓ Careful post-season removal and year-round storage</li>
          <li>✓ Residential and commercial options</li>
        </ul>
        </div>
      </section>
      <section className="section-full bg-[var(--night)]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/detail-sb-estate.webp"
              alt="Santa Barbara estate holiday lights"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-white">Service Area</h2>
            <p className="mt-3 text-white/75">
              We serve Santa Barbara, Montecito, Summerland, and surrounding Central
              Coast neighborhoods.
            </p>
            <Link
              href="/quote"
              className="font-ui mt-6 inline-flex rounded-full bg-[var(--crimson)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--crimson-light)]"
            >
              Get Your Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
