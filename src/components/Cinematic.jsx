import { useEffect, useState } from "react";
import Beginning from "./Beginning";
import Intro from "./Intro";
import Space from "./Space";
import { Canvas } from "@react-three/fiber";
import Splash from "./Splash";

const Cinematic = ({setCinematicOver}) => {

    const [introOver, setIntroOver] = useState(false);
    const [spaceOver, setSpaceOver] = useState(false);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const [speed, setSpeed] = useState(0.1);

    return (
        <>
            { introOver === false  && <Intro setIntroOver={setIntroOver} setSpeed={setSpeed} delay={delay}  setSpaceOver={setSpaceOver} />}
            { spaceOver === false && <Splash />}
            { introOver && spaceOver === false && 
            <div className="space">     
                <Canvas>
                    <Space speed={speed} />
                </Canvas>
            </div>
            }
            { spaceOver && <Beginning setCinematicOver={setCinematicOver} delay={delay}/>}
        </>
    )
}

export default Cinematic;