import Link from "next/link";
import Image from "next/image";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "San Luis Obispo Christmas Light Installation | Glow",
  description:
    "Professional Christmas light installation in San Luis Obispo County. Serving SLO, Arroyo Grande, Nipomo & Paso Robles. Free quote from Glow LLC.",
  path: "/services/san-luis-obispo-christmas-lights",
});

export default function SanLuisObispoServicePage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup
        pageType="service"
        title="Christmas Light Installation in San Luis Obispo, CA"
        description="Holiday lighting for SLO County homes and businesses."
        path="/services/san-luis-obispo-christmas-lights"
      />
      <ServicePageHero
        title="Christmas Light Installation in San Luis Obispo County"
        tagline="San Luis Obispo"
        image="/images/hero-slo.webp"
        price="Starting at $1,200"
        breadcrumbLabel="San Luis Obispo"
      />
      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-display text-3xl text-white">Why SLO Clients Choose Glow</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
          <li>✓ Full-service package from design through storage</li>
          <li>✓ Commercial-grade LEDs for cleaner, brighter displays</li>
          <li>✓ Licensed and insured team, COI available upon request</li>
          <li>✓ Fast communication and reliable scheduling</li>
        </ul>
        </div>
      </section>
      <section className="section-full bg-[var(--night)]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/detail-slo-neighborhood.webp"
              alt="San Luis Obispo neighborhood Christmas lights"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-white">Areas We Cover</h2>
            <p className="mt-3 text-white/75">
              San Luis Obispo, Arroyo Grande, Nipomo, Paso Robles, and nearby
              Central Coast communities.
            </p>
            <Link
              href="/quote"
              className="font-ui mt-6 inline-flex rounded-full bg-[var(--crimson)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--crimson-light)]"
            >
              Request Your Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
