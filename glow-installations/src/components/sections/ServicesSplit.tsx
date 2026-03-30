"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Residential",
    tagline: "No place like home.",
    body: "Make it yours without all the work. From rooflines to trees, custom designed for your home.",
    price: "Starting at $1,200",
    href: "/services/residential-service",
    image: "/images/residential-hero.webp",
  },
  {
    title: "Commercial",
    tagline: "Impress every customer.",
    body: "Welcome guests with a unique holiday experience. Full service for any size business.",
    price: "Starting at $1,500",
    href: "/services/commercial-service",
    image: "/images/commercial-wreath-display.webp",
  },
];

export function ServicesSplit() {
  const reduced = useReducedMotion();

  return (
    <section className="flex min-h-[70vh] flex-col md:flex-row">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={reduced ? false : { opacity: 0, y: 36 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          className="group relative flex min-h-[60vw] flex-1 items-end overflow-hidden transition-all duration-300 hover:-translate-y-0.5 md:max-h-[80vh]"
        >
          <Image
            src={service.image}
            alt={`${service.title} Christmas light installation`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoEAAMAAkA4JZQCdAEO/gHOAAD++P///////////////////////wAAAAA="
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />
          {index === 0 && (
            <div className="absolute bottom-0 right-0 top-0 z-10 hidden w-px bg-white/10 md:block" />
          )}
          <div className="relative z-10 w-full p-8 md:p-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/20 px-3 py-1.5 backdrop-blur-sm">
              <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                {service.title}
              </span>
            </div>
            <h2 className="font-display mb-2 text-4xl italic text-white md:text-5xl">
              {service.tagline}
            </h2>
            <p className="mb-4 max-w-xs text-base text-white/80 md:text-lg">
              {service.body}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-ui text-sm font-semibold text-[var(--gold)]">
                {service.price}
              </span>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm text-white transition-all hover:gap-3"
              >
                View Services <span className="text-[var(--gold)]">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
