'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-br from-purple-100 via-white to-white dark:from-purple-900 dark:via-purple-800 dark:to-purple-600 backdrop-blur sticky top-0 z-50 transition-colors duration-300">
      <h1 className="text-2xl font-bold tracking-tight text-purple-700 dark:text-white">
        Jyotiraditya Misra
      </h1>
      <div className="flex items-center space-x-8 text-base font-medium">
        <Link
          href="#projects"
          className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}