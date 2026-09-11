import { type ButtonHTMLAttributes } from "react";

/**
 * Props for the NeoButton component.
 * Extends native HTML button attributes with neobrutalist variant styling.
 */
type NeoButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual variant controlling background, text, and shadow colors. */
  variant?: "primary" | "secondary" | "teal";
};

/**
 * Neobrutalist button component with hard offset shadows and hover lift.
 *
 * @remarks
 * - **primary**: White background, dark text, teal shadow — use for secondary actions.
 * - **secondary**: Dark background, white text, teal shadow — use for muted CTAs.
 * - **teal**: Teal background, dark text, dark shadow — use for primary CTAs.
 *
 * All variants include a proportional hover lift (`-translate-x-0.5 -translate-y-0.5`)
 * and shadow expansion on hover for tactile feedback.
 *
 * @accessibility
 * - Uses native `<button>` element with full `ButtonHTMLAttributes` support.
 * - Ensure sufficient contrast when overriding classes via `className`.
 *
 * @example
 * ```tsx
 * <NeoButton variant="teal">Únete al Discord</NeoButton>
 * <NeoButton variant="primary" className="w-full">Publica tu perfil</NeoButton>
 * ```
 */
export function NeoButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: NeoButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold uppercase tracking-wide text-sm border-2 border-brand-dark transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#2f3436] cursor-pointer px-6 py-3";

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
