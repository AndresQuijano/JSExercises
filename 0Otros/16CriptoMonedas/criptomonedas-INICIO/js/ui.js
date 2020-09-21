class Interfaz{
    constructor(){
        this.construirSelectCripto();
    }

    mostrarMensaje(mensaje,clases){
        const div=document.createElement('div');
        div.classList=clases;
        div.appendChild(document.createTextNode(mensaje));

        const divMensaje=document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    construirSelectCripto(){
        //const api=new API('16bbc1a7e48faf363ece6931ba8c570900cc782a85933cafa9a7bcf2018e4320');
        cotizador.obtenerListaCripto()
            .then(monedas =>{
                const select=document.querySelector('#criptomoneda');

                for(cons [key,value] of Object.entries(monedas.monedas.Data)){
                    const opcion=document.createElement('option');
                    opcion.value=value.symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            })
    }
}