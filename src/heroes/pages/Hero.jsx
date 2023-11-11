import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'
import {motion} from 'framer-motion'

export const Hero = () => {
 
  const {id} = useParams()
  const navigate = useNavigate()

  console.log(id)
  
  const getHeroe = useMemo(()=>getHeroById(id),[id]) ;



  const onNavigateReturn = () => {
  navigate(-1)
  }
  

  if(!getHeroe){
   return <Navigate to="/"/>
  }


  console.log(getHeroe)
  return (
    <>
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}

    >
     <div className="row">

       <div className='col-sm-12 col-md-8 col-lg-3 '>
         <div className="card">
             <img src= {`/resources/heroes/${getHeroe.id}.jpg`} className='card-img img-thumbnail' alt={getHeroe.superhero} />
             <div className="card-body">
             <h2 className="card-title">{getHeroe.superhero}</h2>
             <ul>
              <li className='list-group-item'><b>Alter ego:</b> {getHeroe.alter_ego}</li>
              <li className='list-group-item'><b>Publisher:</b> {getHeroe.publisher}</li>
              <li className='list-group-item'><b>First appearance:</b> {getHeroe.first_appearance}</li>
             </ul>

             <h5 className='mt-5'>Characters</h5>
             <p>{getHeroe.characters}</p>
             
             <button className='btn btn-outline-danger float-end'
             onClick={onNavigateReturn}>
              Back
             </button>

             </div>
    
         </div>

        </div>
     </div>
    </motion.div>
    </>
   
  )
}
