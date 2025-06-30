"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'

export default function My3DObject() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={false} />
      <Box>
        <meshStandardMaterial color="#4ade80" />
      </Box>
    </Canvas>
  )
}
