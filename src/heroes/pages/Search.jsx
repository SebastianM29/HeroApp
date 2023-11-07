import React from 'react'
import queryString from 'query-string'

import { Useform } from '../../hook/Useform'
import { useLocation, useNavigate } from 'react-router-dom'
import { Hero } from './Hero'
import { getHeoresByName } from '../helpers/getHeoresByName'
import { Li } from '../components'


export const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const typeClass = "box col-sm-5 col-md-6 col-lg-3 mt-5 p-3"
  const {q =''} = queryString.parse(location.search);

  const nameResult= getHeoresByName(q)
  console.log('este seria el resultado', nameResult)

  
  const onCreate = (event) => {

       event.preventDefault();
       if (desc.trim().length <= 1) {
         return
       }

      navigate(`?q=${desc}`)
      console.log('traigo de las query',q)

  }
  
  const showSearch = (q.length === 0)
  const showError = (q.length > 1) && nameResult.length === 0 


  const{desc,changeValue}= Useform({
   desc: q
  })






  return (
  
    


    <div className="row justify-content-between backSearch">

    <div className="col-4">
      <h2>Search your Hero</h2>
      <form onSubmit={onCreate}>
      <input
       type="text" 
       placeholder='Enter the name'
       className='form-control'
       autoComplete='off'
       name='desc'
       value={desc}
       onChange={changeValue}
        />
      <button className='btn btn-outline-primary mt-3'>Click here</button>

      </form>

    </div>

    <div className="col-8 d-flex justify-content-end align-items-start  mt-4  ">

       
     <div className="alert alert-primary col-md-3  " style={{ display: showSearch ? '' : 'none '}}>
      Search a Hero
     </div>

     


     <div className="alert alert-danger col-md-3  " style={{display: showError ? '' : 'none'}}>
      No hero found <b>{q}</b>
     </div>

     <div className='d-flex justify-content-end col-md-12'>

      {
      nameResult.map((hero) => (

          <Li typeC={typeClass} key ={ hero.id} {...hero} />
      ))


      }


     </div>
      



     </div>
      </div>

  
  
    
  )
}
