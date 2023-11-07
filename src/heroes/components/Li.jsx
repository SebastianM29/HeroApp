import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'




export const Li = ({id,superhero,publisher,alter_ego,first_appearance,characters,typeC}) => {
  const imageUrl = `./assets/heroes/${id}.jpg`
  return (
    <motion.div 
    className={typeC}
    /**
     * Setting the initial keyframe to "null" will use
     * the current value to allow for interruptable keyframes.
     */
    whileHover={{ scale: [null, 1, 1.1 ] }}
    transition={{ duration: 0.2 }}
    
    
    >
      <div className='card heroCard'>
          <div className='row no-gutters'>
             
              <img src={imageUrl} className='card-img' alt={superhero} />
            
            
              <div className="card-body">
                  <h5 className="card-title">{superhero}</h5>
                  {
                    (alter_ego !== characters) && 
                    <p className="card-text">{alter_ego}</p>
                  }
                  

                  <p>{characters}</p>
                  <div className='alignMas'>

                  <Link className='btn btn-outline-info ml-auto'  to={`/hero/${id}`}>
                    Mas...
                  </Link>


                  </div>

              </div>
             
          </div>
       </div>
    </motion.div>
  )
}
