import { PointMaterial, Points } from "@react-three/drei";
import { useFrame, useThree  } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";


const Particles = ({particleSpeed}) => {
    const particlesCount = 50000;
    const positions = useMemo(() => {
      const pos = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i += 3) {
        pos[i] = (Math.random() - 0.5) * 100; // Étendre x
        pos[i + 1] = (Math.random() - 0.5) * 100; // Étendre y
        pos[i + 2] = Math.random() * 10000 - 5000; // Étendre z sur une plage plus grande
      }
      return pos;
    }, [particlesCount]);
  
    const particlesRef = useRef();
  
    useFrame(() => {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i + 2] += particleSpeed;
        if (positions[i + 2] > 100) {
          positions[i + 2] = Math.random() * -10000 - 5000;
          positions[i] = (Math.random() - 0.5) * 200;
          positions[i + 1] = (Math.random() - 0.5) * 200;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={particlesRef} positions={positions}>
            <PointMaterial
            size={0.2}
            color="#fff"
            depthTest={false} />
        </Points>
    )
}

const Space = ({speed}) => {
    const { camera } = useThree();
  
    useFrame(() => {
      camera.position.z -= speed;
    });
  
    return (
      <>
        <ambientLight intensity={0.5} />
        <EffectComposer>
          <Particles particleSpeed={speed} />
          <Bloom 
          intensity={0.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.1} />
        </EffectComposer>
      </>
    );
};

export default Space;

