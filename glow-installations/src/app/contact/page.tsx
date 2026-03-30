import Image from "next/image";
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
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/contact-hero.webp"
          alt="Glow contact hero with warm holiday lights"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-end px-6 pb-10 md:px-16">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">Get In Touch</h1>
          </div>
        </div>
      </section>
      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-display text-2xl text-white">Business Inquiries</h2>
            <p className="mt-2 text-sm text-white/75">
              Alex Nava | alex@glowinstallations.com | (805) 720-2559
            </p>
            <h2 className="font-display mt-6 text-2xl text-white">General Inquiries</h2>
            <p className="mt-2 text-sm text-white/75">
              Zuar Aaron Mendoza | zuar@glowinstallations.com | (805) 478-5986
            </p>
          </section>
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-[var(--text-dark)]">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
