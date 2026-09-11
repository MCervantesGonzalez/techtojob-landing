import { Code2, Server, Brain, Briefcase, Handshake } from "lucide-react";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

/**
 * Lucide icon components mapped to each Discord channel.
 * Icons are positionally aligned with `messages.networking.channels[]`.
 *
 * - `Code2` → #DESARROLLO
 * - `Server` → #INFRA-Y-DEVOPS
 * - `Brain` → #DATOS-E-IA
 * - `Briefcase` → #PORTFOLIOS
 * - `Handshake` → #OFERTAS-TRABAJO
 */
const channelIcons = [Code2, Server, Brain, Briefcase, Handshake];

/**
 * Discord community networking section showcasing channel categories.
 *
 * @remarks
 * - **Layout**: Halftone background (`bg-halftone`) with centered white header box and a
 *   responsive card grid (`sm:grid-cols-2 lg:grid-cols-3`) of `NeoCard` channel cards.
 * - **Header box**: White neobrutalist container with `SectionBadge` overlapping the top border.
 *   Hover tilt via `group`/`group-hover` pattern (`hover:-rotate-1`).
 * - **Channel cards**: Each card has a teal icon box (mapped via `channelIcons`), channel name
 *   (e.g., `#DESARROLLO`), and a description of what the channel is for.
 * - **Data source**: Channel names and descriptions sourced from `messages.networking.channels`
 *   for i18n readiness. Icons are mapped by array index position.
 *
 * @accessibility
 * - Uses `<section>` with heading hierarchy (`<h2>` for title, `<h3>` for channel names).
 * - Channel cards use `items-center text-center` for balanced visual alignment.
 * - Icons are decorative — channel name provides the accessible label.
 *
 * @example
 * ```tsx
 * // Rendered in page.tsx after News.
 * <Networking />
 * ```
 */
export function Networking() {
  const t = messages.networking;

  return (
    <section className="bg-halftone">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="relative inline-block cursor-pointer transition-all duration-300 ease-out hover:-rotate-1 hover:-translate-y-1 group">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.channels.map((channel, i) => {
            const ChannelIcon = channelIcons[i];
            return (
              <NeoCard key={channel.name} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center border-2 border-brand-dark bg-brand-teal">
                  <ChannelIcon size={28} strokeWidth={2} className="text-brand-dark" />
                </div>
                <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-brand-dark">
                  {channel.name}
                </h3>
                <p className="text-sm text-brand-dark/70">
                  {channel.description}
                </p>
              </NeoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
