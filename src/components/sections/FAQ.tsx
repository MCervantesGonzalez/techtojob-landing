"use client";

import { useState } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = messages.faq;

  return (
    <section className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>{t.badge}</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="flex flex-col">
          {t.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-brand-dark border-2 border-brand-teal shadow-[3px_3px_0px_0px_#84c0bf] rounded-xl mb-4 overflow-hidden transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_#84c0bf]"
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
