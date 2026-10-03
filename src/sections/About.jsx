import { profile } from '../data/portfolio.js'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHead n="02" label="ABOUT" title={<>THE<br />PERSON</>} />
      <div className="about-grid">
        <Reveal className="about-lead"><p>{profile.about[0]}</p></Reveal>
        <div className="about-body">
          {profile.about.slice(1).map((t, i) => <Reveal key={i} delay={0.05 * i}><p>{t}</p></Reveal>)}
          <Reveal className="spec">
            <p className="tag">QUICK SPEC</p>
            <dl>
              <div><dt>NAME</dt><dd>{profile.name}</dd></div>
              <div><dt>STATUS</dt><dd>{profile.title}</dd></div>
              <div><dt>DIRECTION</dt><dd>Java Full Stack</dd></div>
              <div><dt>BASE</dt><dd>{profile.location}</dd></div>
              <div><dt>GITHUB</dt><dd>@{profile.handle}</dd></div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
