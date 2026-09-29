import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-neutral-950">
      {/* Top Header & Hero Area with Vibrant Brand Blue Background */}
      <div className="relative w-full bg-[#003BE2]">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
