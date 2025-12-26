import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Target = (props) => {
  const targetRef = useRef()

  const { scene } = useGLTF('/models/computer.glb')

  useGSAP(() => {
    if (!targetRef.current) return

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  })

  return (
    <group
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={1.5}
    >
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/models/computer.glb')

export default Target
