"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open mobile navigation"
        className="text-white md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0f]/95 p-6 text-white md:hidden">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-display text-2xl font-semibold">Glow Installations</p>
            <button
              aria-label="Close mobile navigation"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
          <nav className="space-y-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <p className="pt-3 text-sm uppercase tracking-wide text-white/70">
              Services
            </p>
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                className="block"
                href={`/services/${service.slug}`}
                onClick={() => setOpen(false)}
              >
                {service.menuTitle}
              </Link>
            ))}
            <Link href="/faq" onClick={() => setOpen(false)}>
              FAQ
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
          </nav>
          <div className="fixed inset-x-4 bottom-4 flex gap-3 rounded-2xl border border-white/15 bg-[rgba(12,18,30,0.82)] p-3 text-sm font-semibold text-white backdrop-blur-xl">
            <Link
              href="tel:+18057202559"
              className="flex-1 rounded-full border border-white/30 p-3 text-center"
              onClick={() => setOpen(false)}
            >
              📞 Call Now
            </Link>
            <Link
              href="/quote"
              className="flex-1 rounded-full bg-[var(--crimson)] p-3 text-center text-white"
              onClick={() => setOpen(false)}
            >
              ✨ Get a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
