"use client";

import { useState } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";

const faqs = [
  {
    question: "¿Qué es TechToJob?",
    answer:
      "No es un portal de empleo. Es una comunidad de desarrolladores y empresas tech en español. Aquí construyes, participas y te conocen antes de que haya una vacante.",
  },
  {
    question: "¿Cómo empiezo?",
    answer:
      "Entras al Discord, te presentas y empiezas a participar. No hay formularios largos. No hay filtros de CV. Solo entra y forma parte.",
  },
  {
    question: "¿Cómo me encuentran las empresas?",
    answer:
      "Participas en torneos, compartes código, publicas tu perfil con tu stack y nivel. Las empresas te ven trabajar y te escriben directamente. Sin filtros automáticos.",
  },
  {
    question: "¿Es gratis para desarrolladores?",
    answer:
      "Sí. No hay coste para ti. Las empresas publican sus ofertas y acceden a perfiles, tú solo participas y construyes.",
  },
  {
    question: "¿Necesito ser senior?",
    answer:
      "No. Juniors, mid-levels, seniors. Aquí no hay filtro de antigüedad. Si construyes y participas, te conocen.",
  },
  {
    question: "¿Cómo funcionan los torneos?",
    answer:
      "Retos reales, entregas con fecha, jurado con criterios públicos. Lo que ganas se usa. Esta misma web salió de un torneo.",
  },
  {
    question: "¿Qué pasa si no consigo trabajo?",
    answer:
      "Aprendes, tienes algo que enseñar en entrevistas, construyes tu portafolio y te conectas con gente del sector. Los buenos trabajos no se encuentran, se enteran.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>Preguntas frecuentes</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Sin rodeos
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-brand-dark border-2 border-brand-teal shadow-[3px_3px_0px_0px_#84c0bf] rounded-xl mb-4 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center gap-3 px-6 py-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-brand-dark bg-brand-teal text-sm font-bold text-brand-dark">
                    {isOpen ? "−" : "+"}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wide text-brand-white">
                    {faq.question}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pl-[60px] text-sm text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
