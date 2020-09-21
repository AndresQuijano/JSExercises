const ciudades=['Cali','Medellín','Quito','Bogotá'];

function mostrarCiudades(){
    let html='';

    ciudades.forEach(function(ciudad){
        html=html+`<li>${ciudad}</li>`;
    });

    setTimeout(function(){
        document.getElementById('app').innerHTML=html;        
    },2000);

}
mostrarCiudades();

function aniadirCiudad(nombreCiudad,funcionCallBack){
    setTimeout(function(){
        ciudades.push(nombreCiudad);

        console.log(ciudades);

        funcionCallBack();
    },4000);
}

aniadirCiudad('Barranquilla',mostrarCiudades);