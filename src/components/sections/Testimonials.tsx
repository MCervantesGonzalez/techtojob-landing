import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

export function Testimonials() {
  const t = messages.testimonials;

  return (
    <section className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="relative inline-block cursor-pointer transition-all duration-300 ease-out hover:rotate-1 hover:-translate-y-1 group">
            <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:rotate-1 group-hover:-translate-y-1">
              {t.badge}
            </SectionBadge>
            <div className="mt-4 bg-brand-white border-2 border-brand-dark shadow-[4px_4px_0px_0px_#2f3436] p-6 sm:p-8 text-center text-brand-dark max-w-3xl mx-auto transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#84c0bf]">
              <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                {t.title}
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-brand-dark/70">
                {t.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((testimonial) => (
            <NeoCard
              key={testimonial.name}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-brand-dark bg-brand-teal text-sm font-bold text-brand-dark">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-brand-dark/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <blockquote className="text-sm text-brand-dark/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-teal hover:text-brand-dark hover:underline transition-colors"
              >
                {t.linkedinCta}
              </a>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
