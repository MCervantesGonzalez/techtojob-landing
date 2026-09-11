import { type ButtonHTMLAttributes } from "react";

type NeoButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "teal";
};

export function NeoButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: NeoButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold uppercase tracking-wide text-sm border-2 border-brand-dark transition-colors cursor-pointer px-6 py-3";

  const variants: Record<string, string> = {
    primary:
      "bg-brand-white text-brand-dark hover:bg-brand-dark hover:text-brand-white shadow-[4px_4px_0px_0px_#84c0bf]",
    secondary:
      "bg-brand-dark text-brand-white hover:bg-brand-teal hover:text-brand-dark shadow-[4px_4px_0px_0px_#84c0bf]",
    teal: "bg-brand-teal text-brand-dark hover:bg-brand-white hover:text-brand-dark shadow-[4px_4px_0px_0px_#2f3436]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
