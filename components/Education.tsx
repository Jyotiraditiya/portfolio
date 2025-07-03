"use client";

import React from 'react';

const Education = () => {
  return (
    <section id="education" className="my-16 md:my-24 max-w-5xl mx-auto px-4 animate-fadeInUp">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6 md:mb-8 text-center">
        Education
      </h2>
      
      <div className="bg-white dark:bg-black rounded-xl shadow-lg p-4 md:p-6 border border-purple-200 transition-all duration-700 hover:shadow-lg">
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Bachelor of Technology (B.Tech) in Computer Science & Engineering
          </h3>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-1">
            Sikkim Manipal Institute of Technology (SMIT) – 2023–2027
          </p>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Current CGPA: 7.5</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Higher Secondary Education (Class 12)
          </h3>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Loyola International School – 2023</p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Secondary Education (Class 10)
          </h3>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Loyola International School – 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;