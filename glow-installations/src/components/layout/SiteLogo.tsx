import Image from "next/image";
import Link from "next/link";

type Variant = "header" | "footer" | "mobile";

const dims = {
  header: { width: 180, height: 48, className: "h-10 w-auto" },
  footer: { width: 200, height: 54, className: "h-12 w-auto" },
  mobile: { width: 160, height: 42, className: "h-9 w-auto" },
} as const;

/** Logo on crimson/dark: invert to white for legibility. Footer is deep navy — same treatment keeps brand consistent. */
export function SiteLogo({ variant }: { variant: Variant }) {
  const d = dims[variant];
  return (
    <Link href="/" aria-label="Glow Installations - Home" className="inline-flex shrink-0 items-center">
      <Image
        src="/images/Glow_Installations_Logo.png"
        alt="Glow Installations"
        width={d.width}
        height={d.height}
        priority={variant === "header"}
        className={`${d.className} object-contain`}
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </Link>
  );
}
