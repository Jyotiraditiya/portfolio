// app/page.tsx

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import { ProjectCard } from '../components/ProjectCard';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certification from '../components/Certification';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionIndicator from '../components/SectionIndicator';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectionIndicator />
      
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="space-y-16 px-4">
          <AnimatedSection animationType="fadeIn" delay={0.1}>
            <div id="hero">
              <Hero />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideUp" delay={0.2}>
            <div id="about">
              <About />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideRight" delay={0.3}>
            <div id="education">
              <Education />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideUp" delay={0.4}>
            <Certification />
          </AnimatedSection>
          <AnimatedSection animationType="slideLeft" delay={0.5}>
            <div id="skills">
              <Skills />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideLeft" delay={0.6}>
            <div id="experience">
              <Experience />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="scaleIn" delay={0.7}>
            <section id="projects" className="max-w-full mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-purple-800 text-center">Projects</h2>
              <div className="space-y-6">
              <ProjectCard
                title="SPMOS - Smart Parking Management System"
                description="SPMOS (Smart Parking Management & Optimization System) is an intelligent web-based application designed to simplify and optimize urban parking. It leverages real-time data, user-friendly interfaces, and smart algorithms to help users find and reserve parking spots efficiently. Built using modern web technologies, SPMOS reduces traffic congestion and enhances the parking experience for both users and administrators.Role-based access control, optimized slots via Dijkstra's algorithm."
                status="Under Development"
                index={0}
              />
              <ProjectCard
                title="Muscle Classics Ecommerce"
                description="we specialize in classic and modern American muscle cars—from legendary icons like the Mustang, Challenger, and Camaro to rare, high-performance builds. Whether you're a collector, enthusiast, or first-time buyer, we offer a curated inventory of powerful machines that embody speed, style, and heritage.

Drive the legacy. Own the muscle. Full-stack ecommerce platform. Features: product catalog, cart, checkout, and admin dashboard."
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
          </AnimatedSection>
          <AnimatedSection animationType="slideUp" delay={0.8}>
            <div id="contact">
              <Contact />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Desktop/Tablet Layout */}
      <div className="hidden lg:block">
        <div className="space-y-24 xl:space-y-32">
          <AnimatedSection animationType="fadeIn" delay={0.1}>
            <div id="hero-desktop">
              <Hero />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideUp" delay={0.2}>
            <div id="about-desktop">
              <About />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideLeft" delay={0.3}>
            <div id="education-desktop">
              <Education />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideRight" delay={0.4}>
            <div id="certification-desktop">
              <Certification />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideRight" delay={0.5}>
            <div id="skills-desktop">
              <Skills />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="slideUp" delay={0.6}>
            <div id="experience-desktop">
              <Experience />
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="scaleIn" delay={0.7}>
            <section id="projects" className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-purple-800 text-center">Projects</h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ProjectCard
            title="SPMOS - Smart Parking Management System"
            description="SPMOS (Smart Parking Management & Optimization System) is an intelligent web-based application designed to simplify and optimize urban parking. It leverages real-time data, user-friendly interfaces, and smart algorithms to help users find and reserve parking spots efficiently. Built using modern web technologies, SPMOS reduces traffic congestion and enhances the parking experience for both users and administrators.Role-based access control, optimized slots via Dijkstra’s algorithm."
            status="Under Development"
            index={0}
          />
          <ProjectCard
            title="Muscle Classics Ecommerce"
            description="we specialize in classic and modern American muscle cars—from legendary icons like the Mustang, Challenger, and Camaro to rare, high-performance builds. Whether you’re a collector, enthusiast, or first-time buyer, we offer a curated inventory of powerful machines that embody speed, style, and heritage.

Drive the legacy. Own the muscle. Full-stack ecommerce platform. Features: product catalog, cart, checkout, and admin dashboard."
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
      </AnimatedSection>
      <AnimatedSection animationType="slideUp" delay={0.8}>
        <div id="contact-desktop">
          <Contact />
        </div>
      </AnimatedSection>
    </div>
  </div>
  
  <AnimatedSection animationType="fadeIn" delay={0.9}>
    <Footer />
  </AnimatedSection>
</main>
);
}
