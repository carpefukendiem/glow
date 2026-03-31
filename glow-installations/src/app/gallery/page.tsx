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
  {
    src: "/images/gallery-sequoia-wreath-large.webp",
    alt: "Large sequoia wreath display installation — professional holiday lighting",
  },
  {
    src: "/images/gallery-sequoia-lifestyle.webp",
    alt: "Sequoia lifestyle LED wreath on a Central Coast home",
  },
  {
    src: "/images/gallery-fence-wreath.webp",
    alt: "LED wreath on fence line — outdoor holiday lights installation",
  },
  {
    src: "/images/gallery-trunk-wrap.webp",
    alt: "Warm white LED trunk wrap on landscape trees — outdoor christmas light installation",
  },
  {
    src: "/images/review-project-lisa.webp",
    alt: "Professional outdoor christmas lights installed by Glow on a Central Coast home",
  },
  {
    src: "/images/review-project-nathalie.webp",
    alt: "Christmas light installation in Orcutt CA by Glow Installations",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="local" title="Gallery" path="/gallery" />
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/estate-night-display.webp"
          alt="Large estate with professional christmas light installation at night — Central Coast"
          fill
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={80}
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
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoEAAMAAkA4JZQCdAEO/gHOAAD++P///////////////////////wAAAAA="
                />
              </div>
              <p className="p-3 text-sm text-white/80">{image.alt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container text-center">
          <p className="mb-4 text-base text-white/60">
            Like what you see? Every display starts with a free design consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/quote"
              className="font-ui inline-flex items-center gap-2 rounded-full bg-[var(--crimson)] px-6 py-3 font-bold text-white transition-all hover:bg-[var(--crimson-hover)]"
            >
              Get A Free Quote →
            </Link>
            <Link href="/services/residential-service" className="self-center text-[var(--gold)] hover:underline">
              Residential Services
            </Link>
            <Link href="/services/commercial-service" className="self-center text-[var(--gold)] hover:underline">
              Commercial Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
