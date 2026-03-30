import Image from "next/image";

const photos = [
  {
    src: "/images/gallery-sequoia-wreath.webp",
    alt: "Large sequoia wreath installation",
  },
  {
    src: "/images/gallery-icicle-roofline.webp",
    alt: "LED icicle lights on roofline",
  },
  {
    src: "/images/gallery-estate-night.webp",
    alt: "Large estate with Christmas lights at night",
  },
  {
    src: "/images/gallery-led-trunk-wrap.webp",
    alt: "LED trunk wrap on trees",
  },
];

export function PhotoStrip() {
  return (
    <section className="w-full overflow-hidden">
      <div
        className="flex h-[clamp(300px,45vw,600px)] flex-col md:flex-row"
      >
        {photos.map((photo) => (
          <div key={photo.src} className="group relative flex-1 overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
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
