export function HeroProgressCard() {
  return (
    <div className="absolute top-18 right-1 z-20 origin-top-right scale-85 rounded-2xl bg-white px-4 py-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:top-24 sm:right-2 sm:scale-95 sm:px-5 sm:py-3.5 md:right-4 lg:top-36 lg:right-0 lg:scale-100">
      <p className="font-sans text-[11px] text-[#82868E] sm:text-xs">Learning Progress</p>
      <p className="mt-0.5 font-sans text-xl font-bold text-[#242528] sm:text-2xl">55%</p>
      <div className="mt-2 h-1.5 w-24 overflow-hidden rounded-full bg-[#E5E7EB] sm:w-28">
        <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
      </div>
    </div>
  );
}
