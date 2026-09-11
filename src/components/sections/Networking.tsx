import { Code2, Server, Brain, Briefcase, Handshake } from "lucide-react";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const channels = [
  {
    name: "#DESARROLLO",
    description:
      "Dudas de código, code reviews, arquitectura. Gente que sabe respondiendo en minutos.",
    Icon: Code2,
  },
  {
    name: "#INFRA-Y-DEVOPS",
    description:
      "CI/CD, contenedores, cloud. Si levantas infra, hay alguien que ya pasó por lo mismo.",
    Icon: Server,
  },
  {
    name: "#DATOS-E-IA",
    description:
      "Machine learning, pipelines, modelos. La comunidad más activa del sector en español.",
    Icon: Brain,
  },
  {
    name: "#PORTFOLIOS",
    description:
      "Muestra tu trabajo. Obtén feedback real de personas que contratan.",
    Icon: Briefcase,
  },
  {
    name: "#OFERTAS-TRABAJO",
    description:
      "Ofertas que alguien comparte porque conoce a quien contrata. No es un tablón, es un contacto.",
    Icon: Handshake,
  },
];

export function Networking() {
  return (
    <section className="bg-halftone">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="relative inline-block -rotate-1">
            <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2">
              Networking
            </SectionBadge>
            <div className="mt-4 bg-brand-white border-2 border-brand-dark px-8 py-6 shadow-[4px_4px_0px_0px_#2f3436] text-center">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
                Los buenos trabajos no se encuentran. Se enteran.
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg font-semibold text-brand-dark/80">
                Canales por área, gente del sector, dudas resueltas en minutos.
                Ofertas que alguien comparte porque conoce a quien contrata.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <NeoCard key={channel.name} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center border-2 border-brand-dark bg-brand-teal">
                <channel.Icon size={28} strokeWidth={2} className="text-brand-dark" />
              </div>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-brand-dark">
                {channel.name}
              </h3>
              <p className="text-sm text-brand-dark/70">
                {channel.description}
              </p>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
