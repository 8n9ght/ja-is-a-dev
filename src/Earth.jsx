/* eslint-disable react-hooks/exhaustive-deps */
import {  useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { TextureLoader } from "three";
import { Mesh, BoxGeometry, MeshLambertMaterial } from "three";
import * as THREE from 'three'

export default function Earth(){

    const bakedTexture = useLoader(TextureLoader, '../assets/textures/baked2.png')

    const [active, setActive] = useState(true)

    const geometry = new BoxGeometry(0.1, 0.1, 0.1);
    const material = new MeshLambertMaterial({ color: '#ff0000', emissive: '#ff0000', emissiveIntensity: 1.0 });
    const cube = new Mesh(geometry, material);

    const sphere = useRef()

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        if(cube.current){
            cube.current.position.y = 0.8 + Math.sin(time * 3) * 0.02;
        }

        if(active){
            sphere.current.rotation.y -= delta * 0.3
        } else {
            const origin = -1.25;
            const lerpFactor = 0.2;
            sphere.current.rotation.y = THREE.MathUtils.lerp(sphere.current.rotation.y, origin, lerpFactor);
        }
    })

    useEffect(() => {
        const cubeGeometry = new BoxGeometry(0.05, 0.05, 0.05);
        const cubeMaterial = new MeshLambertMaterial({ color: '#ff0000', emissive: '#ff0000', emissiveIntensity: 1.0 });
        const cubeMesh = new Mesh(cubeGeometry, cubeMaterial);
        cubeMesh.position.set(0.7, 0.75, -0.03);

        sphere.current.add(cubeMesh);
        cube.current = cubeMesh;

        return () => {
            sphere.current.remove(cubeMesh);
        };
    }, []);

    const handleHoverTrue = () => {
        setActive(false)
    }
    
    const handleHoverFalse = () => {
        setActive(true)
    }

    return <>
        <ambientLight intensity={0.5} />
        <directionalLight color={'#00fbff'} />
        <mesh ref={sphere} rotation={[0.28, -1.25, -0.23]} blending={1} onPointerEnter={handleHoverTrue} onPointerLeave={handleHoverFalse} scale={1.5} position={[-3, 0, -2]}>
            <sphereGeometry />
            <meshPhongMaterial color={'#00fbff'} alphaMap={bakedTexture} side={THREE.DoubleSide} alphaTest={0.4} emissiveMap={bakedTexture} emissive emissiveIntensity={2} />
        </mesh>
    </>
        
    
}