import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { SERVICES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) return {};
  const titles: Record<string, string> = {
    "residential-service": "Residential Christmas Light Installation | Central Coast",
    "commercial-service": "Commercial Christmas Light Installation | Central Coast",
    "single-story-homes": "Single-Story Home Christmas Light Installation | Glow",
    "multi-story-homes": "Multi-Story Home Christmas Lights | Safe Installation",
    estates: "Estate Christmas Light Installation | Central Coast CA",
    ranch: "Ranch Christmas Light Installation | Central Coast CA",
    restaurants: "Restaurant Christmas Light Installation | Central Coast",
  };
  return buildMetadata({
    title: titles[slug] || service.title,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) notFound();

  const heroImages: Record<string, string> = {
    "residential-service": "/images/hero-residential.webp",
    "commercial-service": "/images/hero-commercial.webp",
    "single-story-homes": "/images/hero-single-story.webp",
    "multi-story-homes": "/images/hero-multi-story.webp",
    estates: "/images/hero-estate-night.webp",
    ranch: "/images/hero-ranch.webp",
    restaurants: "/images/hero-restaurant.webp",
  };

  const detailImages = [
    "/images/detail-roofline.webp",
    "/images/detail-tree-wrap.webp",
    "/images/detail-entryway.webp",
  ];

  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup
        pageType="service"
        title={service.title}
        description={service.description}
        path={`/services/${service.slug}`}
      />
      <ServicePageHero
        title={service.title}
        tagline={service.menuTitle}
        image={heroImages[service.slug] || "/images/hero-home-christmas-lights.webp"}
        price={service.slug === "commercial-service" || service.slug === "restaurants" ? "Starting at $1,500" : "Starting at $1,200"}
        breadcrumbLabel={service.menuTitle}
      />

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Average Install Window", value: "1-2 days" },
              { label: "Maintenance Response", value: "Fast in-season fixes" },
              { label: "Service Coverage", value: "Design to Storage" },
            ].map((item) => (
              <article key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-ui text-xs uppercase tracking-wider text-[var(--gold)]">{item.label}</p>
                <p className="mt-2 font-display text-2xl text-white">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container space-y-12">
          {service.intro.slice(0, 3).map((line, index) => (
            <article key={`${line}-${index}`} className="grid items-center gap-8 lg:grid-cols-2">
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <p className="text-lg leading-relaxed text-white/75">{line}</p>
              </div>
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={detailImages[index % detailImages.length]}
                    alt={`${service.menuTitle} holiday lighting detail`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container">
          <h2 className="font-display mb-6 text-3xl text-white md:text-4xl">Related Services</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition hover:border-[var(--gold)]/40"
              >
                {item.menuTitle}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/quote"
              className="font-ui inline-flex rounded-full bg-[var(--crimson)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--crimson-light)]"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
