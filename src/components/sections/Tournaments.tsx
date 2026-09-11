import { Trophy, Lightbulb, Rocket } from "lucide-react";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

/**
 * Lucide icon components mapped to each tournament feature card.
 * Icons are positionally aligned with `messages.tournaments.features[]`.
 *
 * - `Trophy` → Retos reales (real challenges)
 * - `Lightbulb` → Aprendes y te conocen (learn and get known)
 * - `Rocket` → Lo que ganas, se usa (what you win gets used)
 */
const featureIcons = [Trophy, Lightbulb, Rocket];

/**
 * Tournaments showcase section highlighting competition features and criteria.
 *
 * @remarks
 * - **Layout**: Halftone background (`bg-halftone`) with centered white header box and a
 *   3-column responsive grid (`md:grid-cols-3`) of `NeoCard` feature cards.
 * - **Header box**: White neobrutalist container with `SectionBadge` overlapping the top border.
 *   Hover tilt via `group`/`group-hover` pattern (`hover:-rotate-1`).
 * - **Feature cards**: Each card has a teal icon (mapped via `featureIcons`), feature title,
 *   and description explaining a key aspect of the tournament system.
 * - **Data source**: Feature titles and descriptions sourced from `messages.tournaments.features`
 *   for i18n readiness. Icons are mapped by array index position.
 * - **No CTA**: This section is informational — it showcases the tournament system without
 *   a direct call-to-action button.
 *
 * @accessibility
 * - Uses `<section>` with `id="torneos"` for navbar anchor linking.
 * - Feature cards use `<h3>` for heading hierarchy within each card.
 * - Icons are decorative — feature title provides the accessible label.
 *
 * @example
 * ```tsx
 * // Rendered in page.tsx after AudienceSplit.
 * <Tournaments />
 * ```
 */
export function Tournaments() {
  const t = messages.tournaments;

  return (
    <section id="torneos" className="bg-halftone">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="relative inline-block cursor-pointer transition-all duration-300 ease-out hover:rotate-1 hover:-translate-y-1 group">
            <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:-rotate-1 group-hover:-translate-y-1">
              {t.badge}
            </SectionBadge>
            <div className="mt-4 bg-brand-white border-2 border-brand-dark px-8 py-6 shadow-[4px_4px_0px_0px_#2f3436] text-center transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#84c0bf]">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
                {t.title}
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg font-semibold text-brand-dark/80">
                {t.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.features.map((feature, i) => {
            const FeatureIcon = featureIcons[i];
            return (
              <NeoCard key={feature.title} className="flex flex-col">
                <FeatureIcon
                  className="mb-4 text-brand-teal"
                  size={32}
                  strokeWidth={2}
                />
                <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-brand-dark/70">{feature.description}</p>
              </NeoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
