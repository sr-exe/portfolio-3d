import { socials } from '../data/portfolio.js'
import SectionHead from '../components/SectionHead.jsx'
import Magnetic from '../components/Magnetic.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHead n="08" label="CONTACT" title={<>SAY<br />HELLO</>} />
      <Reveal>
        <a className="big-mail" href={`mailto:${socials.email}`} data-hot>{socials.email}</a>
        <div className="btn-row">
          <Magnetic href={`mailto:${socials.email}`} className="btn-solid">EMAIL →</Magnetic>
          <Magnetic href={socials.github} target="_blank" rel="noreferrer noopener">GITHUB ↗</Magnetic>
          <Magnetic href={socials.linkedin} target="_blank" rel="noreferrer noopener">LINKEDIN ↗</Magnetic>
        </div>
      </Reveal>
    </section>
  )
}
