import React from 'react'
import { HeroList } from '../components'


export const MarvelPages = () => {
  const dc = 'Marvel Comics'
  return (
    <>
    
    <HeroList publisher={dc} />
    </>
  )
}
