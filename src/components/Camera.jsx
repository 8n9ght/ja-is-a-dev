import { useGLTF, Outlines, Html, OrthographicCamera, PresentationControls, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Carousel from './Carousel';
// import { useControls } from 'leva';

const Camera = () => {

    const { nodes, materials } = useGLTF('./models/camera2.glb');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const [selected, setSelected] = useState(null);

    /* const { rotation, position, positionCam, positionLight } = useControls(
        { 
            rotation: {
                value: { x: 0, y: 0, z: 0 },
                step: 0.01
            },
            position: {
                value: { x: 0, y: 0, z: 0 },
                step: 0.001
            },
            positionCam: {
                value: { x: 0, y: 0, z: 0 },
                step: 0.1
            },
            positionLight: {
                value: { x: 0, y: 0, z: 0 },
                step: 0.1
            }
        }
    ) */

    const handleMouseEnter = (id) => {
        setSelected(id);
    };

    const handleMouseLeave = () => {
        setSelected(null);
    };

    const changeImg = (index) => {
        const totalSlides = 3;
        setCurrentIndex((index + totalSlides) % totalSlides);
    };

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const cameraBody = nodes.Cube001;
    const lense = nodes.Cube001_1;
    const screen = nodes.Cube001_2;
    const lenseBody = nodes.Cube001_3;
    const handle = nodes.Cube001_4;
    const selectBtn = nodes.select;
    const upBtn = nodes.upBtn;
    const downBtn = nodes.downBtn;
    const leftBtn = nodes.leftBtn;
    const rightBtn = nodes.rightBtn;
    const camBtn = nodes.camBtn;
    const shutterBtn = nodes.shutterBtn;
    const infoBtn = nodes.infoBtn;

    return (
        <div className="camera">
            <Canvas className="camera__canvas">
                <OrthographicCamera 
                makeDefault
                zoom={1500}
                position={[0, 0, 2]}
                rotation={[-Math.PI / 9, 0, 0]}
                />
                <Float 
                floatingRange={[-0.1, 0.1]}
                floatIntensity={0.1}
                speed={1.5}
                rotationIntensity={0.05}
                >
                    <group rotation={[0, -2.6, 0]} position={[.06 , -1.5, -2]}>
                        <mesh geometry={cameraBody.geometry} material={cameraBody.material} />
                        <mesh geometry={lense.geometry} material={lense.material} />
                        <mesh geometry={screen.geometry} material={screen.material} />
                        <mesh geometry={lenseBody.geometry} material={lenseBody.material} />
                        <mesh geometry={handle.geometry} material={handle.material} />
                        <mesh geometry={selectBtn.geometry} material={selectBtn.material}  onPointerEnter={() => handleMouseEnter(selectBtn.id)} onPointerLeave={() => handleMouseLeave(selectBtn.id)} />

                        <mesh geometry={upBtn.geometry} material={upBtn.material}  onPointerEnter={() => handleMouseEnter(upBtn.id)} onPointerLeave={() => handleMouseLeave(upBtn.id)} />
                        <mesh geometry={downBtn.geometry} material={downBtn.material}  onPointerEnter={() => handleMouseEnter(downBtn.id)} onPointerLeave={() => handleMouseLeave(downBtn.id)} />

                        <mesh 
                        geometry={leftBtn.geometry}
                        material={leftBtn.material} 
                        onPointerEnter={() => handleMouseEnter(leftBtn.id)}
                        onPointerLeave={() => handleMouseLeave(leftBtn.id)}
                        onClick={() => changeImg(currentIndex - 1)}
                        >
                            {selected === 17 && <Outlines thickness={2} color="white" />}
                        </mesh>

                        <mesh 
                        geometry={rightBtn.geometry}
                        material={rightBtn.material} 
                        onPointerEnter={() => handleMouseEnter(rightBtn.id)}
                        onPointerLeave={() => handleMouseLeave(rightBtn.id)}
                        onClick={() => changeImg(currentIndex + 1)}
                        >
                            {selected === 16 && <Outlines thickness={2} color="white" />}
                        </mesh>

                        <mesh
                        geometry={infoBtn.geometry}
                        material={infoBtn.material} 
                        onPointerEnter={() => handleMouseEnter(infoBtn.id)}
                        onPointerLeave={() => handleMouseLeave(infoBtn.id)}
                        onClick={toggleContent}
                        >
                            {selected === 12 && <Outlines thickness={2} color="white" />}
                        </mesh>
                        <mesh geometry={camBtn.geometry} material={camBtn.material} />
                        <mesh geometry={shutterBtn.geometry} material={shutterBtn.material} />
                        <Html 
                            className='camera__canvas__iframe'
                            transform
                            distanceFactor={0.3}
                            position={[-.002, -.0415, .01]}
                            rotation-y={3.11}
                            rotation-z={0.01}
                            rotation-x={-0.015}
                        >
                            <Carousel currentIndex={currentIndex} showContent={showContent} />
                        </Html>
                        <Html 
                            className='camera__canvas__content'
                            transform
                            distanceFactor={0.5}
                            position={[-.13, -.08, -0.05]}
                            rotation-y={1.55}
                            rotation-z={.01}
                            rotation-x={-0.015}
                        >
                            <p className='camera__canvas__content--text'>Browse me</p>
                        </Html>
                    </group>
                </Float>
                <ambientLight intensity={0.5} />
                <directionalLight position={[ 0.8, .1, .1 ]} intensity={4} color="#fffbeb" />
                <directionalLight position={[ -5.7, 12, -17 ]} intensity={2} color="#fff" />
            </Canvas>
            <article className="camera__text">
                    <p className="camera__text--item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Eaque ullam eveniet possimus eum nisi optio, libero non provident voluptatibus quos quidem!
                        Minima et atque laboriosam velit.
                        Nulla modi quibusdam porro?
                    </p>
            </article>
        </div>
    )
}

export default Camera;