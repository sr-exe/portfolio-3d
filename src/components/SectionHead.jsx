import Reveal from './Reveal.jsx'
export default function SectionHead({ n, label, title, kicker }) {
  return (
    <header className="sec-head">
      <Reveal className="sec-num" aria-hidden="true">{n}</Reveal>
      <div>
        <Reveal><p className="tag">{n} / {label}</p></Reveal>
        <Reveal delay={0.05}><h2 className="sec-title">{title}</h2></Reveal>
        {kicker && <Reveal delay={0.1}><p className="sec-kicker">{kicker}</p></Reveal>}
      </div>
    </header>
  )
}
