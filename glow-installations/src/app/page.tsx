import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { ServiceAreaBanner } from "@/components/sections/ServiceAreaBanner";
import { ServicesSplit } from "@/components/sections/ServicesSplit";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PhotoStrip } from "@/components/sections/PhotoStrip";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Christmas Light Installation | Central Coast CA | Glow",
  description:
    "Glow LLC installs Christmas lights across California's Central Coast. Custom design, install, maintenance & storage. Request your free quote today!",
  path: "/",
});

export default function Home() {
  return (
    <div className="w-full overflow-x-clip bg-[var(--night)]">
      <SchemaMarkup pageType="faq" title="Home" path="/" />
      <HeroSection />
      <ServiceAreaBanner />
      <ServicesSplit />
      <FeaturesSection />
      <PhotoStrip />
      <TestimonialsCarousel />
      <CommunitySection />
      <CtaBanner />
      <section className="section-full bg-[var(--night)]">
        <div className="container text-center">
          <p className="text-white/70">
            Looking for DIY tips?{" "}
            <Link href="/blog" className="font-semibold text-[var(--gold)] hover:text-white">
              Visit the Glow Journal →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
