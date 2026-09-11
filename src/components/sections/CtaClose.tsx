import { SectionBadge } from "@/components/ui/SectionBadge";

export function CtaClose() {
  return (
    <section className="bg-halftone">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="relative inline-block w-full text-center">
          <div className="bg-brand-white border-2 border-brand-dark shadow-[6px_6px_0px_0px_#2f3436] -rotate-1 p-8 sm:p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-dark md:text-4xl">
              El trabajo que buscas ya te conoce. Solo falta que llegues.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-brand-dark/70 text-sm md:text-base">
              No llenes más formularios. Participa, construye y que te encuentren.
            </p>

            <a
              href="https://discord.gg/h9FFgKdkRd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-brand-teal text-brand-dark border-2 border-brand-dark px-8 py-4 font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_#2f3436] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#2f3436] transition-all duration-150 ease-in-out cursor-pointer"
            >
              Únete al Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
