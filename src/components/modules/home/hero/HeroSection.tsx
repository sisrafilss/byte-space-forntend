'use client';

import { Container } from '@/components/ui/Container';
import { SearchBar } from '@/components/ui/SearchBar';
import { HeroComposition } from './HeroComposition';
import { HeroOrnaments } from './HeroOrnaments';

export function HeroSection() {
  const handleSearch = (query: string) => {
    if (query.trim()) {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#003BE2] pt-4 pb-0 text-white select-none sm:pt-8 lg:pt-10">
      {/* Figma 120px Grid Background Overlay (Group 4 in Figma, 12% opacity) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
        aria-hidden="true"
      />

      {/* 3D Decorative Ornaments */}
      <HeroOrnaments />

      {/* Main Content Container */}
      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="font-poppins max-w-4xl text-[34px] leading-[1.15] font-semibold tracking-[-0.01em] text-white sm:text-[48px] md:text-[56px] lg:text-[64px] lg:leading-[74px]">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed font-normal text-white/90 sm:mt-5 sm:text-base md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>

        {/* Floating Search Bar */}
        <div className="mt-7 w-full max-w-2xl px-2 sm:mt-9 sm:px-0">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Hero Visual Area: Student + Neon Circle + Floating Cards */}
        <HeroComposition />
      </Container>
    </section>
  );
}
