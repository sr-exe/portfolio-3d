import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../utils/data.js'

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-14 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--blue)] uppercase mb-4">03 / Work</p>
          <h2 className="font-display font-bold text-[clamp(30px,4vw,50px)] leading-tight tracking-tight mb-16">
            Projects I&apos;ve shipped
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="group block brut-border bg-[var(--surface)] p-8 h-full transition-all duration-300 hover:bg-[var(--surface-strong)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_0_var(--blue)]"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-[var(--border-soft)] text-[var(--blue)]">
                    {p.badge}
                  </span>
                  <FiArrowUpRight className="text-[var(--muted)] group-hover:text-[var(--blue)] group-hover:rotate-45 transition-all" size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 tracking-tight flex items-center gap-3">
                  {p.icon && (
                    <img
                      src={p.icon}
                      alt={`${p.title} app icon`}
                      width="32"
                      height="32"
                      loading="lazy"
                      className="w-8 h-8 border border-[var(--border-soft)] bg-white"
                    />
                  )}
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">{p.desc}</p>
                {p.note && (
                  <p className="text-xs font-medium text-[var(--purple)] mb-5 leading-relaxed">★ {p.note}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2.5 py-1 border border-[var(--border-soft)] text-[var(--muted)]">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
