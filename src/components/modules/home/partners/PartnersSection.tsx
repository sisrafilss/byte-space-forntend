import { Container } from '@/components/ui/Container';
import { PARTNER_LOGOS } from '@/data';
import { PartnerLogoItem } from './PartnerLogoItem';

export function PartnersSection() {
  return (
    <section className="w-full border-b border-neutral-100 bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        {/* Responsive Logo Grid: 2 cols on mobile, centered wrap on tablet, 5 cols space-between on desktop */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:justify-center md:gap-x-12 md:gap-y-6 lg:justify-between lg:gap-12">
          {PARTNER_LOGOS.map((logo, index) => (
            <PartnerLogoItem key={index} logo={logo} />
          ))}
        </div>
      </Container>
    </section>
  );
}
