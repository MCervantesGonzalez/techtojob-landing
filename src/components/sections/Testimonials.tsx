import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Frontend Developer",
    quote:
      "Participé en un torneo sin esperar nada. Al mes me escribió una empresa porque vio mi proyecto. No mandé ni un CV.",
    linkedin: "#",
  },
  {
    name: "Laura Jiménez",
    role: "Backend Engineer",
    quote:
      "Los canales de networking son otro nivel. Resolví un problema de infraestructura en 10 minutos con alguien que pasó por lo mismo.",
    linkedin: "#",
  },
  {
    name: "Andrés Rivas",
    role: "Full Stack Developer",
    quote:
      "De junior a tener trabajo en 3 meses. No fue suerte. Fue participar, construir y que te conozcan de verdad.",
    linkedin: "#",
  },
  {
    name: "María Torres",
    role: "Data Engineer",
    quote:
      "En LinkedIn nadie te contesta. Aquí te escriben directamente porque han visto cómo trabajas. Es otra cosa.",
    linkedin: "#",
  },
];

export function Testimonials() {
  return (
    <section className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>Testimonios</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Gente real. Resultados reales.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            La comunidad funciona. Estos son algunos de los que ya sacaron algo
            de valor participando.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <NeoCard key={t.name} className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-brand-dark bg-brand-teal text-sm font-bold text-brand-dark">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{t.name}</p>
                    <p className="text-xs text-brand-dark/60">{t.role}</p>
                  </div>
                </div>
                <blockquote className="text-sm text-brand-dark/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-teal hover:text-brand-dark hover:underline transition-colors"
              >
                LinkedIn →
              </a>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
