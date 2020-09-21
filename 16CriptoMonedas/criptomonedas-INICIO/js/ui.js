class Interfaz{
    constructor(){
        this.init();
    }

    init(){
       this.construirSelect(); 
    }

    mostrarMensaje(mensaje,clases){
        const div=document.createElement('div');
        div.className=clases;
        div.appendChild(document.createTextNode(mensaje));
        
        document.querySelector('.mensajes').appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    construirSelect(){
        cotizador.obtenerMonedasAPI()
            .then(monedas=>{
                const select=document.getElementById('criptomoneda');

                for(const [key,value] of Object.entries(monedas.monedas.Data)){
                    const opcion=document.createElement('option');
                    opcion.value=value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            });
    }

    mostrarResultado (resultado,moneda,criptoMoneda){
        const resultadoAnterior=document.querySelector('#resultado > div');

        if(resultadoAnterior){
            resultadoAnterior.remove();
        }

        const datosMoneda=resultado[criptoMoneda][moneda];

        let precio=datosMoneda.PRICE.toFixed(2);

        console.log(datosMoneda);

        let templateHtml=`
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-tittle">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} en ${datosMoneda.TOSYMBOL} es de: ${precio}</p>
                </div>
            </div>
        `;        
        
        this.controlarSpinner('block');

        setTimeout(() => {
            document.getElementById('resultado').innerHTML=templateHtml;
            this.controlarSpinner('none');
        }, 3000);

    }

    controlarSpinner(vista){
        const spinner=document.querySelector('.contenido-spinner');
        spinner.style.display=vista;
    }
}