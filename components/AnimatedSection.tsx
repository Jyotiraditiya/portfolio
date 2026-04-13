// components/AnimatedSection.tsx
'use client';

import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'slideUp',
  delay = 0,
  duration = 0.6,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-[${Math.round(duration * 1000)}ms]`;
    const delayClass = delay > 0 ? `delay-[${Math.round(delay * 1000)}ms]` : '';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return `${baseClasses} ${durationClass} ${delayClass} transform translate-y-16 opacity-0`;
        case 'slideDown':
          return `${baseClasses} ${durationClass} ${delayClass} transform -translate-y-16 opacity-0`;
        case 'slideLeft':
          return `${baseClasses} ${durationClass} ${delayClass} transform translate-x-16 opacity-0`;
        case 'slideRight':
          return `${baseClasses} ${durationClass} ${delayClass} transform -translate-x-16 opacity-0`;
        case 'fadeIn':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} ${delayClass} transform scale-95 opacity-0`;
        default:
          return `${baseClasses} ${durationClass} ${delayClass} transform translate-y-16 opacity-0`;
      }
    } else {
      return `${baseClasses} ${durationClass} ${delayClass} transform translate-y-0 translate-x-0 scale-100 opacity-100`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
