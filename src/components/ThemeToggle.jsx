import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      data-cursor
      className="relative w-[52px] h-[28px] border-2 border-[var(--border)] bg-[var(--surface)] flex items-center px-[3px] transition-colors"
    >
      <span
        className="absolute top-[2px] left-[2px] w-[20px] h-[20px] bg-[var(--blue)] flex items-center justify-center text-white transition-transform duration-300"
        style={{ transform: isDark ? 'translateX(0px)' : 'translateX(22px)' }}
      >
        {isDark ? <FiMoon size={11} /> : <FiSun size={11} />}
      </span>
    </button>
  )
}
