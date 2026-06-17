import { motion } from 'framer-motion'
import Scene3D from '../components/Scene3D.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import { profile } from '../utils/data.js'

export default function Hero({ theme }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-grid overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene3D theme={theme} />
      </div>

      {/* HUD overlays — brutalist annotation tags */}
      <div className="hidden md:block absolute top-28 left-10 brut-tag z-10">
        STATUS: ONLINE
      </div>
      <div className="hidden md:block absolute bottom-32 right-10 brut-tag z-10">
        BUILD: 2026.06
      </div>
      <div className="hidden lg:block absolute top-1/2 right-16 brut-tag z-10">
        GPS_LOCK · FACE_VERIFY
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="brut-tag mb-7 pointer-events-auto"
        >
          B.TECH CSE · FULL STACK DEVELOPER
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.05 }}
          className="font-display font-bold leading-[0.95] tracking-tight text-[clamp(48px,9vw,108px)]"
        >
          <span className="block">{profile.name.split(' ')[0]}</span>
          <span className="block text-gradient">{profile.name.split(' ')[1]}.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-6 text-[15px] md:text-base text-[var(--muted)] max-w-md leading-relaxed"
        >
          I build production-grade systems — from a face-verifying attendance app to full-stack
          dashboards — with a backend-first mindset.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.35 }}
          className="mt-10 flex gap-4 flex-wrap justify-center pointer-events-auto"
        >
          <MagneticButton href="#projects" variant="primary">View Projects →</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">Get In Touch</MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-[var(--blue)] to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
