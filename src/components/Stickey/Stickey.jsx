import React from 'react'
const mStyle = {
    width: "25px",
    position: "relative"
}

export const Stickey = () => {
  return (
    <>
    
    <div className="ic-stickey">
        <ul>
            <li className="agua"><a href="#"><p className="aguap">Agua </p>
                <img src="img/agua.png" style={mStyle} /></a></li>

            <li className="malha"><a href="" className="entypo-malha" target="_blank" rel="noopener"><p className="malhap">El Malha </p>
                <img src="img/camping.png" style={mStyle} /></a></li>

            <li className="beneficios"><a href="#"><p className="beneficiosp">Beneficios</p>
                <img src="img/beneficios.png" style={mStyle} /></a></li>

            <li className="sepelio"><a href="#" className="entypo-beneficios" rel="noopener"><p className="sepeliop">Sepelio </p>
                <img src="img/sepelio.png" style={mStyle} /></a></li>

            <li className="boleta">
                
                <a className="entypo-beneficios" data-bs-toggle="modal" href="#modalinicio" >
                    <p className="boletap">Boletas </p>
                <img src="img/boletas.png" style={mStyle} /></a></li>


        </ul>
    </div>

    
    </>
)}
