import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ROLES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ROLES.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const role = ROLES.find((item) => item.slug === slug);
  if (!role) return {};

  const titles: Record<string, string> = {
    "installer-helper": "Open Installer, Helper Role | Glow Installations is Hiring",
    "installer-lead": "Open Installer, Lead Role | Glow Installations is Hiring",
    "sales-representative": "Open Sales Representative Role | Glow Installations Hiring",
    "exterior-designer": "Open Exterior Designer Role | Glow Installations is Hiring",
    "aliqua-tempor-do-lorem": "Open Administrative Assistant Role | Glow Installations",
    "general-application": "Open General Application | Glow Installations is Hiring",
  };

  return buildMetadata({
    title: titles[slug] || role.title,
    description: role.description,
    path: `/open-roles/${slug}`,
  });
}

export default async function RolePage({ params }: Params) {
  const { slug } = await params;
  const role = ROLES.find((item) => item.slug === slug);
  if (!role) notFound();

  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup
        pageType="jobs"
        title={role.title}
        description={role.description}
        path={`/open-roles/${slug}`}
      />
      <section className="relative h-[46vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/about-hero.webp"
          alt={`${role.title} at Glow Installations`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/65 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-end px-6 pb-10 md:px-16">
          <div>
            <span className="eyebrow">Open Role</span>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">{role.title}</h1>
            <p className="mt-3 max-w-2xl text-white/75">{role.description}</p>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-display text-3xl text-white">Description</h2>
            <p className="mt-2 text-white/75">
              We are looking for detail-oriented team members who care about quality,
              customer experience, and holiday spirit. You will collaborate with the
              team to deliver safe, reliable, and beautiful installations across the
              Central Coast.
            </p>
            <h2 className="font-display mt-6 text-3xl text-white">Safety</h2>
            <p className="mt-2 text-white/75">
              Safety is non-negotiable at Glow. We train every team member on equipment
              handling, property care, and communication standards before and during the season.
            </p>
          </section>
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-[var(--text-dark)]">
            <JobApplicationForm role={role.title} />
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-white/60">
          <Link href="/about" className="text-[var(--gold)] hover:underline">
            About Glow Installations
          </Link>
          {" · "}
          <Link href="/open-roles" className="text-[var(--gold)] hover:underline">
            All open roles
          </Link>
          {" · "}
          <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
            Get a free lighting quote (customers)
          </Link>
        </p>
      </section>
    </div>
  );
}
