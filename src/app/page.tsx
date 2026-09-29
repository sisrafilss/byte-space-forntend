import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnersSection } from '@/components/sections/PartnersSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-neutral-950">
      {/* Top Header & Hero Area with Vibrant Brand Blue Background */}
      <div className="relative w-full bg-[#003BE2]">
        <Navbar />
        <HeroSection />
      </div>

      {/* Partner Logos Bar (Step 2.3) */}
      <PartnersSection />
    </main>
  );
}
