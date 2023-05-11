import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

export default function Robot(props) {
  const robot = useGLTF("/assets/robotArm.glb");
  const animations = useAnimations(robot.animations, robot.scene);

  const robotCheck = props.activeRobot;

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (robotCheck && !isPlaying) {
      setIsPlaying(true);
      const actions = Object.values(animations.actions);
      actions.forEach((action, index) => {
        action.reset().setLoop(THREE.LoopOnce);
        if (robotCheck) {
          action.play();
          if (index === 0) {
            action.setEffectiveWeight(1.0);
          } else {
            action.setEffectiveWeight(0.0);
          }
        }
      });
    } else if (!robotCheck && isPlaying) {
      setIsPlaying(false);
      const actions = Object.values(animations.actions);
      actions.forEach((action) => action.stop());
    }
  }, [robotCheck, isPlaying, animations]);

  return (
    <>
      <ambientLight intensity={0.05} />
      <directionalLight color="#fbfce8" position={[2, 2.2, 5]} />
      <primitive
        object={robot.scene}
        position={[6.43, 3.79, -1.09]}
        rotation={[0.1, -1.7, 0]}
        scale={0.3}
      />
    </>
  );
}
