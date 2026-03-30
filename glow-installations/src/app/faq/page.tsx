import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FaqQuestionForm } from "@/components/forms/FaqQuestionForm";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { FAQS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Christmas Light Installation FAQ | Pricing & Services",
  description:
    "Answers about Christmas light installation pricing, what's included, service area, booking & more. Residential from $1,200. Commercial from $1,500.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="faq" title="FAQ" path="/faq" />
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/faq-hero.webp"
          alt="Holiday lights frequently asked questions banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-end px-6 pb-12 md:px-16">
          <div>
            <span className="eyebrow">FAQ</span>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
            <h2 className="font-display text-2xl text-white">Residential</h2>
            <p className="mt-2 font-ui text-sm uppercase tracking-wider text-[var(--gold)]">
              Starting at $1,200 / 150 ft
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>✓ Install ✓ Maintenance ✓ Removal ✓ Storage</p>
              <p>✓ Automatic Adjustable Timer</p>
              <p>✓ C9 LED Bulbs Custom Cut to Fit</p>
              <p>✓ Optional Upgraded Colors and Fixtures</p>
            </div>
          </article>
          <article className="relative rounded-2xl border border-[var(--gold)]/40 bg-white/8 p-6 backdrop-blur-sm shadow-[var(--glow-gold)]">
            <span className="font-ui absolute right-4 top-4 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
              Most Popular
            </span>
            <h2 className="font-display text-2xl text-white">Commercial</h2>
            <p className="mt-2 font-ui text-sm uppercase tracking-wider text-[var(--gold)]">
              Starting at $1,500 / 150 ft
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>✓ Everything in Residential, plus</p>
              <p>✓ Custom designed for business traffic goals</p>
              <p>✓ Upgraded colors and fixtures included</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQS.map((faq, index) => (
              <Accordion.Item
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-xl border border-white/10 bg-[var(--navy)] transition-all data-[state=open]:border-[var(--gold)]/35"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between p-4 text-left font-semibold text-white">
                    {faq.question}
                    <ChevronDown className="h-4 w-4 text-[var(--gold)] transition-transform data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-4 pb-4 text-sm text-white/75">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <div className="mt-10">
            <FaqQuestionForm />
          </div>
        </div>
      </section>
    </div>
  );
}
