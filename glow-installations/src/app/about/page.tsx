import Image from "next/image";
import Link from "next/link";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Glow LLC | Christmas Light Installers Central Coast",
  description:
    "Meet the Glow Installations team — Central Coast christmas light contractors serving homes & businesses from Paso Robles to Ventura. Licensed, insured, 5-star rated.",
  path: "/about",
});

const team: Array<[string, string, string | null]> = [
  ["Alex Nava", "Co-Founder, CEO", "/images/team-alex-nava.webp"],
  ["Zuar Aaron Mendoza", "Co-Founder, President", "/images/team-zuar-mendoza.webp"],
  ["Nicole Nutcracker", "Installation Coordinator", null],
  ["Sugar Plum Fairy", "Installer, Helper", null],
  ["Vixen Clause", "Installer, Helper", null],
  ["Comet Clause", "Installer, Team Lead", null],
];

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-clip pb-24 text-white">
      <SchemaMarkup pageType="local" title="About Glow LLC" path="/about" />

      {/* Hero */}
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden">
        <Image
          src="/images/hero-home-christmas-lights.webp"
          alt="Residential home decorated with warm Christmas lights on the Central Coast"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-end px-6 pb-14 md:px-16">
          <div>
            <span className="eyebrow">About Glow</span>
            <h1 className="font-display mt-4 text-5xl text-white md:text-6xl">
              Meet the Team Behind the Glow
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/75">
              We combine craftsmanship, safety, and creative design to transform homes
              and businesses into unforgettable holiday experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy — crimson */}
      <section className="relative overflow-hidden bg-[#8B060A] section-full">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,220,150,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden
        />
        <div className="container relative z-10 max-w-3xl text-center">
          <span className="eyebrow">Our philosophy</span>
          <h2 className="font-display mt-4 text-3xl text-white md:text-4xl">
            Lighting the Central Coast, the right way
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Glow Installations was founded by Alex Nava and Zuar Aaron Mendoza with a
            simple belief: the holidays should feel magical, not stressful. As Central
            Coast natives, they saw a gap for professional holiday light installation
            that combined true craftsmanship with genuine community values — and built
            Glow to fill it.
          </p>
          <div
            className="mx-auto mt-12 h-0.5 w-20 bg-gradient-to-r from-transparent via-[#F5C842] to-transparent"
            aria-hidden
          />
        </div>
      </section>

      {/* Three values — deep crimson */}
      <section className="section-full bg-[#6B0408]">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            ["Safety", "The #1 rule. We train every crew member to operate to rigorous standards."],
            ["Delivering Joy", "Premium products and thoughtful execution that make every project feel magical."],
            ["Community", "Our best work is measured by the smiles and memories we help create."],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-[#E2CAA2]/30"
            >
              <h2 className="font-display text-2xl text-[var(--gold)]">{title}</h2>
              <p className="mt-2 text-sm text-white/75">{body}</p>
            </article>
          ))}
        </div>
        <div
          className="mx-auto mt-12 h-0.5 w-20 bg-gradient-to-r from-transparent via-[#F5C842] to-transparent"
          aria-hidden
        />
      </section>

      {/* Company story — cream */}
      <section className="section-full bg-[var(--surface-warm)]">
        <div className="container max-w-4xl">
          <h2 className="font-display mb-6 text-3xl text-[var(--text-dark)] md:text-4xl">
            Central Coast Christmas Light Contractors With Heart
          </h2>
          <div className="max-w-none space-y-5 text-lg text-[var(--text-dark-secondary)]">
            <p>
              Since our founding, we&apos;ve grown into one of the most recognized
              christmas lighting companies on the Central Coast, serving homeowners and
              businesses from Paso Robles to Ventura. Our team of trained outdoor lighting
              installers brings the same attention to detail to a modest single-story
              roofline as they do to a multi-acre estate display.
            </p>
            <p>
              We are fully licensed, insured, and available to provide a Certificate of
              Insurance (COI) for any installation — a standard of professionalism that
              many christmas light contractors in the area don&apos;t offer. When you
              hire Glow, you&apos;re hiring a company that treats your property with
              respect and stands behind its work.
            </p>
          </div>
          <div
            className="mx-auto mt-14 h-0.5 w-20 bg-gradient-to-r from-transparent via-[#F5C842] to-transparent"
            aria-hidden
          />
        </div>
      </section>

      {/* Team — crimson */}
      <section className="section-full bg-[#8B060A]">
        <div className="container">
          <h2 className="font-display text-4xl text-white">Team</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {team.map(([name, role, photo]) => (
              <article
                key={name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-[#E2CAA2]/30"
              >
                <div className="h-1 w-full bg-gradient-to-r from-[var(--crimson)] to-[var(--gold)]" />
                <div className="p-5">
                  <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-white/10">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={
                          name.includes("Alex")
                            ? "Alex Nava, Co-Founder of Glow Installations — Central Coast christmas light contractors"
                            : name.includes("Zuar")
                              ? "Zuar Aaron Mendoza, Co-Founder of Glow Installations — holiday lighting company"
                              : `${name} at Glow Installations`
                        }
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center 20%" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={85}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#6B0408]">
                        <span className="font-display text-4xl text-[var(--gold)]">
                          {name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="font-display text-2xl text-white">{name}</p>
                  <p className="font-ui mt-1 text-sm uppercase tracking-wider text-white/65">
                    {role}
                  </p>
                  <p className="mt-3 text-sm text-white/75">
                    Dedicated to detail, safety, and creating displays that make people
                    stop and smile.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links — deep crimson */}
      <section className="bg-[#6B0408] px-6 py-12">
        <div className="container max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-white/75">
            <Link
              href="/services/residential-service"
              className="text-[#E2CAA2] underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              See our residential installation services
            </Link>{" "}
            or{" "}
            <Link
              href="/services/commercial-service"
              className="text-[#E2CAA2] underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              explore our commercial packages.
            </Link>{" "}
            Interested in joining the team?{" "}
            <Link
              href="/open-roles"
              className="text-[#E2CAA2] underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              View open roles.
            </Link>{" "}
            Ready to get started?{" "}
            <Link
              href="/quote"
              className="font-semibold text-[#E2CAA2] underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              Request your free outdoor lighting quote.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
