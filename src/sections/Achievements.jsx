import Reveal from '../components/Reveal.jsx'
import { achievements } from '../utils/data.js'

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 md:px-14 py-28 md:py-36 bg-[var(--bg-soft)]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--blue)] uppercase mb-4">04 / Journey</p>
          <h2 className="font-display font-bold text-[clamp(30px,4vw,50px)] leading-tight tracking-tight mb-16">
            Milestones &amp; recognition
          </h2>
        </Reveal>

        <div className="relative pl-8 md:pl-10 border-l-2 border-[var(--border-soft)]">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.12} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 border-2 border-[var(--border)] bg-[var(--blue)]" />
              <p className="font-mono text-[11px] tracking-[0.25em] text-[var(--blue)] uppercase mb-2">{a.date}</p>
              <h3 className="font-display text-xl font-bold mb-1 tracking-tight">{a.title}</h3>
              <p className="text-sm text-[var(--muted)] mb-3">{a.place}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xl">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
