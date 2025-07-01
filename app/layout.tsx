import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jyotiraditya Misra | Portfolio',
  description: 'Portfolio website of Jyotiraditya Misra',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors`}>
        {children}
      </body>
    </html>
  );
}