import { Container, FadeIn, SectionHeading, StaggerContainer, StaggerItem } from '@/components/ui';
import { CATEGORIES_DATA } from '@/data';
import { CategoryCard } from './CategoryCard';

export function CategoriesSection() {
  return (
    <section className="w-full bg-white pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
      <Container>
        {/* Section Heading with FadeIn */}
        <FadeIn direction="up" distance={24}>
          <SectionHeading
            title="Explore Diverse Learning Paths at Bytespace"
            description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
            className="max-w-230"
            titleClassName="text-neutral-950 tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[36px]"
            descriptionClassName="max-w-215 text-neutral-600"
          />
        </FadeIn>

        {/* Categories Cards Grid with Staggered Entrance */}
        <StaggerContainer
          staggerDelay={0.06}
          delayChildren={0.05}
          className="mx-auto mt-12 flex max-w-300.5 flex-wrap items-center justify-center gap-4 sm:mt-14 sm:gap-6 lg:mt-16 lg:gap-8"
        >
          {CATEGORIES_DATA.map((category) => (
            <StaggerItem
              key={category.id}
              distance={20}
              className="flex w-[calc(50%-8px)] items-center justify-center sm:w-[calc(33.333%-16px)] lg:w-41.75"
            >
              <CategoryCard category={category} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
