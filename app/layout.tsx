import './globals.css'
import { Metadata } from 'next'
import Header from '../components/Header/Header'

export const metadata: Metadata = {
  title: 'Jyotiraditiya Misra — Software Developer',
  description: 'Building Scalable, Intelligent & High-Performance Systems',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-matte-black text-white antialiased">
        
        {/* Global Header */}
        <Header />

        {/* Main Content */}
       <main className="pt-24 px-6 md:px-12 max-w-5xl mx-auto">
  {children}
</main>

      </body>
    </html>
  )
}
