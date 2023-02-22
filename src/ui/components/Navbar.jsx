import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <>
<header>

<nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
    <div className="container">
                
                <NavLink
                  className="navbar-brand" 
                  to="/"
                  >
                  Norte Chaqueño
                </NavLink>

                <button 
                  className="navbar-toggler navbar-toggler-right" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarResponsive" 
                  aria-controls="navbarResponsive" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="modal"  href="#modalinicio">Mis Facturas</a>
                           
                            </li>
                        
                        {/* <li className="nav-item"><a className="nav-link" href="#about">Acerca de.</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Equipo</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>

    </header>


        </>
    )
}