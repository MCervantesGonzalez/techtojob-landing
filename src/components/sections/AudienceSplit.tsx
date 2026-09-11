import { User, Building2 } from "lucide-react";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

export function AudienceSplit() {
  const t = messages.audienceSplit;

  return (
    <section
      id="para-quien"
      className="bg-brand-dark bg-noise text-brand-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="relative inline-block -rotate-1">
            <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2">
              {t.badge}
            </SectionBadge>
            <div className="mt-4 bg-brand-white border-2 border-brand-dark px-8 py-6 shadow-[4px_4px_0px_0px_#2f3436]">
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
