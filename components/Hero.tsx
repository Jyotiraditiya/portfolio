import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/jyotiraditya.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>

      {/* Overlay Content */}
      <div className="text-center px-6 max-w-3xl text-white z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl text-gray-200">
          I am a passionate developer with a love for creating impactful projects.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-md text-white text-lg font-medium"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;