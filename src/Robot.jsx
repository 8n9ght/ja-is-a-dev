import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from 'three'


export default function Robot(props) {

  const robot = useGLTF("/assets/robotArm.glb");
  const animations = useAnimations(robot.animations, robot.scene);

  const robotCheck = props.activeRobot
  const setActiveRobot = props.setActiveRobot
  
  
const [isPlaying, setIsPlaying] = useState(false);

  const base = animations.actions.brasBase;
  const long = animations.actions.brasLong;
  const rotule = animations.actions.basePince;
  const pince1 = animations.actions.pince1;
  const pince2 = animations.actions.pince2;

  useEffect(() => {
    if (robotCheck && !isPlaying) {
      setIsPlaying(true);
      base.timeScale = 3.5
      long.timeScale = 3.5
      rotule.timeScale = 3.5
      pince1.timeScale = 3.5
      pince2.timeScale = 3.5
      base.play();
      long.play();
      rotule.play();
      pince1.play();
      pince2.play();
      
      const checkIfAnimationFinished = setInterval(() => {
        if (!base.isRunning() && !long.isRunning() && !rotule.isRunning() && !pince1.isRunning() && !pince2.isRunning()) {
          setIsPlaying(false);
          setActiveRobot(false);
          clearInterval(checkIfAnimationFinished);
        }
      }, 100);
    } else if (!robotCheck && isPlaying) {
      setIsPlaying(false);
      base.stop();
      long.stop();
      rotule.stop();
      pince1.stop();
      pince2.stop();
    }
  }, [robotCheck, isPlaying, base, long, rotule, pince1, pince2, setActiveRobot]);

  useEffect(() => {
    base.setLoop(THREE.LoopOnce);
    long.setLoop(THREE.LoopOnce);
    rotule.setLoop(THREE.LoopOnce);
    pince1.setLoop(THREE.LoopOnce);
    pince2.setLoop(THREE.LoopOnce);
  }, [base, long, rotule, pince1, pince2]);

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
