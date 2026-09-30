import { Container } from '@/components/ui';
import Image from 'next/image';

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
const STATS = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

const CHECKLIST = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

const STUDENT_AVATARS = [
  '/assets/images/Ellipse_34_1045.png',
  '/assets/images/Ellipse_34_1046.png',
  '/assets/images/Ellipse_34_1047.png',
  '/assets/images/Ellipse_34_1048.png',
  '/assets/images/Ellipse_34_1049.png',
  '/assets/images/Ellipse_34_1050.png',
  '/assets/images/Ellipse_34_1051.png',
];

/* ------------------------------------------------------------------ */
/* Sub-components                                                       */
/* ------------------------------------------------------------------ */

/**
 * Mini Course Card — behind the person image in Sub-A.
 * Figma: Course_Card_1 (34:1055), w=373 h=384, z-1 (bottom-most)
 * Styled with responsive padding, rounded corners, crisp 1.5px border, and soft shadow.
 */
function MiniCourseCard() {
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
          {/* Avatar stack */}
          <div className="flex items-center -space-x-1 sm:-space-x-1.5">
            {[
              '/assets/images/Ellipse_13_266.png',
              '/assets/images/Ellipse_13_267.png',
              '/assets/images/Ellipse_13_268.png',
              '/assets/images/Ellipse_13_269.png',
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full border border-white sm:h-6 sm:w-6"
              >
                <Image src={src} alt="Student" fill className="object-cover" sizes="24px" />
              </div>
            ))}
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white bg-black sm:h-6 sm:w-6">
              <span className="font-satoshi text-[8px] font-medium text-white sm:text-[9px]">
                26+
              </span>
            </div>
          </div>
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

/**
 * Learning Progress Card — in front of person image in Sub-A.
 * Figma: Auto Layout (34:1031), w=232 h=138, z-3 (above person)
 */
function LearningProgressCard() {
  return (
    <div className="w-[145px] rounded-[16px] border border-neutral-100 bg-white p-3 shadow-xl sm:w-[185px] sm:p-4 sm:shadow-2xl lg:w-[210px]">
      <p className="font-satoshi text-[11px] font-medium text-[#242528] sm:text-[13px]">
        Learning Progress
      </p>
      <p className="font-poppins mt-0.5 text-[32px] leading-none font-semibold text-[#242528] sm:mt-1 sm:text-[44px] lg:text-[48px]">
        55%
      </p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#F5F5F6] sm:mt-3 sm:h-2">
        <div className="h-full rounded-full bg-[#D4FB20]" style={{ width: '55%' }} />
      </div>
    </div>
  );
}

/**
 * Revenue Dashboard — behind person image in Sub-B.
 * Figma: TotalRevCard z-1, YearToDateCard z-2 (both behind person)
 */
function RevenueDashboard() {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-3">
      {/* Total Revenue Card */}
      <div className="w-[175px] rounded-[16px] bg-[#003BE2] px-3.5 py-3 shadow-xl sm:w-[200px] sm:px-4 sm:py-3.5 lg:w-[225px]">
        <p className="font-satoshi text-[12px] font-medium text-[#F5F5F5] sm:text-[14px]">
          Total Revenue
        </p>
        <p className="font-satoshi text-[9px] text-[#F5F5F5]/70 sm:mt-0.5 sm:text-[10px]">
          July 1-28
        </p>
        <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
          <span className="font-poppins text-[18px] leading-none font-semibold text-[#F5F5F5] sm:text-[22px]">
            $120.29
          </span>
          <span className="font-satoshi rounded-full bg-[#CBF801] px-1.5 py-0.5 text-[9px] font-bold text-[#242528] sm:px-2 sm:text-[10px]">
            +12$
          </span>
        </div>
        {/* Progress bar */}
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/25 sm:mt-3">
          <div className="h-full rounded-full bg-[#D4FB20]" style={{ width: '56%' }} />
        </div>
      </div>

      {/* Year to Date Card */}
      <div className="ml-5 w-[140px] rounded-[16px] bg-[#003BE2] px-3 py-2.5 shadow-xl sm:ml-7 sm:w-[155px] sm:px-4 sm:py-3 lg:w-[175px]">
        <p className="font-satoshi text-[12px] font-medium text-[#F5F5F5] sm:text-[14px]">
          Year to Date
        </p>
        <p className="font-satoshi text-[9px] text-[#F5F5F5]/70 sm:mt-0.5 sm:text-[10px]">2023</p>
        <p className="font-poppins mt-1 text-[18px] leading-none font-semibold text-[#F5F5F5] sm:mt-2 sm:text-[22px]">
          $1,200.38
        </p>
        <span className="font-satoshi mt-1.5 inline-block rounded-full bg-[#CBF801] px-1.5 py-0.5 text-[9px] font-bold text-[#242528] sm:mt-2 sm:px-2 sm:text-[10px]">
          +12$
        </span>
      </div>
    </div>
  );
}

/**
 * Happy Students Card — in front of person in Sub-B.
 * Figma: Auto Layout (34:1038), w=258 h=123, z-4 (above person)
 */
function HappyStudentsCard() {
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

      <div className="flex items-center -space-x-1.5 sm:-space-x-2">
        {STUDENT_AVATARS.map((src, i) => (
          <div
            key={i}
            className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-white sm:h-9 sm:w-9"
          >
            <Image src={src} alt="Student" fill className="object-cover" sizes="36px" />
          </div>
        ))}
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] sm:h-9 sm:w-9">
          <span className="font-satoshi text-[10px] font-bold text-[#242528] sm:text-[11px]">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Lime Squiggle Ornament — 100% transparent background 3D lime shape  */
/* ------------------------------------------------------------------ */
function LimeSquiggle({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative ${className}`}>
      <Image
        src="/assets/images/lime_squiggle_3d.png"
        alt=""
        fill
        className="object-contain"
        sizes="140px"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main GrowthSection                                                   */
/* ------------------------------------------------------------------ */
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
        />

        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* ---- Left: Text ---- */}
            <div className="w-full max-w-[574px] lg:max-w-none lg:flex-1">
              <h2 className="font-poppins text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#242528] sm:text-[38px] lg:text-[44px]">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="font-satoshi mt-4 max-w-[477px] text-[15px] leading-relaxed text-[#4B4C53] sm:mt-5 sm:text-[18px]">
                Explore our curated selection of courses tailored to enhance your capabilities and
                accelerate your career journey. Whether you are looking to sharpen specific skills,
                gain industry expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>

              {/* Stats Counter */}
              <div className="mt-6 flex flex-wrap items-start justify-between gap-4 sm:mt-8 sm:justify-start sm:gap-12">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5 sm:gap-1">
                    <span className="font-poppins text-[28px] leading-none font-medium text-[#003BE2] sm:text-[36px]">
                      {stat.value}
                    </span>
                    <span className="font-satoshi text-[15px] text-[#4B4C53] sm:text-[18px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ---- Right: Composite UI ---- */}
            <div className="relative mt-4 h-[380px] w-full max-w-[580px] sm:mt-0 sm:h-[460px] lg:h-[530px] lg:flex-1">
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
                  priority
                />
              </div>

              {/* z-3: Learning Progress card — right side, IN FRONT of person */}
              <div className="absolute z-30" style={{ right: 0, top: '25%' }}>
                <LearningProgressCard />
              </div>

              {/* z-4: Lime squiggle — top-right */}
              <div className="absolute z-30" style={{ right: '-5px', top: '2%' }}>
                <div className="h-[75px] w-[75px] sm:h-[95px] sm:w-[95px] lg:h-[105px] lg:w-[105px]">
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
        />

        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* ---- Left: Composite UI ---- */}
            <div className="relative order-2 mt-4 h-[390px] w-full max-w-[540px] sm:mt-0 sm:h-[480px] lg:order-1 lg:h-[540px] lg:flex-1">
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
                  priority
                />
              </div>

              {/* z-5: Lime squiggle — center-right, IN FRONT of person */}
              <div className="absolute z-30" style={{ left: '52%', top: '12%' }}>
                <div className="h-[75px] w-[75px] sm:h-[85px] sm:w-[85px] lg:h-[95px] lg:w-[95px]">
                  <LimeSquiggle className="h-full w-full" />
                </div>
              </div>

              {/* z-4: Happy Students card — bottom-right, IN FRONT of person */}
              <div className="absolute right-0 bottom-1 z-30 sm:right-auto sm:bottom-[3%] sm:left-[45%]">
                <HappyStudentsCard />
              </div>
            </div>

            {/* ---- Right: Text ---- */}
            <div className="order-1 w-full max-w-[580px] lg:order-2 lg:max-w-none lg:flex-1">
              <h2 className="font-poppins text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#242528] sm:text-[38px] lg:text-[44px]">
                Create & Manage Courses Easily.
              </h2>
              <p className="font-satoshi mt-4 text-[15px] leading-relaxed text-[#4B4C53] sm:mt-5 sm:text-[18px]">
                <strong className="font-bold text-[#242528]">ByteSpace</strong> supports individuals
                or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* Checklist */}
              <ul className="mt-6 flex flex-col gap-3.5 sm:mt-8 sm:gap-4">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#003BE2"
                      className="shrink-0 sm:h-[22px] sm:w-[22px]"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.2L5.8 12L7.2 10.6L10 13.4L16.8 6.6L18.2 8L10 16.2Z"
                      />
                    </svg>
                    <span className="font-satoshi text-[15px] font-medium text-[#242528] sm:text-[18px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
