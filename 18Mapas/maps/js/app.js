const ui=new UI();

document.addEventListener('DOMContentLoaded',()=>{
    ui.mostrarEstablecimientos();
});

inputBuscar=document.querySelector('#buscar input');
inputBuscar.addEventListener('input',()=>{
    if(inputBuscar.value.length>3){
        ui.obtenerSugerencias(inputBuscar.value);
        // console.log(inputBuscar.value);
    }else{
        ui.mostrarEstablecimientos();
    }
});