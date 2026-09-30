'use client';

import { FloatWrapper } from '@/components/ui/motion';

export function HeroUiUxCard() {
  return (
    <div className="absolute top-24 left-1 z-20 origin-top-left scale-85 sm:top-16 sm:left-2 sm:scale-95 md:left-4 lg:top-24 lg:left-0 lg:scale-100">
      <FloatWrapper yOffset={4} duration={3.5} delay={0}>
        <div className="rounded-2xl bg-white px-4 py-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:px-5 sm:py-3.5">
          <p className="font-sans text-xs font-semibold text-neutral-950 sm:text-sm">UI/UX Design</p>
          <p className="mt-0.5 font-sans text-[11px] text-neutral-400 sm:text-xs">
            200 Courses <span className="mx-1">•</span> 1000+ Students
          </p>
        </div>
      </FloatWrapper>
    </div>
  );
}
