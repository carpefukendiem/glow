import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ServiceSeoBlocks } from "@/components/seo/ServiceSeoBlocks";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { SERVICES } from "@/lib/content";
import { SERVICE_PAGE_MEDIA } from "@/lib/service-media";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  "residential-service":
    "Professional home christmas lights installation on the Central Coast. Hanging exterior christmas lights, custom design, maintenance & storage. Starting at $1,200. Free quote.",
  "commercial-service":
    "Commercial holiday lighting installation for Central Coast businesses. Licensed christmas light contractors, full-service design through removal. Starting at $1,500.",
  "single-story-homes":
    "Expert christmas lights installation for single-story homes. Gutter hanging christmas lights, roofline, windows & trees. Central Coast CA. Free quote from Glow LLC.",
  "multi-story-homes":
    "Professional exterior christmas lights on multi-story homes. Trained outdoor lighting installers for any height. Central Coast CA. Free quote from Glow LLC.",
  estates:
    "Custom christmas lights for estates & luxury homes on the Central Coast. Full-scale outdoor holiday lighting installation with custom design. Free quote from Glow LLC.",
  ranch:
    "Outdoor holiday lights installation for ranches & rural properties. Tree light installation, fence lines, lawn lighting. Central Coast CA. Free quote from Glow LLC.",
  restaurants:
    "Commercial holiday lighting for restaurants on the Central Coast. Full-service christmas light hanging service for any dining establishment. Free quote from Glow LLC.",
};

const HERO_ALTS: Record<string, string> = {
  "residential-service": "Residential christmas lights installation on a single-story home — Central Coast CA",
  "commercial-service": "Large sequoia wreath display — commercial christmas light installation",
  "single-story-homes": "Single-story home with professional holiday roofline lighting — Central Coast",
  "multi-story-homes": "Multi-story home with professional exterior christmas lights at night",
  estates: "Large estate with professional christmas light installation at night — Central Coast",
  ranch: "Ranch property with outdoor holiday lights and tree wrapping — Central Coast",
  restaurants: "Restaurant interior with warm commercial holiday lighting",
};

function sectionImageAlt(slug: string, index: number, menuTitle: string): string {
  const alts: Record<string, [string, string, string]> = {
    "residential-service": [
      "Family home with warm white LED christmas lights — residential installation",
      "Close-up of residential roofline C9 LED bulbs — professional christmas lights",
      "Roofline holiday lighting installation detail — exterior christmas lights",
    ],
    "commercial-service": [
      "Commercial wreath and facade holiday display",
      "Commercial property trees wrapped with LED holiday lights",
      "LED icicle roofline — commercial exterior christmas lights",
    ],
    "single-story-homes": [
      "Single-story column entry with holiday lighting",
      "Residential roofline LED detail — house christmas lights installation",
      "Tree wrap holiday lighting on a Central Coast home",
    ],
    "multi-story-homes": [
      "Multi-story home lifestyle display with roofline lights",
      "Professional roofline christmas light installation on a two-story home",
      "Entryway garland and lights — hanging exterior christmas lights",
    ],
    estates: [
      "Estate driveway and landscape with custom christmas light design at night",
      "Estate fence line with LED holiday lighting",
      "Santa Barbara area estate with architectural holiday lighting",
    ],
    ranch: [
      "Ranch sequoia and outdoor holiday lighting display",
      "Sequoia lifestyle LED wreath on a Central Coast ranch property",
      "Warm white LED trunk wrap on landscape trees — outdoor holiday lights installation",
    ],
    restaurants: [
      "Restaurant dining room with holiday decor and lighting",
      "Commercial holiday wreath display for restaurants",
      "Commercial trees with professional holiday lighting",
    ],
  };
  const row = alts[slug];
  if (row) return row[index % 3];
  return `${menuTitle} holiday lighting — Central Coast`;
}

function sectionImageStyle(src: string): CSSProperties | undefined {
  if (src.includes("estate-night")) return { objectPosition: "center 40%" };
  if (src.includes("team-") || src.includes("review-")) return { objectPosition: "center 35%" };
  return { objectPosition: "center center" };
}

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
    description: SERVICE_DESCRIPTIONS[slug] || service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) notFound();

  const media = SERVICE_PAGE_MEDIA[service.slug] ?? {
    hero: "/images/hero-home-christmas-lights.webp",
    sections: [
      "/images/detail-roofline.webp",
      "/images/detail-tree-wrap.webp",
      "/images/detail-entryway.webp",
    ],
  };

  const heroPosition =
    service.slug === "estates" ? "center 40%" : service.slug === "ranch" ? "center 55%" : "center center";

  const heroSubtitle =
    service.slug === "restaurants"
      ? (service.intro[1] ?? service.description)
      : (service.intro[0] ?? service.description);

  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup
        pageType="service"
        title={service.title}
        description={SERVICE_DESCRIPTIONS[slug] || service.description}
        path={`/services/${service.slug}`}
      />
      <ServicePageHero
        tagline={service.title}
        title={heroSubtitle}
        image={media.hero}
        price={
          service.slug === "commercial-service" || service.slug === "restaurants"
            ? "Starting at $1,500"
            : "Starting at $1,200"
        }
        breadcrumbLabel={service.menuTitle}
        imageObjectPosition={heroPosition}
        titleItalic={service.slug !== "restaurants"}
        imageAlt={HERO_ALTS[slug]}
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

      <ServiceSeoBlocks slug={slug} />

      <section className="section-full bg-[var(--night)]">
        <div className="container space-y-12">
          {service.intro.slice(0, 3).map((line, index) => {
            const imgSrc = media.sections[index % media.sections.length];
            return (
              <article key={`${line}-${index}`} className="grid items-center gap-8 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                  <p className="text-lg leading-relaxed text-white/80">{line}</p>
                </div>
                <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
                    <Image
                      src={imgSrc}
                      alt={sectionImageAlt(slug, index, service.menuTitle)}
                      fill
                      className="object-cover"
                      style={sectionImageStyle(imgSrc)}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={80}
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoEAAMAAkA4JZQCdAEO/gHOAAD++P///////////////////////wAAAAA="
                    />
                  </div>
                </div>
              </article>
            );
          })}
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
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-xl"
              >
                <span className="block text-white">{item.menuTitle}</span>
                <span className="mt-2 block text-xs font-normal text-white/65">{item.description}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/quote"
              className="font-ui inline-flex rounded-full bg-[var(--crimson)] px-5 py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--crimson-hover)] active:scale-[0.98]"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
