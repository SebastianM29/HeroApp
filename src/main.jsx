import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { HeroesApp } from './HeroesApp'
import { GetRoutes } from './routes/GetRoutes'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth'
const router = GetRoutes() 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
