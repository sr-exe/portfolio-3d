import { useEffect, useState } from 'react'
import { navLinks, profile } from '../utils/data.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-14 py-4 transition-all duration-400 ${
        scrolled ? 'glass border-b border-[var(--border-soft)]' : 'border-b border-transparent'
      }`}
    >
      <a href="#hero" className="font-display text-base font-bold tracking-tight" data-cursor>
        {profile.name}<span className="text-[var(--blue)]">.</span>
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              data-cursor
              className="text-[13px] font-medium tracking-wide text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <a
          href={`mailto:${profile.email}`}
          data-cursor
          className="hidden sm:inline-block font-mono text-xs px-4 py-2 border-2 border-[var(--border)] hover:bg-[var(--blue)] hover:text-white hover:border-[var(--blue)] transition-colors"
        >
          HIRE_ME()
        </a>
      </div>
    </nav>
  )
}
