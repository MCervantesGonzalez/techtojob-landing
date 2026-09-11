import { User, Building2 } from "lucide-react";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

/**
 * Two-column audience segmentation section — Developers vs Companies.
 *
 * @remarks
 * - **Layout**: Dark `bg-noise` background with centered header box and a 2-column
 *   responsive grid (`md:grid-cols-2`) of `NeoCard` audience cards.
 * - **Header box**: White neobrutalist container with `SectionBadge` overlapping the top border.
 *   Badge and box rotate on hover via `group`/`group-hover` pattern (`hover:rotate-1`).
 * - **Devs card**: `User` icon, profile-focused description, "Publica tu perfil" CTA linking
 *   to Discord.
 * - **Companies card**: `Building2` icon, hiring-focused description, "Publica tu oferta" CTA
 *   linking to Discord.
 * - Both CTAs use `NeoButton variant="teal"` with `w-full sm:w-auto` for responsive sizing.
 *
 * @accessibility
 * - Uses `<section>` with `id="para-quien"` for navbar anchor linking.
 * - Each card uses `<h3>` for audience type heading hierarchy.
 * - CTA links open Discord in new tabs with `rel="noopener noreferrer"`.
 *
 * @example
 * ```tsx
 * // Rendered in page.tsx after HowItWorks.
 * <AudienceSplit />
 * ```
 */
export function AudienceSplit() {
  const t = messages.audienceSplit;

  return (
    <section
      id="para-quien"
      className="bg-brand-dark bg-noise text-brand-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="relative inline-block cursor-pointer transition-all duration-300 ease-out hover:rotate-1 hover:-translate-y-1 group">
            <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:rotate-1 group-hover:-translate-y-1">
              {t.badge}
            </SectionBadge>
            <div className="mt-4 bg-brand-white border-2 border-brand-dark px-8 py-6 shadow-[4px_4px_0px_0px_#2f3436] transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#84c0bf]">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
                {t.title}
              </h2>
              <p className="mt-3 max-w-2xl text-lg font-semibold text-brand-dark/80">
                {t.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <NeoCard className="flex flex-col justify-between text-center">
            <div>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border-2 border-brand-dark bg-brand-teal">
                <User size={28} strokeWidth={2} className="text-brand-dark" />
              </div>
              <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-brand-dark">
                {t.devs.title}
              </h3>
              <p className="mb-6 text-sm text-brand-dark/70">
                {t.devs.description}
              </p>
            </div>
            <a
              href="https://discord.gg/h9FFgKdkRd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NeoButton variant="teal" className="w-full sm:w-auto">
                {t.devs.cta}
              </NeoButton>
            </a>
          </NeoCard>

          <NeoCard className="flex flex-col justify-between text-center">
            <div>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border-2 border-brand-dark bg-brand-teal">
                <Building2
                  size={28}
                  strokeWidth={2}
                  className="text-brand-dark"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-brand-dark">
                {t.companies.title}
              </h3>
              <p className="mb-6 text-sm text-brand-dark/70">
                {t.companies.description}
              </p>
            </div>
            <a
              href="https://discord.gg/h9FFgKdkRd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NeoButton variant="teal" className="w-full sm:w-auto">
                {t.companies.cta}
              </NeoButton>
            </a>
          </NeoCard>
        </div>
      </div>
    </section>
  );
}
