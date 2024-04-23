'use client';
import { ThemeProvider } from 'next-themes';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SkeletonTheme baseColor="#E6ECF4" highlightColor="#fff">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </SkeletonTheme>
  );
}
export default Providers;
