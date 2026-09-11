import messages from "@/messages/es.json";

/**
 * Final call-to-action section — the last conversion point before the footer.
 *
 * @remarks
 * - **Layout**: Halftone background with a single white neobrutalist container (`rounded-2xl`)
 *   centered at `max-w-4xl`. The container has a hover tilt (`hover:-rotate-1`) and shadow
 *   expansion for interactive emphasis.
 * - **Content**: Bold headline + supporting description + prominent Discord CTA button.
 *   The CTA uses `NeoButton`-like styling with `bg-brand-teal` and a `4px` hard offset shadow
 *   that expands to `6px` on hover.
 * - **Purpose**: Drives the final user action — joining the Discord community. Placed after
 *   all informational sections and before the footer.
 *
 * @accessibility
 * - Uses `<section>` with heading hierarchy (`<h2>` for title).
 * - CTA link opens Discord in new tab with `rel="noopener noreferrer"`.
 * - Large touch target size (`px-8 py-4`) for mobile users.
 *
 * @example
 * ```tsx
 * // Rendered in page.tsx after FAQ, before Footer.
 * <CtaClose />
 * ```
 */
export function CtaClose() {
  const t = messages.ctaClose;

  return (
    <section className="bg-halftone">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="relative inline-block w-full text-center">
          <div className="bg-brand-white border-2 border-brand-dark shadow-[6px_6px_0px_0px_#2f3436] p-8 sm:p-12 rounded-2xl text-center transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#2f3436]">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-brand-dark/70 text-sm md:text-base">
              {t.description}
            </p>

            <a
              href="https://discord.gg/h9FFgKdkRd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-brand-teal text-brand-dark border-2 border-brand-dark px-8 py-4 font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_#2f3436] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#2f3436] cursor-pointer"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
