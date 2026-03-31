import dynamic from "next/dynamic";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceAreaBanner } from "@/components/sections/ServiceAreaBanner";
import { ServiceAreaIntro } from "@/components/sections/ServiceAreaIntro";
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
    "Central Coast christmas light installers serving Paso Robles to Ventura. Professional christmas light installation for homes & businesses. Free design consultation from Glow LLC.",
  path: "/",
});

export default function Home() {
  return (
    <div className="w-full overflow-x-clip bg-[var(--night)]">
      <SchemaMarkup pageType="faq" title="Home" path="/" />
      <HeroSection />
      <ServiceAreaBanner />
      <ServiceAreaIntro />
      <ServicesSplit />
      <FeaturesSection />
      <PhotoStrip />
      <TestimonialsCarousel />
      <CommunitySection />
      <CtaBanner />
      <section className="section-full bg-[var(--night)]">
        <div className="container text-center">
          <p className="text-sm text-white/65">
            Whether you need{" "}
            <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
              residential christmas light installation
            </Link>{" "}
            for your home,{" "}
            <Link href="/services/commercial-service" className="text-[var(--gold)] hover:underline">
              commercial holiday lighting
            </Link>{" "}
            for your business, or want to explore{" "}
            <Link href="/faq" className="text-[var(--gold)] hover:underline">
              our pricing and services
            </Link>{" "}
            — we&apos;re here to help.{" "}
            <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
              Get your free outdoor lighting quote today.
            </Link>
          </p>
          <p className="mt-6 text-white/70">
            Looking for DIY tips?{" "}
            <Link href="/blog" className="font-semibold text-[var(--gold)] hover:text-white">
              Visit the Glow Journal →
            </Link>
            {" · "}
            <Link href="/about" className="font-semibold text-[var(--gold)] hover:text-white">
              About our team
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
