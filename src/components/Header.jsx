import React from 'react'
const handleAnchorClick = event => {
    // 👇️ use event.preventDefault() if you want to
    // prevent navigation
    // event.preventDefault();

    console.log('Anchor element clicked');

    // 👇️ refers to the link element
    console.log(event.currentTarget);
  };
  

export const Header = () => {
  return (
    <>
    <header id="main-header" data-height-onload="99">
         
        <div className="container clearfix et_menu_container">
            <div className="logo_container">
                <span className="logo_helper"></span>
                <a href="index.html">
                    <img src="img/logo.ico" width="2214" height="674" alt="Norte Chaqueño" id="logo" data-height-percentage="56" />
                </a>
            </div>
                 


             
            <div id="et-top-navigation" data-height="99" data-fixed-height="40">
                <nav id="top-menu-nav">
                    <ul id="top-menu" className="nav">
                        <li><a href="#">Inicio</a></li>
                        <li className="page_item page-item-47"><a href="#">Otras</a></li>
                        <li className="page_item page-item-97">
                            <a   data-bs-toggle="modal" href="#modalinicio">Ver Facturas</a>
                        </li>
                    </ul>
                </nav>
                <div id="et_mobile_nav_menu">
                    <div className="mobile_nav closed">
                        <span className="select_page">Seleccionar página</span>
                        <span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
                        <ul id="mobile_menu" className="et_mobile_menu">
                            <li className="et_first_mobile_item"><a href="#">Inicio</a></li>

                            <li className="page_item page-item-345"><a href="#">Beneficios Cosap</a></li>
                            <li className="page_item page-item-47"><a href="#">Blog</a></li>
                            <li className="page_item page-item-97"><a href="#">Boletas de Servicio</a></li>
                        </ul>
                    </div>
                </div>
            </div>
             
        </div>
    

    </header>
    </>
  )
}
