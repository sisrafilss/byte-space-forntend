import { AvatarGroup } from '@/components/shared/AvatarGroup';
import Image from 'next/image';

const MINI_COURSE_AVATARS = [
  '/assets/images/Ellipse_13_266.png',
  '/assets/images/Ellipse_13_267.png',
  '/assets/images/Ellipse_13_268.png',
  '/assets/images/Ellipse_13_269.png',
];

export function MiniCourseCard() {
  return (
    <div
      className="w-[240px] rounded-[20px] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:w-[310px] sm:rounded-[24px] sm:p-4 sm:shadow-[0_12px_36px_rgba(0,0,0,0.09)] lg:w-[350px]"
      style={{ border: '1.5px solid #CDD0D3' }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[341/195] w-full overflow-hidden rounded-[12px] bg-neutral-100 sm:rounded-[16px]">
        <Image
          src="/assets/images/Frame_13_250.png"
          alt="Learn Figma course thumbnail"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 240px, 350px"
        />
        {/* Overlay info pills on thumbnail */}
        <div className="absolute right-2 bottom-2 left-2 flex items-center justify-between gap-1">
          {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((t, idx) => (
            <span
              key={t}
              className={`font-satoshi rounded-full bg-[#F6F6F6]/90 px-2 py-0.5 text-[9px] font-medium whitespace-nowrap text-[#4F4F4F] shadow-2xs backdrop-blur-[8px] sm:px-2.5 sm:text-[11px] ${
                idx === 2 ? 'hidden sm:inline-block' : ''
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="pt-2.5 sm:pt-3">
        <h4 className="font-poppins text-[14px] leading-snug font-semibold text-[#0C0C0D] sm:text-[16px]">
          Learn Figma from Basic
        </h4>
        <p className="font-satoshi mt-0.5 text-[11px] text-[#4F4F4F] sm:mt-1 sm:text-[12px]">
          by <span className="font-medium text-[#003BE2]">purepearl studio</span>
        </p>

        <div className="mt-2 flex items-center justify-between sm:mt-2.5">
          <span className="font-satoshi rounded-full bg-[#F5F5F6] px-2 py-0.5 text-[11px] font-medium text-[#4B4C53] sm:px-2.5 sm:text-[12px]">
            Beginner
          </span>
          <AvatarGroup avatars={MINI_COURSE_AVATARS} count="26+" size="sm" />
        </div>

        <div className="mt-2.5 flex items-baseline justify-between border-t border-neutral-100 pt-2 sm:mt-3 sm:pt-2.5">
          <div className="flex items-baseline gap-0.5">
            <span className="font-poppins text-[14px] font-bold text-[#003BE2] sm:text-[16px]">
              $25
            </span>
            <span className="font-satoshi text-[10px] text-[#4F4F4F] sm:text-[11px]">
              /lifetime
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-satoshi text-[11px] font-medium text-[#4F4F4F] sm:text-[12px]">
              4.5
            </span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#D4FB20">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
