import { useTheme } from './hooks/useTheme.js'
import { useLenis } from './hooks/useLenis.js'
import { useReducedMotion } from './hooks/useReducedMotion.js'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Work from './sections/Work.jsx'
import About from './sections/About.jsx'
import Stack from './sections/Stack.jsx'
import Journey from './sections/Journey.jsx'
import Certificates from './sections/Certificates.jsx'
import Resume from './sections/Resume.jsx'
import AskAI from './sections/AskAI.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  const { theme, toggle } = useTheme()
  const reduced = useReducedMotion()
  useLenis(reduced)
  return (
    <>
      <a href="#work" className="skip">Skip to content</a>
      <Cursor />
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero theme={theme} reduced={reduced} />
        <Work />
        <About />
        <Stack />
        <Journey />
        <Certificates />
        <Resume />
        <AskAI />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
