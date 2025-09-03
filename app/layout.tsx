// app/layout.tsx

import './globals.css';
import '../styles/themes.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { AppProvider } from '../context/AppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jyotiraditya Misra | Portfolio',
  description: 'Full Stack Developer passionate about creating innovative web solutions',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Jyotiraditya Misra | Portfolio',
    description: 'Full Stack Developer passionate about creating innovative web solutions',
    url: 'https://your-domain.com',
    siteName: 'Jyotiraditya Misra Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jyotiraditya Misra | Portfolio',
    description: 'Full Stack Developer passionate about creating innovative web solutions',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8B5CF6' },
    { media: '(prefers-color-scheme: dark)', color: '#A855F7' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <AppProvider>
          <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}