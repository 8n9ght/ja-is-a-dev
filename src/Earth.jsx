import {  useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";
import * as THREE from 'three'

export default function Earth(){

    const bakedTexture = useLoader(TextureLoader, '../assets/textures/baked2.png')

    const [active, setActive] = useState(true)

    const sphere = useRef()

    useFrame((state, delta) => {
        if(active){
            sphere.current.rotation.y -= delta * 0.2
        }
    })

    const handleHoverTrue = () => {
        setActive(false)
    }
    
    const handleHoverFalse = () => {
        setActive(true)
    }

    return <>
        <ambientLight intensity={0.5} />
        <directionalLight color={'#00fbff'} />
        <mesh ref={sphere}  blending={1} rotation-x={0.4} onPointerEnter={handleHoverTrue} onPointerLeave={handleHoverFalse} scale={1.5} position={[-3, 0, -2]}>
            <sphereGeometry  />
            <meshPhongMaterial color={'#00fbff'} alphaMap={bakedTexture} side={THREE.DoubleSide} alphaTest={0.4} emissiveMap={bakedTexture} emissive emissiveIntensity={2} />
        </mesh>
    </>
        
    
}