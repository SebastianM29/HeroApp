import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext';

export const LoginPages = () => {

  const{login} = useContext(AuthContext)
  const[user,setuser] = useState('');
  const navigate = useNavigate()

const getname= (e) => {
const nameRec = e.target.value
setuser(nameRec)
}
console.log("nombre afuera",user)




const onLogin = () => {
    
  login(user)

   console.log("deberia ver cuando hago click en el boton",user)
    navigate('/',{
      replace:true
    })
  }
  return (
    <div className='backLogin'>

    <form className=' container '>
      <h1 className='mt-2'>Login</h1>
       <input 
       type="text" 
       placeholder='ingrese su nombre' 
       className='mt-4 form-control '
       onChange={getname}/>

       <button
       className='buttonLogin btn btn-primary '
       onClick={onLogin}
       >
        Login
       </button>



    </form>


    </div>

  )
}
