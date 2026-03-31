import Image from "next/image";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden text-center">
      <Image
        src="/images/cta-banner-night-home.webp"
        alt="Stunning Christmas light installation on a Central Coast home"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0A0A0F]/75" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(226,202,162,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${10 + (i % 4) * 8}px`,
              height: `${10 + (i % 4) * 8}px`,
              left: `${(i * 13 + 7) % 100}%`,
              top: `${(i * 19 + 10) % 90}%`,
              background:
                i % 2 === 0
                  ? "rgba(226, 202, 162, 0.32)"
                  : "rgba(139, 6, 10, 0.18)",
              filter: `blur(${5 + (i % 3) * 4}px)`,
              animationDelay: `${(i * 0.5) % 3}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <span className="eyebrow mb-4 block">Get Your GLOW On</span>
        <h2 className="font-display mb-6 text-5xl leading-tight text-white md:text-7xl">
          Let Your Holidays <span className="italic text-[var(--gold)]">Shine Bright</span>
        </h2>
        <p className="mb-10 text-xl text-white/80">
          It&apos;s more than just lights. Let us help your festivities glow this season.
          Schedule your installation today.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="font-ui inline-flex items-center justify-center gap-2 rounded-full bg-[var(--crimson)] px-10 py-5 text-lg font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--crimson-hover)] hover:shadow-[0_0_60px_rgba(139,6,10,0.55)] active:scale-[0.98]"
          >
            Get A Free Quote →
          </Link>
          <a
            href="tel:+18057202559"
            className="font-ui inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
          >
            📞 (805) 720-2559
          </a>
        </div>
      </div>
    </section>
  );
}
