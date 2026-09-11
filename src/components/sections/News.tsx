import { ExternalLink } from "lucide-react";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const news = [
  {
    category: "Torneos",
    date: "3 sep 2026",
    title: "El logo de TechToJob salió de un torneo. Ahora le toca a la landing.",
    body: "El torneo anterior definió la identidad visual que usa hoy toda la comunidad. Este torneo hace lo mismo con la landing oficial.",
  },
  {
    category: "Empleo",
    date: "5 sep 2026",
    title: "Canales de trabajo: así se mueven las oportunidades dentro del servidor",
    body: "Dos canales, un mismo objetivo: que el talento y las empresas se encuentren sin pasar por un formulario.",
  },
  {
    category: "Comunidad",
    date: "8 sep 2026",
    title: "Nuevo canal de Foro: preguntas y sugerencias en un solo lugar",
    body: "Dudas, sugerencias y propuestas de mejora, ahora centralizadas en un solo canal.",
  },
];

const categoryColors: Record<string, string> = {
  Torneos: "bg-brand-teal text-brand-dark",
  Empleo: "bg-brand-dark text-brand-white",
  Comunidad: "bg-brand-white text-brand-dark border-2 border-brand-dark",
};

export function News() {
  return (
    <section id="novedades" className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>Novedades</SectionBadge>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <NeoCard key={item.title} className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`inline-block rounded-xl px-3 py-1 text-xs font-bold uppercase tracking-wide ${categoryColors[item.category]}`}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-brand-dark/60">{item.date}</span>
                </div>
                <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-dark/70">{item.body}</p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-teal">
                Leer más <ExternalLink size={14} />
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
