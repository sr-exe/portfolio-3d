import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function buildGraph() {
  let s = 7
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647)
  const pts = Array.from({ length: 36 }, () => {
    const u = rnd() * 2 - 1, t = rnd() * Math.PI * 2, r = 1.9 + rnd() * 0.9, q = Math.sqrt(1 - u * u)
    return new THREE.Vector3(r * q * Math.cos(t), r * u, r * q * Math.sin(t))
  })
  const e = []
  pts.forEach((a, i) => {
    pts.map((b, j) => ({ j, d: a.distanceTo(b) })).filter((o) => o.j > i).sort((x, y) => x.d - y.d).slice(0, 2)
      .forEach((o) => { if (o.d < 2.3) e.push(a.x, a.y, a.z, pts[o.j].x, pts[o.j].y, pts[o.j].z) })
  })
  return { positions: new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z])), edges: new Float32Array(e) }
}
const GRAPH = buildGraph()
const FRAME = new THREE.EdgesGeometry(new THREE.BoxGeometry(0.8, 0.5, 0.18))

// Abstract "developer system": wireframe core + network of nodes/edges + orbiting table frames.
// ~40 nodes, no textures, no fonts, no post-processing.
function System({ accent, ink }) {
  const group = useRef()
  const ring = useRef()
  const { positions, edges } = GRAPH

  useFrame((st, dt) => {
    const g = group.current
    const sy = typeof window !== 'undefined' ? window.scrollY / 900 : 0
    g.rotation.y += dt * 0.12
    g.rotation.x += (st.pointer.y * 0.35 + sy * 0.5 - g.rotation.x) * 0.04
    g.position.x += (st.pointer.x * 0.35 - g.position.x) * 0.04
    ring.current.rotation.z += dt * 0.25
    ring.current.rotation.x += dt * 0.1
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color={accent} wireframe />
      </mesh>
      <mesh scale={0.55}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={ink} wireframe />
      </mesh>
      <points>
        <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
        <pointsMaterial color={accent} size={0.09} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry><bufferAttribute attach="attributes-position" args={[edges, 3]} /></bufferGeometry>
        <lineBasicMaterial color={ink} transparent opacity={0.45} />
      </lineSegments>
      <group ref={ring}>
        {[0, 1, 2].map((i) => (
          <lineSegments key={i} position={[Math.cos(i * 2.1) * 3.1, Math.sin(i * 2.1) * 1.4, Math.sin(i * 2.1) * 1.6]} rotation={[i, i * 0.7, 0]}>
            <primitive object={FRAME} attach="geometry" />
            <lineBasicMaterial color={accent} />
          </lineSegments>
        ))}
      </group>
    </group>
  )
}

export default function Scene3D({ theme, active }) {
  const accent = '#ff4d1c'
  const ink = theme === 'dark' ? '#f1efe6' : '#0a0a0a'
  return (
    <Canvas dpr={[1, 1.5]} frameloop={active ? 'always' : 'never'} camera={{ position: [0, 0, 7.2], fov: 45 }}
      gl={{ antialias: false, powerPreference: 'low-power', alpha: true }} aria-hidden="true">
      <System accent={accent} ink={ink} />
    </Canvas>
  )
}
