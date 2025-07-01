'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-zinc-800 text-black dark:text-white sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <h1 className="text-xl font-bold">Jyotiraditya Misra</h1>
      <div className="space-x-6 text-sm md:text-base">
        <Link
          href="#projects"
          className="hover:text-blue-600 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="hover:text-blue-600 transition-colors"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="hover:text-blue-600 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}