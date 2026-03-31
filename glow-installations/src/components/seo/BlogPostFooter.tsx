import Link from "next/link";

export function BlogPostFooter({ slug }: { slug: string }) {
  if (slug === "the-ultimate-guide-to-holiday-light-installation-on-the-central-coast") {
    return (
      <p className="mt-10 text-center text-sm text-white/60">
        Explore our specific installation services:{" "}
        <Link href="/services/single-story-homes" className="text-[var(--gold)] hover:underline">
          single-story homes
        </Link>
        ,{" "}
        <Link href="/services/multi-story-homes" className="text-[var(--gold)] hover:underline">
          multi-story homes
        </Link>
        ,{" "}
        <Link href="/services/estates" className="text-[var(--gold)] hover:underline">
          estates
        </Link>
        , and{" "}
        <Link href="/services/commercial-service" className="text-[var(--gold)] hover:underline">
          commercial properties
        </Link>
        . For{" "}
        <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
          residential christmas light installation
        </Link>{" "}
        overview, start{" "}
        <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
          here
        </Link>
        .{" "}
        <Link href="/faq" className="text-[var(--gold)] hover:underline">
          Read our FAQ
        </Link>{" "}
        for pricing details or{" "}
        <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
          get your free outdoor lighting quote →
        </Link>
      </p>
    );
  }
  if (slug === "why-we-use-leds-and-why-you-should-too") {
    return (
      <p className="mt-10 text-center text-sm text-white/60">
        <Link href="/faq" className="text-[var(--gold)] hover:underline">
          See our FAQ
        </Link>{" "}
        for questions about our lighting options, or read{" "}
        <Link
          href="/post/the-ultimate-guide-to-holiday-light-installation-on-the-central-coast"
          className="text-[var(--gold)] hover:underline"
        >
          The Ultimate Guide to Holiday Light Installation
        </Link>
        . Browse{" "}
        <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
          residential services
        </Link>{" "}
        or{" "}
        <Link href="/services/commercial-service" className="text-[var(--gold)] hover:underline">
          commercial services
        </Link>
        .{" "}
        <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
          Get a free quote →
        </Link>
      </p>
    );
  }
  if (slug === "why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home") {
    return (
      <p className="mt-10 text-center text-sm text-white/60">
        <Link href="/services/santa-barbara-christmas-lights" className="text-[var(--gold)] hover:underline">
          See our Santa Barbara christmas light services
        </Link>{" "}
        or{" "}
        <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
          browse all residential packages
        </Link>
        . Have questions?{" "}
        <Link href="/faq" className="text-[var(--gold)] hover:underline">
          Read our FAQ.
        </Link>{" "}
        <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
          Get a free quote →
        </Link>
      </p>
    );
  }
  return null;
}
