import React from 'react'
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
    <main role="main" className="container p-5">
      <h1 className="mt-5">Pagina No Encontrada</h1>
        <Link  
            className="list-inline-item"
            to="/Locales"
            >
            Locales
            
        </Link >
        
      </main>
    </>
  )
}
