import Image from "next/image";
import Link from "next/link";

export function CommunitySection() {
  return (
    <section className="bg-[var(--surface-cream)] py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 px-6 md:px-16 lg:flex-row">
        <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden rounded-3xl shadow-2xl lg:w-[58%]">
          <Image
            src="/images/estate-night-display.webp"
            alt="Large estate with professional christmas light installation at night — Central Coast"
            fill
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
            sizes="(max-width: 1024px) 100vw, 58vw"
            quality={80}
          />
          <div className="pointer-events-none absolute inset-3 rounded-2xl border border-white/20" />
          <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-[var(--night)]/90 p-4 backdrop-blur-sm">
            <p className="font-display text-3xl font-bold text-[var(--gold)]">5★</p>
            <p className="text-sm text-white">Rated on Google</p>
          </div>
        </div>

        <div className="w-full lg:w-[42%]">
          <span className="eyebrow" style={{ color: "var(--crimson)" }}>
            Our Why
          </span>
          <h2 className="font-display mb-6 mt-4 text-4xl leading-tight text-[var(--text-dark)] md:text-5xl">
            It&apos;s About More Than Just Lights.
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[var(--text-dark-secondary)]">
            Why even put up lights? We like to think it&apos;s because it makes us feel
            like we&apos;re part of something bigger. Being part of our community and
            sharing in what makes the holidays special is why we exist.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[var(--text-dark-secondary)]">
            Join our vibrant Christmas light-loving community and let&apos;s illuminate
            the season together. We create magical moments that unite neighborhoods and
            businesses and transform ordinary spaces into winter wonderlands.
          </p>
          <p className="mb-8 text-base leading-relaxed text-[var(--text-dark-secondary)]">
            Since our founding, Glow has become one of the most trusted names in professional holiday light
            installation on the Central Coast. We&apos;ve transformed hundreds of homes and businesses into luminous
            landmarks that neighbors slow down to admire. When you&apos;re ready to stop being the house without lights,
            our christmas light installation service is just one call away.
          </p>
          <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="font-ui inline-flex items-center gap-2 rounded-full bg-[var(--crimson)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--crimson-light)]"
              >
                Meet the Team →
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/glowinstallations"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--text-dark)]/20 transition-colors hover:border-[var(--crimson)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/glowinstallations"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--text-dark)]/20 transition-colors hover:border-[var(--crimson)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex shrink-0 justify-center sm:w-36 md:w-40 lg:w-48">
              <Image
                src="/images/outdoor-lighting-installation-service.png"
                alt="Glow Installations — outdoor lighting installation service elf mascot"
                width={200}
                height={280}
                className="h-auto w-full max-w-[200px] object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
