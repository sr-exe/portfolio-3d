import { useEffect } from 'react'
export function useLenis(disabled) {
  useEffect(() => {
    if (disabled) return
    let lenis, id, off = false
    import('lenis').then(({ default: Lenis }) => {
      if (off) return
      lenis = new Lenis({ duration: 1.05, easing: (t) => 1 - Math.pow(1 - t, 3) })
      const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
      id = requestAnimationFrame(raf)
    })
    return () => { off = true; cancelAnimationFrame(id); lenis?.destroy() }
  }, [disabled])
}
