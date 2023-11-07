import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { HeroesApp } from '../HeroesApp'
import { ErrorPages } from './pages/ErrorPages'



import { DcPages, Hero, MarvelPages, Search } from '../heroes'
import { LoginPages } from '../auth'


export const GetRoutes = () => createBrowserRouter([
  {
    path:"/",
    element: <HeroesApp/>,
    errorElement:<ErrorPages/>,

    children:[
      {
        path:"marvel",
        element:<MarvelPages/>
      },
      {
        path:"dc",
        element:<DcPages/>
      },
      {
        path:'hero/:id',
        element: <Hero/>
      },
        
      {
      path:'search',
      element:<Search/>
      },
      {
      path:'/',
      element:<MarvelPages/>
      }
     ]
    },
    
    {
        path:"login",
        element:<LoginPages/>
     },


    







])
