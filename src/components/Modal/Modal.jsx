import React from 'react'

export const Modal = () => {
  return (
    <>
            <div className="portfolio-modal modal fade" id="modalinicio" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="modal-header"><h4 className="text-uppercase">Acceso a Clientes</h4></div>
                                <div className="modal-body"></div>
                                <form className="row g-3">
                                    <div className="div col-auto">
                                        <label htmlFor="usuario">N Cliente:</label>
                                        <input id="usuario" type="text" />
                                    </div>
                                    <div className="div col-auto">
                                        <input className="btn btn-success"  id="ingresar" type="button" value="INGRESAR" />
                                        <button className="btn btn-primary" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>Cancelar acceso
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
