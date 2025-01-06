import type { Metadata } from 'next';
import { Darker_Grotesque } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/navbar';

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Siga seu Atleta',
  description: 'Lista de atletas olímpicos e paralímpicos do Brasil.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body suppressHydrationWarning className={darkerGrotesque.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
