import Link from "next/link";
import Image from "next/image";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Christmas Light Installation Gallery | Glow LLC",
  description:
    "Browse real Christmas light installation photos from Glow LLC — residential & commercial holiday displays across California's Central Coast.",
  path: "/gallery",
});

const images = [
  { src: "/images/gallery-sequoia-wreath.webp", alt: "Residential roofline and wreath installation" },
  { src: "/images/gallery-icicle-roofline.webp", alt: "Warm white icicle roofline lights" },
  { src: "/images/gallery-estate-night.webp", alt: "Estate tree and lawn holiday lighting" },
  { src: "/images/gallery-led-trunk-wrap.webp", alt: "Tree trunk wrap and pathway glow" },
  { src: "/images/review-project-lisa.webp", alt: "Completed neighborhood install with custom accents" },
  { src: "/images/review-project-serena.webp", alt: "Front entry holiday display with premium color balance" },
];

export default function GalleryPage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="local" title="Gallery" path="/gallery" />
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/community-night-display.webp"
          alt="Glow Installations portfolio hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/55 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-end px-6 pb-12 md:px-16">
          <div>
            <span className="eyebrow">Gallery</span>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">
              Our Installation Portfolio
            </h1>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <article
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="p-3 text-sm text-white/75">{image.alt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container">
          <Link
            href="/quote"
            className="font-ui inline-flex rounded-full bg-[var(--crimson)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--crimson-light)]"
          >
            Schedule Your Display →
          </Link>
        </div>
      </section>
    </div>
  );
}
