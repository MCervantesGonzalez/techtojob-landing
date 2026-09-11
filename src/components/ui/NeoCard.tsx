import { type HTMLAttributes } from "react";

/**
 * Props for the NeoCard component.
 * Extends native HTML div attributes with neobrutalist variant styling.
 */
type NeoCardProps = HTMLAttributes<HTMLDivElement> & {
  /** Visual variant: `light` for white background on dark sections, `dark` for dark background on light sections. */
  variant?: "dark" | "light";
};

/**
 * Neobrutalist card container with hard offset shadow and hover lift.
 *
 * @remarks
 * - **light**: White background, dark text — default, use on dark or halftone section backgrounds.
 * - **dark**: Dark background, white text — use on light/halftone sections for contrast.
 *
 * Cards include a `4px` hard offset shadow at rest, expanding to `8px` with a teal glow
 * on hover. The hover lift is proportional: `-translate-x-1 -translate-y-1.5`.
 *
 * @accessibility
 * - Uses native `<div>` with full `HTMLAttributes` support.
 * - Semantic meaning should come from parent context (e.g., wrapping in `<article>` or `<li>`).
 *
 * @example
 * ```tsx
 * <NeoCard className="h-full text-center">
 *   <h3>Step Title</h3>
 *   <p>Step description goes here.</p>
 * </NeoCard>
 * <NeoCard variant="dark" className="flex flex-col">
 *   <span>Dark card content</span>
 * </NeoCard>
 * ```
 */
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
