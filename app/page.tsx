import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Timeline from '../components/Timeline/Timeline'
import Experience from '../components/Experience/Experience'
import Education from '../components/Education/Education'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="container mx-auto px-6">
       
        <About />
        <Skills />
        <Projects />
        <Education />
        <Timeline />
        <Experience />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}
