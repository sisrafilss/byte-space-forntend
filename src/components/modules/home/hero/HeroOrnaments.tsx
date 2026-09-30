import Image from 'next/image';

export function HeroOrnaments() {
  return (
    <>
      {/* 3D Decorative Ornaments - Left Side */}
      {/* 1. Top-Left Lime Spiral */}
      <div
        className="pointer-events-none absolute top-45 left-0 z-10 hidden w-32.5 md:block lg:top-52.5 lg:w-47.5 xl:w-50"
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
          style={{ height: 'auto' }}
        />
      </div>

      {/* 2. Mid-Left White Zigzag Ribbon */}
      <div
        className="pointer-events-none absolute top-112.5 left-[6%] z-10 hidden w-18.75 md:block lg:top-118.75 lg:left-[9%] lg:w-27.5 xl:left-[11%] xl:w-30"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_white_ribbon_left.png"
          alt=""
          width={120}
          height={170}
          sizes="(max-width: 1024px) 110px, 120px"
          className="h-auto w-full object-contain"
          style={{ height: 'auto' }}
        />
      </div>

      {/* 3. Bottom-Left White Donut */}
      <div
        className="pointer-events-none absolute bottom-7.5 left-[1%] z-10 hidden w-35 md:block lg:bottom-10 lg:left-[2%] lg:w-50 xl:left-[3%] xl:w-55"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_white_donut.png"
          alt=""
          width={220}
          height={280}
          sizes="(max-width: 1024px) 200px, 220px"
          className="h-auto w-full object-contain"
          style={{ height: 'auto' }}
        />
      </div>

      {/* 3D Decorative Ornaments - Right Side */}
      {/* 4. Top-Right Lime Cone */}
      <div
        className="pointer-events-none absolute top-45 right-0 z-10 hidden w-35 md:block lg:top-52.5 lg:w-52.5 xl:w-55"
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
          style={{ height: 'auto' }}
        />
      </div>

      {/* 5. Mid-Right White Pyramid */}
      <div
        className="pointer-events-none absolute top-110 right-[6%] z-10 hidden w-23.75 md:block lg:top-115 lg:right-[9%] lg:w-37.5 xl:right-[11%] xl:w-42.5"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_white_pyramid.png"
          alt=""
          width={180}
          height={170}
          sizes="(max-width: 1024px) 150px, 170px"
          className="h-auto w-full object-contain"
          style={{ height: 'auto' }}
        />
      </div>

      {/* 6. Bottom-Right White Zigzag Ribbon */}
      <div
        className="pointer-events-none absolute right-[1%] bottom-10 z-10 hidden w-32.5 md:block lg:right-[2%] lg:bottom-15 lg:w-47.5 xl:right-[3%] xl:w-52.5"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero_white_ribbon_right.png"
          alt=""
          width={220}
          height={280}
          sizes="(max-width: 1024px) 190px, 210px"
          className="h-auto w-full object-contain"
          style={{ height: 'auto' }}
        />
      </div>
    </>
  );
}
