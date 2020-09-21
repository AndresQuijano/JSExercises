class API{
    async consultarDatos(){
        const cantidadRegistros=500;
        const respuesta=await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${cantidadRegistros}`);

        const json=await respuesta.json();

        return{
            json
        }
    }
}