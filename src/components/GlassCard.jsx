export default function GlassCard({ children, className = '', brut = false, ...props }) {
  return (
    <div
      className={`glass ${brut ? 'border-2 !border-[var(--border)]' : ''} p-7 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
