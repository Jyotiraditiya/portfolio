"use client";

import React, { useRef, useEffect, useState } from 'react';

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

const Experience = () => {
	const refs = useRef<(HTMLDivElement | null)[]>([]);
	const [visible, setVisible] = useState([false, false, false, false]);

	useEffect(() => {
		const handleScroll = () => {
			setVisible((prev) =>
				prev.map((v, i) => {
					const ref = refs.current[i];
					if (!ref) return v;
					const rect = ref.getBoundingClientRect();
					return rect.top < window.innerHeight - 100 ? true : v;
				})
			);
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section id="experience" className="my-24 max-w-5xl mx-auto animate-fadeInUp">
			<h2 className="text-3xl font-bold text-purple-800 dark:text-black mb-8 text-center">
				Experience
			</h2>
			<div className="flex flex-col gap-8">
				{experiences.map((exp, idx) => (
					<div
						key={idx}
						ref={(el) => { refs.current[idx] = el; }}
						className={`bg-white dark:bg-black rounded-xl shadow-lg p-6 border border-purple-200 transition-all duration-700 hover:shadow-lg
              ${visible[idx]
								? idx % 2 === 0
									? 'opacity-100 translate-x-0'
									: 'opacity-100 -translate-x-0'
								: idx % 2 === 0
								? 'opacity-0 -translate-x-16'
								: 'opacity-0 translate-x-16'
							}
            `}
						style={{ willChange: 'opacity, transform' }}
					>
						<h3 className="text-xl font-semibold text-black dark:text-white mb-1">
							{exp.role}
						</h3>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
							<span className="text-lg text-black dark:text-white">
								{exp.company}
							</span>
							<span className="text-sm text-gray-700 dark:text-gray-300">
								{exp.period}
							</span>
						</div>
						<p className="text-black dark:text-white">
							{exp.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experience;