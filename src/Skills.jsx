/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react'
import skillSet from './skillData.js'

export default function Skills(){

    const [skillIndex, setSkillIndex] = useState(0)
    const skillsContentRef = useRef(null);

    const handleWheel = (e) => {
        if (!skillsContentRef.current.contains(e.target)) return;

        const scrollDelta = e.deltaY
        
        e.preventDefault()
        
        if(scrollDelta > 0 && skillIndex > -1 && skillIndex < 4){
            setSkillIndex(() => skillIndex + 1)
        } else if(scrollDelta < 0 && skillIndex > 0 && skillIndex < 4){
            setSkillIndex(() => skillIndex - 1)
        } else {
            setSkillIndex(0)
        }
    }

    useEffect(() => {
        document.addEventListener('wheel', handleWheel, { passive: false });
        return () => document.removeEventListener('wheel', handleWheel);
    }, [ skillIndex]);

    return (
        <div className='skillsContainer'>
            <h2 className='skillsTitle'>What I love to do</h2>
            <div className='skillsContent' ref={skillsContentRef}>
                {skillSet.map((el, i) => {
                    return <article className={skillIndex === i ? 'active skill' : i === (skillIndex + 1) ? 'next skill' : i === (skillIndex - 1) ? 'previous skill' : i === (skillIndex - 3) ? 'next skill' : i === (skillIndex - 4) ? 'active skill' : i !== skillIndex && 'inactive' } key={i} >
                                <h3>{el.name}</h3>
                                <p>{el.descritption}</p>
                            </article> 
                })
                }
            </div>
        </div>
    )
}