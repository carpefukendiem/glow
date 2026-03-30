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
    "bg-[#8B060B] text-white hover:bg-[#C41E26] border-[#8B060B] shadow-md",
  outline: "bg-transparent text-[#8B060B] border-[#8B060B] hover:bg-[#8B060B]/10",
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
