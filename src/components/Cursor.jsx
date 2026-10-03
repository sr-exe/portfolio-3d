import { useEffect, useRef } from 'react'
// Square crosshair that trails the pointer. Fine pointers only; off for reduced motion.
export default function Cursor() {
  const box = useRef(null)
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || still) return
    document.documentElement.classList.add('has-cursor')
    const el = box.current
    const p = { x: -100, y: -100, tx: -100, ty: -100 }
    let raf
    const move = (e) => { p.tx = e.clientX; p.ty = e.clientY }
    const over = (e) => el.classList.toggle('is-hot', !!e.target.closest?.('a,button,[data-hot],input'))
    const tick = () => {
      p.x += (p.tx - p.x) * 0.2; p.y += (p.ty - p.y) * 0.2
      el.style.transform = `translate(${p.x}px,${p.y}px)`
      raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])
  return <div ref={box} className="cursor-box" aria-hidden="true" />
}
