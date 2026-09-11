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
          <div className="relative inline-block -rotate-1">
            <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2">
              Cómo funciona
            </SectionBadge>
            <div className="mt-4 bg-brand-white border-2 border-brand-dark px-8 py-6 shadow-[4px_4px_0px_0px_#2f3436]">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
                Tres pasos. Sin rodeos.
              </h2>
              <p className="mt-3 max-w-2xl text-lg font-semibold text-brand-dark/80">
                Las oportunidades no salen de rellenar formularios. Salen de
                participar.
              </p>
            </div>
          </div>
        </div>

        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number}>
              <NeoCard className="h-full text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center border-2 border-brand-dark bg-brand-teal">
                  <step.Icon size={28} strokeWidth={2} className="text-brand-dark" />
                </div>
                <span className="mb-1 inline-block text-2xl font-bold text-brand-teal">
                  {step.number}
                </span>
                <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-dark/70">{step.description}</p>
              </NeoCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
