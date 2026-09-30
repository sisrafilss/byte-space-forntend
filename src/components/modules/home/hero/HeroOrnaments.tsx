import Image from 'next/image';

export function HeroOrnaments() {
  return (
    <>
      {/* 3D Decorative Ornaments - Left Side */}
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
          style={{ height: 'auto' }}
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
          style={{ height: 'auto' }}
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
          style={{ height: 'auto' }}
        />
      </div>

      {/* 3D Decorative Ornaments - Right Side */}
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
          style={{ height: 'auto' }}
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
          style={{ height: 'auto' }}
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
          style={{ height: 'auto' }}
        />
      </div>
    </>
  );
}
