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
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            console.log('Submitting form:', form);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                setSent(true);
                setForm({ name: '', email: '', message: '' });
            } else {
                setError(data.error || `Failed to send message (${response.status})`);
            }
        } catch (err) {
            console.error('Network error:', err);
            setError(`Network error: ${err instanceof Error ? err.message : 'Please try again.'}`);
        } finally {
            setLoading(false);
        }
    };

    // Split contacts into two columns
    const mid = Math.ceil(contacts.length / 2);
    const leftContacts = contacts.slice(0, mid);
    const rightContacts = contacts.slice(mid);

    return (
        <section
            className="my-16 md:my-24 max-w-4xl mx-auto px-4 animate-fadeIn"
            id="contact"
        >
            <div className="flex items-center justify-center mb-4 md:mb-6">
                <FiSend className="text-3xl md:text-4xl text-purple-700 animate-bounce" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 dark:text-black mb-4 transition-colors duration-300 text-center animate-fadeIn">
                Contact
            </h2>
            {/* Contact and Message box side by side */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* Contact Box */}
                <div className="flex-1 bg-white dark:bg-black border border-purple-200 rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 animate-fadeInUp mb-0">
                    <div className="flex flex-col gap-4 md:gap-6">
                        {leftContacts.map((c, i) => (
                            <span
                                key={c.label}
                                className="flex items-center gap-2 md:gap-3 group transition-all duration-300 animate-slideInLeft"
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    animationFillMode: 'both',
                                }}
                            >
                                <a
                                    href={c.link}
                                    target={c.link.startsWith('http') ? '_blank' : undefined}
                                    rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="focus:outline-none text-xl md:text-2xl"
                                >
                                    {c.icon}
                                </a>
                                <span className="text-sm md:text-base">
                                    {c.label}:{' '}
                                    <a
                                        href={c.link}
                                        target={c.link.startsWith('http') ? '_blank' : undefined}
                                        rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className={`${c.color} hover:underline hover:text-purple-800 transition-colors duration-300 break-all`}
                                    >
                                        {c.value}
                                    </a>
                                </span>
                            </span>
                        ))}
                        {rightContacts.map((c, i) => (
                            <span
                                key={c.label}
                                className="flex items-center gap-2 md:gap-3 group transition-all duration-300 animate-slideInLeft"
                                style={{
                                    animationDelay: `${(i + leftContacts.length) * 0.1}s`,
                                    animationFillMode: 'both',
                                }}
                            >
                                <a
                                    href={c.link}
                                    target={c.link.startsWith('http') ? '_blank' : undefined}
                                    rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="focus:outline-none text-xl md:text-2xl"
                                >
                                    {c.icon}
                                </a>
                                <span className="text-sm md:text-base">
                                    {c.label}:{' '}
                                    <a
                                        href={c.link}
                                        target={c.link.startsWith('http') ? '_blank' : undefined}
                                        rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className={`${c.color} hover:underline hover:text-purple-800 transition-colors duration-300 break-all`}
                                    >
                                        {c.value}
                                    </a>
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
                {/* Message Box */}
                <div className="flex-1 bg-white dark:bg-black border border-purple-200 rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 animate-fadeInUp mb-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4 text-center">
                        Send me a message
                    </h3>
                    {sent ? (
                        <div className="text-green-400 text-center font-semibold py-4 animate-fadeIn">
                            Thank you for reaching out! I will get back to you soon.
                        </div>
                    ) : (
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            {error && (
                                <div className="text-red-400 text-center font-semibold py-2 animate-fadeIn">
                                    {error}
                                </div>
                            )}
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />
                            <input
                                type="email"
                                required
                                placeholder="Your Email"
                                className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                            />
                            <textarea
                                required
                                placeholder="Your Message"
                                className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-[100px] bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
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