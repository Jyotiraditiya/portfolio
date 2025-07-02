"use client";

import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiSend } from 'react-icons/fi';

const contacts = [
	{
		icon: (
			<FaEnvelope className="text-purple-600 group-hover:scale-110 group-hover:text-purple-800 transition-transform duration-300" />
		),
		label: 'Email',
		value: 'misrajyotiraditya@gmail.com',
		link: 'mailto:misrajyotiraditya@gmail.com',
		color: 'text-purple-600',
	},
	{
		icon: (
			<FaLinkedin className="text-[#0077B5] group-hover:scale-110 transition-transform duration-300" />
		),
		label: 'LinkedIn',
		value: 'jyotiraditiyamisra',
		link: 'www.linkedin.com/in/jyotiraditiya-misra-523699280',
		color: 'text-[#0077B5]',
	},
	{
		icon: (
			<FaInstagram className="text-[#E4405F] group-hover:scale-110 transition-transform duration-300" />
		),
		label: 'Instagram',
		value: 'jyotiraditiyamisra',
		link: 'https://instagram.com/misrajyotiraditiya',
		color: 'text-[#E4405F]',
	},
	{
		icon: (
			<FaGithub className="text-[#181717] group-hover:scale-110 transition-transform duration-300" />
		),
		label: 'GitHub',
		value: 'Jyotiraditiya',
		link: 'https://github.com/Jyotiraditiya',
		color: 'text-[#181717]',
	},
	{
		icon: (
			<SiLeetcode className="text-[#FFA116] group-hover:scale-110 transition-transform duration-300" />
		),
		label: 'LeetCode',
		value: 'jyotiraditiyamisra',
		link: 'https://leetcode.com/jyotiraditiya_misra1',
		color: 'text-[#FFA116]',
	},
	{
		icon: (
			<FaTwitter className="text-[#1DA1F2] group-hover:scale-110 transition-transform duration-300" />
		),
		label: 'Twitter',
		value: 'jyotimisra_',
		link: 'https://x.com/jyotiradit73632?s=21',
		color: 'text-[#1DA1F2]',
	},
];

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setSent(true);
			setLoading(false);
			setForm({ name: '', email: '', message: '' });
		}, 1200);
	};

	// Split contacts into two columns
	const mid = Math.ceil(contacts.length / 2);
	const leftContacts = contacts.slice(0, mid);
	const rightContacts = contacts.slice(mid);

	return (
		<section
			className="my-24 max-w-3xl mx-auto animate-fadeInUp"
			id="contact"
		>
			<div className="flex items-center justify-center mb-6">
				<FiSend className="text-4xl text-purple-700 animate-bounce" />
			</div>
			<h2 className="text-3xl font-bold text-purple-800 dark:text-black mb-4 transition-colors duration-300 text-center animate-fadeIn">
				Contact
			</h2>
			{/* Rectangle box with two columns */}
			<div className="bg-white/70 dark:bg-white/90 rounded-2xl shadow-lg p-8 mb-10 flex flex-col sm:flex-row gap-8 justify-between animate-fadeInUp">
				<div className="flex-1 flex flex-col gap-6">
					{leftContacts.map((c, i) => (
						<span
							key={c.label}
							className="flex items-center gap-3 group transition-all duration-300 animate-slideInLeft"
							style={{
								animationDelay: `${i * 0.1}s`,
								animationFillMode: 'both',
							}}
						>
							<a
								href={c.link}
								target={c.link.startsWith('http') ? '_blank' : undefined}
								rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
								className="focus:outline-none"
							>
								{c.icon}
							</a>
							<span>
								{c.label}:{' '}
								<a
									href={c.link}
									target={c.link.startsWith('http') ? '_blank' : undefined}
									rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
									className={`${c.color} hover:underline hover:text-purple-800 transition-colors duration-300`}
								>
									{c.value}
								</a>
							</span>
						</span>
					))}
				</div>
				<div className="flex-1 flex flex-col gap-6">
					{rightContacts.map((c, i) => (
						<span
							key={c.label}
							className="flex items-center gap-3 group transition-all duration-300 animate-slideInLeft"
							style={{
								animationDelay: `${(i + leftContacts.length) * 0.1}s`,
								animationFillMode: 'both',
							}}
						>
							<a
								href={c.link}
								target={c.link.startsWith('http') ? '_blank' : undefined}
								rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
								className="focus:outline-none"
							>
								{c.icon}
							</a>
							<span>
								{c.label}:{' '}
								<a
									href={c.link}
									target={c.link.startsWith('http') ? '_blank' : undefined}
									rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
									className={`${c.color} hover:underline hover:text-purple-800 transition-colors duration-300`}
								>
									{c.value}
								</a>
							</span>
						</span>
					))}
				</div>
			</div>
			<div className="bg-white/70 dark:bg-white/90 rounded-2xl shadow-lg p-8 animate-fadeInUp">
				<h3 className="text-2xl font-semibold text-purple-700 dark:text-black mb-4 text-center">
					Send me a message
				</h3>
				{sent ? (
					<div className="text-green-600 text-center font-semibold py-4 animate-fadeIn">
						Thank you for reaching out! I will get back to you soon.
					</div>
				) : (
					<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
						<input
							type="text"
							required
							placeholder="Your Name"
							className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
							value={form.name}
							onChange={(e) =>
								setForm({ ...form, name: e.target.value })
							}
						/>
						<input
							type="email"
							required
							placeholder="Your Email"
							className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
							value={form.email}
							onChange={(e) =>
								setForm({ ...form, email: e.target.value })
							}
						/>
						<textarea
							required
							placeholder="Your Message"
							className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-[100px]"
							value={form.message}
							onChange={(e) =>
								setForm({ ...form, message: e.target.value })
							}
						/>
						<button
							type="submit"
							disabled={loading}
							className="flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition disabled:opacity-60"
						>
							<FiSend className={`text-lg ${loading ? 'animate-spin' : ''}`} />
							{loading ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				)}
			</div>
			{/* Tailwind custom animation styles */}
			<style jsx global>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				.animate-fadeIn {
					animation: fadeIn 1s ease;
				}
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(40px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fadeInUp {
					animation: fadeInUp 1s ease;
				}
				@keyframes slideInLeft {
					from {
						opacity: 0;
						transform: translateX(-40px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
				.animate-slideInLeft {
					animation: slideInLeft 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
				}
			`}</style>
		</section>
	);
};

export default Contact;