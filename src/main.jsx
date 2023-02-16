import React from 'react'
import ReactDOM from 'react-dom/client'



import { SitioApp } from './SitioApp'


import './styles.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <SitioApp />
    </BrowserRouter>
  </React.StrictMode>
  
)
