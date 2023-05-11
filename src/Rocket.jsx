import { Text, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three"

export default function Rocket() {

  const rocketRef = useRef();
  const rocket = useGLTF("/assets/rocket.glb");
  const animations = useAnimations(rocket.animations, rocket.scene)

  const radius = 1.2;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    const nextPos = new THREE.Vector3(
      radius * Math.cos(t + 0.01),
      radius * Math.sin(t + 0.01),
      radius * Math.cos(t + 0.01)
      );

    const dir = rocketRef.current.position.clone().sub(nextPos).normalize();

    // Calculate the up vector
    const up = new THREE.Vector3(0, 1, 0);
    
    // Set the rocket's orientation based on direction and up vectors
    rocketRef.current.quaternion.setFromUnitVectors(dir, up);
    
    rocketRef.current.position.z = radius * Math.cos(t);
    rocketRef.current.position.y = radius * Math.sin(t);
    rocketRef.current.position.x = radius * Math.cos(t);
    
    rocketRef.current.rotation.x = Math.sin(t / 2) * Math.PI * 0.2;
  });

  useEffect(() => {
    const fire1 = animations.actions.fire1;
    const fire2 = animations.actions.fire2;
    fire1.play()
    fire2.play()
  })

  return (
    <>
    <ambientLight intensity={0.3} />
    <directionalLight color="#fbfce8" position={[2, 2.2, 5]} intensity={0.5}/>

      <group position={[-1.85, -0.6, -1.5]}>
        <primitive
        ref={rocketRef}
        object={rocket.scene}
        scale={0.25} />

        <Text font="../fonts/Galhau_Heavy.ttf" color="#AD43F3">
          web adventurer
        </Text>
      </group>
    </>
  );
}
