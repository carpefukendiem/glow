import Link from "next/link";
import Image from "next/image";
import { ROLES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const metadata = buildMetadata({
  title: "Join the Glow Team | Holiday Lighting Jobs Central Coast",
  description:
    "Glow LLC is hiring seasonal and year-round positions on California's Central Coast. Installer, sales, design & more. Apply today!",
  path: "/open-roles",
});

export default function OpenRolesPage() {
  return (
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="jobs" title="Open Roles" path="/open-roles" />
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/meet-the-team-bg.jpg"
          alt="Glow Installations crew — join our holiday lighting team on the Central Coast"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/65 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center justify-center px-6 pb-12 pt-16 text-center md:px-16 md:pt-0">
          <div className="max-w-3xl">
            <span className="eyebrow">Careers</span>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">
              Join the Glow Team
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              Light up the Central Coast with us.
            </p>
          </div>
        </div>
      </section>

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container">
          <h2 className="font-display mb-6 text-center text-4xl text-white">Open Roles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {ROLES.map((role) => (
              <Link
                key={role.slug}
                href={`/open-roles/${role.slug}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition hover:-translate-y-1 hover:border-[var(--gold)]/35 hover:bg-white/[0.08]"
              >
                <h3 className="font-display text-2xl text-white">{role.title}</h3>
                <p className="mt-2 text-sm text-white/70">{role.description}</p>
                <p className="font-ui mt-4 text-xs uppercase tracking-wide text-[var(--gold)]">
                  View role →
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-white/60">
            New to Glow?{" "}
            <Link href="/about" className="text-[var(--gold)] hover:underline">
              Learn about our team and mission
            </Link>
            . Ready to book holiday lighting for your property?{" "}
            <Link href="/quote" className="font-semibold text-[var(--gold)] hover:underline">
              Get a free outdoor lighting quote →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
