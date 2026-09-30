import Image from 'next/image';

interface AvatarGroupProps {
  avatars: string[];
  count?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AvatarGroup({ avatars, count, size = 'md', className = '' }: AvatarGroupProps) {
  const sizeClasses = {
    sm: {
      wrapper: 'h-5 w-5',
      space: '-space-x-1 sm:-space-x-1.5',
      text: 'text-[8px] sm:text-[9px]',
      imgSize: '20px',
    },
    md: {
      wrapper: 'h-6 w-6 sm:h-7 sm:w-7',
      space: '-space-x-1.5',
      text: 'text-[10px] sm:text-[11px]',
      imgSize: '28px',
    },
    lg: {
      wrapper: 'h-8 w-8',
      space: '-space-x-2',
      text: 'text-[12px]',
      imgSize: '32px',
    },
  }[size];

  return (
    <div className={`flex items-center ${sizeClasses.space} ${className}`}>
      {avatars.map((src, idx) => (
        <div
          key={idx}
          className={`relative ${sizeClasses.wrapper} shrink-0 overflow-hidden rounded-full border-2 border-white shadow-2xs`}
        >
          <Image
            src={src}
            alt="Student avatar"
            fill
            className="object-cover"
            sizes={sizeClasses.imgSize}
          />
        </div>
      ))}
      {count && (
        <div
          className={`font-satoshi flex ${sizeClasses.wrapper} shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] ${sizeClasses.text} font-bold text-[#242528] shadow-2xs`}
        >
          {count}
        </div>
      )}
    </div>
  );
}
