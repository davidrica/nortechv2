import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { LocalesPage ,NosotrosPage , ProductosPage,NotFound } from '../pages'

import { Navbar } from '../ui'

import { Footerbar  } from '../components'

export const RoutesApp = () => {
  return (
    <>


        <Navbar />

       


        <Routes>
           
            <Route path="nosotros"  element={ <NosotrosPage /> } />
            <Route path="locales"   element={ <LocalesPage /> } />
            <Route path="productos" element={ <ProductosPage /> } />
            <Route path="/" element={ < Navigate to="/locales" /> } />   
            <Route path="*" element={ < LocalesPage />}  />
        </Routes>

        <Footerbar />
      
    </>
  )
}
