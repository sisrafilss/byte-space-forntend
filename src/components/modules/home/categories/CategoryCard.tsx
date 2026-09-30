import { CategoryItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export function CategoryCard({ category }: { category: CategoryItem }) {
  return (
    <Link
      href={category.href || '#'}
      className="group flex h-[155px] w-[calc(50%-8px)] flex-col items-center justify-center rounded-[24px] border border-[#CECFD3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg sm:h-[167px] sm:w-[calc(33.333%-16px)] lg:w-[167px]"
    >
      {/* Lime Icon Circle */}
      <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105 sm:h-[60px] sm:w-[60px]">
        <Image
          src={category.icon}
          alt={`${category.name} icon`}
          fill
          className="object-contain"
          sizes="60px"
        />
      </div>

      {/* Category Name */}
      <span className="font-satoshi group-hover:text-primary-600 mt-3 px-2 text-center text-[17px] font-medium text-[#242528] transition-colors sm:text-[20px]">
        {category.name}
      </span>
    </Link>
  );
}
