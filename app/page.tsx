// app/page.tsx

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import { ProjectCard } from '../components/ProjectCard';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education'; // <-- Add this line
import Certification from '../components/Certification';

export default function Home() {
  return (
    <main className="space-y-32">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certification /> {/* <-- Add this line */}
      <Skills />
      <Experience />
      <section id="projects" className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-purple-800">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="SPMOS - Smart Parking Management System"
            description="SPMOS (Smart Parking Management & Optimization System) is an intelligent web-based application designed to simplify and optimize urban parking. It leverages real-time data, user-friendly interfaces, and smart algorithms to help users find and reserve parking spots efficiently. Built using modern web technologies, SPMOS reduces traffic congestion and enhances the parking experience for both users and administrators.Role-based access control, optimized slots via Dijkstra’s algorithm."
            status="Under Development"
            index={0}
          />
          <ProjectCard
            title="Muscle Classics Ecommerce"
            description="we specialize in classic and modern American muscle cars—from legendary icons like the Mustang, Challenger, and Camaro to rare, high-performance builds. Whether you’re a collector, enthusiast, or first-time buyer, we offer a curated inventory of powerful machines that embody speed, style, and heritage.

Drive the legacy. Own the muscle.Full-stack ecommerce platform. Features: product catalog, cart, checkout, and admin dashboard."
          
            status="Under Development"
            index={1}
          />
          <ProjectCard
            title="Netflix Clone"
            description="This Netflix Clone is a full-stack streaming platform replica built to mimic the core functionality and design of Netflix. It features user authentication, responsive UI, movie browsing, trailers, and personalized watchlists, using real-time data from TMDB API and YouTube API.

Technologies used include React.js, Firebase Auth, Tailwind CSS, and Vercel for deployment. The project showcases modern web development practices, UI/UX design, and API integration.

Built for performance. Designed for experience"
            link="https://netflixx-hpk5.vercel.app"
            index={2}
          />
          <ProjectCard
            title="EventPlanner AI"
            description="EventAI is an intelligent event planning assistant that helps users effortlessly plan and organize events using AI-driven recommendations and automation. From venue suggestions and task scheduling to guest list management and personalized themes, EventAI learns user preferences over time to deliver smarter, faster planning.

Built with Next.js (App Router), MongoDB, OpenAI API, and Tailwind CSS, it offers a seamless, modern web experience with secure authentication via NextAuth.js.

Plan smarter. Celebrate better."
            link="https://event-planner-ai.vercel.app/"
            index={3}
          />
        </div>
      </section>
      <Contact />
    </main>
  );
}
