import React from 'react'

const baterias = [
  {
    'nombre':'BATERIA 45 SERMAT',
    'volt' : 12,
    'largo': 204 ,
    'ancho': 175,
    'alto':2174,
    'placas':9,
    'peso':11.3,
    'img':'/img/12-45.jpg'
},
{
	'nombre':'BATERIA 55 SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-55.jpg'
},
{
	'nombre':'BATERIA 65 SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-65.jpg'
},
{
	'nombre':'BATERIA 75 B SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-75b.png'
},{
	'nombre':'BATERIA 80 B SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-80b.jpg'
},{
	'nombre':'BATERIA 90 A SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-90a.jpeg'
},{
	'nombre':'BATERIA 90 B SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-90b.jpg'
},{
	'nombre':'BATERIA 110 A SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-110a.jpg'
},{
	'nombre':'BATERIA 100B SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-110b.jpeg'
},{
	'nombre':'BATERIA 110C SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/12-110c.jpg'
},{
	'nombre':'BATERIA 180-23P SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/p23.jpeg'
},{
	'nombre':'BATERIA 180-25P SERMAT',
	'volt' : 12,
	'largo': 0 ,
	'ancho': 0,
	'alto':0,
	'placas':0,
	'peso':0,
	'img':'/img/p25.jpeg'
}
]
const bate = baterias.map((bate) =>


    <div class="col-sm-6 col-md-4 p-2 ">
            <div className="card text-center" >
                <img src={ bate['img'] } class="card-img-top" alt=""></img>
                <div className="card-body">
                  <h5 className="card-title">{ bate['nombre'] }</h5>
                  
                  <p className="card-text">{ bate['nombre'] }  </p>
                </div>
              </div>
          </div>



);



export const ProductosPage = () => {
  return (
    <>
    <main role="main" className="container p-5">
      <h1 className="mt-5">Productos</h1>
      
      <div class="row gx-5 justify-content-md-center">

          
           {bate}
      </div>
        

      </main>
    </>
  )
}
