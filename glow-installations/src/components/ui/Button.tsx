import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const styles = {
  primary:
    "bg-[var(--crimson)] text-white hover:bg-[var(--crimson-hover)] border-[var(--crimson)] shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_var(--crimson-glow)] active:scale-[0.98]",
  outline:
    "bg-transparent text-[var(--crimson)] border-[var(--crimson)] hover:bg-[var(--crimson)]/10 transition-all duration-200 active:scale-[0.98]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border px-5 py-3 font-semibold transition",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
