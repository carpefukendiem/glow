"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SiteLogo } from "@/components/layout/SiteLogo";
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
        <div className="fixed inset-0 z-50 flex flex-col md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 flex h-full max-h-[100dvh] flex-col overflow-y-auto bg-[#0a0a0f]/96 p-6 pb-28 text-white shadow-2xl backdrop-blur-md">
            <div className="mb-6 flex items-center justify-between">
            <SiteLogo variant="mobile" />
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
            <Link href="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <p className="pt-3 text-sm uppercase tracking-wide text-white">
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
            <div className="fixed inset-x-4 bottom-4 z-[60] flex gap-3 rounded-2xl border border-white/15 bg-[rgba(52,67,54,0.88)] p-3 text-sm font-semibold text-white backdrop-blur-xl">
            <Link
              href="tel:+18057202559"
              className="flex-1 rounded-full border border-white/30 p-3 text-center"
              onClick={() => setOpen(false)}
            >
              📞 Call Now
            </Link>
            <Link
              href="/quote"
              className="flex-1 rounded-full bg-[var(--gold)] p-3 text-center font-bold text-[var(--crimson)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setOpen(false)}
            >
              ✨ Get A Free Quote
            </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
