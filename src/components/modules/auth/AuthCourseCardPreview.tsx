import Image from 'next/image';

const CARD_STUDENTS = [
  '/assets/images/Ellipse_49_300.png',
  '/assets/images/Ellipse_49_301.png',
  '/assets/images/Ellipse_49_302.png',
  '/assets/images/Ellipse_49_303.png',
];

export function AuthCourseCardPreview() {
  return (
    <>
      {/* Back Course Card: "Build Digital Asset" */}
      <div className="absolute top-22.25 left-6.25 z-10 flex h-96 w-93.25 flex-col rounded-3xl bg-white p-4 shadow-xl">
        <div className="relative h-47 w-full overflow-hidden rounded-2xl bg-neutral-100">
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
                <span className="text-secondary-400">★</span>
              </div>
            </div>
            <p className="font-satoshi text-[12px] font-normal text-primary-800">
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

      {/* Front Course Card: "the Power of Big Data" */}
      <div className="absolute top-0 left-34 z-20 flex h-96 w-93.25 flex-col rounded-3xl bg-white p-4 shadow-2xl">
        <div className="relative h-47 w-full overflow-hidden rounded-2xl bg-neutral-100">
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
                <span className="text-secondary-500">★</span>
              </div>
            </div>
            <p className="font-satoshi text-[12px] font-normal text-primary-800">
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
    </>
  );
}
