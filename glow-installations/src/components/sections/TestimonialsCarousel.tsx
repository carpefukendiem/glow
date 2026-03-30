"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const reviews = [
  {
    name: "Lisa R.",
    projectPhoto: "/images/review-project-lisa.webp",
    text: "Zuar and Alex have installed lights on our house for the last three years. These guys are the best, professional, on time, and detail oriented.",
  },
  {
    name: "Mike S.",
    projectPhoto: "/images/review-project-mike.webp",
    text: "We have never seen our house look this good. We were hesitant about the price, but seeing the final display was totally worth it.",
  },
  {
    name: "Serena R.",
    projectPhoto: "/images/review-project-serena.webp",
    text: "We loved working with Zuar and Alex. They did an awesome job putting up our Christmas lights and were incredibly professional.",
  },
];

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

        <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={reduced ? false : { opacity: 0, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex min-w-[82%] snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)] md:min-w-0"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={review.projectPhoto}
                  alt={`Christmas light installation by Glow for ${review.name}`}
                  fill
                  sizes="(max-width: 768px) 82vw, 33vw"
                  className="object-cover object-center"
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
                <span className="-mt-4 mb-2 text-8xl leading-none text-[var(--gold)]/20">
                  &quot;
                </span>
                <p className="-mt-8 flex-1 text-sm leading-relaxed text-white/75">{review.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)] text-xs font-bold text-black">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-white/40">Verified Google Review</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-center">
            <p className="font-display text-5xl font-bold text-[var(--gold)]">5.0</p>
            <p className="mt-1 text-xs text-white/50">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">4+</p>
            <p className="mt-1 text-xs text-white/50">Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
