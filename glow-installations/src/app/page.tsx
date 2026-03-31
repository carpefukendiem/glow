import dynamic from "next/dynamic";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceAreaBanner } from "@/components/sections/ServiceAreaBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";

const ServicesSplit = dynamic(() =>
  import("@/components/sections/ServicesSplit").then((m) => ({ default: m.ServicesSplit })),
);
const FeaturesSection = dynamic(() =>
  import("@/components/sections/FeaturesSection").then((m) => ({ default: m.FeaturesSection })),
);
const PhotoStrip = dynamic(() =>
  import("@/components/sections/PhotoStrip").then((m) => ({ default: m.PhotoStrip })),
);
const TestimonialsCarousel = dynamic(() =>
  import("@/components/sections/TestimonialsCarousel").then((m) => ({ default: m.TestimonialsCarousel })),
);
const CommunitySection = dynamic(() =>
  import("@/components/sections/CommunitySection").then((m) => ({ default: m.CommunitySection })),
);
const CtaBanner = dynamic(() =>
  import("@/components/sections/CtaBanner").then((m) => ({ default: m.CtaBanner })),
);

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
