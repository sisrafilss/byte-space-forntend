import { Container, SectionHeading } from '@/components/ui';
import { CATEGORIES_DATA } from '@/data';
import { CategoryCard } from './CategoryCard';

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
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
