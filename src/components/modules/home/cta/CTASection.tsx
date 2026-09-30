import { Button, Container } from '@/components/ui';
import { CTAOrnaments } from './CTAOrnaments';

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-800 py-20 text-white sm:py-24 lg:py-26">
      {/* 1. Background Grid: 120px x 120px white lines at 12% opacity */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
        aria-hidden="true"
      />

      {/* 2. 3D Decorative Ornaments */}
      <CTAOrnaments />

      {/* 3. Main Content */}
      <Container className="relative z-20">
        <div className="mx-auto flex max-w-241 flex-col items-center text-center">
          {/* Heading */}
          <h2 className="font-poppins max-w-177.5 text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-50 sm:text-[38px] lg:text-[44px]">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>

          {/* Description */}
          <p className="font-satoshi mt-5 max-w-241 text-[15px] leading-relaxed text-neutral-50 sm:mt-6 sm:text-[17px] lg:text-[18px]">
            Experience the collaboration of numerous creators and an expanding selection of courses.
            Register now and become a part of a community comprising over 10,000 local and
            international creators. Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>

          {/* Action Button */}
          <div className="mt-8 sm:mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="font-satoshi cursor-pointer rounded-full bg-secondary-400 px-8 py-3.5 text-[16px] font-semibold text-neutral-950 shadow-md transition-all duration-300 hover:scale-105 hover:bg-secondary-500 active:scale-95 sm:px-10 sm:text-[18px]"
            >
              Join as Creator
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
