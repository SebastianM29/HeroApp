import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPages = () => {
const navigate = useNavigate()
 
const onLogin = () => {
    navigate('/',{
      replace:true
    })
  }
  return (
    <div className='backLogin d-flex align-items-center justify-content-center'>

    <form className=' container col-md-4 '>
      <h1>LoginPages</h1>
       <button
       className='buttonLogin btn btn-primary mt-4'
       onClick={onLogin}
       >
        Login
       </button>



    </form>


    </div>

  )
}
