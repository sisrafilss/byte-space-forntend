import Image from 'next/image';

export function LimeSquiggle({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative ${className}`}>
      <Image
        src="/assets/images/lime_squiggle_3d.png"
        alt=""
        fill
        className="object-contain"
        sizes="140px"
      />
    </div>
  );
}
