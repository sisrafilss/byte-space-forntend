export interface FooterColumn {
  id: string;
  links: { label: string; href: string }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: 'browse-col-1',
    links: [
      { label: 'Featured Courses', href: '#courses' },
      { label: 'Featured Categories', href: '#categories' },
      { label: 'Business', href: '#courses' },
      { label: 'IT', href: '#courses' },
      { label: 'Design', href: '#courses' },
    ],
  },
  {
    id: 'browse-col-2',
    links: [
      { label: 'Development', href: '#courses' },
      { label: 'Marketing', href: '#courses' },
      { label: 'Photography', href: '#courses' },
      { label: 'Finance', href: '#courses' },
      { label: 'Sport', href: '#courses' },
    ],
  },
  {
    id: 'platform-col',
    links: [
      { label: 'Become a Creator', href: '#creator' },
      { label: 'Affiliate Program', href: '#affiliate' },
      { label: 'Contact', href: '#contact' },
      { label: 'Help', href: '#help' },
      { label: 'About', href: '#about' },
    ],
  },
];
