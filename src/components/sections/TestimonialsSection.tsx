import Image from 'next/image';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sarah-m',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/assets/images/Ellipse_34_1184.png',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 'james-l',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/assets/images/Ellipse_34_1190.png',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 'alex-b',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/assets/images/Ellipse_34_1196.png',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 lg:pt-[74px] lg:pb-[57px]">
      {/* Background Radial Glow Blobs (Matching Figma Ellipse 11, 12, 8) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 784"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="testi-blur40"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur stdDeviation="40" />
          </filter>

          {/* Ellipse 11: Top-right Lime Glow */}
          <radialGradient id="testi-lime-glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CBFC01" stopOpacity="0.40" />
            <stop offset="53%" stopColor="#CBFC01" stopOpacity="0.092" />
            <stop offset="75%" stopColor="#CBFC01" stopOpacity="0.024" />
            <stop offset="100%" stopColor="#CBFC01" stopOpacity="0" />
          </radialGradient>

          {/* Ellipse 12: Top-center Lime Glow */}
          <radialGradient id="testi-lime-glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CBFC01" stopOpacity="0.60" />
            <stop offset="53%" stopColor="#CBFC01" stopOpacity="0.138" />
            <stop offset="75%" stopColor="#CBFC01" stopOpacity="0.036" />
            <stop offset="100%" stopColor="#CBFC01" stopOpacity="0" />
          </radialGradient>

          {/* Ellipse 8: Bottom-left Blue Glow */}
          <radialGradient id="testi-blue-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#003BE2" stopOpacity="0.24" />
            <stop offset="53%" stopColor="#003BE2" stopOpacity="0.055" />
            <stop offset="75%" stopColor="#003BE2" stopOpacity="0.014" />
            <stop offset="100%" stopColor="#003BE2" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ellipse 11 (cx=1410.5, cy=327.5, r=568.5) */}
        <circle
          cx="1410.5"
          cy="327.5"
          r="568.5"
          fill="url(#testi-lime-glow1)"
          filter="url(#testi-blur40)"
        />

        {/* Ellipse 12 (cx=731, cy=198, r=336) */}
        <circle
          cx="731"
          cy="198"
          r="336"
          fill="url(#testi-lime-glow2)"
          filter="url(#testi-blur40)"
        />

        {/* Ellipse 8 (cx="126.5", cy="717.5", r=568.5) */}
        <circle
          cx="126.5"
          cy="717.5"
          r="568.5"
          fill="url(#testi-blue-glow)"
          filter="url(#testi-blur40)"
        />
      </svg>

      {/* Main Content (Figma Frame 34:1176: w=1204px) */}
      <div className="relative z-10 mx-auto w-full max-w-[1204px] px-4 sm:px-6 xl:px-0">
        {/* Header Block: Title on Left, Description on Right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          {/* Section Title (Poppins 44px semi-bold, #000000) */}
          <h2 className="font-poppins max-w-[577px] text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-[36px] lg:text-[44px] lg:leading-[52.8px]">
            Discover What Our <br className="hidden sm:inline" />
            Community Is Saying
          </h2>

          {/* Section Description (Satoshi 18px regular, #4F4F4F) */}
          <p className="font-satoshi max-w-[580px] text-[16px] leading-[1.6] font-normal text-[#4F4F4F] sm:text-[18px] lg:leading-[28.8px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Cards Grid (Figma Frame 34:1182: 3 cards, w=374px, gap=41px) */}
        <div className="mt-10 grid grid-cols-1 items-start gap-6 sm:mt-12 md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-[41px]">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col gap-6 rounded-[24px] bg-white p-6 transition-all duration-300 ${
                index === 2
                  ? 'md:col-span-2 md:mx-auto md:max-w-[420px] lg:col-span-1 lg:max-w-none'
                  : ''
              }`}
            >
              {/* Avatar Photo (80x80 circular) */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="flex flex-col">
                <h3 className="font-poppins text-[20px] leading-[24px] font-semibold text-black lg:leading-[28px]">
                  {item.name}
                </h3>
                <span className="font-satoshi text-[16px] leading-[24px] font-normal text-[#003BE2] sm:text-[18px] lg:leading-[28.8px]">
                  {item.role}
                </span>
              </div>

              {/* Quote */}
              <p className="font-satoshi text-[16px] leading-[1.6] font-normal text-[#4F4F4F] sm:text-[18px] lg:leading-[28.8px]">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
