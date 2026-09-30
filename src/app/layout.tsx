import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ByteSpace - Ignite Opportunity by Setting the World in Motion',
  description: 'Learn modern skills from world-class instructors with ByteSpace.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.fontshare.com" />
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-neutral-950">
        {children}
      </body>
    </html>
  );
}
