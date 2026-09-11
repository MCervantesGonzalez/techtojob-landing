import { type HTMLAttributes } from "react";

type SectionBadgeProps = HTMLAttributes<HTMLSpanElement>;

export function SectionBadge({
  className = "",
  children,
  ...props
}: SectionBadgeProps) {
  return (
    <span
      className={`inline-block rounded-xl border-2 border-brand-dark bg-brand-teal px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
