import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="font-display text-5xl font-bold tracking-tight text-gradient mb-10">
            SR<span className="text-[var(--text)]">.</span>
          </div>
          <div className="w-[180px] h-[3px] border-2 border-[var(--border)] overflow-hidden">
            <motion.div
              className="h-full bg-[var(--blue)]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
          <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase">
            Compiling Interface
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
