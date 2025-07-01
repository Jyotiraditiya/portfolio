import React from 'react';
import Image from 'next/image';

const GlassCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-xl mx-auto border border-white/30">
    {children}
  </div>
);

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh]">
      <Image
        src="/jyotiraditya.jpg"
        alt="Jyotiraditya Misra"
        width={120}
        height={120}
        className="rounded-full mx-auto border-4 border-primary shadow-lg mb-6"
      />
      <GlassCard>
        <h1 className="text-4xl font-bold mb-2">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-100">I’m a developer building elegant digital experiences.</p>
      </GlassCard>
    </section>
  );
};

export default Hero;