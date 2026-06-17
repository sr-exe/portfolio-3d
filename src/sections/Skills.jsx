import Reveal from '../components/Reveal.jsx'
import { skills } from '../utils/data.js'

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-14 py-28 md:py-36 bg-[var(--bg-soft)]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--blue)] uppercase mb-4">02 / Arsenal</p>
          <h2 className="font-display font-bold text-[clamp(30px,4vw,50px)] leading-tight tracking-tight mb-16">
            What I build with
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 0.07}>
              <div className="brut-border p-5 bg-[var(--surface)] hover:bg-[var(--surface-strong)] transition-colors h-full">
                <div className="font-display text-base font-semibold mb-1">{s.name}</div>
                <div className="font-mono text-[10px] tracking-widest text-[var(--muted)] uppercase mb-4">
                  {s.cat}
                </div>
                <div className="h-[3px] bg-[var(--border-soft)]">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--blue)] to-[var(--purple)]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
