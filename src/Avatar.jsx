import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";


export default function Avatar(){

    let me = useGLTF("/assets/avatar.glb");
    const animations = useAnimations(me.animations, me.scene)

    useEffect(() => {
        const action = animations.actions.move
        action.play()
        
    })

    return (
<>

    <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
    <ambientLight intensity={ 0.5 } />

    <primitive object={me.scene} position={[4, -0.8, 2]} scale={0.52}/>
    
        
</>

    )
}