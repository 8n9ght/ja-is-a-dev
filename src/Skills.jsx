import { useState } from 'react'
import skillSet from './skillData.js'

export default function Skills(){

    const [skillIndex, setSkillIndex] = useState(0)

    const handleWheel = (e) => {
        const scrollDelta = e.deltaY
        e.stopPropagation()
        
        if(scrollDelta > 0 && skillIndex > -1 && skillIndex < 4){
            setSkillIndex(() => skillIndex + 1)
        } else if(scrollDelta < 0 && skillIndex > 0 && skillIndex < 4){
            setSkillIndex(() => skillIndex - 1)
        } else {
            setSkillIndex(0)
        }
    }

    return (
        <div className='skillsContainer'>
            <h2 className='skillsTitle'>What I love to do</h2>
            <div className='skillsContent' onWheel={handleWheel}>
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