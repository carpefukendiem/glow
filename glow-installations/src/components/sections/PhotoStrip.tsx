import Image from "next/image";

const photos = [
  {
    src: "/images/gallery-sequoia-wreath-large.webp",
    alt: "Large sequoia wreath display installation",
  },
  {
    src: "/images/gallery-sequoia-lifestyle.webp",
    alt: "Sequoia lifestyle LED wreath on a Central Coast home",
  },
  {
    src: "/images/gallery-fence-wreath.webp",
    alt: "LED wreath on fence line",
  },
  {
    src: "/images/gallery-trunk-wrap.webp",
    alt: "Warm white LED trunk wrap on landscape trees",
  },
];

export function PhotoStrip() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex h-[clamp(280px,40vw,520px)] flex-col md:flex-row">
        {photos.map((photo) => (
          <div key={photo.src} className="group relative flex-1 overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              quality={68}
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[var(--crimson)]/0 transition-all duration-500 group-hover:bg-[var(--crimson)]/20" />
            <div className="absolute inset-0 border-4 border-[var(--gold)]/0 transition-all duration-500 group-hover:border-[var(--gold)]/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
