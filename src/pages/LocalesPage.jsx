import React from 'react'

export const LocalesPage = () => {
  return (
    <>
      <main role="main" className="container p-5">
        <h1 className="mt-5">Nuestros Locales</h1>

        <div class="row gx-5 justify-content-md-center">
          <div class="col-sm-4 col-md-4">
            <div className="card" >
              <img src="./logo.jpg" class="card-img-top" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">Formosa - Formosa </h5>
                <h6 className="card-subtitle mb-2 text-muted">Av Gonzalez Lelong 1679</h6>
                
                <p className="card-text">Cel : 
                
                <a href="https://api.whatsapp.com/send/?phone=5493704272753&amp;text=Info+Sobre+las+Baterias.&amp;app_absent=0">
                3704272753
                  <img class="imagenRedes" src="./whatsapp.png"></img>
            
                </a>  
                </p>
                <img class="imagenRedes" src="./location.png"></img>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div className="card" >
                <img src="./logo.jpg" class="card-img-top" alt=""></img>
                <div className="card-body">
                  <h5 className="card-title">Saenz Peña - Chaco</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Comandante Fernandez 263</h6>
                  
                  <p className="card-text">Cel : 
                  
                  
                  <a href="https://api.whatsapp.com/send/?phone=5493644388894&amp;text=Info+Sobre+las+Baterias.&amp;app_absent=0">
                  3644815524
                    <img class="imagenRedes" src="./whatsapp.png"></img>
              
                  </a>  
                  </p>
                  <img class="imagenRedes" src="./location.png"></img>
                </div>
              </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div className="card" >
                <img src="./logo.jpg" class="card-img-top" alt=""></img>
                <div className="card-body">
                  <h5 className="card-title">Charata - Chaco</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Av Belgrano 140</h6>
                  
                  <p className="card-text">Cel :
                  
                  <a href="https://api.whatsapp.com/send/?phone=5493731536445&amp;text=Info+Sobre+las+Baterias.&amp;app_absent=0">
                  3731536445<img class="imagenRedes" src="./whatsapp.png"></img>
                    
                  </a>  
                  </p>
                  <img class="imagenRedes" src="./location.png"></img>
                </div>
              </div>
            </div>
        </div>


      </main>
    </>
  )
}
