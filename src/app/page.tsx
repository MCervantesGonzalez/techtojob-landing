import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TickerBanner } from "@/components/sections/TickerBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AudienceSplit } from "@/components/sections/AudienceSplit";
import { Tournaments } from "@/components/sections/Tournaments";
import { Networking } from "@/components/sections/Networking";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TickerBanner />
        <HowItWorks />
        <AudienceSplit />
        <Tournaments />
        <Networking />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}
