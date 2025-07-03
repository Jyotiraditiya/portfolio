"use client";

import React from 'react';

const Education = () => {
  return (
    <section className="bg-white dark:bg-black border border-purple-200 p-4 md:p-8 rounded-2xl shadow-lg my-6 md:my-8 max-w-4xl mx-auto px-4 animate-slideInTop">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-purple-800 dark:text-white text-center">Education</h2>

      <div className="mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2">
          Bachelor of Technology (B.Tech) in Computer Science & Engineering
        </h3>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
          Sikkim Manipal Institute of Technology (SMIT) – 2023–2027
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Current CGPA: 7.5</p>
      </div>

      <div className="mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2">
          Higher Secondary Education (Class 12)
        </h3>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Loyola International School – 2023</p>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2">
          Secondary Education (Class 10)
        </h3>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Loyola International School – 2021</p>
      </div>
      
    </section>
  );
};

export default Education;