import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Robot3D() {
  const groupRef = useRef()
  const headRef = useRef()
  const bodyRef = useRef()
  const leftArmRef = useRef()
  const rightArmRef = useRef()

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.PI / 4
    }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    // Gentle floating animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1
    }
    
    // Head slight rotation
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.3) * 0.1
      headRef.current.rotation.x = Math.sin(t * 0.2) * 0.05
    }
    
    // Arms gentle movement
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(t * 0.4) * 0.1 + 0.2
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(t * 0.4) * 0.1 - 0.2
    }
  })

  return (
    <group ref={groupRef} scale={0.8}>
      {/* Robot Body */}
      <group ref={bodyRef}>
        {/* Main Body - Chest */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 1.5, 0.8]} />
          <meshStandardMaterial color="#1e40af" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Chest Light/Core */}
        <mesh position={[0, 0.2, 0.41]}>
          <circleGeometry args={[0.25, 32]} />
          <meshStandardMaterial 
            color="#0ea5e9" 
            emissive="#0ea5e9" 
            emissiveIntensity={0.8}
          />
        </mesh>
        
        {/* ATLAS Text on Chest */}
        <mesh position={[0, -0.3, 0.41]}>
          <planeGeometry args={[0.8, 0.25]} />
          <meshStandardMaterial color="#0c4a6e" />
        </mesh>

        {/* Lower Body */}
        <mesh position={[0, -1.2, 0]}>
          <boxGeometry args={[0.9, 0.9, 0.7]} />
          <meshStandardMaterial color="#1e3a8a" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>

      {/* Robot Head */}
      <group ref={headRef} position={[0, 1.2, 0]}>
        {/* Main Head */}
        <mesh>
          <boxGeometry args={[1, 0.9, 1]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.5} />
        </mesh>
        
        {/* Helmet/Visor Area */}
        <mesh position={[0, 0, 0.35]}>
          <boxGeometry args={[0.8, 0.5, 0.1]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.2, 0.05, 0.41]}>
          <circleGeometry args={[0.12, 16]} />
          <meshStandardMaterial 
            color="#f59e0b" 
            emissive="#f59e0b" 
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh position={[0.2, 0.05, 0.41]}>
          <circleGeometry args={[0.12, 16]} />
          <meshStandardMaterial 
            color="#f59e0b" 
            emissive="#f59e0b" 
            emissiveIntensity={0.6}
          />
        </mesh>
        
        {/* Antenna */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.4]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial 
            color="#ef4444" 
            emissive="#ef4444" 
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.8, 0.3, 0]}>
        <mesh>
          <boxGeometry args={[0.35, 1.2, 0.4]} />
          <meshStandardMaterial color="#1e40af" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Shoulder */}
        <mesh position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.25]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.5} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.7, 0]}>
          <boxGeometry args={[0.25, 0.3, 0.3]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.8, 0.3, 0]}>
        <mesh>
          <boxGeometry args={[0.35, 1.2, 0.4]} />
          <meshStandardMaterial color="#1e40af" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Shoulder */}
        <mesh position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.25]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.5} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.7, 0]}>
          <boxGeometry args={[0.25, 0.3, 0.3]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      </group>

      {/* Left Leg */}
      <group position={[-0.35, -2.2, 0]}>
        <mesh>
          <boxGeometry args={[0.4, 1.2, 0.45]} />
          <meshStandardMaterial color="#1e3a8a" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Foot */}
        <mesh position={[0, -0.7, 0.15]}>
          <boxGeometry args={[0.5, 0.25, 0.6]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
      </group>

      {/* Right Leg */}
      <group position={[0.35, -2.2, 0]}>
        <mesh>
          <boxGeometry args={[0.4, 1.2, 0.45]} />
          <meshStandardMaterial color="#1e3a8a" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Foot */}
        <mesh position={[0, -0.7, 0.15]}>
          <boxGeometry args={[0.5, 0.25, 0.6]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
      </group>

      {/* Backpack/Equipment */}
      <mesh position={[0, 0, -0.6]}>
        <boxGeometry args={[0.8, 1, 0.4]} />
        <meshStandardMaterial color="#475569" metalness={0.5} />
      </mesh>
    </group>
  )
}
