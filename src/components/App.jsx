import Univers from './Univers';
import { useEffect, useState } from 'react';
import Cinematic from './Cinematic';

const App = () => {

  const [cinematicOver, setCinematicOver] = useState(false);

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if(cinematicOver){
        wrapper.classList.remove('no-scroll');
        wrapper.classList.add('darkBg')
    }
}, [cinematicOver])

  return (
    <>
      {!cinematicOver && <Cinematic setCinematicOver={setCinematicOver} />}
      {cinematicOver && <Univers />}
    </>
  )
}

export default App;
