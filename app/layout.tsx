import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';
import Navbar from '@/components/common/Navbar';
import Providers from './providers';
import Footer from '@/components/common/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: '400' });

export const metadata: Metadata = {
  title: 'CasaHub | Find the perfect home',
  description: 'Find the perfect property for you',
  keywords: 'CasaHub, Find the perfect home, rentals, find properties',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
