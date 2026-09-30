import { TestimonialItem } from '@/types';
import Image from 'next/image';

interface TestimonialCardProps {
  item: TestimonialItem;
  index: number;
}

export function TestimonialCard({ item, index }: TestimonialCardProps) {
  return (
    <div
      className={`flex flex-col gap-6 rounded-3xl bg-white p-6 transition-all duration-300 ${
        index === 2 ? 'md:col-span-2 md:mx-auto md:max-w-105 lg:col-span-1 lg:max-w-none' : ''
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
        <h3 className="font-poppins text-[20px] leading-6 font-semibold text-neutral-950 lg:leading-7">
          {item.name}
        </h3>
        <span className="font-satoshi text-[16px] leading-6 font-normal text-primary-800 sm:text-[18px] lg:leading-[28.8px]">
          {item.role}
        </span>
      </div>

      {/* Quote */}
      <p className="font-satoshi text-[16px] leading-[1.6] font-normal text-neutral-600 sm:text-[18px] lg:leading-[28.8px]">
        {item.quote}
      </p>
    </div>
  );
}
