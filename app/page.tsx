// app/page.tsx

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectsSection from '../components/ProjectsSection';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certification from '../components/Certification';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionIndicator from '../components/SectionIndicator';
import SettingsPanel from '../components/SettingsPanel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectionIndicator />
      <SettingsPanel />
      
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
            <ProjectsSection />
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
            <ProjectsSection />
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
