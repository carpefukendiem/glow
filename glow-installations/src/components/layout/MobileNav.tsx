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
          <div className="relative z-10 flex h-full max-h-[100dvh] min-h-0 flex-col bg-[#0a0a0f]/96 text-white shadow-2xl backdrop-blur-md">
            <div className="flex shrink-0 items-center justify-between p-6 pb-4">
              <SiteLogo variant="mobile" />
              <button
                type="button"
                aria-label="Close mobile navigation"
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>
            <nav className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-6 pb-6">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/gallery" onClick={() => setOpen(false)}>
                Gallery
              </Link>
              <p className="pt-3 text-sm uppercase tracking-wide text-white">Services</p>
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
          </div>
        </div>
      )}
    </>
  );
}
