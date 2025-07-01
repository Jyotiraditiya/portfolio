import React from 'react';

const Education = () => {
  return (
    <section className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Education</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          Bachelor of Technology (B.Tech) in Computer Science & Engineering
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Sikkim Manipal Institute of Technology (SMIT) – 2023–2027
        </p>
        <p className="text-gray-700 dark:text-gray-300">Current CGPA: 7.5</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          Higher Secondary Education (Class 12)
        </h3>
        <p className="text-gray-700 dark:text-gray-300">Loyola International School – 2023</p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          Secondary Education (Class 10)
        </h3>
        <p className="text-gray-700 dark:text-gray-300">Loyola International School – 2021</p>
      </div>
    </section>
  );
};

export default Education;