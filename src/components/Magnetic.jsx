import { useRef } from 'react'
// Wraps a link/button so it leans toward the pointer. Disabled on touch / reduced motion via CSS var.
export default function Magnetic({ as: Tag = 'a', strength = 0.3, className = '', children, ...rest }) {
  const ref = useRef(null)
  const on = (e) => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px,${(e.clientY - r.top - r.height / 2) * strength}px)`
  }
  const off = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <Tag ref={ref} data-hot onPointerMove={on} onPointerLeave={off} className={`btn ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
