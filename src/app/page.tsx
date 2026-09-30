import {
  CategoriesSection,
  CourseSection,
  CTASection,
  GrowthSection,
  HeroSection,
  PartnersSection,
  TestimonialsSection,
} from '@/components/modules/home';
import { PublicFooter, PublicNavbar } from '@/components/shared';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-neutral-950">
      {/* Top Header & Hero Area with Vibrant Brand Blue Background */}
      <div className="relative w-full bg-primary-800">
        <PublicNavbar />
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
      <PublicFooter />
    </main>
  );
}
