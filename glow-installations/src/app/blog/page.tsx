import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const metadata = buildMetadata({
  title: "Holiday Lighting Tips & Ideas | Glow Installations Blog",
  description:
    "Christmas light installation tips, DIY guides & holiday decor ideas from Glow LLC — the Central Coast's expert holiday lighting team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="blog" title="Blog" path="/blog" />
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/holidtay-light-istallation-experts.webp"
          alt="Holiday lighting blog and inspiration"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center justify-center px-6 pb-12 pt-16 text-center md:px-16 md:pt-0">
          <div className="max-w-3xl">
            <span className="eyebrow">Glow Journal</span>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">
              Holiday Lighting Tips and Inspiration
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              Practical guides from our field team to help you plan a safer, cleaner,
              and more memorable holiday display.
            </p>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container grid gap-5 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition hover:border-[var(--gold)]/35 hover:bg-white/[0.08]"
            >
              <p className="font-ui text-xs uppercase tracking-wide text-[var(--gold)]">{post.category}</p>
              <h2 className="font-display mt-2 text-2xl text-white">{post.title}</h2>
              <p className="mt-2 text-sm text-white/70">{post.description}</p>
              <Link
                className="font-ui mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold)] hover:text-white"
                href={`/post/${post.slug}`}
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
        <p className="container mt-10 text-center text-sm text-white/60">
          Ready to skip the ladder this year?{" "}
          <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
            Get a free christmas light installation quote
          </Link>{" "}
          or browse{" "}
          <Link href="/services/residential-service" className="text-[var(--gold)] hover:underline">
            residential
          </Link>{" "}
          and{" "}
          <Link href="/services/commercial-service" className="text-[var(--gold)] hover:underline">
            commercial services.
          </Link>{" "}
          Questions?{" "}
          <Link href="/faq" className="text-[var(--gold)] hover:underline">
            See our FAQ.
          </Link>{" "}
          <Link href="/post/the-ultimate-guide-to-holiday-light-installation-on-the-central-coast" className="text-[var(--gold)] hover:underline">
            Read our ultimate guide
          </Link>{" "}
          to planning your display.
        </p>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <h2 className="font-display text-3xl text-white">Get Blog Updates</h2>
          <p className="mt-2 text-sm text-white/70">
            Seasonal tips and launch updates straight to your inbox.
          </p>
          <div className="mt-4 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center">
            <input
              className="flex-1 rounded-lg border border-white/20 bg-[rgba(10,10,15,0.65)] p-3 text-white placeholder:text-white/40"
              placeholder="Email address"
            />
            <button className="font-ui rounded-full bg-[var(--crimson)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--crimson-light)]">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
