import { ExternalLink } from "lucide-react";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

const categoryColors: Record<string, string> = {
  Torneos: "bg-brand-teal text-brand-dark",
  Empleo: "bg-brand-dark text-brand-white",
  Comunidad: "bg-brand-white text-brand-dark border-2 border-brand-dark",
};

export function News() {
  const t = messages.news;

  return (
    <section id="novedades" className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="relative inline-block cursor-pointer transition-all duration-300 ease-out hover:-rotate-1 hover:-translate-y-1 group">
            <SectionBadge className="absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:-rotate-1 group-hover:-translate-y-1">
              {t.badge}
            </SectionBadge>
            <div className="mt-4 bg-brand-white border-2 border-brand-dark px-8 py-6 shadow-[4px_4px_0px_0px_#2f3436] text-center transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#84c0bf]">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
                {t.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.items.map((item) => (
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
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 bg-brand-teal text-brand-dark border-2 border-brand-dark px-4 py-2 font-bold text-sm rounded-lg transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#2f3436] cursor-pointer">
                  {t.readMore} <ExternalLink size={14} />
                </span>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
