'use client';

import { Container, SectionHeading } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  href?: string;
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'design',
    name: 'Design',
    icon: '/assets/images/category_icon_design.png',
    href: '/#courses',
  },
  {
    id: 'development',
    name: 'Development',
    icon: '/assets/images/category_icon_development.png',
    href: '/#courses',
  },
  {
    id: 'it-software',
    name: 'IT & Software',
    icon: '/assets/images/category_icon_it_software.png',
    href: '/#courses',
  },
  {
    id: 'business',
    name: 'Business',
    icon: '/assets/images/category_icon_business.png',
    href: '/#courses',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: '/assets/images/category_icon_marketing.png',
    href: '/#courses',
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: '/assets/images/category_icon_photography.png',
    href: '/#courses',
  },
];

export function CategoriesSection() {
  return (
    <section className="w-full bg-white pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          className="max-w-[920px]"
          titleClassName="text-[#0C0C0D] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[36px]"
          descriptionClassName="max-w-[860px] text-[#4F4F4F]"
        />

        {/* Categories Cards Grid */}
        <div className="mx-auto mt-12 flex max-w-[1202px] flex-wrap items-center justify-center gap-4 sm:mt-14 sm:gap-6 lg:mt-16 lg:gap-8">
          {CATEGORIES_DATA.map((category) => (
            <Link
              key={category.id}
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
          ))}
        </div>
      </Container>
    </section>
  );
}
