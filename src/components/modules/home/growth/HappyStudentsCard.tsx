import { AvatarGroup } from '@/components/shared/AvatarGroup';
import { GROWTH_STUDENT_AVATARS } from '@/data';

export function HappyStudentsCard() {
  return (
    <div className="w-[210px] rounded-[16px] border border-neutral-100 bg-white px-3 py-3 shadow-2xl sm:w-[250px] sm:p-3.5 lg:w-[265px]">
      <div className="mb-2 sm:mb-2.5">
        <p className="font-satoshi text-[13px] font-medium text-[#242528] sm:text-[15px]">
          Happy Students
        </p>
        <div className="mt-0.5 flex items-center gap-1">
          <span className="font-satoshi text-[10px] text-[#818898] sm:text-[11px]">4.5 (240)</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#D4FB20"
            className="sm:h-3.5 sm:w-3.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </div>

      <AvatarGroup avatars={GROWTH_STUDENT_AVATARS} count="2K+" size="md" />
    </div>
  );
}
