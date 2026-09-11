import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

export function Testimonials() {
  const t = messages.testimonials;

  return (
    <section className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>{t.badge}</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((testimonial) => (
            <NeoCard key={testimonial.name} className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-brand-dark bg-brand-teal text-sm font-bold text-brand-dark">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{testimonial.name}</p>
                    <p className="text-xs text-brand-dark/60">{testimonial.role}</p>
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
