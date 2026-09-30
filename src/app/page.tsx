import { Footer, Navbar } from '@/components/layout';
import { CTASection } from '@/components/sections/CTASection';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { CourseSection } from '@/components/sections/CourseSection';
import { GrowthSection } from '@/components/sections/GrowthSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

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

      {/* Courses Section (Step 2.4) */}
      <CourseSection />

      {/* Diverse Learning Paths Categories Section (Step 2.5) */}
      <CategoriesSection />

      {/* Professional Growth & Create Courses Sections (Step 2.6) */}
      <GrowthSection />

      {/* CTA Banner Section (Step 2.7) */}
      <CTASection />

      {/* Testimonials Section (Step 2.8) */}
      <TestimonialsSection />

      {/* Footer Section (Step 2.9) */}
      <Footer />
    </main>
  );
}
