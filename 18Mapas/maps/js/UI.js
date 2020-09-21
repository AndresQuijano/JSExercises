class UI {
    constructor() {

        this.markers= new L.LayerGroup();
         // Iniciar el mapa
         this.mapa = this.inicializarMapa();
         this.api=new API();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos(){
        this.api.consultarDatos()
            .then(respuesta=>{
                this.mostrarPines(respuesta.json.results)
            })
    }

    mostrarPines(arrDatos){
        this.markers.clearLayers();

        arrDatos.forEach(punto => {
            const{latitude,longitude,calle,regular,premium}=punto;

            const popup=new L.popup().setContent(
                `<p>Calle: ${calle}</p>
                <p><b>Regular: </b>${regular}</p>
                <p><b>Premium: </b>${premium}</p>
                `
            );

            const marker=new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]);

            marker.bindPopup(popup);

            this.markers.addLayer(marker);
        });

        this.markers.addTo(this.mapa);
    }

    obtenerSugerencias(texto){
        this.api.consultarDatos()
            .then(respuesta=>{
                // console.log(respuesta);
                const resultados=this.filtrarResultados(respuesta.json.results,texto);
            });
    }

    filtrarResultados(datos,texto){
        const filtrados=datos.filter(filtrados=>filtrados.calle.indexOf(texto)!==-1);
        
        this.mostrarPines(filtrados);
    }
}