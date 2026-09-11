import messages from "@/messages/es.json";

export function TickerBanner() {
  const items = [...messages.tickerBanner.keywords, ...messages.tickerBanner.keywords];

  return (
    <div className="overflow-hidden border-y-2 border-brand-dark bg-brand-teal py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 text-sm font-bold uppercase tracking-widest text-brand-dark"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
