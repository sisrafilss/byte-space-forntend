import { PartnerLogo } from '@/types';
import Image from 'next/image';

export function PartnerLogoItem({ logo }: { logo: PartnerLogo }) {
  return (
    <div className="flex items-center justify-center opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="h-7 w-auto object-contain sm:h-8 lg:h-9"
      />
    </div>
  );
}
