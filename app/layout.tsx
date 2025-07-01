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
        className={`${inter.className} min-h-screen bg-black bg-[url('/bg.jpg')] bg-cover bg-center`}
        style={{
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="fixed inset-0 z-0 bg-black/60 backdrop-blur-lg" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-5xl mx-auto rounded-3xl bg-white/10 p-16 shadow-2xl backdrop-blur-lg border border-white/20 my-16">
          {children}
        </div>
      </body>
    </html>
  );
}