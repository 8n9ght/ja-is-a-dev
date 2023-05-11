import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import App from './Welcome';
import Avatar from './Avatar';
import Skills from './Skills';
import Intro from './Intro';
import Project from './Projects';
import Form from './Phone';
import Earth from './Earth';
import Rocket from './Rocket';
import Robot from './Robot';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  const [activeRobot, setActiveRobot] = useState(false);

  return (
    <div className='wrapper'>
      <div className='welcomeWrapper'>
        <Canvas camera={ {
          fov: 45,
          near: 0.01,
          far: 1000,
          position: [ 0, 0, 6.3 ]
        } }>
          <Avatar />
        </Canvas>
        <App />
      </div>

      <div className='rocketContainer'>
        <Canvas>
          <Rocket />
        </Canvas>
      </div>

      <div className='introWrapper'>
        <Canvas camera={{
          fov: 45,
          near: 0.01,
          far: 1000,
        }}>
          <Earth />
        </Canvas>
        <Intro />
      </div>

      <div className='skillsWrapper'>
        <Skills />
      </div>

      <div className='projectsWrapper'>
        <Canvas style={{
          position: 'absolute',
          top:0,
        }} 
        camera={{
          position: [2,4,8],
          rotation: [0, 0, 0],
          fov: 45,
        }}>
          <Robot activeRobot={activeRobot} setActiveRobot={setActiveRobot}/>
        </Canvas>
        <Project activeRobot={activeRobot} setActiveRobot={setActiveRobot} />
      </div>

      <div className='formWrapper'>
        <Canvas>
          <Form />
        </Canvas>
      </div>
    </div>
  );
}

root.render(<Index />);

