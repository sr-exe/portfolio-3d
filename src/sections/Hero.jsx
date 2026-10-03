import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { profile, socials } from '../data/portfolio.js'
import Magnetic from '../components/Magnetic.jsx'
import ResumeButtons from '../components/ResumeButtons.jsx'

const Scene3D = lazy(() => import('../components/Scene3D.jsx'))

const LINES = ['$ whoami → shubham.rathod', '$ status → learning Java, DSA, SQL', '$ building → toward Java Full Stack', '$ mode → honest, in progress']

function Typing({ reduced }) {
  const [i, setI] = useState(0)
  const [n, setN] = useState(reduced ? LINES[0].length : 0)
  useEffect(() => {
    if (reduced) return
    const full = LINES[i]
    if (n < full.length) { const t = setTimeout(() => setN(n + 1), 32); return () => clearTimeout(t) }
    const t = setTimeout(() => { setI((i + 1) % LINES.length); setN(0) }, 1800)
    return () => clearTimeout(t)
  }, [i, n, reduced])
  return <p className="term" aria-hidden="true">{LINES[i].slice(0, n)}<span className="caret">█</span></p>
}

function webgl() {
  try { return !!document.createElement('canvas').getContext('webgl') } catch { return false }
}

export default function Hero({ theme, reduced }) {
  const box = useRef(null)
  const [visible, setVisible] = useState(true)
  const [canGL, setCanGL] = useState(false)
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 820px)').matches
    // Defer the heavy chunk until the page is interactive.
    const go = () => setCanGL(wide && !reduced && webgl())
    const id = 'requestIdleCallback' in window ? requestIdleCallback(go, { timeout: 1200 }) : setTimeout(go, 400)
    return () => ('cancelIdleCallback' in window ? cancelIdleCallback(id) : clearTimeout(id))
  }, [reduced])
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 })
    io.observe(box.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="tag">SR.EXE // PORTFOLIO v3 // {profile.location.split(',')[0].toUpperCase()}</p>
          <h1 className="hero-name">
            <span className="glitch" data-text="SHUBHAM">SHUBHAM</span>
            <span className="glitch outline" data-text="RATHOD">RATHOD</span>
          </h1>
          <p className="hero-role"><b>{profile.title}</b><br />{profile.subtitle}</p>
          <p className="hero-line">Building systems. Learning deeply. Turning ideas into software.</p>
          <Typing reduced={reduced} />
          <div className="btn-row">
            <Magnetic href="#work" className="btn-solid">VIEW PROJECTS →</Magnetic>
            <ResumeButtons compact />
          </div>
          <p className="hero-social">
            <a href={socials.github} target="_blank" rel="noreferrer noopener" data-hot>GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" data-hot>LinkedIn</a>
            <a href={`mailto:${socials.email}`} data-hot>Email</a>
          </p>
        </div>

        <div className="hero-visual" ref={box}>
          {canGL ? (
            <Suspense fallback={<div className="cube-wrap"><div className="cube" aria-hidden="true">{[0,1,2,3,4,5].map(f=><i key={f} />)}</div></div>}>
              <Scene3D theme={theme} active={visible} />
            </Suspense>
          ) : (
            <div className="cube-wrap" aria-hidden="true">
              <div className="cube">{[0, 1, 2, 3, 4, 5].map((f) => <i key={f} />)}</div>
            </div>
          )}
          <div className="hud" aria-hidden="true">
            <span>[ DEV_SYSTEM ]</span><span>JAVA · SQL · DSA</span><span>NODES 36 · EDGES LIVE</span>
          </div>
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div>{Array.from({ length: 2 }).map((_, k) => (
          <span key={k}>JAVA ✕ DSA ✕ SQL ✕ BACKEND ✕ SPRING BOOT (NEXT) ✕ REST APIs ✕ FULL STACK ✕ </span>
        ))}</div>
      </div>
    </section>
  )
}
