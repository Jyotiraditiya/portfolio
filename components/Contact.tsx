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
        value: 'JYOTIRADITIYA MISRA',
        link: 'https://github.com/Jyotiraditiya',
        color: 'text-[#181717]',
    },
    {
        icon: (
            <SiLeetcode className="text-[#FFA116] group-hover:scale-110 transition-transform duration-300" />
        ),
        label: 'LeetCode',
        value: 'JYOTIRADITIYA MISRA',
        link: 'https://leetcode.com/jyotiraditiya_misra1',
        color: 'text-[#FFA116]',
    },
    {
        icon: (
            <FaTwitter className="text-[#1DA1F2] group-hover:scale-110 transition-transform duration-300" />
        ),
        label: 'Twitter',
        value: 'JYOTIRADITIYA MISRA',
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
                // Auto-hide success message after 5 seconds
                setTimeout(() => setSent(false), 5000);
            } else {
                // Show a more user-friendly error message
                const errorMessage = data.error || `Failed to send message (${response.status})`;
                setError(errorMessage);
            }
        } catch (err) {
            console.error('Network error:', err);
            // Simplified error message for network issues
            setError('Unable to send message at the moment. Please use the direct email option below.');
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
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center animate-fadeIn">
                            <div className="text-green-600 dark:text-green-400 text-lg font-semibold mb-2">
                                ✅ Message Sent Successfully!
                            </div>
                            <div className="text-green-700 dark:text-green-300 text-sm">
                                Thank you for reaching out! I'll get back to you soon.
                            </div>
                        </div>
                    ) : (
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            {error && (
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 animate-fadeIn">
                                    <div className="text-red-600 dark:text-red-400 text-sm font-medium mb-2">
                                        ⚠️ Message Could Not Be Sent
                                    </div>
                                    <div className="text-red-500 dark:text-red-300 text-sm mb-3">
                                        {error.includes('Server configuration') || error.includes('Missing email credentials') 
                                            ? 'Email service is temporarily unavailable.'
                                            : error}
                                    </div>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3">
                                        <div className="text-blue-800 dark:text-blue-300 text-sm font-medium mb-1">
                                            📧 Alternative Contact Method:
                                        </div>
                                        <div className="text-blue-700 dark:text-blue-200 text-sm">
                                            Please email me directly at{' '}
                                            <a 
                                                href="mailto:misrajyotiraditya@gmail.com?subject=Portfolio Contact&body=Hi Jyotiraditya,%0D%0A%0D%0A[Your message here]%0D%0A%0D%0AFrom: [Your name]" 
                                                className="text-blue-600 dark:text-blue-300 hover:underline font-medium inline-flex items-center gap-1"
                                            >
                                                misrajyotiraditya@gmail.com
                                                <FaEnvelope className="text-xs" />
                                            </a>
                                        </div>
                                        <button
                                            onClick={() => setError('')}
                                            className="mt-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 underline"
                                        >
                                            Try sending again
                                        </button>
                                    </div>
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
                            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                                💡 Prefer email? Contact me directly at{' '}
                                <a 
                                    href="mailto:misrajyotiraditya@gmail.com?subject=Portfolio Contact&body=Hi Jyotiraditya,%0D%0A%0D%0A[Your message here]%0D%0A%0D%0AFrom: [Your name]" 
                                    className="text-purple-600 dark:text-purple-300 hover:underline font-medium"
                                >
                                    misrajyotiraditya@gmail.com
                                </a>
                            </div>
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