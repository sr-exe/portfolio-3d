import { profile } from '../utils/data.js'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] px-6 md:px-14 py-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
      <p className="font-mono text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}. Built with React, R3F &amp; intent.
      </p>
      <p className="font-mono text-xs text-[var(--muted)]">{profile.location} 🇮🇳</p>
    </footer>
  )
}
