import Image from "next/image";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { StarRating } from "@/components/ui/StarRating";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Free Christmas Light Quote | Glow Installations",
  description:
    "Request a free Christmas light installation quote from Glow LLC. Serving Central Coast CA. No commitment required. Custom proposal within 24 hours.",
  path: "/quote",
});

const included = [
  "Custom Designed Array of Lights",
  "Professional Installation",
  "Commercial-grade lights that shine brighter than retail",
  "Preprogrammed Timer for Auto On/Off",
  "Fast, free fixes all season if anything isn't perfect",
  "Careful Removal to Protect Your Home",
  "Year Round Storage — nothing for you to pack away",
];

export default function QuotePage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="service" title="Get Quote" path="/quote" />
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/quote-hero.webp"
          alt="Request a premium holiday lighting quote"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-end px-6 pb-10 md:px-16">
          <div>
            <p className="eyebrow">Montecito to Paso Robles</p>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">
              Get Your Free Quote
            </h1>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container grid gap-8 md:grid-cols-2">
          <section className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-display text-3xl text-white">What&apos;s Included</h2>
            <ul className="space-y-2 text-sm text-white/75">
            {included.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
            </ul>
            <article className="rounded-xl bg-[var(--surface-cream)] p-4 text-[var(--text-dark)]">
              <StarRating />
              <p className="mt-2 text-sm">
                &quot;You want to have your lights the way you want them. Those guys
                are AWESOME!&quot;
              </p>
              <p className="mt-2 font-semibold">Nathalie A.</p>
            </article>
          </section>
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-[var(--text-dark)]">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
