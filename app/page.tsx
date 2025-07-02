// app/page.tsx

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import { ProjectCard } from '../components/ProjectCard';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

export default function Home() {
  return (
    <main className="space-y-32">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <section id="projects" className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-purple-800">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Netflix Clone"
            description="A full-stack Netflix clone with authentication and streaming features."
            link="https://netflixx-hpk5.vercel.app"
          />
          <ProjectCard
            title="EventPlanner AI"
            description="AI-based event assistant using Next.js, Tailwind, MongoDB, OpenAI API."
            link="https://event-planner-ai.vercel.app/"
          />
        </div>
      </section>
      <Contact />
    </main>
  );
}
