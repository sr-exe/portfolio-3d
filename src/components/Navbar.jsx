import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    const top = document.getElementById('top'); top && io.observe(top)
    navLinks.forEach((l) => { const el = document.querySelector(l.href); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <header className="nav">
      <a href="#top" className="brand" data-hot aria-label={`${profile.name} — back to top`}>
        <span>&lt;</span>SR<span className="acc">.EXE</span><span>&gt;</span>
      </a>
      <nav aria-label="Primary" className={`nav-links ${open ? 'is-open' : ''}`} id="primary-nav">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} data-hot onClick={() => setOpen(false)}
            aria-current={active === l.href.slice(1) ? 'true' : undefined}>
            <i>{l.n}</i>{l.label}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <ThemeToggle theme={theme} toggle={toggle} />
        <button type="button" className="menu-btn" aria-expanded={open} aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}>{open ? 'CLOSE' : 'MENU'}</button>
      </div>
    </header>
  )
}
