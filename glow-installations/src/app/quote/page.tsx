import { QuoteForm } from "@/components/forms/QuoteForm";
import { QuoteReviewsStack } from "@/components/quote/QuoteReviewsStack";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get Your Free Outdoor Lighting Quote | Glow Installations",
  description:
    "Request a free outdoor lighting and Christmas light installation quote from Glow LLC. Serving Central Coast CA. No commitment required. Custom proposal within 24 hours.",
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

      <div className="bg-[var(--crimson)] px-6 pb-10 pt-28 text-center md:pt-32">
        <p className="mb-2 font-ui text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
          Proudly Serving Montecito to Paso Robles
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
          Get Your Free Outdoor Lighting Quote
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-white/70">
          No commitment required. Custom proposal within 24 hours.
        </p>
      </div>

      <section className="bg-[var(--deep-navy)] px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#1a2820] p-8">
            <QuoteForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-2xl font-bold text-white">What&apos;s Included</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {included.map((item) => (
                  <li key={item}>
                    <span className="text-[var(--gold)]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display mb-4 text-xl font-bold text-white">Recent reviews</h2>
              <QuoteReviewsStack />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
