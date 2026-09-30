import { Container } from '@/components/ui';
import Image from 'next/image';
import { CreatorChecklist } from './CreatorChecklist';
import { GrowthStatsCounter } from './GrowthStatsCounter';
import { HappyStudentsCard } from './HappyStudentsCard';
import { LearningProgressCard } from './LearningProgressCard';
import { LimeSquiggle } from './LimeSquiggle';
import { MiniCourseCard } from './MiniCourseCard';
import { RevenueDashboard } from './RevenueDashboard';

export function GrowthSection() {
  return (
    <section className="w-full overflow-hidden">
      {/* ============================================================ */}
      {/* SUB-SECTION A: Your Path to Professional Growth               */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden bg-[#F9F9F9] pt-12 pb-12 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-28">
        {/* Lime glow — LEFT side */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 900,
            height: 900,
            left: -120,
            top: -300,
            background:
              'radial-gradient(circle, rgba(203,248,1,0.40) 0%, rgba(203,248,1,0.12) 40%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* Blue glow — RIGHT side */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 900,
            height: 900,
            right: -200,
            top: -340,
            background:
              'radial-gradient(circle, rgba(0,59,226,0.08) 0%, rgba(0,59,226,0.03) 50%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* ---- Left: Text ---- */}
            <div className="w-full max-w-143.5 lg:max-w-none lg:flex-1">
              <h2 className="font-poppins text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-[38px] lg:text-[44px]">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="font-satoshi mt-4 max-w-119.25 text-[15px] leading-relaxed text-neutral-700 sm:mt-5 sm:text-[18px]">
                Explore our curated selection of courses tailored to enhance your capabilities and
                accelerate your career journey. Whether you are looking to sharpen specific skills,
                gain industry expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>

              {/* Stats Counter */}
              <GrowthStatsCounter />
            </div>

            {/* ---- Right: Composite UI ---- */}
            <div className="relative mt-4 h-95 w-full max-w-145 sm:mt-0 sm:h-115 lg:h-132.5 lg:flex-1">
              {/* z-1: Course Card — top-left, behind person */}
              <div className="absolute top-0 left-0 z-10">
                <MiniCourseCard />
              </div>

              {/* z-2: Person image — covers full frame, IN FRONT of course card */}
              <div className="absolute inset-0 z-20">
                <Image
                  src="/assets/images/Image_34_971.png"
                  alt="Professional growth student"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                  sizes="(max-width: 640px) 380px, (max-width: 1024px) 460px, 530px"
                />
              </div>

              {/* z-3: Learning Progress card — right side, IN FRONT of person */}
              <div className="absolute z-30" style={{ right: 0, top: '25%' }}>
                <LearningProgressCard />
              </div>

              {/* z-4: Lime squiggle — top-right */}
              <div className="absolute z-30" style={{ right: '-5px', top: '2%' }}>
                <div className="h-18.75 w-18.75 sm:h-23.75 sm:w-23.75 lg:h-26.25 lg:w-26.25">
                  <LimeSquiggle className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ============================================================ */}
      {/* SUB-SECTION B: Create & Manage Courses Easily                 */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden bg-[#F9F9F9] pt-12 pb-12 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-28">
        {/* Blue glow — LEFT side */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 900,
            height: 900,
            left: -400,
            top: -200,
            background:
              'radial-gradient(circle, rgba(0,59,226,0.16) 0%, rgba(0,59,226,0.06) 45%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* Blue glow — RIGHT side */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 900,
            height: 900,
            right: -300,
            top: '10%',
            background:
              'radial-gradient(circle, rgba(0,59,226,0.24) 0%, rgba(0,59,226,0.08) 45%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* Lime glow — BOTTOM-LEFT */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            left: -180,
            bottom: -200,
            background:
              'radial-gradient(circle, rgba(203,248,1,0.60) 0%, rgba(203,248,1,0.20) 45%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* ---- Left: Composite UI ---- */}
            <div className="relative order-2 mt-4 h-97.5 w-full max-w-135 sm:mt-0 sm:h-120 lg:order-1 lg:h-135 lg:flex-1">
              {/* z-1: Total Revenue Card — top-left, behind person */}
              <div className="absolute z-10" style={{ left: 0, top: '5%' }}>
                <RevenueDashboard />
              </div>

              {/* z-3: Person image — full height, slightly offset right (5%), IN FRONT of revenue cards */}
              <div className="absolute inset-0 z-20" style={{ left: '4%' }}>
                <Image
                  src="/assets/images/Image_34_1011.png"
                  alt="Course creator"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                  sizes="(max-width: 640px) 380px, (max-width: 1024px) 480px, 540px"
                />
              </div>

              {/* z-5: Lime squiggle — center-right, IN FRONT of person */}
              <div className="absolute z-30" style={{ left: '52%', top: '12%' }}>
                <div className="h-18.75 w-18.75 sm:h-21.25 sm:w-21.25 lg:h-23.75 lg:w-23.75">
                  <LimeSquiggle className="h-full w-full" />
                </div>
              </div>

              {/* z-4: Happy Students card — bottom-right, IN FRONT of person */}
              <div className="absolute right-0 bottom-1 z-30 sm:right-auto sm:bottom-[3%] sm:left-[45%]">
                <HappyStudentsCard />
              </div>
            </div>

            {/* ---- Right: Text ---- */}
            <div className="order-1 w-full max-w-145 lg:order-2 lg:max-w-none lg:flex-1">
              <h2 className="font-poppins text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-[38px] lg:text-[44px]">
                Create & Manage Courses Easily.
              </h2>
              <p className="font-satoshi mt-4 text-[15px] leading-relaxed text-neutral-700 sm:mt-5 sm:text-[18px]">
                <strong className="font-bold text-neutral-950">ByteSpace</strong> supports individuals
                or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* Checklist */}
              <CreatorChecklist />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
