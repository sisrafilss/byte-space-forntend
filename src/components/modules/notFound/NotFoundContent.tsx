import Link from 'next/link';

export function NotFoundContent() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      {/* Figma Gigantic "404" Background Text with Top-to-Bottom Lime-to-Transparent Gradient */}
      <div className="pointer-events-none select-none text-center" aria-hidden="true">
        <span
          className="font-poppins block text-[150px] font-semibold leading-none tracking-[-0.01em] sm:text-[240px] md:text-[340px] lg:text-[440px] xl:text-[480px]"
          style={{
            background:
              'linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </span>
      </div>

      {/* Foreground Content Card - positioned directly below 404 with subtle bottom overlap for perfect readability */}
      <div className="relative z-10 -mt-3 flex flex-col items-center px-4 text-center sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20">
        {/* Main Heading */}
        <h1 className="font-poppins max-w-234 text-3xl font-semibold tracking-[-0.01em] text-white sm:text-5xl lg:text-[72px] lg:leading-21.5">
          The page you are looking for doesn’t exist
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-xl font-sans text-sm font-normal leading-relaxed text-neutral-100 sm:mt-6 sm:text-base lg:text-lg">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* CTA Button: Back to Home */}
        <div className="mt-7 sm:mt-8">
          <Link
            href="/"
            className="inline-flex h-11.5 items-center justify-center rounded-full bg-secondary-400 px-6 font-sans text-base font-medium text-neutral-950 transition-all duration-200 hover:bg-secondary-300 hover:shadow-lg hover:shadow-secondary-400/20 active:scale-95 sm:text-lg select-none"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
