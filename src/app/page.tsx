import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TickerBanner } from "@/components/sections/TickerBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AudienceSplit } from "@/components/sections/AudienceSplit";
import { Tournaments } from "@/components/sections/Tournaments";
import { News } from "@/components/sections/News";
import { Networking } from "@/components/sections/Networking";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TickerBanner />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <AudienceSplit />
        <Tournaments />
        <News />
        <Networking />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
