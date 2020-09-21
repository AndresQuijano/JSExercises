class EventBrite{
    constructor(){
        this.token='EB4IWMIN4RRUU4O4KYHA';
        this.ordenar='date';
    }

    async consultarCategorias(){
        const respuestaAPI=await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token}`);
        const listaCategorias=await respuestaAPI.json();

        return{
            listaCategorias
        }
    }

    async obtenerEventos(palabraClave,categoria){
        const respuesta=await fetch(`https://www.eventbriteapi.com/v3/events/search`);
    }
}