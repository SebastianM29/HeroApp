import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { HeroesApp } from './HeroesApp'
import { GetRoutes } from './routes/GetRoutes'
import { RouterProvider } from 'react-router-dom'
const router = GetRoutes() 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
