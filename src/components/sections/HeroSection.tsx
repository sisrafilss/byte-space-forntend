'use client';

import { Container } from '@/components/ui/Container';
import { SearchBar } from '@/components/ui/SearchBar';
import { Star } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const handleSearch = (query: string) => {
    if (query.trim()) {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const studentAvatars = [
    '/assets/images/Ellipse_1_1828.png',
    '/assets/images/Ellipse_1_1829.png',
    '/assets/images/Ellipse_1_1830.png',
    '/assets/images/Ellipse_1_1831.png',
    '/assets/images/Ellipse_1_1832.png',
    '/assets/images/Ellipse_1_1833.png',
    '/assets/images/Ellipse_1_1834.png',
  ];

  return (
    <section className="relative overflow-hidden bg-[#003BE2] pt-4 pb-0 text-white select-none sm:pt-8 lg:pt-10">
      {/* Figma 120px Grid Background Overlay (Group 4 in Figma, 12% opacity) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:120px_120px] opacity-100"
        aria-hidden="true"
      />

      {/* 3D Decorative Ornaments - Left Side (Clean individual shapes without text) */}
      {/* 1. Top-Left Lime Spiral */}
      <div
        className="pointer-events-none absolute top-[180px] left-0 z-10 hidden w-[130px] md:block lg:top-[210px] lg:w-[190px] xl:w-[200px]"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_lime_spiral.png"
          alt=""
          width={200}
          height={310}
          sizes="(max-width: 1024px) 190px, 200px"
          priority
          className="h-auto w-full object-contain object-left"
        />
      </div>

      {/* 2. Mid-Left White Zigzag Ribbon */}
      <div
        className="pointer-events-none absolute top-[450px] left-[6%] z-10 hidden w-[75px] md:block lg:top-[475px] lg:left-[9%] lg:w-[110px] xl:left-[11%] xl:w-[120px]"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_white_ribbon_left.png"
          alt=""
          width={120}
          height={170}
          sizes="(max-width: 1024px) 110px, 120px"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* 3. Bottom-Left White Donut */}
      <div
        className="pointer-events-none absolute bottom-[30px] left-[1%] z-10 hidden w-[140px] md:block lg:bottom-[40px] lg:left-[2%] lg:w-[200px] xl:left-[3%] xl:w-[220px]"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_white_donut.png"
          alt=""
          width={220}
          height={280}
          sizes="(max-width: 1024px) 200px, 220px"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* 3D Decorative Ornaments - Right Side (Clean individual shapes without text) */}
      {/* 4. Top-Right Lime Cone */}
      <div
        className="pointer-events-none absolute top-[180px] right-0 z-10 hidden w-[140px] md:block lg:top-[210px] lg:w-[210px] xl:w-[220px]"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_lime_cone.png"
          alt=""
          width={220}
          height={330}
          sizes="(max-width: 1024px) 210px, 220px"
          priority
          className="h-auto w-full object-contain object-right"
        />
      </div>

      {/* 5. Mid-Right White Pyramid */}
      <div
        className="pointer-events-none absolute top-[440px] right-[6%] z-10 hidden w-[95px] md:block lg:top-[460px] lg:right-[9%] lg:w-[150px] xl:right-[11%] xl:w-[170px]"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_white_pyramid.png"
          alt=""
          width={180}
          height={170}
          sizes="(max-width: 1024px) 150px, 170px"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* 6. Bottom-Right White Zigzag Ribbon */}
      <div
        className="pointer-events-none absolute right-[1%] bottom-[40px] z-10 hidden w-[130px] md:block lg:right-[2%] lg:bottom-[60px] lg:w-[190px] xl:right-[3%] xl:w-[210px]"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_white_ribbon_right.png"
          alt=""
          width={220}
          height={280}
          sizes="(max-width: 1024px) 190px, 210px"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Main Content Container */}
      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Headline (Poppins SemiBold 72px) */}
        <h1 className="font-heading max-w-4xl text-3xl leading-[1.12] font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[72px]">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        {/* Subtitle (Satoshi 18px #E5E6E8) */}
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#E5E6E8] sm:mt-5 sm:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>

        {/* Search Bar (Figma exact: 580px wide, pill rounded, search icon + lime button) */}
        <SearchBar
          className="mt-7 sm:mt-8"
          placeholder="Course, topic, creator"
          buttonText="Search"
          onSearch={handleSearch}
        />

        {/* Hero Visual Area: Boy Image + 730px Neon Lime Circle + 3 Floating Cards */}
        <div className="relative mt-8 flex w-full max-w-[850px] items-end justify-center sm:mt-12 lg:mt-14">
          {/* Big Neon Lime Circle Background (Figma Ellipse 7: 730px × 730px #D4FB20) */}
          <div
            className="absolute -bottom-24 h-[340px] w-[340px] rounded-full bg-[#D4FB20] shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:-bottom-32 sm:h-[500px] sm:w-[500px] md:h-[620px] md:w-[620px] lg:-bottom-40 lg:h-[730px] lg:w-[730px]"
            aria-hidden="true"
          />

          {/* Central Hero Boy Image (Image_1_1796: 578px × 541px) */}
          <div className="pointer-events-none relative z-10 -mb-1 h-auto w-[290px] select-none sm:w-[420px] md:w-[500px] lg:w-[578px]">
            <Image
              src="/assets/images/Image_1_1796.png"
              alt="ByteSpace student learning online with laptop"
              width={578}
              height={541}
              sizes="(max-width: 640px) 290px, (max-width: 768px) 420px, (max-width: 1024px) 500px, 578px"
              priority
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Top Left) */}
          <div className="absolute top-12 left-1 z-20 origin-top-left scale-85 rounded-2xl bg-white px-4 py-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:top-16 sm:left-2 sm:scale-95 sm:px-5 sm:py-3.5 md:left-4 lg:top-24 lg:left-0 lg:scale-100">
            <p className="font-sans text-xs font-semibold text-[#242528] sm:text-sm">
              UI/UX Design
            </p>
            <p className="mt-0.5 font-sans text-[11px] text-[#82868E] sm:text-xs">
              200 Courses <span className="mx-1">•</span> 1000+ Students
            </p>
          </div>

          {/* Floating Card 2: Learning Progress (Top Right) */}
          <div className="absolute top-14 right-1 z-20 min-w-[160px] origin-top-right scale-85 rounded-2xl bg-white p-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:top-20 sm:right-2 sm:min-w-[200px] sm:scale-95 sm:p-5 md:right-4 lg:top-28 lg:right-2 lg:min-w-[220px] lg:scale-100">
            <p className="font-sans text-xs font-medium text-[#242528] sm:text-sm">
              Learning Progress
            </p>
            <p className="font-heading mt-1 text-2xl leading-none font-semibold text-[#242528] sm:text-4xl">
              55%
            </p>
            {/* Progress Bar (200px wide, #F6F6F6 track, #D4FB20 fill) */}
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#F6F6F6]">
              <div className="h-full rounded-full bg-[#D4FB20]" style={{ width: '55%' }} />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom Left) */}
          <div className="absolute bottom-8 left-1 z-20 origin-bottom-left scale-85 rounded-2xl bg-white p-3.5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:bottom-12 sm:left-2 sm:scale-95 sm:p-4 md:left-4 lg:bottom-16 lg:left-2 lg:scale-100">
            <div className="flex items-center justify-between gap-3">
              <p className="font-sans text-xs font-semibold text-[#242528] sm:text-sm">
                Happy Students
              </p>
              <div className="flex items-center gap-1">
                <span className="font-sans text-xs font-semibold text-[#82868E]">4.5 (240)</span>
                <Star className="h-3.5 w-3.5 fill-[#D4FB20] text-[#D4FB20]" />
              </div>
            </div>

            {/* Overlapping Student Avatars (All 7 student avatars + 2K+ badge) */}
            <div className="mt-2.5 flex items-center">
              {studentAvatars.map((src, index) => (
                <div
                  key={index}
                  className="relative -ml-2 h-6 w-6 overflow-hidden rounded-full border-2 border-white shadow-sm first:ml-0 sm:h-7 sm:w-7"
                >
                  <Image
                    src={src}
                    alt="Student avatar"
                    width={28}
                    height={28}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <div className="font-heading -ml-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] text-[9px] font-bold text-[#242528] shadow-sm sm:h-7 sm:w-7 sm:text-[10px]">
                2K+
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
