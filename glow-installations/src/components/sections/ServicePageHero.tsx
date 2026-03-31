import Image from "next/image";
import Link from "next/link";

type ServicePageHeroProps = {
  title: string;
  tagline: string;
  image: string;
  price: string;
  breadcrumbLabel: string;
  /** When false, H1 is not italic (geo SEO pages). */
  titleItalic?: boolean;
  /** Hero is LCP on service pages */
  imagePriority?: boolean;
  imageObjectPosition?: string;
  /** Descriptive alt for SEO (defaults to tagline). */
  imageAlt?: string;
};

export function ServicePageHero({
  title,
  tagline,
  image,
  price,
  breadcrumbLabel,
  titleItalic = true,
  imagePriority = true,
  imageObjectPosition = "center center",
  imageAlt,
}: ServicePageHeroProps) {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={imageAlt ?? tagline}
        fill
        className="object-cover"
        style={{ objectPosition: imageObjectPosition }}
        priority={imagePriority}
        fetchPriority={imagePriority ? "high" : "auto"}
        quality={85}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-[#0A0A0F]/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 text-center md:px-16">
        <nav
          aria-label="Breadcrumb"
          className="font-ui mb-4 flex flex-wrap items-center justify-center gap-2 text-sm text-white/80"
        >
          <Link href="/" className="text-white transition-colors hover:text-[var(--gold)]">
            Home
          </Link>
          <span className="text-white/60" aria-hidden>
            ›
          </span>
          <Link href="/services/residential-service" className="text-white transition-colors hover:text-[var(--gold)]">
            Services
          </Link>
          <span className="text-white/60" aria-hidden>
            ›
          </span>
          <span className="text-white">{breadcrumbLabel}</span>
        </nav>
        <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)]/35 bg-[var(--gold)]/15 px-3 py-1.5">
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
            {price}
          </span>
        </div>
        <h1
          className={`font-display mx-auto mb-4 max-w-4xl text-4xl text-white md:text-6xl lg:text-7xl ${titleItalic ? "italic" : ""}`}
        >
          {tagline}
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/80 md:text-xl">{title}</p>
        <Link
          href="/quote"
          className="font-ui inline-flex items-center gap-2 rounded-full bg-[var(--crimson)] px-8 py-4 font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--crimson-hover)] hover:shadow-[0_0_30px_rgba(139,6,10,0.45)] active:scale-[0.98]"
        >
          Get a Free Quote →
        </Link>
      </div>
    </section>
  );
}
