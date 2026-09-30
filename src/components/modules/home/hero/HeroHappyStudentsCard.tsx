import { AvatarGroup } from '@/components/shared/AvatarGroup';
import { Star } from 'lucide-react';

const HERO_STUDENT_AVATARS = [
  '/assets/images/Ellipse_1_1828.png',
  '/assets/images/Ellipse_1_1829.png',
  '/assets/images/Ellipse_1_1830.png',
  '/assets/images/Ellipse_1_1831.png',
  '/assets/images/Ellipse_1_1832.png',
  '/assets/images/Ellipse_1_1833.png',
  '/assets/images/Ellipse_1_1834.png',
];

export function HeroHappyStudentsCard() {
  return (
    <div className="absolute bottom-6 left-2 z-20 origin-bottom-left scale-85 rounded-2xl bg-white px-4 py-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:bottom-8 sm:left-4 sm:scale-95 sm:px-5 sm:py-3.5 md:left-6 lg:bottom-12 lg:left-2 lg:scale-100">
      <div className="flex items-center gap-1.5">
        <span className="font-sans text-xs font-semibold text-neutral-950 sm:text-sm">
          Happy Students
        </span>
        <span className="font-sans text-[11px] text-neutral-400 sm:text-xs">4.5 (240)</span>
        <Star size={12} className="fill-amber-400 text-amber-400" />
      </div>

      <div className="mt-2">
        <AvatarGroup avatars={HERO_STUDENT_AVATARS} count="12K+" size="md" />
      </div>
    </div>
  );
}
