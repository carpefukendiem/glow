"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GEO_REVIEWS } from "@/lib/geo-reviews";

export function TestimonialsCarousel() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--night)] py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="mb-16 text-center">
          <span className="eyebrow">Real Customers</span>
          <div className="divider-gold" />
          <h2 className="font-display mt-4 text-4xl text-white md:text-5xl">
            What the Central Coast Says
          </h2>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4 md:px-0">
          {GEO_REVIEWS.map((review, index) => (
            <motion.article
              key={review.name}
              initial={reduced ? false : { opacity: 0, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex min-w-[82%] snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-w-0"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={review.projectPhoto}
                  alt={`Christmas light installation by Glow for ${review.name}`}
                  fill
                  sizes="(max-width: 768px) 82vw, (max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoEAAMAAkA4JZQCdAEO/gHOAAD++P///////////////////////wAAAAA="
                />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-white/95 px-2 py-1">
                  <span className="text-xs font-semibold text-[#333]">Google</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex gap-1 text-lg text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="-mt-4 mb-2 text-8xl leading-none text-[var(--gold)]/20">&quot;</span>
                <p className="-mt-8 flex-1 text-sm leading-relaxed text-white/80">{review.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)] text-xs font-bold text-[var(--crimson)]">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-white/70">Verified Google Review</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-center">
            <p className="font-display text-5xl font-bold text-[var(--gold)]">5.0</p>
            <p className="mt-1 text-xs text-white/70">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">4+</p>
            <p className="mt-1 text-xs text-white/70">Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
