"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/images/holiday-light-installation-experts.webp"
        alt="Professional christmas light installation on a Central Coast home at night"
        fill
        priority
        fetchPriority="high"
        quality={82}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 60%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/30 via-[#0A0A0F]/60 to-[#0A0A0F]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/80 via-[#0A0A0F]/35 to-transparent" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${8 + (i % 5) * 6}px`,
              height: `${8 + (i % 5) * 6}px`,
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 23 + 10) % 80}%`,
              background:
                i % 3 === 0
                  ? "rgba(226, 202, 162, 0.35)"
                  : i % 3 === 1
                    ? "rgba(255, 235, 200, 0.28)"
                    : "rgba(201, 169, 122, 0.22)",
              filter: `blur(${4 + (i % 3) * 3}px)`,
              animationDelay: `${(i * 0.4) % 3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-24 md:px-16">
        <div className="max-w-3xl">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="text-[var(--gold)]">★★★★★</span>
            <span className="text-sm font-medium text-white">
              5-Star Rated · Licensed &amp; Insured · Central Coast&apos;s #1 Installer
            </span>
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 30 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            We Install
            <br />
            <span className="italic text-[var(--gold)]">Christmas</span>
            <br />
            Lights.
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 mt-6 max-w-2xl text-xl font-light text-white/80 md:text-2xl"
          >
            The Central Coast&apos;s trusted christmas lighting company serving residential and commercial properties
            from Paso Robles to Ventura. Professional christmas light installation, design, and full-service care —
            every season.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/quote"
              className="font-ui inline-flex items-center justify-center gap-2 rounded-full bg-[var(--crimson)] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--crimson-hover)] hover:shadow-[0_0_40px_rgba(139,6,10,0.5)] active:scale-[0.98]"
            >
              Get A Free Quote →
            </Link>
            <a
              href="tel:+18057202559"
              className="font-ui inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
            >
              📞 (805) 720-2559
            </a>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white"
          >
            {[
              "Free Design Consultation",
              "No Commitment Until You Approve",
              "Licensed & Insured",
              "COI Available",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-[var(--gold)]">✓</span> {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/70">Scroll</span>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      )}
    </section>
  );
}
