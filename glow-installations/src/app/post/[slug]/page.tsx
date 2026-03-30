import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

type Params = { params: Promise<{ slug: string }> };

type Article = {
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const articles: Record<string, Article> = {
  "the-ultimate-guide-to-holiday-light-installation-on-the-central-coast": {
    intro:
      "The Ultimate Guide to Holiday Light Installation on the Central Coast starts with one truth: the season moves fast. If you wait for the first cold night to start planning, the best install dates and the best design options are usually gone. The good news is that with a little planning, your home can become the warm, welcoming landmark your friends, family, and neighborhood remember all season long.",
    sections: [
      {
        heading: "Planning Your Holiday Display",
        paragraphs: [
          "For Central Coast homeowners, September and October are prime planning months. Booking early means you get stronger date options, more design flexibility, and less stress when your calendar gets busy. Coastal fog, occasional wind events, and varied microclimates from Paso Robles to Santa Barbara all influence what hardware, clips, and layout strategy work best.",
          "Start by defining your goals. Do you want a classic warm-white roofline, a playful family display, or a clean high-end look that emphasizes architecture? Your goals drive your budget and scope decisions. A smart plan balances impact and practicality by focusing on high-visibility areas first: roofline peaks, entry points, and key trees.",
          "A strong quote process also helps. Share your property type, your target budget, and any must-have features. The more context your installer has, the more accurate and faster your proposal will be.",
        ],
      },
      {
        heading: "Design Basics for a Stunning Display",
        paragraphs: [
          "Great holiday lighting is about rhythm and contrast, not just quantity. Roofline lighting gives structure. Tree and shrub lighting adds depth. Path, lawn, and entry accents create warmth and guide the eye. When these layers work together, your display feels intentional and premium.",
          "Color temperature matters. Warm white gives a timeless glow and complements most Central Coast architectural styles. Cooler tones can work for modern homes or themed displays, while selective color pops can highlight focal points without overwhelming the whole property.",
          "Symmetry helps, but perfect mirror-image design is not always necessary. Instead, balance weight across your facade. If one side has a large tree wrap, the other side might use window framing or garland accents to keep visual harmony.",
        ],
      },
      {
        heading: "LED vs Incandescent: Practical Considerations",
        paragraphs: [
          "Modern commercial-grade LED systems are brighter, safer, and dramatically more efficient than old incandescent strings. LEDs reduce energy consumption, run cooler, and hold up better over a long season. For households that run displays nightly, these savings and reliability gains add up quickly.",
          "Incandescent has nostalgic appeal, but in most real-world installations LEDs win on performance. They are easier to maintain, less prone to frequent failures, and better suited for large-scale exterior projects where consistency matters.",
        ],
      },
      {
        heading: "DIY vs Professional Installation",
        paragraphs: [
          "DIY can work for small projects, but most homeowners underestimate the full cost: ladders, clips, replacement strands, timer setup, troubleshooting, and post-season storage. Time is another major cost. A weekend project can stretch into multiple weekends when weather or hardware problems show up.",
          "Professional installation improves safety, speed, and finish quality. Licensed and insured teams can handle steep rooflines, second-story access, and large trees with the right equipment and process controls. Professional full-service offerings also include maintenance, careful removal, and storage, reducing friction through the entire season.",
        ],
      },
      {
        heading: "How to Work With Glow LLC",
        paragraphs: [
          "Glow LLC serves the Central Coast with custom design, installation, maintenance, removal, and storage. The process starts with your quote request, followed by a consultation to confirm layout priorities and scheduling. From there, your install team executes the plan with a focus on safety, durability, and clean visual lines.",
          "If you want the easiest path to a polished result, submit a request on the quote page early. You can also review service options for home types and visit the FAQ for pricing details, timelines, and service-area answers. A little planning now creates a smoother, brighter season later.",
        ],
      },
    ],
  },
  "why-we-use-leds-and-why-you-should-too": {
    intro:
      "Why we use LEDs (And Why You Should Too!) is one of the most common questions we get from homeowners. The answer is simple: better performance, better safety, and better long-term value. When you are lighting your property night after night through the holidays, these differences matter.",
    sections: [
      {
        heading: "1. What Exactly Is an LED?",
        paragraphs: [
          "LED stands for light-emitting diode. Instead of heating a filament like incandescent bulbs, LEDs produce light through semiconductor technology. That engineering shift is what gives LEDs their efficiency and long lifespan.",
          "For property lighting, the practical takeaway is that LEDs convert more energy into light and less into heat. They can deliver a strong visual effect while reducing wasted electricity and lowering risk in high-density installations.",
        ],
      },
      {
        heading: "2. Why We Like LEDs",
        paragraphs: [
          "Energy savings are a major reason. LED systems can use up to 80% less energy than comparable incandescent setups. For full-season schedules, this can significantly reduce operating cost while still giving your home or business a bright holiday look.",
          "Brightness and consistency are another advantage. Quality commercial LED strings keep color and output stable across the display. That means your roofline, trees, and accents all look cohesive from the first week of the season through removal.",
          "Safety matters too. LEDs run cooler, reducing heat-related concerns around trim, greenery, and tightly packed lighting zones. Combined with proper installation standards, this creates a safer overall setup for homes and businesses.",
          "Finally, lifespan and durability. Commercial-grade LEDs are built to survive weather exposure and repeated seasonal use. Fewer failures means fewer interruptions and fewer service calls, which keeps your display looking polished all season.",
          "Glow LLC chooses commercial-grade LEDs because we prioritize reliability, clean color rendering, and long-term value for clients. If you want to compare options for your property, start with a quote request and we can help you design the right system.",
        ],
      },
    ],
  },
  "why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home": {
    intro:
      "Why Professional Holiday Lights Are the Best Investment for Your Santa Barbara Home comes down to value, not just visual appeal. DIY can seem less expensive at first, but hidden costs add up quickly. Professional service gives you better results with less risk and less stress.",
    sections: [
      {
        heading: "1. The True Cost of DIY Holiday Lights",
        paragraphs: [
          "DIY costs include more than strands and extension cords. Most homeowners eventually need better ladders, safety gear, replacement clips, spare bulbs, timers, and weather-proofing accessories. Add repeat trips to hardware stores and the time commitment can become substantial.",
          "Storage is another hidden burden. After the season, lights need organized packing, labeling, and dry storage to avoid damage. If systems are not packed correctly, failure rates often rise the following year.",
          "There is also the cost of mistakes. Uneven spacing, poor clip selection, and overloaded circuits can create rework and frustration. In multi-story homes, safety risk is the biggest variable of all.",
        ],
      },
      {
        heading: "2. Professional Lights: Brighter, Safer, Longer-Lasting",
        paragraphs: [
          "Professional installers use commercial-grade materials designed for outdoor reliability and cleaner light output. The result is a display that reads brighter and more consistent from curb level while standing up to coastal conditions.",
          "Licensed and insured teams reduce risk for homeowners. With trained crews, proper ladder protocols, and job-specific equipment, installations move faster and safer. If an issue comes up, there is a clear support process in place.",
          "Full-service value is the biggest differentiator. With Glow LLC, design, installation, maintenance, removal, and storage are integrated. You are not just buying lights; you are buying convenience, reliability, and reclaimed time during the busiest part of the year.",
          "For Santa Barbara and Central Coast properties, this model works especially well because weather patterns and architecture vary significantly by neighborhood. A professional plan adapts to those conditions while preserving your design goals.",
          "If you want a polished holiday look without the DIY burden, request a quote and review service options. You can also visit the FAQ for pricing and booking guidance. The earlier you plan, the better your seasonal options will be.",
        ],
      },
    ],
  },
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return {};

  const titles: Record<string, string> = {
    "the-ultimate-guide-to-holiday-light-installation-on-the-central-coast":
      "Ultimate Guide to Holiday Light Installation | Central Coast",
    "why-we-use-leds-and-why-you-should-too":
      "Why We Use LED Christmas Lights (And You Should Too)",
    "why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home":
      "Professional Holiday Lights: Best Investment for Your Home",
  };
  return buildMetadata({
    title: titles[slug] || post.title,
    description: post.description,
    path: `/post/${slug}`,
  });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  const article = articles[slug];
  if (!post || !article) notFound();

  return (
    <article className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup
        pageType="blog"
        title={post.title}
        description={post.description}
        path={`/post/${slug}`}
      />
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/faq-hero.webp"
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[980px] items-end px-6 pb-12">
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              {post.category} · {post.publishedYear} · {post.author}
            </p>
            <h1 className="font-display mt-4 text-4xl text-white md:text-5xl">{post.title}</h1>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container max-w-[980px]">
          <p className="text-lg leading-relaxed text-white/80">{article.intro}</p>
        </div>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container max-w-[980px] space-y-5">
          {article.sections.map((section) => (
            <section key={section.heading} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-3xl text-white">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-white/75">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <div className="font-ui flex flex-wrap gap-4 text-sm font-semibold text-[var(--gold)]">
            <Link href="/quote">Get a quote</Link>
            <Link href="/services/residential-service">Residential services</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
