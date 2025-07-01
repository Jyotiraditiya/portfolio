import Image from 'next/image';
import Navbar from '../components/Navbar';
import Section from '../components/Section'; // This is fine if default exported
import Hero from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
      <Navbar />
      <Hero />

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
        <ProjectCard
          title="Netflix Clone"
          description="A full-stack Netflix clone with authentication and streaming features."
        />
        <ProjectCard
          title="EventPlanner AI"
          description="AI-based event assistant using Next.js, Tailwind, MongoDB, OpenAI API."
        />
      </section>

      <Section title="Skills">
        <ul className="list-disc ml-5">
          <li>DSA, OOP, CN</li>
          <li>Python, C, C++, SQL</li>
          <li>HTML, CSS, JavaScript, React</li>
          <li>UI/UX Design, Communication, Leadership</li>
        </ul>
      </Section>

      <Section title="Education">
        <p>
          <strong>SMIT:</strong> B.Tech CSE – 3rd Year | CGPA: 7.5
        </p>
        <p>
          <strong>Loyola Int&apos;l School:</strong> Class 12 (2023), Class 10 (2021)
        </p>
      </Section>

      <Section title="Internships">
        <p>
          <strong>Prodigy InfoTech:</strong> Web Development Intern – Apr 2025
        </p>
        <p>
          <strong>Wells Fargo Forage:</strong> Virtual Experience – May 2025
        </p>
      </Section>

      <Section title="Certifications">
        <ul className="list-disc ml-5">
          <li>Mastering DSA – Udemy</li>
          <li>UI/UX Essentials – Udemy</li>
        </ul>
      </Section>

      <Section title="Extracurricular">
        <p>Offline DSA Instructor, Co-lead – Codhers Event Management</p>
      </Section>

      <Section title="Coding Profiles">
        <a
          href="https://leetcode.com/jyotiraditiya_misra1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LeetCode
        </a>
      </Section>

      <Section title="Contact">
        <p>
          Email:{' '}
          <a href="mailto:misrajyotiraditya@gmail.com" className="text-blue-500 hover:underline">
            misrajyotiraditya@gmail.com
          </a>
        </p>
      </Section>
    </main>
  );
}