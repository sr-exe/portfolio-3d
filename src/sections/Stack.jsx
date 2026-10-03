import { stack } from '../data/portfolio.js'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Stack() {
  return (
    <section id="stack" className="section">
      <SectionHead n="03" label="STACK" title={<>WHERE I<br />STAND</>}
        kicker="Skills are grouped by honesty, not by volume. Focus is what I practise daily; the rest is where I'm heading." />
      <div className="stack-grid">
        {stack.map((g, i) => (
          <Reveal key={g.id} delay={i * 0.06} as="section" className={`stack-col stack-${g.id}`}>
            <p className="tag">{g.note}</p>
            <h3>{g.label}</h3>
            <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
