import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaqQuestionForm } from "@/components/forms/FaqQuestionForm";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { FAQS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const FaqAccordion = dynamic(() => import("@/components/faq/FaqAccordion"), {
  loading: () => (
    <div className="h-64 animate-pulse rounded-xl bg-white/5" aria-hidden role="presentation" />
  ),
});

export const metadata = buildMetadata({
  title: "Christmas Light Installation FAQ | Pricing & Services",
  description:
    "Questions about our christmas light service? See pricing, what's included, service areas & booking from the Central Coast's trusted christmas light company.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="faq" title="FAQ" path="/faq" />
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/faq-hero.webp"
          alt="Professional exterior christmas lights on a Central Coast home — FAQ"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-end px-6 pb-12 md:px-16">
          <div>
            <span className="eyebrow">FAQ</span>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">
              Frequently Asked Questions About Our Services
            </h1>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container max-w-3xl text-center">
          <p className="text-lg text-white/70">
            We&apos;re one of the most trusted christmas light companies near you on the Central Coast. Here&apos;s
            everything you need to know about how our christmas light service works — from pricing and scheduling to
            what&apos;s included in every install. If you&apos;re comparing companies that hang christmas lights in the
            area, we&apos;re confident our full-service approach stands apart.
          </p>
        </div>
        <div className="container mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
            <h2 className="font-display text-2xl text-white">Residential</h2>
            <p className="mt-2 font-ui text-sm uppercase tracking-wider text-[var(--gold)]">
              Starting at $1,200 / 150 ft
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>✓ Install ✓ Maintenance ✓ Removal ✓ Storage</p>
              <p>✓ Automatic Adjustable Timer</p>
              <p>✓ C9 LED Bulbs Custom Cut to Fit</p>
              <p>✓ Optional Upgraded Colors and Fixtures</p>
            </div>
          </article>
          <article className="relative rounded-2xl border border-[var(--gold)]/40 bg-white/8 p-6 backdrop-blur-sm shadow-[var(--glow-gold)]">
            <span className="font-ui absolute right-4 top-4 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--crimson)]">
              Most Popular
            </span>
            <h2 className="font-display text-2xl text-white">Commercial</h2>
            <p className="mt-2 font-ui text-sm uppercase tracking-wider text-[var(--gold)]">
              Starting at $1,500 / 150 ft
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>✓ Everything in Residential, plus</p>
              <p>✓ Custom designed for business traffic goals</p>
              <p>✓ Upgraded colors and fixtures included</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container">
          <FaqAccordion items={FAQS} />

          <div className="mt-10 border-t border-white/10 py-10 text-center">
            <p className="mb-4 text-base text-white/70">
              Still have questions? Our team of pro christmas light installers is happy to walk you through the
              process.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
                Get a free outdoor lighting quote →
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
                Residential services
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/services/commercial-service" className="text-[var(--gold)] hover:underline">
                Commercial services
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/contact" className="text-[var(--gold)] hover:underline">
                Contact us
              </Link>
            </div>
          </div>

          <section className="mt-12 rounded-2xl border border-white/10 bg-[#1a2820] p-8">
            <h2 className="font-display mb-6 text-2xl font-bold text-white">Have Another Question?</h2>
            <FaqQuestionForm />
          </section>
        </div>
      </section>
    </div>
  );
}
