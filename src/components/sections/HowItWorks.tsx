import { LogIn, Code, UserCheck } from "lucide-react";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "01",
    title: "Entras al Discord",
    description:
      "Sin formularios. Sin esperas. Entras, te presentas y empiezas a formar parte.",
    Icon: LogIn,
  },
  {
    number: "02",
    title: "Compartes código o participas en torneos",
    description:
      "Resuelves retos reales, contribuyes a proyectos y muestras cómo trabajas. No es sobre palabras, es sobre hechos.",
    Icon: Code,
  },
  {
    number: "03",
    title: "Te conocen antes de que haya una vacante",
    description:
      "Las empresas te ven trabajar. Te escriben directamente. Sin filtros automáticos que descarten tu CV antes de que lo lea una persona.",
    Icon: UserCheck,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-halftone">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>Cómo funciona</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
            Tres pasos. Sin rodeos.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-dark/70">
            Las oportunidades no salen de rellenar formularios. Salen de
            participar.
          </p>
        </div>

        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number}>
              <NeoCard className="h-full">
                <step.Icon
                  className="mb-4 text-brand-teal"
                  size={32}
                  strokeWidth={2}
                />
                <span className="mb-4 inline-block text-4xl font-bold text-brand-teal">
                  {step.number}
                </span>
                <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-brand-dark/70">{step.description}</p>
              </NeoCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
