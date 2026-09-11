import { Trophy, Lightbulb, Rocket } from "lucide-react";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const features = [
  {
    title: "Retos reales",
    description:
      "No es un coding challenge genérico. Construyes algo que se usa. El jurado evalúa con criterios públicos, sin letra pequeña.",
    Icon: Trophy,
  },
  {
    title: "Aprendes y te danastically conocen",
    description:
      "Cada torneo es una oportunidad para mejorar y tener algo que enseñar en una entrevista. Participar te pone delante de empresas reales.",
    Icon: Lightbulb,
  },
  {
    title: "Lo que ganas, se usa",
    description:
      "Esta misma web salió de un torneo. Los proyectos ganadores viven, se despliegan y se usan. No son trofeos digitales.",
    Icon: Rocket,
  },
];

export function Tournaments() {
  return (
    <section id="torneos" className="bg-halftone">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>Torneos</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
            Construye bajo presión. Destaca de verdad.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-dark/70">
            Retos abiertos, entregas reales, jurado con criterios públicos. No
            es por el premio. Es por lo que aprendes y quién te ve.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <NeoCard key={feature.title} className="flex flex-col">
              <feature.Icon
                className="mb-4 text-brand-teal"
                size={32}
                strokeWidth={2}
              />
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-brand-dark/70">{feature.description}</p>
            </NeoCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NeoButton variant="primary">Únete al próximo torneo</NeoButton>
          </a>
        </div>
      </div>
    </section>
  );
}
