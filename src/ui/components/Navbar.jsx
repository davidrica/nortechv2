import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <>
<header>

      <nav className="navbar navbar-expand-md navbar-dark fixed-top  menucolor m-1 p-2">
            <a className="navbar-brand" href="#">
                <img src="logo.jpg" width="50" height="50" className="d-inline-block align-top" alt=""></img>
            </a>            
            <NavLink
                className="navbar-brand" 
                to="/"
                >
                TuBate
            </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">

            <NavLink 
                className={({isActive}) => ` nav-item nav-link ${ isActive ? 'active':''} ` } 
                to="/locales"
                >
                Locales
            </NavLink>
            <NavLink 
                className={({isActive}) => ` nav-item nav-link ${ isActive ? 'active':''} ` } 
                to="/productos"
                >
                Productos
            </NavLink>

          </ul>

        </div>




      </nav>
    </header>


        </>
    )
}