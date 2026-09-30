export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  id: string;
  links: FooterLink[];
}
