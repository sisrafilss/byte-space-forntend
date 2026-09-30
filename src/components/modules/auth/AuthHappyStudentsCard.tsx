import { AvatarGroup } from '@/components/shared/AvatarGroup';

const AUTH_STUDENT_AVATARS = [
  '/assets/images/Ellipse_49_320.png',
  '/assets/images/Ellipse_49_321.png',
  '/assets/images/Ellipse_49_322.png',
  '/assets/images/Ellipse_49_323.png',
  '/assets/images/Ellipse_49_324.png',
  '/assets/images/Ellipse_49_325.png',
  '/assets/images/Ellipse_49_326.png',
];

export function AuthHappyStudentsCard() {
  return (
    <div className="absolute top-[435px] left-[251px] z-40 flex h-[123px] w-[258px] flex-col justify-between rounded-[24px] bg-[#D4FB20] p-4 shadow-xl">
      <div>
        <h4 className="font-satoshi text-[16px] font-semibold text-neutral-950">Happy Students</h4>
        <div className="font-satoshi flex items-center gap-1 text-[11px] text-neutral-700">
          <span>4.5 (240)</span>
          <span className="text-[#003BE2]">★</span>
        </div>
      </div>

      <AvatarGroup avatars={AUTH_STUDENT_AVATARS} count="2K+" size="lg" />
    </div>
  );
}
