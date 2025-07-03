"use client";

import React from 'react';

const Education = () => {
  return (
    <section className="bg-white dark:bg-black border border-purple-200 p-8 rounded-2xl shadow-lg my-8 max-w-3xl mx-auto animate-slideInTop">
      <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-white text-center">Education</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Bachelor of Technology (B.Tech) in Computer Science & Engineering
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Sikkim Manipal Institute of Technology (SMIT) – 2023–2027
        </p>
        <p className="text-gray-700 dark:text-gray-300">Current CGPA: 7.5</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Higher Secondary Education (Class 12)
        </h3>
        <p className="text-gray-700 dark:text-gray-300">Loyola International School – 2023</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Secondary Education (Class 10)
        </h3>
        <p className="text-gray-700 dark:text-gray-300">Loyola International School – 2021</p>
      </div>
      
    </section>
  );
};

export default Education;