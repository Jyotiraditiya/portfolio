"use client";

import React from 'react';

const certifications = [
	{
		title: "React Basics",
		issuer: "Meta (Coursera)",
		date: "Jun 26, 2025",
		name: "Jyotiraditiya Misra",
		link: "https://coursera.org/verify/1YGLGBCUFDMG",
		description: "Successfully completed an online non-credit course authorized by Meta and offered through Coursera.",
	},
	{
		title: "Programming with JavaScript",
		issuer: "Meta (Coursera)",
		date: "Apr 4, 2025",
		name: "Jyotiraditiya Misra",
		link: "https://coursera.org/verify/P0EDYDL55CJV",
		description: "Successfully completed an online non-credit course authorized by Meta and offered through Coursera.",
	},
	{
		title: "Introduction to Front-End Development",
		issuer: "Meta (Coursera)",
		date: "Mar 4, 2025",
		name: "Jyotiraditiya Misra",
		link: "https://coursera.org/verify/5418JJ18B2RB",
		description: "Successfully completed an online non-credit course authorized by Meta and offered through Coursera.",
	},
	{
		title: "Version Control",
		issuer: "Meta (Coursera)",
		date: "May 25, 2025",
		name: "Jyotiraditiya Misra",
		link: "https://coursera.org/verify/4YL00EC7XE3Z",
		description: "Successfully completed an online non-credit course authorized by Meta and offered through Coursera.",
	},
	{
		title: "Software Engineering Job Simulation",
		issuer: "Wells Fargo (Forage)",
		date: "Apr 25, 2025",
		name: "Jyotiraditiya Misra",
		image: "https://media.licdn.com/dms/image/v2/D4E2DAQFmT5mfeBO3Rw/profile-treasury-image-shrink_800_800/B4EZZuQ9UtGYAc-/0/1745606663570?e=1752084000&v=beta&t=W3hZsqjtvN28u_va4Xmhq8Ln3us12Q36gL0iitlO5N4",
		link: "https://media.licdn.com/dms/image/v2/D4E2DAQFmT5mfeBO3Rw/profile-treasury-image-shrink_800_800/B4EZZuQ9UtGYAc-/0/1745606663570?e=1752084000&v=beta&t=W3hZsqjtvN28u_va4Xmhq8Ln3us12Q36gL0iitlO5N4",
		description: "Completed practical tasks in creating and implementing a data model.",
	},
	{
		title: "Mastering DSA",
		issuer: "Udemy",
		date: "",
		skills: [],
	},
	{
		title: "UI/UX Essentials",
		issuer: "Udemy",
		date: "",
		skills: [],
	},
	{
		title: "Meta Front-End Developer",
		issuer: "Coursera / Meta",
		date: "",
		skills: ["Tailwind CSS", "Front-End Development", "JavaScript", "React.js"],
	},
	
	{
		title: "GDSC Certificate for Python Program",
		issuer: "Google Developer Student Clubs",
		date: "",
		skills: [],
	},
];

const Certification = () => (
	<section className="my-8 max-w-3xl mx-auto animate-slideInTop">
		<h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-white text-center">Certifications</h2>
		<ul className="space-y-4">
			{certifications.map((cert, idx) => (
				<li
					key={idx}
					className={`
						bg-white/80 dark:bg-gray-900 border border-purple-200 rounded-xl p-4 shadow-lg
						${idx % 2 === 0 ? 'animate-slideInRight' : 'animate-slideInLeft'}
					`}
					style={{
						animationDelay: `${idx * 0.15 + 0.2}s`,
						animationFillMode: 'both',
					}}
				>
					<div className="text-lg font-semibold text-purple-800 dark:text-white">
						{cert.title}
					</div>
					<div className="text-gray-700 dark:text-gray-300">{cert.issuer}</div>
					{cert.name && (
						<div className="text-gray-700 dark:text-gray-300">{cert.name}</div>
					)}
					{cert.date && (
						<div className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</div>
					)}
					{cert.image && (
						null
					)}
					{cert.description && (
						<div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{cert.description}</div>
					)}
					{cert.skills && cert.skills.length > 0 && (
						<div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
							Skills: {cert.skills.join(", ")}
						</div>
					)}
					{cert.link && (
						<a
							href={cert.link}
							target="_blank"
							rel="noopener noreferrer"
							className="block mt-2 text-purple-600 dark:text-purple-300 hover:underline font-medium"
						>
							Verify Certificate
						</a>
					)}
				</li>
			))}
		</ul>
		<style jsx global>{`
			@keyframes slideInRight {
				0% {
					opacity: 0;
					transform: translateX(60px);
				}
				100% {
					opacity: 1;
					transform: translateX(0);
				}
			}
			@keyframes slideInLeft {
				0% {
					opacity: 0;
					transform: translateX(-60px);
				}
				100% {
					opacity: 1;
					transform: translateX(0);
				}
			}
			.animate-slideInRight {
				animation: slideInRight 0.7s cubic-bezier(0.68,-0.55,0.27,1.55) both;
			}
			.animate-slideInLeft {
				animation: slideInLeft 0.7s cubic-bezier(0.68,-0.55,0.27,1.55) both;
			}
		`}</style>
	</section>
);

export default Certification;