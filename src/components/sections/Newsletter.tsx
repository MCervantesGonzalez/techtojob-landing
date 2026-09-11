"use client";

import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

export function Newsletter() {
  const t = messages.newsletter;

  return (
    <section className="bg-halftone">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="relative bg-brand-white border-2 border-brand-dark shadow-[6px_6px_0px_0px_#2f3436] p-8 md:p-12 rounded-2xl text-center transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_#2f3436]">
          <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2">
            {t.badge}
          </SectionBadge>

          <h2 className="mt-4 mb-3 text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
            {t.title}
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-brand-dark/70 text-sm md:text-base">
            {t.description}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder={t.placeholder}
              className="w-full sm:w-72 border-2 border-brand-dark bg-brand-white px-4 py-3 text-sm font-semibold text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-teal text-brand-dark border-2 border-brand-dark px-6 py-3 font-bold text-sm uppercase tracking-wide transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#2f3436] cursor-pointer"
            >
              {t.cta}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
