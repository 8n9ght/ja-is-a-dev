import { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from 'three';



const Heart = ({animate}) => {
    const { scene, animations, nodes, materials } = useGLTF('./models/real_heart.glb');
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {

        actions.beat.setLoop(THREE.LoopOnce);  // Play once per trigger
        actions.beat.clampWhenFinished = true;

        const playAnimation = () => {
            actions.beat.reset().play();
            actions.beat.timeScale = 1.5;
            animate();
            setTimeout(playAnimation, 2000); 
        };

        playAnimation();
            
        
    }, [actions]);

    return (
        <primitive object={scene} scale={3} position={[0, -.35, 0]} />
    );
}

export default Heart;