"use client";

import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    icon: "✦",
    title: "Custom Design",
    body: "We design a display suitable for your home and your wallet before scheduling your install.",
  },
  {
    icon: "⚡",
    title: "Professional Installation",
    body: "Every bulb placed precisely. Licensed and insured. COI available on request.",
  },
  {
    icon: "🔧",
    title: "All-Inclusive Maintenance",
    body: "Anything looks off? We fix it fast, keeping your display perfect all season.",
  },
  {
    icon: "❄",
    title: "Careful Removal",
    body: "We remove every clip and strand, leaving your home exactly as we found it.",
  },
  {
    icon: "📦",
    title: "Year-Round Storage",
    body: "Your lights stored safe with us. Nothing to pack away, ever.",
  },
  {
    icon: "✓",
    title: "Full Service Guaranteed",
    body: "Design, install, maintenance, removal, and storage. All included.",
  },
];

export function FeaturesSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--deep-navy)] py-[clamp(80px,10vw,140px)]">
      <div
        className="absolute right-0 top-0 h-96 w-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(245,200,66,0.4) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(139,6,11,0.4) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="mb-16 text-center">
          <span className="eyebrow">How We Work</span>
          <div className="divider-gold" />
          <h2 className="font-display mt-4 text-4xl text-white md:text-6xl">
            A Hassle-Free Service, <span className="italic text-[var(--gold)]">Always</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            With so much going on during the holiday season, we do it all for you so
            you can focus on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={reduced ? false : { opacity: 0, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--gold)]/30 hover:bg-white/[0.08]"
            >
              <div className="absolute left-0 top-0 h-12 w-12 overflow-hidden rounded-tl-2xl">
                <div className="absolute left-0 top-0 h-0 w-0 border-b-[24px] border-l-[24px] border-b-transparent border-l-[var(--gold)]/30" />
              </div>
              <span className="mb-4 block text-2xl text-[var(--gold)]">{feature.icon}</span>
              <h3 className="font-display mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">{feature.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
