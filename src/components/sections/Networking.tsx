import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const channels = [
  {
    name: "#DESARROLLO",
    description:
      "Dudas de código, code reviews, arquitectura. Gente que sabe respondiendo en minutos.",
  },
  {
    name: "#INFRA-Y-DEVOPS",
    description:
      "CI/CD, contenedores, cloud. Si levantas infra, hay alguien que ya pasó por lo mismo.",
  },
  {
    name: "#DATOS-E-IA",
    description:
      "Machine learning, pipelines, modelos. La comunidad más activa del sector en español.",
  },
  {
    name: "#PORTFOLIOS",
    description:
      "Muestra tu trabajo. Obtén feedback real de personas que contratan.",
  },
  {
    name: "#OFERTAS-TRABAJO",
    description:
      "Ofertas que alguien comparte porque conoce a quien contrata. No es un tablón, es un contacto.",
  },
];

export function Networking() {
  return (
    <section className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>Networking</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Los buenos trabajos no se encuentran. Se enteran.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-white/70">
            Canales por área, gente del sector, dudas resueltas en minutos.
            Ofertas que alguien comparte porque conoce a quien contrata.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <NeoCard key={channel.name} variant="dark" className="flex flex-col">
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-brand-teal">
                {channel.name}
              </h3>
              <p className="text-sm text-brand-white/70">
                {channel.description}
              </p>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
