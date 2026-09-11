import { type HTMLAttributes } from "react";

/**
 * Props for the SectionBadge component.
 * Extends native HTML span attributes for full flexibility.
 */
type SectionBadgeProps = HTMLAttributes<HTMLSpanElement>;

/**
 * Pill-shaped badge used above section titles for category/section labeling.
 *
 * @remarks
 * Renders a teal pill (`bg-brand-teal`) with a dark border, bold uppercase text,
 * and wide letter-spacing. Typically positioned absolute overlapping a header box's
 * top border using `-top-4 left-1/2 -translate-x-1/2`.
 *
 * @accessibility
 * - Uses native `<span>` element — decorative by default.
 * - If the badge conveys essential meaning, consider adding `role="status"` or
 *   an `aria-label` on the parent container.
 *
 * @example
 * ```tsx
 * <div className="relative inline-block">
 *   <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2">
 *     Cómo funciona
 *   </SectionBadge>
 *   <div className="bg-brand-white border-2 border-brand-dark p-6">
 *     <h2>Tres pasos. Sin rodeos.</h2>
 *   </div>
 * </div>
 * ```
 */
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
