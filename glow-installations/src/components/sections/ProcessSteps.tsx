const steps = [
  {
    title: "Custom Design",
    text: "We make sure the design is suitable for your home and your wallet before we get you scheduled for your install.",
  },
  {
    title: "Professional Installation",
    text: "We place every bulb carefully while protecting your home and everyone’s safety. Licensed & insured. Ask for a COI!",
  },
  {
    title: "All-Inclusive Maintenance",
    text: "If anything looks off, let us know and we’ll fix it quickly so your display stays hassle-free.",
  },
  {
    title: "Careful Removal",
    text: "We remove clips and hardware with care, leaving your home just like it was before the season.",
  },
  {
    title: "Year-Round Storage",
    text: "We store your lights and decor so you never have to worry about where everything goes.",
  },
  {
    title: "Full Service Included",
    text: "Design, Install, Maintenance, Removal, & Storage.",
  },
];

export function ProcessSteps() {
  return (
    <section>
      <h2 className="text-3xl font-bold">A Hassle-Free Service, Always</h2>
      <p className="mt-2 text-[#1A1A1A]/70">
        With so much going on during the holiday season, we want to help by doing
        it all for you so you can focus on what matters most to you.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold text-[#8B060B]">{step.title}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/80">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
