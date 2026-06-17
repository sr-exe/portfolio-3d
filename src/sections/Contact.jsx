import { FiMail, FiGithub, FiLinkedin, FiPhone, FiMapPin } from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import { profile } from '../utils/data.js'

const links = [
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiGithub, label: profile.githubHandle, href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-14 py-28 md:py-36">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--blue)] uppercase mb-4">05 / Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="brut-border bg-[var(--surface)] p-10 md:p-16 text-center relative overflow-hidden">
            <h2 className="font-display font-bold text-[clamp(30px,5vw,52px)] leading-tight tracking-tight mb-4">
              Open for opportunities
            </h2>
            <p className="text-[15px] text-[var(--muted)] max-w-md mx-auto mb-3 flex items-center justify-center gap-2">
              <FiMapPin size={14} /> {profile.location}
            </p>
            <p className="text-[15px] text-[var(--muted)] max-w-md mx-auto mb-10">
              Internships, off-campus roles, or just a good conversation about systems —
              my inbox is open.
            </p>

            <div className="flex justify-center mb-10">
              <MagneticButton href={`mailto:${profile.email}`} variant="primary">
                Say Hello →
              </MagneticButton>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  data-cursor
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 border border-[var(--border-soft)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors"
                >
                  <l.icon size={15} /> {l.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
