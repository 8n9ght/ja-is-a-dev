import { Canvas, useThree } from '@react-three/fiber';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import { Html, Sphere, useCursor, useTexture, Stars } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import rock_C from './rock_Color.jpg';
import rock_D from './rock_D.jpg';
import rock_NGL from './rock_NGL.jpg';
import rock_R from './rock_R.jpg';
import rock_AO from './rock_AO.jpg';


const Construction = () => {

    const InteractiveSphere = ({ position }) => {

        const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
            rock_C,
            rock_D,
            rock_NGL,
            rock_R,
            rock_AO,
        ]);

        const sphereRef = useRef();
        const { mouse, viewport } = useThree();
        const [hovered, setHovered] = useState(false);

        const handleMouseMove = (event) => {
            if (!sphereRef.current) return;

            const { width, height } = viewport;
            const x = (mouse.x * width) / 2;
            const y = (mouse.y * height) / 2;
        
            const spherePosition = sphereRef.current.translation();
            const direction = new THREE.Vector3(x, y, 0).sub(spherePosition);
        
            direction.setZ(0);
            direction.normalize();
        
            sphereRef.current.applyImpulse({ x: direction.x * 0.5, y: direction.y * 0.5, z: 0 }, true);
        };

        useCursor(hovered);

        useEffect(() => {
            if (sphereRef.current) {
              sphereRef.current.setLinvel({ x: 1, y: 1, z: 0 });
            }
          }, []);

        return (
            <RigidBody
                ref={sphereRef}
                restitution={0.9}
                position={position}
                linearDamping={0}
                angularDamping={0}
                gravityScale={0}
            >
                <Sphere
                    args={[0.5, 32, 32]}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    onPointerMove={handleMouseMove}
                >
                    <meshStandardMaterial
                        map={colorMap}
                        displacementMap={displacementMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                        aoMap={aoMap}
                        displacementScale={0.1}
                    />
                </Sphere>
            </RigidBody>
        );
    }

    const Walls = () => {
        return (
          <>
            <CuboidCollider args={[0.1, 10, 10]} position={[-5, 0, 0]} />
            <CuboidCollider args={[0.1, 10, 10]} position={[5, 0, 0]} />
            <CuboidCollider args={[10, 0.1, 10]} position={[0, -5, 0]} />
            <CuboidCollider args={[10, 0.1, 10]} position={[0, 5, 0]} />
            <CuboidCollider args={[10, 10, 0.1]} position={[0, 0, -5]} />
            <CuboidCollider args={[10, 10, 0.1]} position={[0, 0, 5]} />
          </>
        );
    }

    return (
        <div className='wrapper'>
            <div className='canvas'>
                <Canvas className='canvas__item' >
                    <orthographicCamera position={[0, 5, 15]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[2, 0, 2]} intensity={50} color='#fc3003'  />
                    <pointLight position={[0, -5, 0]} intensity={20} color='#999eff'  />
                    <EffectComposer>
                        <Bloom />
                        <Physics>f
                            <Walls />
                            <InteractiveSphere position={[0, 0, 0]} />
                            <InteractiveSphere position={[0, 0, 0]} />
                            <InteractiveSphere position={[0, 0, 0]} />
                            <InteractiveSphere position={[0, 0, 0]} />
                            <InteractiveSphere position={[2, 2, 0]} />
                            <InteractiveSphere position={[2, 2, 0]} />
                            <InteractiveSphere position={[2, 2, 0]} />
                            <InteractiveSphere position={[2, 2, 0]} />
                            <InteractiveSphere position={[-2, -2, 0]} />
                            <InteractiveSphere position={[-2, -2, 0]} />
                            <InteractiveSphere position={[-2, -2, 0]} />
                            <InteractiveSphere position={[-2, -2, 0]} />
                        </Physics>
                    </EffectComposer>
                    <Stars radius={100} depth={30} count={2000} factor={4} saturation={2} fade speed={1} />
                    <Html className='html'>
                        <p className='canvas__text'>Something great is under construction !</p>
                    </Html>
                </Canvas>
            </div>
        </div>
    )
}

export default Construction;