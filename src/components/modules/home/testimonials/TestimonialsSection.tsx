import { TESTIMONIALS_DATA } from '@/data';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialGlowBackground } from './TestimonialGlowBackground';

export function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 lg:pt-[74px] lg:pb-[57px]">
      {/* Background Radial Glow Blobs */}
      <TestimonialGlowBackground />

      {/* Main Content (Figma Frame 34:1176: w=1204px) */}
      <div className="relative z-10 mx-auto w-full max-w-[1204px] px-4 sm:px-6 xl:px-0">
        {/* Header Block: Title on Left, Description on Right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h2 className="font-poppins max-w-[577px] text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-[36px] lg:text-[44px] lg:leading-[52.8px]">
            Discover What Our <br className="hidden sm:inline" />
            Community Is Saying
          </h2>

          <p className="font-satoshi max-w-[580px] text-[16px] leading-[1.6] font-normal text-[#4F4F4F] sm:text-[18px] lg:leading-[28.8px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-10 grid grid-cols-1 items-start gap-6 sm:mt-12 md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-[41px]">
          {TESTIMONIALS_DATA.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
