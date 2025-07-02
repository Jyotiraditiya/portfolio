import React from 'react';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Solutions Pvt. Ltd.',
    period: 'June 2024 – Aug 2024',
    description:
      'Worked on building responsive React interfaces, collaborated with backend teams, and improved website performance using Next.js and Tailwind CSS.',
  },
  {
    role: 'Web Development Intern',
    company: 'Prodigy InfoTech',
    period: 'May 2024 – June 2024',
    description:
      'Contributed to frontend and backend development, enhanced web app functionality and user experience. Gained experience in UI/UX design, communication, and leadership.',
  },
  {
    role: 'Virtual Experience Participant',
    company: 'Forage (Wells Fargo)',
    period: '2024',
    description:
      'Practiced debugging, feature building, and problem-solving using real-world tools in a virtual internship environment.',
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub',
    period: '2023 – Present',
    description:
      'Contributed to several open source projects, fixed bugs, and added new features to JavaScript and TypeScript repositories.',
  },
];

const Experience = () => (
  <section id="experience" className="my-24 max-w-5xl mx-auto animate-fadeInUp">
    <h2 className="text-3xl font-bold text-purple-800 dark:text-black mb-8 text-center">
      Experience
    </h2>
    <div className="flex flex-col gap-8">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-white/80 dark:bg-white/90 rounded-xl shadow p-6 transition-all duration-300 hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-purple-700 dark:text-black mb-1">
            {exp.role}
          </h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <span className="text-lg text-gray-700 dark:text-black">{exp.company}</span>
            <span className="text-sm text-gray-500 dark:text-gray-700">{exp.period}</span>
          </div>
          <p className="text-gray-700 dark:text-black">{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;