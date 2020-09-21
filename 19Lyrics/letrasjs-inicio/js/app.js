import {API} from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit',e=>{
    e.preventDefault();

    const artista=document.getElementById('artista').value;
    const cancion=document.getElementById('cancion').value;

    if(artista==='' || cancion===''){
        UI.divMensajes.innerHTML='Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => { 
            UI.divMensajes.innerHTML='';
            UI.divMensajes.classList.remove('error');
        }, 3000);
    }else{
        const api=new API(artista,cancion);

        api.consultarAPI()
            .then((data)=>{
                console.log(data);
                if(data.datos.lyrics){
                    UI.divResultado.innerHTML=`<p>${data.datos.lyrics}</p>`;
                }else{        
                    UI.divMensajes.innerHTML='No hay letra asociada al artista y canción ingresados';
                    UI.divMensajes.classList.add('error');
            
                    setTimeout(() => { 
                        UI.divMensajes.innerHTML='';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
            });
    }
});