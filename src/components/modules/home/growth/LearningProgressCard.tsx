export function LearningProgressCard() {
  return (
    <div className="w-[145px] rounded-[16px] border border-neutral-100 bg-white p-3 shadow-xl sm:w-[185px] sm:p-4 sm:shadow-2xl lg:w-[210px]">
      <p className="font-satoshi text-[11px] font-medium text-[#242528] sm:text-[13px]">
        Learning Progress
      </p>
      <p className="font-poppins mt-0.5 text-[32px] leading-none font-semibold text-[#242528] sm:mt-1 sm:text-[44px] lg:text-[48px]">
        55%
      </p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#F5F5F6] sm:mt-3 sm:h-2">
        <div className="h-full rounded-full bg-[#D4FB20]" style={{ width: '55%' }} />
      </div>
    </div>
  );
}
