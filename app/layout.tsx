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
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-black bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="flex min-h-screen w-full items-center justify-center">
          <div className="relative z-10 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-3xl bg-white/10 p-10 md:p-16 shadow-2xl backdrop-blur-lg border border-white/20">
            {children}
          </div>
        </div>
        <div className="fixed inset-0 z-0 bg-black/60 backdrop-blur-lg" aria-hidden="true" />
      </body>
    </html>
  );
}