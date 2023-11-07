import React from 'react'
import { heroes } from '../data/heroes'

export const getHeoresByName = (name) => {
  name = name.toLocaleLowerCase().trim()


    if (name == 0 ) {
    return[]
   }

   return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name))

 
}
