import Image from 'next/image';
import Navbar from '../components/Navbar';
import Section from '../components/Section'; // This is fine if default exported
import { ProjectCard } from '../components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
      <Navbar />

      <section className="flex flex-col items-center text-center px-4 py-24 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
  <Image
    src="/IMG_5510.jpeg"
    alt="Jyotiraditya Misra"
    width={160}
    height={160}
    className="rounded-full mb-6 ring-4 ring-blue-500"
    unoptimized
  />
  <h1 className="text-4xl font-extrabold mb-3 tracking-tight">Hi, I'm Jyotiraditya Misra</h1>
  <p className="max-w-xl text-lg text-gray-300">
    B.Tech CSE student at SMIT. Passionate about Web Development, AI, and building impactful software.
  </p>
  <div className="mt-6 flex flex-wrap justify-center gap-4">
    <a href="mailto:misrajyotiraditya@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
      Email
    </a>
    <a href="https://linkedin.com/in/jyotiraditiya-misra-523699280" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      LinkedIn
    </a>
    <a href="https://github.com/Jyotiraditiya" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      GitHub
    </a>
    <a href="/resume-14.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      Resume
    </a>
  </div>
</section>

      <Section title="Projects">
        <ProjectCard
          title="EventPlanner AI"
          description="AI-based event assistant using Next.js, Tailwind, MongoDB, OpenAI API."
        />
        <ProjectCard
          title="Smart Parking System"
          description="Optimizes parking via Dijkstra’s algorithm. Role-based access included."
        />
        <ProjectCard
          title="Netflix Clone"
          description="Full-stack React clone with video streaming and Firebase Auth."
        />
      </Section>

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