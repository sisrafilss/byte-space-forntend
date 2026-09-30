import { FooterLegalBar } from './FooterLegalBar';
import { FooterNavColumns } from './FooterNavColumns';
import { FooterNewsletter } from './FooterNewsletter';

export function PublicFooter() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      {/* Content Frame (Figma Frame 34:1257: w=1200px) */}
      <div className="mx-auto w-full max-w-300 px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-12 lg:px-0 lg:pt-17.75 lg:pb-12">
        {/* Top Section: Newsletter on Left, Navigation Links on Right */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-23">
          <FooterNewsletter />
          <FooterNavColumns />
        </div>

        {/* Bottom Section: Divider & Legal Bar */}
        <FooterLegalBar />
      </div>
    </footer>
  );
}
