import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Glow Installations | Get in Touch Today",
  description:
    "Contact Glow LLC for Christmas light installation questions or scheduling. Call (805) 720-2559 or email alex@glowinstallations.com. We respond fast!",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="contact" title="Contact Glow Installations" path="/contact" />
      <section className="bg-[var(--crimson)] px-6 pb-12 pt-24 text-center md:pt-28">
        <span className="eyebrow inline-block text-[var(--gold)]">Contact</span>
        <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">Get In Touch</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
          Whether you&apos;re planning a new display, checking on a project, or just have a
          quick question, we&apos;re here to help. Pick the right contact below or send us a
          message — we usually respond within one business day.
        </p>
      </section>
      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="font-display text-2xl text-white">Business Inquiries</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Alex Nava
                <br />
                alex@glowinstallations.com
                <br />
                (805) 720-2559
              </p>
              <h2 className="font-display mt-8 text-2xl text-white">General Inquiries</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Zuar Aaron Mendoza
                <br />
                zuar@glowinstallations.com
                <br />
                (805) 478-5986
              </p>
            </section>
            <div className="rounded-2xl border border-white/10 bg-white p-6 text-[var(--text-dark)]">
              <h2 className="font-display mb-4 text-center text-2xl text-[var(--text-dark)]">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 max-w-3xl border-t border-white/10 pt-8 text-center">
          <p className="mb-4 text-sm text-white/65">
            Looking for a specific service? We can help you faster if you use the right form:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
              Get a free outdoor lighting quote →
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/faq" className="text-[var(--gold)] hover:underline">
              FAQ &amp; Pricing
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
              Residential Services
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/services/commercial-service" className="text-[var(--gold)] hover:underline">
              Commercial Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
