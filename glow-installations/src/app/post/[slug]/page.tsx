import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/content";
import { BLOG_ARTICLES } from "@/lib/blog-articles";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { BlogPostFooter } from "@/components/seo/BlogPostFooter";

type Params = { params: Promise<{ slug: string }> };

const META_DESC: Record<string, string> = {
  "the-ultimate-guide-to-holiday-light-installation-on-the-central-coast":
    "The complete guide to professional christmas light installation on the Central Coast — planning your display, choosing lighting types, and finding the best xmas light installation service near you.",
  "why-we-use-leds-and-why-you-should-too":
    "Why Glow uses commercial LED christmas lights for every outdoor xmas light installation — safety, energy savings, and pro christmas lights that last.",
  "why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home":
    "Why professional holiday light installation beats DIY for Santa Barbara homes — cost, safety, and brighter commercial-grade displays from a trusted local team.",
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
      "Ultimate Guide to Holiday Light Installation | Central Coast CA",
    "why-we-use-leds-and-why-you-should-too": "Why We Use LED Christmas Lights | Glow Installations",
    "why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home":
      "Professional Holiday Lights for Santa Barbara Homes | Glow",
  };
  return buildMetadata({
    title: titles[slug] || post.title,
    description: META_DESC[slug] || post.description,
    path: `/post/${slug}`,
  });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  const article = BLOG_ARTICLES[slug];
  if (!post || !article) notFound();

  const showMidCta = slug === "the-ultimate-guide-to-holiday-light-installation-on-the-central-coast";
  const showSbCta = slug === "why-professional-holiday-lights-are-the-best-investment-for-your-santa-barbara-home";
  const showLedCta = slug === "why-we-use-leds-and-why-you-should-too";

  return (
    <article className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup
        pageType="blog"
        title={post.title}
        description={META_DESC[slug] || post.description}
        path={`/post/${slug}`}
      />
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/faq-hero.webp"
          alt="Professional exterior christmas lights — Central Coast holiday lighting blog"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[980px] items-center justify-center px-6 pb-12 pt-16 text-center md:pt-0">
          <div className="max-w-4xl">
            <p className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              {post.category} · {post.publishedYear} · {post.author}
            </p>
            <h1 className="font-display mt-4 text-4xl text-white md:text-5xl">{post.title}</h1>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container mx-auto max-w-[980px] text-center">
          <p className="text-xl leading-relaxed text-white/80">{article.intro}</p>
        </div>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container max-w-[980px] space-y-5">
          {article.sections.map((section, si) => (
            <section key={section.heading} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-3xl text-white">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-white/75">
                  {paragraph}
                </p>
              ))}
              {showMidCta && si === 1 && (
                <div className="my-8 rounded-2xl border border-white/10 bg-[var(--deep-navy)] p-8 text-center">
                  <p className="mb-2 text-lg font-semibold text-[var(--gold)]">Ready to skip the ladder this year?</p>
                  <p className="mb-5 text-white/70">
                    Glow Installations serves the entire Central Coast — from Paso Robles to Ventura. Professional
                    christmas light installation starting at $1,200.
                  </p>
                  <Link
                    href="/quote"
                    className="font-ui inline-flex items-center gap-2 rounded-full bg-[var(--crimson)] px-6 py-3 font-bold text-white transition-all hover:bg-[var(--crimson-hover)]"
                  >
                    Get Your Free Outdoor Lighting Quote →
                  </Link>
                </div>
              )}
            </section>
          ))}

          {showLedCta && (
            <div className="rounded-2xl border border-white/10 bg-[var(--deep-navy)] p-8 text-center">
              <p className="mb-2 text-lg font-semibold text-[var(--gold)]">
                Experience the difference of commercial-grade LED christmas lights.
              </p>
              <Link
                href="/quote"
                className="font-ui inline-flex items-center gap-2 rounded-full bg-[var(--crimson)] px-6 py-3 font-bold text-white transition-all hover:bg-[var(--crimson-hover)]"
              >
                Get Your Free Outdoor Lighting Quote →
              </Link>
            </div>
          )}

          {showSbCta && (
            <div className="rounded-2xl border border-white/10 bg-[var(--deep-navy)] p-8 text-center">
              <p className="mb-2 text-lg font-semibold text-[var(--gold)]">Santa Barbara homeowners — your display awaits.</p>
              <p className="mb-5 text-white/70">
                Glow Installations serves Santa Barbara, Montecito, Summerland, and the surrounding Central Coast
                communities.
              </p>
              <Link
                href="/quote"
                className="font-ui inline-flex items-center gap-2 rounded-full bg-[var(--crimson)] px-6 py-3 font-bold text-white transition-all hover:bg-[var(--crimson-hover)]"
              >
                Get Your Free Santa Barbara Lighting Quote →
              </Link>
            </div>
          )}

          <BlogPostFooter slug={slug} />
        </div>
      </section>
    </article>
  );
}
