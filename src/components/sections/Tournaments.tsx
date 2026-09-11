import { Trophy, Lightbulb, Rocket } from "lucide-react";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

const featureIcons = [Trophy, Lightbulb, Rocket];

export function Tournaments() {
  const t = messages.tournaments;

  return (
    <section id="torneos" className="bg-halftone">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="relative inline-block -rotate-1">
            <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2">
              {t.badge}
            </SectionBadge>
            <div className="mt-4 bg-brand-white border-2 border-brand-dark px-8 py-6 shadow-[4px_4px_0px_0px_#2f3436] text-center">
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
