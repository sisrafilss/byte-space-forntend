import { TestimonialItem } from '@/types';
import Image from 'next/image';

interface TestimonialCardProps {
  item: TestimonialItem;
  index: number;
}

export function TestimonialCard({ item, index }: TestimonialCardProps) {
  return (
    <div
      className={`flex flex-col gap-6 rounded-[24px] bg-white p-6 transition-all duration-300 ${
        index === 2 ? 'md:col-span-2 md:mx-auto md:max-w-[420px] lg:col-span-1 lg:max-w-none' : ''
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
  );
}
