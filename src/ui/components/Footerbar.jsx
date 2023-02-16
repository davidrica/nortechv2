import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Footerbar = () => {
  return (
    <>
    <footer className="outer footer ">
      <div className="outer" >    

        <ul className="list-inline">
          <Link  
                className="list-inline-item"
                to="/Locales"
                >
                
                <img class="imagenRedes" src="./whatsapp.png"></img>
            </Link >
         
          
          
          <li className="list-inline-item">

              <a href="https://www.instagram.com/tu_bate/" target="_blank">
                <img class="imagenRedes" src="./instagram.png"></img>
               
                </a>
                

          </li>
          <li className="list-inline-item">

              <a href="https://www.facebook.com/profile.php?id=100064073860731" target="_blank">
              <img class="imagenRedes" src="./facebook.png"></img>
             
              </a>
              
 
          </li>
          
          
        </ul>
      </div>
        

    </footer>
    </>
  )
}
