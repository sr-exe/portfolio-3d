import { useMagnetic } from '../hooks/useMagnetic.js'

export default function MagneticButton({ href, children, variant = 'primary', className = '', ...props }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.25)

  const base =
    'inline-flex items-center justify-center gap-2 font-display text-sm font-semibold px-7 py-3.5 transition-transform duration-200 select-none'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--blue)] text-white border-2 border-[var(--blue)] brut-shadow'
      : 'bg-transparent text-[var(--text)] border-2 border-[var(--border)] hover:bg-[var(--surface)]'

  return (
    <a
      ref={ref}
      href={href}
      data-cursor
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
