import { certificates } from '../data/portfolio.js'
import { useFileExists } from '../hooks/useFileExists.js'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'

function Cert({ c }) {
  const ok = useFileExists(c.file)
  return (
    <Reveal as="article" className="cert">
      <p className="tag">{c.meta[0]}</p>
      <h3>{c.title}</h3>
      <p className="issuer">{c.issuer}</p>
      <ul className="chips">{c.meta.slice(1).map((m) => <li key={m}>{m}</li>)}</ul>
      <p className="note">{c.note}</p>
      {ok ? (
        <a className="btn btn-solid" href={`${import.meta.env.BASE_URL}${c.file}`} target="_blank" rel="noreferrer noopener" data-hot>
          VIEW CERTIFICATE ↗<span className="sr-only">: {c.title}</span>
        </a>
      ) : (
        <span className="btn btn-off" role="link" aria-disabled="true">CERTIFICATE NOT UPLOADED YET</span>
      )}
    </Reveal>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <SectionHead n="05" label="CERTS" title={<>PAPER<br />TRAIL</>} kicker="Documents I actually hold. Click to open the scan." />
      <div className="cert-grid">{certificates.map((c) => <Cert key={c.id} c={c} />)}</div>
    </section>
  )
}
