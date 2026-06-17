import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    function onMove(e) {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    function onEnter(e) {
      if (e.target.closest('a, button, [data-cursor]')) {
        ring.style.width = '54px'
        ring.style.height = '54px'
        dot.style.width = '6px'
        dot.style.height = '6px'
      }
    }
    function onLeave(e) {
      if (e.target.closest('a, button, [data-cursor]')) {
        ring.style.width = '34px'
        ring.style.height = '34px'
        dot.style.width = '10px'
        dot.style.height = '10px'
      }
    }

    let raf
    function animate() {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.15
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.15
      ring.style.left = `${pos.current.rx}px`
      ring.style.top = `${pos.current.ry}px`
      raf = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
