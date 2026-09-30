import Image from 'next/image';

const STUDENT_AVATARS = [
  '/assets/images/Ellipse_49_320.png',
  '/assets/images/Ellipse_49_321.png',
  '/assets/images/Ellipse_49_322.png',
  '/assets/images/Ellipse_49_323.png',
  '/assets/images/Ellipse_49_324.png',
  '/assets/images/Ellipse_49_325.png',
  '/assets/images/Ellipse_49_326.png',
];

const CARD_STUDENTS = [
  '/assets/images/Ellipse_49_300.png',
  '/assets/images/Ellipse_49_301.png',
  '/assets/images/Ellipse_49_302.png',
  '/assets/images/Ellipse_49_303.png',
];

export function AuthVisualComposition() {
  return (
    <div className="relative h-[585px] w-[548px] select-none">
      {/* 1. Lime Torus 3D (rel_x=54, rel_y=15, 146x146, z-30) */}
      <div className="pointer-events-none absolute top-[15px] left-[54px] z-30 h-[146px] w-[146px]">
        <Image
          src="/assets/images/cta_torus_lime.png"
          alt=""
          width={146}
          height={146}
          className="h-full w-full object-contain drop-shadow-md"
        />
      </div>

      {/* 2. Back Course Card: "Build Digital Asset" (rel_x=25, rel_y=89, 373x384, z-10) */}
      <div className="absolute top-[89px] left-[25px] z-10 flex h-[384px] w-[373px] flex-col rounded-[24px] bg-white p-4 shadow-xl">
        <div className="relative h-[188px] w-full overflow-hidden rounded-[16px] bg-neutral-100">
          <Image
            src="/assets/images/Frame_49_252.png"
            alt="Build Digital Asset"
            width={341}
            height={188}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 backdrop-blur-md">
            <span className="font-satoshi text-[12px] font-medium text-neutral-800">
              17 Lessons
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-poppins text-[18px] font-bold text-neutral-950">
                Build Digital Asset
              </h3>
              <div className="font-satoshi flex items-center gap-1 text-[14px] font-medium text-neutral-600">
                <span>4.5</span>
                <span className="text-[#D4FB20]">★</span>
              </div>
            </div>
            <p className="font-satoshi text-[12px] font-normal text-[#003BE2]">
              by purepearl studio
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-satoshi inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700">
              <span className="text-neutral-500">📊</span> Beginner
            </span>
            <div className="flex -space-x-2">
              {CARD_STUDENTS.slice(0, 3).map((src, i) => (
                <div
                  key={i}
                  className="relative h-6 w-6 overflow-hidden rounded-full border border-white"
                >
                  <Image
                    src={src}
                    alt=""
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                26+
              </div>
            </div>
          </div>

          <div className="font-poppins flex items-baseline gap-1 border-t border-neutral-100 pt-2">
            <span className="text-[18px] font-bold text-neutral-950">$25</span>
            <span className="font-satoshi text-[11px] text-neutral-500">/lifetime</span>
          </div>
        </div>
      </div>

      {/* 3. Front Course Card: "the Power of Big Data" (rel_x=136, rel_y=0, 373x384, z-20) */}
      <div className="absolute top-[0px] left-[136px] z-20 flex h-[384px] w-[373px] flex-col rounded-[24px] bg-white p-4 shadow-2xl">
        <div className="relative h-[188px] w-full overflow-hidden rounded-[16px] bg-neutral-100">
          <Image
            src="/assets/images/Frame_49_283.png"
            alt="the Power of Big Data"
            width={341}
            height={188}
            className="h-full w-full object-cover"
          />
          {/* Glass Badges */}
          <div className="absolute right-3 bottom-3 left-3 flex items-center gap-1.5 overflow-hidden">
            <div className="rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-md">
              <span className="font-satoshi text-[11px] font-medium text-white">17 Lessons</span>
            </div>
            <div className="rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-md">
              <span className="font-satoshi text-[11px] font-medium text-white">
                2 hours 16 mins
              </span>
            </div>
            <div className="rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-md">
              <span className="font-satoshi text-[11px] font-medium text-white">59 Comments</span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-poppins text-[18px] font-bold text-neutral-950">
                the Power of Big Data
              </h3>
              <div className="font-satoshi flex items-center gap-1 text-[14px] font-medium text-neutral-600">
                <span>4.5</span>
                <span className="text-[#cbf801]">★</span>
              </div>
            </div>
            <p className="font-satoshi text-[12px] font-normal text-[#003BE2]">
              by purepearl studio
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-satoshi inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700">
              <span className="text-neutral-500">📊</span> Beginner
            </span>
            <div className="flex -space-x-2">
              {CARD_STUDENTS.map((src, i) => (
                <div
                  key={i}
                  className="relative h-6 w-6 overflow-hidden rounded-full border border-white"
                >
                  <Image
                    src={src}
                    alt=""
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                26+
              </div>
            </div>
          </div>

          <div className="font-poppins flex items-baseline gap-1 border-t border-neutral-100 pt-2">
            <span className="text-[18px] font-bold text-neutral-950">$25</span>
            <span className="font-satoshi text-[11px] text-neutral-500">/lifetime</span>
          </div>
        </div>
      </div>

      {/* 4. White Frosted Coil 3D (rel_x=373, rel_y=321, 175x175, z-25) */}
      <div className="pointer-events-none absolute top-[321px] left-[373px] z-25 h-[175px] w-[175px]">
        <Image
          src="/assets/images/cta_coil_white.png"
          alt=""
          width={175}
          height={175}
          className="h-full w-full object-contain drop-shadow-md"
        />
      </div>

      {/* 5. Yellow Pyramid 3D (rel_x=0, rel_y=397, 188x188, z-30) */}
      <div className="pointer-events-none absolute top-[397px] left-[0px] z-30 h-[188px] w-[188px]">
        <Image
          src="/assets/images/cta_pyramid_lime.png"
          alt=""
          width={188}
          height={188}
          className="h-full w-full object-contain drop-shadow-lg"
        />
      </div>

      {/* 6. Happy Students Floating Card (rel_x=251, rel_y=435, 258x123, z-40) */}
      <div className="absolute top-[435px] left-[251px] z-40 flex h-[123px] w-[258px] flex-col justify-between rounded-[24px] bg-[#D4FB20] p-4 shadow-xl">
        <div>
          <h4 className="font-satoshi text-[16px] font-semibold text-neutral-950">
            Happy Students
          </h4>
          <div className="font-satoshi flex items-center gap-1 text-[11px] text-neutral-700">
            <span>4.5 (240)</span>
            <span className="text-[#003BE2]">★</span>
          </div>
        </div>

        {/* 7 Avatars + 2K+ Badge */}
        <div className="flex items-center -space-x-2.5">
          {STUDENT_AVATARS.map((src, i) => (
            <div
              key={i}
              className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-[#D4FB20]"
            >
              <Image
                src={src}
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D4FB20] bg-neutral-950 text-[10px] font-bold text-white">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}
