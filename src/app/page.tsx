import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TickerBanner } from "@/components/sections/TickerBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AudienceSplit } from "@/components/sections/AudienceSplit";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TickerBanner />
        <HowItWorks />
        <AudienceSplit />
      </main>
    </div>
  );
}
