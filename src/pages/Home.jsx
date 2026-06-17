import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Projects from '../sections/Projects.jsx'
import Achievements from '../sections/Achievements.jsx'
import Contact from '../sections/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home({ theme }) {
  return (
    <main>
      <Hero theme={theme} />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
