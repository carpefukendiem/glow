import Link from "next/link";
import { SERVICES } from "@/lib/content";

export function ServicesGrid() {
  const featured = SERVICES.filter((s) =>
    ["residential-service", "commercial-service"].includes(s.slug),
  );

  return (
    <section className="grid gap-4 md:grid-cols-2">
      {featured.map((service) => (
        <Link
          href={`/services/${service.slug}`}
          key={service.slug}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <h2 className="text-2xl font-semibold">{service.menuTitle} Services</h2>
          <p className="mt-2 text-[#1A1A1A]/75">{service.description}</p>
        </Link>
      ))}
    </section>
  );
}
