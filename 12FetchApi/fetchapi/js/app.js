document.getElementById('txtBtn').addEventListener('click',function(evt){
    evt.preventDefault();

    fetch('datos.txt')
        .then(function(respuesta){
            console.log('Primer then');
            return respuesta.text();
        })
        .then(function(datos){
            document.getElementById('resultado').innerHTML=datos;
        })
        .catch(function(error){
            console.log(`Error: ${error}`);
        });
});

document.getElementById('jsonBtn').addEventListener('click',function(evt){
    evt.preventDefault();

    fetch('empleados.json')
        .then(function(response){
            return response.json();
        })
        .then(function(data){

            console.log(data);
            let html='';

            data.forEach(function(empleado){
                html=html+`
                <li>${empleado.nombre}  ${empleado.puesto}</li>
                `;
            });

            document.getElementById('resultado').innerHTML=html;
        })
        .catch(function(error){
            console.log(error);
        });
});

document.getElementById('apiBTN').addEventListener('click',function(evt){
    evt.preventDefault();

    fetch('https://picsum.photos/list')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let html='';

            data.forEach(function(photo){
                html=html+`
                <li>
                    <a target="_blank" href="${photo.post_url}">Ver imagen</a>
                    ${photo.author}
                </li>
                `;
            });
            
            document.getElementById('resultado').innerHTML=html;
        })
        .catch(function(error){
            console.log(error);
        });
});