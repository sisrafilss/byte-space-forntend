import { FOOTER_COLUMNS } from '@/data';
import Link from 'next/link';

export function FooterNavColumns() {
  return (
    <div className="grid shrink-0 grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-[40px] lg:pt-[48px]">
      {FOOTER_COLUMNS.map((column) => (
        <div key={column.id} className="flex flex-col space-y-4">
          {column.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-satoshi text-[14px] leading-[22.4px] text-neutral-950 transition-colors hover:text-[#003BE2]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
