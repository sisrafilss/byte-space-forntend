import { CTA_ORNAMENTS } from '@/data';
import Image from 'next/image';

export function CTAOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {CTA_ORNAMENTS.map((ornament) => (
        <div
          key={ornament.name}
          className={`absolute transition-opacity duration-300 ${ornament.className || ''}`}
          style={ornament.style}
        >
          <Image
            src={ornament.src}
            alt=""
            width={ornament.width}
            height={ornament.height}
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 385px"
            className="h-full w-full object-contain drop-shadow-md"
          />
        </div>
      ))}
    </div>
  );
}
