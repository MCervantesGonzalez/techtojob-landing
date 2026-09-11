import messages from "@/messages/es.json";

/**
 * Continuous horizontal scrolling ticker banner with community keywords.
 *
 * @remarks
 * - **Animation**: Uses CSS `@keyframes marquee` (defined in `globals.css`) to translate the
 *   content container from `0%` to `-50%` over 20 seconds, creating an infinite loop.
 * - **Content duplication**: The keywords array from `messages.es.json` is spread twice
 *   (`[...keywords, ...keywords]`) so the second half seamlessly loops into the first.
 * - **Items**: Bold uppercase keywords including Discord channel names (`#DESARROLLO`,
 *   `#INFRA-Y-DEVOPS`, etc.) and community slogans (`TORNEOS EN VIVO`, `CERO BOTS DE RRHH`).
 * - **Position**: Sits between Header and Hero as a high-energy transitional element.
 *
 * @accessibility
 * - Uses `aria-hidden` semantics (decorative animation — no essential content).
 * - Content is duplicated purely for visual continuity.
 *
 * @example
 * ```tsx
 * // Rendered in page.tsx between Header and Hero.
 * <TickerBanner />
 * ```
 */
export function TickerBanner() {
  const items = [...messages.tickerBanner.keywords, ...messages.tickerBanner.keywords];

  return (
    <div className="overflow-hidden border-y-2 border-brand-dark bg-brand-teal py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 text-sm font-bold uppercase tracking-widest text-brand-dark"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
