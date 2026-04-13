'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md">

      {/* Left Nav */}
      <nav className="hidden md:flex gap-6 text-gray-300">
        <Link href="#about" className="hover:text-white transition">About</Link>
        <Link href="#skills" className="hover:text-white transition">Skills</Link>
        <Link href="#projects" className="hover:text-white transition">Projects</Link>
      </nav>

      {/* Center Name */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
        <Image
          src="/img_1020.jpg"
          alt="Jyotiraditiya Misra"
          width={40}
          height={40}
          className="rounded-full object-cover border border-white/10 hidden md:block"
        />
        <div className="text-lg md:text-xl font-bold tracking-wide text-white">
          JYOTIRADITIYA MISRA
        </div>
      </div>

      {/* Right Nav */}
      <nav className="hidden md:flex gap-6 text-gray-300">
        <Link href="#certifications" className="hover:text-white transition">Certifications</Link>
        <Link href="#experience" className="hover:text-white transition">Experience</Link>
        <Link href="#contact" className="hover:text-white transition">Contact</Link>
      </nav>

    </header>
  )
}