import { type HTMLAttributes } from "react";

type NeoCardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "dark" | "light";
};

export function NeoCard({
  variant = "light",
  className = "",
  children,
  ...props
}: NeoCardProps) {
  const base = "border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2f3436] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_#84c0bf]";

  const variants: Record<string, string> = {
    light: "bg-brand-white text-brand-dark",
    dark: "bg-brand-dark text-brand-white",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
