import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "font-mono text-xs sm:text-sm px-4 py-2.5 rounded-md inline-flex items-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 w-fit";

const variants: Record<Variant, string> = {
  primary: "bg-purple-600 hover:bg-purple-500 text-white",
  secondary:
    "border border-teal-700 text-teal-300 hover:bg-teal-950/50 hover:border-teal-500",
  ghost:
    "border border-zinc-700 text-zinc-300 hover:border-purple-500 hover:text-purple-300",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  external,
  onClick,
}: ButtonProps) {
  const className = `${base} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
