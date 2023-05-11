/* import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useControls } from "leva";

export default function Robot(props) {

  const robot = useGLTF("/assets/robotArm.glb");
  const animations = useAnimations(robot.animations, robot.scene);

  const robotCheck = props.activeRobot
  const setActiveRobot = props.setActiveRobot
  const { rotation } = useControls({
    position: {
      value: { x: 6.43, y: 3.79, z: -1.09 },
      step: 0.01,
    },
    rotation: {
      value: { x: 0.1, y: -1.7, z: 0 },
      step: 0.01,
    },
  });
  
const [isPlaying, setIsPlaying] = useState(false);

  const base = animations.actions.brasBase;
  const long = animations.actions.brasLong;
  const rotule = animations.actions.basePince;
  const pince1 = animations.actions.pince1;
  const pince2 = animations.actions.pince2;

  useEffect(() => {
    if (robotCheck && !isPlaying) {
      setIsPlaying(true);
      base.play();
      long.play();
      rotule.play();
      pince1.play();
      pince2.play();
    } else if (!robotCheck && isPlaying) {
      setIsPlaying(false);
      base.stop();
      long.stop();
      rotule.stop();
      pince1.stop();
      pince2.stop();
    }
  }, [robotCheck, isPlaying]);

  base.setLoop(false);
  long.setLoop(false);
  rotule.setLoop(false);
  pince1.setLoop(false);
  pince2.setLoop(false);

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
 */