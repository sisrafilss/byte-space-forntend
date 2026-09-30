'use client';

import { AvatarGroup } from '@/components/shared/AvatarGroup';
import { FloatWrapper } from '@/components/ui/motion';

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
    <div className="absolute top-108.75 left-62.75 z-40">
      <FloatWrapper yOffset={3.5} duration={4}>
        <div className="flex h-30.75 w-64.5 flex-col justify-between rounded-3xl bg-secondary-400 p-4 shadow-xl">
          <div>
            <h4 className="font-satoshi text-[16px] font-semibold text-neutral-950">Happy Students</h4>
            <div className="font-satoshi flex items-center gap-1 text-[11px] text-neutral-700">
              <span>4.5 (240)</span>
              <span className="text-primary-800">★</span>
            </div>
          </div>

          <AvatarGroup avatars={AUTH_STUDENT_AVATARS} count="2K+" size="lg" />
        </div>
      </FloatWrapper>
    </div>
  );
}
