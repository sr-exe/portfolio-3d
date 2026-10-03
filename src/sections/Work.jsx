import { useRef } from 'react'
import { projects } from '../data/portfolio.js'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'

function Layers({ stack }) {
  const ref = useRef(null)
  const move = (e) => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.setProperty('--ry', `${x * 28}deg`)
    ref.current.style.setProperty('--rx', `${-y * 22}deg`)
  }
  const reset = () => { ref.current.style.setProperty('--ry', '0deg'); ref.current.style.setProperty('--rx', '0deg') }
  return (
    <div className="layers" ref={ref} onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
      <div className="layers-stage">
        {stack.slice(0, 6).map((s, i) => (
          <span key={s} className="plate" style={{ '--z': `${i * 22}px`, '--i': i }}>{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="section">
      <SectionHead n="01" label="WORK" title={<>SELECTED<br />WORK</>}
        kicker="Real repositories, real code. Chosen for implementation, relevance and how well I can explain them. The rest of my GitHub is not shown." />
      <ol className="projects">
        {projects.map((p, i) => (
          <li key={p.id}>
            <Reveal as="article" className="project" >
              <div className="p-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <div className="p-main">
                <p className="tag">PROJECT {String(i + 1).padStart(2, '0')} · {p.kind}</p>
                <h3 className="p-name">{p.name}</h3>
                <dl className="p-facts">
                  <div><dt>PROBLEM</dt><dd>{p.problem}</dd></div>
                  <div><dt>SOLUTION</dt><dd>{p.solution}</dd></div>
                  <div><dt>MY PART</dt><dd>{p.contribution}</dd></div>
                </dl>
                <ul className="chips" aria-label="Technologies used">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="btn-row">
                  <a className="btn btn-solid" href={p.github} target="_blank" rel="noreferrer noopener" data-hot>
                    {p.live ? 'GITHUB →' : 'VIEW SOURCE →'}<span className="sr-only"> for {p.name}</span>
                  </a>
                  {p.live && (
                    <a className="btn" href={p.live} target="_blank" rel="noreferrer noopener" data-hot>
                      LIVE DEMO ↗<span className="sr-only"> for {p.name}</span>
                    </a>
                  )}
                </div>
              </div>
              <Layers stack={p.stack} />
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
