import React, { useMemo } from 'react'
import { getHeroes } from '../helpers/getHeroes'
import { Li } from '../components'
import {motion} from 'framer-motion'






export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=> getHeroes(publisher),[publisher] ) 
    const typeClass = "box col-sm-12 col-md-3 mt-5 p-4"

    console.log(heroes)
  return (
  
    <motion.div className='box row mx-3 flex-wrap '
   
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 4,
        stiffness: 70,
        restDelta: 0.0001
      }
    }}
    >
        {
            heroes.map( hero => (
                <Li typeC = {typeClass} key={hero.id}
                {...hero}/>
            ))
        }
    </motion.div>
   
  )
}
