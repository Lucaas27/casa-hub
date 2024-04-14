import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CasaHub | Find the perfect home',
  description: 'Find the perfect property for you',
  keywords: 'CasaHub, Find the perfect home, rentals, find properties',
};

/**
 * Renders the root layout of the webpage.
 *
 * @param {Readonly<{ children: React.ReactNode; }>} children - The child elements to be rendered.
 * @return {ReactNode} The rendered root layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
