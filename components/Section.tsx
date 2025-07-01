// components/Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
        {title}
      </h2>
      <div className="mt-2">{children}</div>
    </section>
  );
};

export default Section;