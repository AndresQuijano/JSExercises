class API{
    constructor(apiKey){
        this.apiKey=apiKey;
    }

    async obtenerListaCripto(){
        const url=`https://min-api.cryptocompare.com/data/all/coinList?api_key=${this.apiKey}`;

        const urlObtenerMonedas=await fetch(url);

        const listaMonedas= await urlObtenerMonedas.json();

        return {
            listaMonedas
        }
    }
}