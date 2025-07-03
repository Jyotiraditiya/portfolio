// components/ScrollNavigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface ScrollNavigationProps {
  sections: string[];
}

const ScrollNavigation: React.FC<ScrollNavigationProps> = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section is currently visible
      const sectionIndex = Math.floor(scrollPosition / (windowHeight * 0.7));
      setCurrentSection(Math.min(sectionIndex, sections.length - 1));
      
      // Hide navigation when at the very top
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToNext = () => {
    const nextIndex = Math.min(currentSection + 1, sections.length - 1);
    scrollToSection(nextIndex);
  };

  const scrollToPrevious = () => {
    const prevIndex = Math.max(currentSection - 1, 0);
    scrollToSection(prevIndex);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Previous button */}
        <button
          onClick={scrollToPrevious}
          disabled={currentSection === 0}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous section"
          title="Previous section"
        >
          <ChevronUpIcon className="w-5 h-5 text-purple-600" />
        </button>

        {/* Section indicators */}
        <div className="flex flex-col space-y-2">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? 'bg-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-purple-300'
              }`}
              title={section}
              aria-label={`Go to ${section} section`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={scrollToNext}
          disabled={currentSection === sections.length - 1}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next section"
          title="Next section"
        >
          <ChevronDownIcon className="w-5 h-5 text-purple-600" />
        </button>
      </div>
    </div>
  );
};

export default ScrollNavigation;
