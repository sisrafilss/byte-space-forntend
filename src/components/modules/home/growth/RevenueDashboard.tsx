export function RevenueDashboard() {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-3">
      {/* Total Revenue Card */}
      <div className="w-[175px] rounded-[16px] bg-[#003BE2] px-3.5 py-3 shadow-xl sm:w-[200px] sm:px-4 sm:py-3.5 lg:w-[225px]">
        <p className="font-satoshi text-[12px] font-medium text-[#F5F5F5] sm:text-[14px]">
          Total Revenue
        </p>
        <p className="font-satoshi text-[9px] text-[#F5F5F5]/70 sm:mt-0.5 sm:text-[10px]">
          July 1-28
        </p>
        <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
          <span className="font-poppins text-[18px] leading-none font-semibold text-[#F5F5F5] sm:text-[22px]">
            $120.29
          </span>
          <span className="font-satoshi rounded-full bg-[#CBF801] px-1.5 py-0.5 text-[9px] font-bold text-[#242528] sm:px-2 sm:text-[10px]">
            +12$
          </span>
        </div>
        {/* Progress bar */}
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/25 sm:mt-3">
          <div className="h-full rounded-full bg-[#D4FB20]" style={{ width: '56%' }} />
        </div>
      </div>

      {/* Year to Date Card */}
      <div className="ml-5 w-[140px] rounded-[16px] bg-[#003BE2] px-3 py-2.5 shadow-xl sm:ml-7 sm:w-[155px] sm:px-4 sm:py-3 lg:w-[175px]">
        <p className="font-satoshi text-[12px] font-medium text-[#F5F5F5] sm:text-[14px]">
          Year to Date
        </p>
        <p className="font-satoshi text-[9px] text-[#F5F5F5]/70 sm:mt-0.5 sm:text-[10px]">2023</p>
        <p className="font-poppins mt-1 text-[18px] leading-none font-semibold text-[#F5F5F5] sm:mt-2 sm:text-[22px]">
          $1,200.38
        </p>
        <span className="font-satoshi mt-1.5 inline-block rounded-full bg-[#CBF801] px-1.5 py-0.5 text-[9px] font-bold text-[#242528] sm:mt-2 sm:px-2 sm:text-[10px]">
          +12$
        </span>
      </div>
    </div>
  );
}
