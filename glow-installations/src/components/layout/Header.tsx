"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/layout/MobileNav";
import { BUSINESS, SERVICES } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-16">
        <Link href="/" className="font-display text-2xl font-semibold text-white">
          Glow Installations
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <div className="group relative">
            <span className="font-ui inline-flex cursor-default items-center gap-1 text-[13px] uppercase tracking-[0.05em] text-white/80">
              Services <ChevronDown className="h-4 w-4" />
            </span>
            <div className="invisible absolute left-1/2 top-full mt-5 w-[520px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[var(--navy)]/95 p-4 opacity-0 shadow-[var(--shadow-card-dark)] transition group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    className="rounded-xl border border-white/5 px-3 py-2 transition hover:border-[var(--gold)]/40 hover:bg-white/5"
                    href={`/services/${service.slug}`}
                  >
                    <p className="font-ui text-[12px] font-semibold uppercase tracking-wide text-white/90">
                      {service.menuTitle}
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link className="font-ui text-[13px] uppercase tracking-[0.05em] text-white/80 hover:text-white" href="/gallery">
            Gallery
          </Link>
          <Link className="font-ui text-[13px] uppercase tracking-[0.05em] text-white/80 hover:text-white" href="/faq">
            FAQ
          </Link>
          <Link className="font-ui text-[13px] uppercase tracking-[0.05em] text-white/80 hover:text-white" href="/contact">
            Contact
          </Link>
          <Link className="font-ui text-[13px] uppercase tracking-[0.05em] text-white/80 hover:text-white" href="/about">
            About
          </Link>
          <a href={`tel:${BUSINESS.phoneE164Primary}`} className="font-ui text-sm font-semibold text-[var(--gold)]">
            {BUSINESS.phonePrimary}
          </a>
          <Link
            href="/quote"
            className="font-ui inline-flex items-center justify-center rounded-full bg-[var(--crimson)] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[var(--crimson-light)] hover:shadow-[var(--glow-crimson)]"
          >
            Get Started →
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
