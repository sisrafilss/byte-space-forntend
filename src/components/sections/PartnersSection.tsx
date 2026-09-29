import { Container } from '@/components/ui/Container';
import Image from 'next/image';

export function PartnersSection() {
  const partnerLogos = [
    { name: 'Partner 1', src: '/assets/svg/partner_logo_1.svg', width: 167, height: 41 },
    { name: 'Partner 2', src: '/assets/svg/partner_logo_2.svg', width: 168, height: 41 },
    { name: 'Partner 3', src: '/assets/svg/partner_logo_3.svg', width: 170, height: 41 },
    { name: 'Partner 4', src: '/assets/svg/partner_logo_4.svg', width: 170, height: 41 },
    { name: 'Partner 5', src: '/assets/svg/partner_logo_5.svg', width: 169, height: 42 },
  ];

  return (
    <section className="w-full border-b border-neutral-100 bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        {/* Responsive Logo Grid: 2 cols on mobile, 3 cols on tablet, 5 cols on desktop */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:justify-between lg:gap-12">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-7 w-auto object-contain sm:h-8 lg:h-9"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
