
import { Html, Float, useGLTF  } from "@react-three/drei"

export default function Phone(){

    const smartphone = useGLTF("/assets/phone.glb")

    return <>

      <directionalLight color="#fbfce8" position={[1, 4, 5]} />
            <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
                <primitive object={smartphone.scene} rotation={[0, 2, 1.5]} position={[-4, 0, 0]}>
                    <Html
                    transform
                    wrapperClass='insideHtml'
                    rotation={[4.7, 0, -1.57]}
                    distanceFactor={2}
                    position={[0.01, 0.17, 0.01]}>
                        <iframe src="../form.html" title="FormPage"></iframe>
                    </Html>
                </primitive>
            </Float>

            <rectAreaLight 
                    width={5}
                    height={5}
                    intensity={85}
                    color={"#ff6900"}
                    position={[0, 0, 0]}
                    rotation={[0.5, 0, 6]}
                />
        
    </>
}