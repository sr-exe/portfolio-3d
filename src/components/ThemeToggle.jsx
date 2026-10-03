export default function ThemeToggle({ theme, toggle }) {
  const dark = theme === 'dark'
  return (
    <button type="button" className="theme-toggle" onClick={toggle} role="switch" aria-checked={dark}
      aria-label={`Dark mode ${dark ? 'on' : 'off'}. Switch to ${dark ? 'light' : 'dark'} mode`} data-hot>
      <span aria-hidden="true" className="tt-track"><span className="tt-knob" /></span>
      <span aria-hidden="true">{dark ? 'DARK' : 'LIGHT'}</span>
    </button>
  )
}
