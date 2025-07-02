// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jyotiraditya Misra | Portfolio',
  description: 'My Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gradient-to-br dark:from-purple-900 dark:via-purple-800 dark:to-purple-600`}>
        <div className="w-full min-h-screen bg-gradient-to-br from-purple-100 via-white to-white dark:bg-none">
          {children}
        </div>
      </body>
    </html>
  );
}