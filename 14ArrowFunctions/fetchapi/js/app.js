document.getElementById('txtBtn').addEventListener('click',function(evt){
    evt.preventDefault();

    fetch('datos.txt')
        .then(respuesta => respuesta.text())
        .then(datos => document.getElementById('resultado').innerHTML=datos)
        .catch(error=>`Error: ${error}`)
});

document.getElementById('jsonBtn').addEventListener('click',function(evt){
    evt.preventDefault();

    fetch('empleados.json')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            let html='';

            data.forEach(function(empleado){
                html=html+`
                <li>${empleado.nombre}  ${empleado.puesto}</li>
                `;
            });

            document.getElementById('resultado').innerHTML=html;
        })
        .catch(error=>console.log(error));
});

document.getElementById('apiBTN').addEventListener('click',function(evt){
    evt.preventDefault();

    fetch('https://picsum.photos/list')
        .then(response=>response.json())
        .then(data=>{
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
        .catch(error => console.log(error))
});