// app/layout.tsx

import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jyotiraditya Misra | Portfolio',
  description: 'My Developer Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8B5CF6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <div className="w-full min-h-screen bg-white/80 dark:bg-black/60 backdrop-blur-sm">
          {children}
        </div>
      </body>
    </html>
  );
}