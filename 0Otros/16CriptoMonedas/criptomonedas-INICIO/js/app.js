const formulario=document.getElementById('formulario');
const interfaz=new Interfaz();
const cotizador=new API('16bbc1a7e48faf363ece6931ba8c570900cc782a85933cafa9a7bcf2018e4320');

formulario.addEventListener('submit',function (evt){
    evt.preventDefault();

    const selectMonedas=document.getElementById('moneda');
    const monedaSeleccionada=selectMonedas.options[selectMonedas.selectedIndex].value;

    const selectCriptos=document.getElementById('criptomoneda');
    const criptoSeleccionada=selectCriptos.options[selectCriptos.selectedIndex].value;

    if(monedaSeleccionada==='' || criptoSeleccionada===''){
        interfaz.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    }else{

    }
});