import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'

/* ---------- Floating ID badge — references BIOMARK's auth/scan identity ---------- */
function Badge({ dark }) {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = Math.sin(t * 0.35) * 0.5 + state.pointer.x * 0.4
    group.current.rotation.x = Math.sin(t * 0.25) * 0.08 - state.pointer.y * 0.2
    group.current.position.y = Math.sin(t * 0.6) * 0.18
  })

  const cardColor = dark ? '#0f1117' : '#101216'
  const stripeColor = '#3b82f6'

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* card body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.6, 3.4, 0.12]} />
        <meshStandardMaterial color={cardColor} metalness={0.7} roughness={0.25} />
      </mesh>

      {/* emissive screen / portrait plate */}
      <mesh position={[0, 0.65, 0.07]}>
        <planeGeometry args={[1.9, 1.5]} />
        <meshStandardMaterial
          color="#13203f"
          emissive="#3b82f6"
          emissiveIntensity={dark ? 1.3 : 1.6}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* scan ring inside the portrait plate — face-verification motif */}
      <mesh position={[0, 0.65, 0.09]}>
        <ringGeometry args={[0.42, 0.47, 48]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
      </mesh>

      {/* identity bars (name/role lines) */}
      {[0.18, -0.02].map((y, i) => (
        <mesh key={i} position={[-0.15, -0.15 + y, 0.07]}>
          <boxGeometry args={[1.5 - i * 0.4, 0.07, 0.01]} />
          <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={1.8} />
        </mesh>
      ))}

      {/* QR / data grid (dynamic QR backup feature) */}
      {Array.from({ length: 25 }).map((_, i) => {
        const cols = 5
        const x = (i % cols) * 0.18 - 0.36
        const y = Math.floor(i / cols) * 0.18
        const lit = (i * 7) % 3 !== 0
        return (
          <mesh key={i} position={[x + 0.55, y - 1.3, 0.07]}>
            <boxGeometry args={[0.14, 0.14, 0.01]} />
            <meshStandardMaterial
              color={lit ? '#06b6d4' : cardColor}
              emissive={lit ? '#06b6d4' : '#000000'}
              emissiveIntensity={lit ? 1.5 : 0}
            />
          </mesh>
        )
      })}

      {/* magnetic stripe */}
      <mesh position={[0, -1.5, 0.065]}>
        <boxGeometry args={[2.6, 0.32, 0.02]} />
        <meshStandardMaterial color={stripeColor} metalness={0.9} roughness={0.3} emissive="#3b82f6" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

/* ---------- Floating geometric debris ---------- */
function Shape({ geometry, color, position, scale = 1, speed = 1 }) {
  return (
    <Float speed={speed} rotationIntensity={1.1} floatIntensity={1.4}>
      <mesh position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial color={color} metalness={0.75} roughness={0.2} emissive={color} emissiveIntensity={0.35} />
      </mesh>
    </Float>
  )
}

function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { geometry: <octahedronGeometry args={[0.38]} />, color: '#8b5cf6', position: [-3.6, 1.4, 0.4], speed: 1.1 },
      { geometry: <icosahedronGeometry args={[0.3]} />, color: '#3b82f6', position: [3.3, 1.8, -0.6], speed: 0.9 },
      { geometry: <tetrahedronGeometry args={[0.34]} />, color: '#06b6d4', position: [-3, -1.5, 0.2], speed: 1.3 },
      { geometry: <octahedronGeometry args={[0.22]} />, color: '#3b82f6', position: [3.4, -1.2, 0.5], speed: 1.0 },
      { geometry: <boxGeometry args={[0.34, 0.34, 0.34]} />, color: '#8b5cf6', position: [2.1, -2.6, -0.3], speed: 0.8 },
      { geometry: <icosahedronGeometry args={[0.2]} />, color: '#06b6d4', position: [-2.4, 2.7, -0.4], speed: 1.2 },
    ],
    []
  )
  return (
    <>
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
    </>
  )
}

/* ---------- Wireframe structural rings (brutalist grid in 3D space) ---------- */
function Rings() {
  const ring = useRef(null)
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.06
  })
  return (
    <group ref={ring}>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[4.6, 0.012, 8, 80]} />
        <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 5, 0]}>
        <torusGeometry args={[3.9, 0.01, 8, 80]} />
        <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  )
}

/* ---------- Lighting that drifts gently ---------- */
function Lights({ dark }) {
  const blue = useRef(null)
  const purple = useRef(null)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (blue.current) {
      blue.current.position.x = -4 + Math.sin(t * 0.5) * 1.4
      blue.current.position.y = 3 + Math.cos(t * 0.4) * 1
    }
    if (purple.current) {
      purple.current.position.x = 4 + Math.cos(t * 0.6) * 1.4
      purple.current.position.y = -2 + Math.sin(t * 0.5) * 1
    }
  })
  return (
    <>
      <ambientLight intensity={dark ? 0.25 : 0.6} />
      <pointLight ref={blue} color="#3b82f6" intensity={dark ? 5 : 3.5} distance={16} position={[-4, 3, 3]} />
      <pointLight ref={purple} color="#8b5cf6" intensity={dark ? 4 : 3} distance={16} position={[4, -2, 3]} />
      <pointLight color="#06b6d4" intensity={dark ? 2.5 : 1.8} distance={12} position={[0, 3, -3]} />
    </>
  )
}

/* ---------- Camera parallax rig ---------- */
function Rig({ children }) {
  const group = useRef(null)
  useFrame((state) => {
    if (!group.current) return
    const targetX = state.pointer.y * 0.15
    const targetY = state.pointer.x * 0.25
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04
  })
  return <group ref={group}>{children}</group>
}

export default function Scene3D({ theme = 'dark' }) {
  const dark = theme === 'dark'
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Lights dark={dark} />
      <Rig>
        <Badge dark={dark} />
        <FloatingShapes />
        <Rings />
      </Rig>
      <Sparkles
        count={140}
        scale={[10, 8, 6]}
        size={2.2}
        speed={0.25}
        color={dark ? '#60a5fa' : '#2541d8'}
        opacity={dark ? 0.7 : 0.45}
      />
      <fog attach="fog" args={[dark ? '#050505' : '#f1efe8', 8, 16]} />
    </Canvas>
  )
}
