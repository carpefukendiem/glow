import Link from "next/link";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[var(--deep-navy)] text-white">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      <div className="section-full pb-[clamp(48px,6vw,90px)] pt-[clamp(56px,7vw,96px)]">
        <div className="container relative z-10">
          <div className="mb-10 text-center">
            <p className="font-display text-3xl italic text-[var(--gold)] md:text-4xl">
              Get Your GLOW On
            </p>
            <div className="divider-gold" />
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <SiteLogo variant="footer" />
              <p className="mt-3 text-white/80">Decorations that make you shine.</p>
              <p className="mt-4 text-sm text-[var(--gold)]">{BUSINESS.phonePrimary}</p>
            </div>
            <div>
              <p className="font-ui text-xs uppercase tracking-[0.12em] text-white/65">Services</p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li><Link href="/services/residential-service">Residential</Link></li>
                <li><Link href="/services/commercial-service">Commercial</Link></li>
                <li><Link href="/services/estates">Estates</Link></li>
                <li><Link href="/services/restaurants">Restaurants</Link></li>
                <li><Link href="/services/santa-barbara-christmas-lights">Santa Barbara</Link></li>
                <li><Link href="/services/san-luis-obispo-christmas-lights">San Luis Obispo</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-ui text-xs uppercase tracking-[0.12em] text-white/65">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/quote">Get Quote</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-ui text-xs uppercase tracking-[0.12em] text-white/65">Service Area</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {SERVICE_AREAS.join(" · ")}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm text-white/60">
            <p>© 2026 GLOW, LLC. All rights reserved.</p>
            <p>Made with ❤️ on the Central Coast</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
