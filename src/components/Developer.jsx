import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef()

  const { nodes, materials } = useGLTF('/models/human/Developer.glb')

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx')
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx')
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx')
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx')

  if (idleAnimation[0]) idleAnimation[0].name = 'idle'
  if (saluteAnimation[0]) saluteAnimation[0].name = 'salute'
  if (clappingAnimation[0]) clappingAnimation[0].name = 'clapping'
  if (victoryAnimation[0]) victoryAnimation[0].name = 'victory'

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      saluteAnimation[0],
      clappingAnimation[0],
      victoryAnimation[0],
    ].filter(Boolean),
    group
  )

  useEffect(() => {
    if (!actions || !actions[animationName]) return

    const currentAction = actions[animationName]

    Object.values(actions).forEach((action) => {
      if (action !== currentAction) {
        action.fadeOut(0.3)
      }
    })

    currentAction.reset().fadeIn(0.3).play()

    return () => {
      currentAction?.stop()
    }
  }, [actions, animationName])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />

      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />

      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/models/human/Developer.glb')

export default Developer
