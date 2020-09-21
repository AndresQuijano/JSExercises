const cotizador=new API('16bbc1a7e48faf363ece6931ba8c570900cc782a85933cafa9a7bcf2018e4320');

const formulario=document.getElementById('formulario');
const ui=new Interfaz();

formulario.addEventListener('submit',evt=>{
    evt.preventDefault();
        
    const monedaSelect=document.getElementById('moneda');
    const monedaSeleccionada=monedaSelect.options[monedaSelect.selectedIndex].value;
    
    const criptoMonedaSelect=document.getElementById('criptomoneda');
    const criptoMonedaSeleccionada=criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    if(monedaSeleccionada==='' || criptoMonedaSeleccionada===''){
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    }else{
        cotizador.obtenerValores(monedaSeleccionada,criptoMonedaSeleccionada)
            .then(data=>{
                ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoMonedaSeleccionada);
            });
    }

    
});