import { resume } from '../data/portfolio.js'
import { useFileExists } from '../hooks/useFileExists.js'
import Magnetic from './Magnetic.jsx'

const url = (f) => `${import.meta.env.BASE_URL}${f}`

// Works automatically once public/resume.pdf exists.
export default function ResumeButtons({ compact = false }) {
  const ok = useFileExists(resume.file)
  if (ok) {
    return (
      <>
        <Magnetic href={url(resume.file)} download={resume.downloadName} className="btn-solid">DOWNLOAD RESUME ↓</Magnetic>
        {!compact && <Magnetic href={url(resume.file)} target="_blank" rel="noreferrer noopener">VIEW RESUME ↗</Magnetic>}
      </>
    )
  }
  return compact ? (
    <Magnetic href="#resume">RESUME ↓</Magnetic>
  ) : (
    <>
      <span className="btn btn-off" role="link" aria-disabled="true">DOWNLOAD RESUME</span>
      <span className="btn btn-off" role="link" aria-disabled="true">VIEW RESUME</span>
    </>
  )
}
