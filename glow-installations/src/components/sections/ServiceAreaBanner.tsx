const cities = [
  "Paso Robles",
  "San Luis Obispo",
  "Arroyo Grande",
  "Nipomo",
  "Santa Maria",
  "Buellton",
  "San Ynez",
  "Santa Barbara",
  "Montecito",
  "Summerland",
  "Ventura",
];

export function ServiceAreaBanner() {
  return (
    <div className="relative overflow-hidden bg-[var(--crimson)] py-4">
      <div className="absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-[var(--crimson)] to-transparent" />
      <div className="absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-[var(--crimson)] to-transparent" />
      <div className="marquee-track flex whitespace-nowrap">
        {[...cities, ...cities, ...cities].map((city, index) => (
          <span
            key={`${city}-${index}`}
            className="font-ui flex items-center gap-4 px-6 text-sm font-medium tracking-wide text-white/90"
          >
            <span className="text-[var(--gold)]">★</span>
            {city}
          </span>
        ))}
      </div>
    </div>
  );
}
