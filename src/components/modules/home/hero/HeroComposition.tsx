import { HeroHappyStudentsCard } from './HeroHappyStudentsCard';
import { HeroProgressCard } from './HeroProgressCard';
import { HeroUiUxCard } from './HeroUiUxCard';
import Image from 'next/image';

export function HeroComposition() {
  return (
    <div className="relative mt-8 flex w-full max-w-212.5 items-end justify-center sm:mt-12 lg:mt-14">
      {/* Big Neon Lime Circle Background (Figma Ellipse 7: 730px × 730px #D4FB20) */}
      <div
        className="absolute -bottom-24 h-85 w-85 rounded-full bg-secondary-400 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:-bottom-32 sm:h-125 sm:w-125 md:h-155 md:w-155 lg:-bottom-40 lg:h-182.5 lg:w-182.5"
        aria-hidden="true"
      />

      {/* Central Hero Boy Image (Image_1_1796: 578px × 541px) */}
      <div className="pointer-events-none relative z-10 -mb-1 h-auto w-72.5 select-none sm:w-105 md:w-125 lg:w-144.5">
        <Image
          src="/assets/images/Image_1_1796.png"
          alt="ByteSpace student learning online with laptop"
          width={578}
          height={541}
          sizes="(max-width: 640px) 290px, (max-width: 768px) 420px, (max-width: 1024px) 500px, 578px"
          priority
          className="h-auto w-full object-contain drop-shadow-2xl"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Floating Card 1: UI/UX Design (Top Left) */}
      <HeroUiUxCard />

      {/* Floating Card 2: Learning Progress (Top Right) */}
      <HeroProgressCard />

      {/* Floating Card 3: Happy Students (Bottom Left) */}
      <HeroHappyStudentsCard />
    </div>
  );
}
