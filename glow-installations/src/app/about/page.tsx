import Image from "next/image";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Glow LLC | Christmas Light Installers Central Coast",
  description:
    "Meet Alex Nava & Zuar Mendoza — the Central Coast's Christmas light installation experts. Licensed, insured & passionate about spreading holiday joy.",
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
    <div className="bg-[var(--night)] pb-24 text-white">
      <SchemaMarkup pageType="local" title="About Glow LLC" path="/about" />
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden">
        <Image
          src="/images/about-hero.webp"
          alt="Glow Installations team working on a premium nighttime display"
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

      <section className="section-full bg-[var(--deep-navy)]">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            ["Safety", "The #1 rule. We train every crew member to operate to rigorous standards."],
            ["Delivering Joy", "Premium products and thoughtful execution that make every project feel magical."],
            ["Community", "Our best work is measured by the smiles and memories we help create."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="font-display text-2xl text-[var(--gold)]">{title}</h2>
              <p className="mt-2 text-sm text-white/75">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-full bg-[var(--night)]">
        <div className="container">
          <h2 className="font-display text-4xl text-white">Team</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {team.map(([name, role, photo]) => (
              <article key={name} className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)]">
                <div className="h-1 w-full bg-gradient-to-r from-[var(--crimson)] to-[var(--gold)]" />
                <div className="p-5">
                  <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-white/10">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={`${name} at Glow Installations`}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center 20%" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={85}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[var(--deep-navy)]">
                        <span className="font-display text-4xl text-[var(--gold)]">
                          {name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="font-display text-2xl text-white">{name}</p>
                  <p className="font-ui mt-1 text-sm uppercase tracking-wider text-white/60">{role}</p>
                  <p className="mt-3 text-sm text-white/75">
                    Dedicated to detail, safety, and creating displays that make people stop and smile.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
