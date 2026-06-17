import Reveal from '../components/Reveal.jsx'
import GlassCard from '../components/GlassCard.jsx'
import { profile } from '../utils/data.js'
import avatar from '../assets/profile-avatar.jpg'

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-14 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--blue)] uppercase mb-4">01 / About</p>
          <h2 className="font-display font-bold text-[clamp(30px,4vw,50px)] leading-tight tracking-tight mb-16">
            Explorer.<br className="hidden md:block" /> Builder. Systems thinker.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16">
          <div>
            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-[15px] leading-[1.85] text-[var(--muted)] mb-5">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {profile.stats.map((s) => (
                  <div key={s.label} className="brut-border p-5 bg-[var(--surface)]">
                    <div className="font-display text-3xl font-bold text-gradient">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-widest text-[var(--muted)] uppercase mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="brut-border bg-[var(--surface)] p-2 mb-7 w-fit mx-auto md:mx-0">
                <img
                  src={avatar}
                  alt="Shubham Rathod — avatar"
                  width="148"
                  height="148"
                  loading="lazy"
                  className="w-[148px] h-[148px] object-cover grayscale-[15%]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <GlassCard brut>
                <p className="font-mono text-[11px] tracking-[0.25em] text-[var(--blue)] uppercase mb-5">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {profile.focusAreas.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium px-3 py-1.5 border border-[var(--border-soft)] rounded-full text-[var(--muted)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="border-t border-[var(--border-soft)] pt-6">
                  <p className="font-mono text-[11px] tracking-[0.25em] text-[var(--purple)] uppercase mb-3">
                    Current Goal
                  </p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Land an off-campus Software Developer role by 2028 — my college runs no
                    placements, so the hunt, and the proof-of-work behind it, is on me.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
