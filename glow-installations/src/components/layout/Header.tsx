"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/layout/MobileNav";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { BUSINESS, SERVICES } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink =
    "font-ui text-[13px] font-medium uppercase tracking-[0.05em] text-white transition-colors hover:text-[var(--gold)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[var(--crimson-dark)]/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-[var(--crimson)] py-4"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 md:px-16">
        <SiteLogo variant="header" />

        <nav className="hidden items-center gap-6 md:flex">
          <div className="group relative">
            <span className={`${navLink} inline-flex cursor-default items-center gap-1`}>
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
                    <p className="font-ui text-[12px] font-semibold uppercase tracking-wide text-white">
                      {service.menuTitle}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-white/70">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link className={navLink} href="/gallery">
            Gallery
          </Link>
          <Link className={navLink} href="/faq">
            FAQ
          </Link>
          <Link className={navLink} href="/contact">
            Contact
          </Link>
          <Link className={navLink} href="/about">
            About
          </Link>
          <a
            href={`tel:${BUSINESS.phoneE164Primary}`}
            className="font-ui text-sm font-semibold text-[var(--gold)] transition-colors hover:text-white"
          >
            {BUSINESS.phonePrimary}
          </a>
          <Link
            href="/quote"
            className="font-ui inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-5 py-2 text-sm font-bold text-[var(--crimson)] transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-[0_0_24px_rgba(226,202,162,0.45)] active:scale-[0.98]"
          >
            Get Started →
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
