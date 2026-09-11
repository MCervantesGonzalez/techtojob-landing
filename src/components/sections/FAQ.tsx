"use client";

import { useState } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

/**
 * Frequently asked questions section with interactive accordion toggles.
 *
 * @remarks
 * - **Layout**: Dark `bg-noise` background with centered badge+title header and a vertical
 *   stack of accordion items at `max-w-3xl`.
 * - **State**: Uses `useState<number | null>` to track the currently open FAQ index.
 *   Only one item can be open at a time — clicking an open item closes it (`null`).
 * - **Accordion items**: Dark cards with teal border and shadow. Each item has a toggle button
 *   showing `+`/`−` inside a teal badge, plus the question text. The answer body renders
 *   conditionally below when `isOpen` is true.
 * - **Hover effects**: Each accordion card has a subtle lift (`hover:-translate-y-1`) and
 *   shadow expansion on hover via `transition-all duration-200`.
 *
 * @accessibility
 * - Toggle buttons use `aria-expanded={isOpen}` for screen reader state.
 * - `<button>` elements ensure keyboard interactability.
 * - Questions use uppercase bold text for clear visual hierarchy.
 *
 * @example
 * ```tsx
 * // Rendered in page.tsx after Newsletter.
 * <FAQ />
 * ```
 */
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
                  <div className="px-6 pb-6 pl-15 text-sm text-gray-300">
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
