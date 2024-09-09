import { Float, OrthographicCamera, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Heart from "./Heart";
import { BrightnessContrast, EffectComposer, Noise } from '@react-three/postprocessing';
import { Suspense, useRef } from 'react';

const Intro = ({setIntroOver, setSpeed, delay, setSpaceOver}) => {

    const waveRef = useRef(null);

    const pulseAnimation = () => {
        if (waveRef.current) {
            waveRef.current.classList.add('pulse');
        }   
    };

    const handleAnimation = async () => {
        const darkBg = document.querySelector('.splash');
        const heading = document.querySelector('.intro__heading');
        const heart = document.querySelector('.intro__3d__canvas');
        const text = document.querySelector('.intro__text');
        const wave = document.querySelector('.intro__3d__wave');
        const btns = document.querySelector('.intro__btns');
        
        darkBg.classList.add('shrink');
        heading.classList.add('fadeOut1');
        text.classList.add('fadeOut2');
        wave.classList.add('fadeOut2');
        btns.classList.add('fadeOut3');
        heart.classList.add('fadeOut4');
        
    await delay(500);
    setIntroOver(true);

    await delay(200);
    const space = document.querySelector('.space');
    space.classList.add('visible');

    await delay(5800);
    setSpeed(5);

    await delay(4800);
    space.classList.remove('visible');
    
    await delay(3000);
    setSpaceOver(true);
    

    };

 return (
    <div className="intro">
            <section className='intro__heading'>
                <p>Together, lets bring your digital experience to life</p>
            </section>
            <section className="intro__3d">
                <Canvas className="intro__3d__canvas" dpr={[1, 2]}>
                    <Preload all />
                    <EffectComposer>
                        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={100} />
                        <Float speed={3} rotationIntensity={1.5}>
                            <Suspense fallback={null}>
                                <Heart animate={pulseAnimation} />
                            </Suspense>
                        </Float>
                        <Noise />
                        <BrightnessContrast brightness={-.14} contrast={0} />
                    </EffectComposer>
                </Canvas>
                <article className="intro__3d__wave" ref={waveRef} />
            </section>

            <section className="intro__text">
                <p>Your journey starts now</p>
            </section>

            <section className="intro__btns">
                <button onClick={handleAnimation}>Begin the journey</button>
            </section>
        </div>
 )
}

export default Intro;