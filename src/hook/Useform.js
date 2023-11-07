import { useState } from "react"




export const Useform = (obj = {}) => {
    const [ form, setform ] = useState(obj)

   
  


    const changeValue = ({target}) => {
        const{name,value}= target
      console.log()
        setform({
            ...form,
            //(propiedades computadas de los objetos)"propiedades con nombre dinámico hace match con el valor 'name' encontrado y le asigna el nuevo valor
            [ name ]: value
        })
        
        
    }

    const onResetForm = () =>{
       
        setform( obj )

    }
    
    return{
        ...form,
      form,
      changeValue,
      onResetForm
    }  
}   
