import { Container } from '@/components/ui';
import Image from 'next/image';

/* ------------------------------------------------------------------ */
/* 3D Decorative Ornaments Data (exact Figma coords & sizes)            */
/* Section reference: w=1440, h=488                                    */
/* ------------------------------------------------------------------ */
interface Ornament {
  name: string;
  src: string;
  width: number;
  height: number;
  style: React.CSSProperties;
  className?: string;
}

const ORNAMENTS: Ornament[] = [
  // 1. Lime Squiggle (Top-Left): rel_x=-118px (-8.2%), rel_y=-162px (-33.2%), 385x385
  {
    name: 'Lime Squiggle Top-Left',
    src: '/assets/images/cta_squiggle_top_left.png',
    width: 385,
    height: 385,
    style: {
      left: '-8.2%',
      top: '-33.2%',
      width: 'clamp(180px, 26.7vw, 385px)',
      height: 'clamp(180px, 26.7vw, 385px)',
    },
    className: 'opacity-70 sm:opacity-90 lg:opacity-100',
  },
  // 2. White Coil (Upper-Left): rel_x=178px (12.4%), rel_y=5px (1.0%), 175x175
  {
    name: 'White Coil Upper-Left',
    src: '/assets/images/cta_coil_white.png',
    width: 175,
    height: 175,
    style: {
      left: '12.4%',
      top: '1.0%',
      width: 'clamp(90px, 12.1vw, 175px)',
      height: 'clamp(90px, 12.1vw, 175px)',
    },
    className: 'hidden sm:block opacity-80 lg:opacity-100',
  },
  // 3. White Cone (Lower-Left): rel_x=-48px (-3.3%), rel_y=225px (46.1%), 188x188
  {
    name: 'White Cone Lower-Left',
    src: '/assets/images/cta_cone_white.png',
    width: 188,
    height: 188,
    style: {
      left: '-3.3%',
      top: '46.1%',
      width: 'clamp(95px, 13.0vw, 188px)',
      height: 'clamp(95px, 13.0vw, 188px)',
    },
    className: 'hidden md:block opacity-80 lg:opacity-100',
  },
  // 4. Lime Torus (Bottom-Left): rel_x=20px (1.4%), rel_y=299px (61.3%), 342x342
  {
    name: 'Lime Torus Bottom-Left',
    src: '/assets/images/cta_torus_lime.png',
    width: 342,
    height: 342,
    style: {
      left: '1.4%',
      top: '61.3%',
      width: 'clamp(160px, 23.7vw, 342px)',
      height: 'clamp(160px, 23.7vw, 342px)',
    },
    className: 'opacity-60 sm:opacity-90 lg:opacity-100',
  },
  // 5. Lime Pyramid (Top-Right): rel_x=1080px (75.0%), rel_y=0px (0.0%), 188x188
  {
    name: 'Lime Pyramid Top-Right',
    src: '/assets/images/cta_pyramid_lime.png',
    width: 188,
    height: 188,
    style: {
      left: '75.0%',
      top: '0.0%',
      width: 'clamp(100px, 13.0vw, 188px)',
      height: 'clamp(100px, 13.0vw, 188px)',
    },
    className: 'hidden sm:block opacity-80 lg:opacity-100',
  },
  // 6. White Cylinder (Upper-Right): rel_x=1226px (85.1%), rel_y=6px (1.2%), 370x370
  {
    name: 'White Cylinder Upper-Right',
    src: '/assets/images/cta_cylinder_white.png',
    width: 370,
    height: 370,
    style: {
      left: '85.1%',
      top: '1.2%',
      width: 'clamp(170px, 25.7vw, 370px)',
      height: 'clamp(170px, 25.7vw, 370px)',
    },
    className: 'hidden sm:block opacity-60 sm:opacity-90 lg:opacity-100',
  },
  // 7. Lime Squiggle (Bottom-Right): rel_x=1110px (77.1%), rel_y=289px (59.2%), 330x330
  {
    name: 'Lime Squiggle Bottom-Right',
    src: '/assets/images/cta_squiggle_bottom_right.png',
    width: 330,
    height: 330,
    style: {
      left: '77.1%',
      top: '59.2%',
      width: 'clamp(150px, 22.9vw, 330px)',
      height: 'clamp(150px, 22.9vw, 330px)',
    },
    className: 'opacity-70 sm:opacity-90 lg:opacity-100',
  },
];

/* ------------------------------------------------------------------ */
/* CTASection Component                                                 */
/* ------------------------------------------------------------------ */
export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003BE2] py-16 sm:py-20 lg:py-[84px]">
      {/* 1. Background Grid: 120px x 120px white lines at 12% opacity (matching Figma Group 4) */}
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

      {/* 2. 3D Decorative Ornaments (Group 6 in Figma) */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
        {ORNAMENTS.map((ornament) => (
          <div
            key={ornament.name}
            className={`absolute transition-opacity duration-300 ${ornament.className || ''}`}
            style={ornament.style}
          >
            <Image
              src={ornament.src}
              alt=""
              width={ornament.width}
              height={ornament.height}
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 385px"
              className="h-full w-full object-contain drop-shadow-md"
            />
          </div>
        ))}
      </div>

      {/* 3. Main Content (Content Frame 34:1170 in Figma) */}
      <Container className="relative z-20">
        <div className="mx-auto flex max-w-[964px] flex-col items-center text-center">
          {/* Heading: Poppins 44px semi-bold, #F5F5F6 */}
          <h2 className="font-poppins max-w-[710px] text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#F5F5F6] sm:text-[38px] lg:text-[44px]">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>

          {/* Description: Satoshi 18px regular, #F5F5F6, max-w 964px */}
          <p className="font-satoshi mt-4 text-[15px] leading-relaxed text-[#F5F5F6]/90 sm:mt-5 sm:text-[17px] sm:leading-[1.6] lg:text-[18px]">
            Experience the collaboration of numerous creators and an expanding selection of courses.
            Register now and become a part of a community comprising over 10,000 local and
            international creators. Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>

          {/* CTA Button: #D4FB20 lime green, #242528 dark text, Satoshi 18px medium */}
          <div className="mt-8 sm:mt-9">
            <button
              type="button"
              className="inline-flex h-[46px] items-center justify-center rounded-full bg-[#D4FB20] px-6 text-[16px] font-medium text-[#242528] shadow-sm transition-all duration-200 hover:bg-[#cbf801] hover:shadow-md active:scale-95 sm:text-[18px]"
            >
              Join as Creator
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
