import { resume } from '../data/portfolio.js'
import { useFileExists } from '../hooks/useFileExists.js'
import SectionHead from '../components/SectionHead.jsx'
import ResumeButtons from '../components/ResumeButtons.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Resume() {
  const ok = useFileExists(resume.file)
  return (
    <section id="resume" className="section">
      <SectionHead n="06" label="RESUME" title={<>THE<br />PDF</>} />
      <Reveal className="resume-box">
        <div className="btn-row"><ResumeButtons /></div>
        {ok === false && <p className="mono hint">Resume not uploaded yet. Place your file at <code>public/{resume.file}</code>. The buttons activate automatically.</p>}
        {ok && <p className="mono hint">Latest resume · PDF</p>}
      </Reveal>
    </section>
  )
}
