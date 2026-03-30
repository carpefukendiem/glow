import Image from "next/image";
import Link from "next/link";

type ServicePageHeroProps = {
  title: string;
  tagline: string;
  image: string;
  price: string;
  breadcrumbLabel: string;
};

export function ServicePageHero({
  title,
  tagline,
  image,
  price,
  breadcrumbLabel,
}: ServicePageHeroProps) {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-end overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-[#0A0A0F]/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 md:px-16">
        <nav className="font-ui mb-4 flex items-center gap-2 text-sm text-white/50">
          <Link href="/" className="hover:text-white/70">
            Home
          </Link>
          <span>›</span>
          <Link href="/services/residential-service" className="hover:text-white/70">
            Services
          </Link>
          <span>›</span>
          <span className="text-white/70">{breadcrumbLabel}</span>
        </nav>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/15 px-3 py-1.5">
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
            {price}
          </span>
        </div>
        <h1 className="font-display mb-4 text-5xl italic text-white md:text-7xl">{tagline}</h1>
        <p className="mb-8 max-w-xl text-xl text-white/70">{title}</p>
        <Link
          href="/quote"
          className="font-ui inline-flex items-center gap-2 rounded-full bg-[var(--crimson)] px-8 py-4 font-bold text-white transition-all hover:bg-[var(--crimson-light)]"
        >
          Get a Free Quote →
        </Link>
      </div>
    </section>
  );
}
