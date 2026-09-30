import { GROWTH_STATS } from '@/data';

export function GrowthStatsCounter() {
  return (
    <div className="mt-8 flex items-center justify-between sm:mt-10 sm:justify-start sm:gap-14 lg:gap-16">
      {GROWTH_STATS.map((stat) => (
        <div key={stat.label} className="text-left">
          <p className="font-poppins text-[32px] leading-tight font-semibold text-[#003BE2] sm:text-[40px] lg:text-[44px]">
            {stat.value}
          </p>
          <p className="font-satoshi mt-1 text-[13px] font-medium text-[#4F4F4F] sm:text-[15px] lg:text-[16px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
