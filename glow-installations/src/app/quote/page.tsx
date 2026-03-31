import Link from "next/link";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { QuoteReviewsStack } from "@/components/quote/QuoteReviewsStack";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get Your Free Outdoor Lighting Quote | Glow Installations",
  description:
    "Professional christmas lights installation near you on the Central Coast. Outdoor christmas lights installation quote in 24 hours — no commitment. Glow LLC.",
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
          Glow Installations is your local professional christmas light installation company near you on the Central
          Coast. No commitment required — we&apos;ll send a custom outdoor lighting proposal within 24 hours of your
          inquiry.
        </p>
      </div>

      <section className="bg-[var(--deep-navy)] px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#1a2820] p-8">
            <QuoteForm />
          </div>

          <div className="space-y-6 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-2xl font-bold text-white">What&apos;s Included</h2>
              <ul className="mx-auto mt-4 max-w-md space-y-2 text-sm text-white/75">
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

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-display mb-8 text-center text-2xl text-white">What Happens After You Submit</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "We Call You",
                body: "A member of our team calls within 24 hours to confirm details and schedule a free on-site consultation.",
              },
              {
                step: "02",
                title: "Custom Design",
                body: "We assess your property, design your display, and provide a transparent written quote — no surprises.",
              },
              {
                step: "03",
                title: "We Handle Everything",
                body: "You approve the design; we handle installation, maintenance, removal, and storage. That\u2019s it.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <span className="mb-2 block font-display text-3xl font-bold text-[var(--gold)]">{s.step}</span>
                <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-white/60">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/50">
          Want to learn more first?{" "}
          <Link href="/faq" className="text-[var(--gold)] hover:underline">
            Read our FAQ
          </Link>{" "}
          or browse{" "}
          <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
            residential packages
          </Link>{" "}
          and{" "}
          <Link href="/services/commercial-service" className="text-[var(--gold)] hover:underline">
            commercial packages.
          </Link>
        </p>
      </section>
    </div>
  );
}
