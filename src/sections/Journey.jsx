import { motion } from 'framer-motion'
import { progress, learning, education } from '../data/portfolio.js'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'

const bar = (v) => { const f = Math.round(v / 10); return '█'.repeat(f) + '░'.repeat(10 - f) }

export default function Journey() {
  return (
    <section id="journey" className="section">
      <SectionHead n="04" label="JOURNEY" title={<>CURRENTLY<br />BUILDING</>}
        kicker="Progress, not mastery. Bars are my own estimate of how far along I am toward job-ready." />
      <div className="journey-grid">
        <Reveal className="progress" as="div">
          <p className="tag">PROGRESS (SELF-ASSESSED)</p>
          {progress.map((p) => (
            <div className="bar-row" key={p.label}>
              <div className="bar-top"><span>{p.label}</span><span>{p.value}%</span></div>
              <div className="bar" role="progressbar" aria-label={p.label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={p.value}>
                <motion.i initial={{ width: 0 }} whileInView={{ width: `${p.value}%` }} viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }} />
              </div>
              <span className="bar-ascii" aria-hidden="true">{bar(p.value)}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="covered" delay={0.1}>
          <p className="tag">COVERED SO FAR</p>
          <ul className="chips">{learning.covered.map((c) => <li key={c}>{c}</li>)}</ul>
          <p className="approach"><b>HOW I LEARN —</b> {learning.approach}</p>
          <p className="mono path">{learning.path.join(' → ')}</p>
          <ul className="repo-links">
            {learning.repos.map((r) => (
              <li key={r.name}><a href={r.url} target="_blank" rel="noreferrer noopener" data-hot>{r.name} ↗</a> <span>{r.note}</span></li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="edu">
        <p className="tag">EDUCATION</p>
        <ol className="timeline">
          {education.map((e) => (
            <Reveal as="li" key={e.id} className={e.status === 'CURRENT' ? 'is-now' : ''}>
              <span className="dot" aria-hidden="true" />
              <p className="tag">{e.status}</p>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              <p className="mono">{e.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
