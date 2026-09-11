import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TickerBanner } from "@/components/sections/TickerBanner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TickerBanner />
      </main>
    </div>
  );
}
