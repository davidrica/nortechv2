
window.addEventListener('load', event => {
    var EnviarPost= function(){
    
        const btnEnviar = document.getElementById('ingresar');

        if (!btnEnviar){
            return;
        }
        

        btnEnviar.addEventListener('click', async () =>{
            const usuario = document.getElementById('usuario').value;
            //https://eruralweb.com/eruralweb/002/ERU/777?facturas
            if (usuario > 0) {
                const empresa = '002';
                const tipaux = 'ERU';
                var url = 'https://eruralweb.com/eruralweb/' + empresa + '/' + tipaux + '/' + usuario + '?facturas';
    
                window.open(url);
            
            }

        });


    }

    EnviarPost();
    
});
