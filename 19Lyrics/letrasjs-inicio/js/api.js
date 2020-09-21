export class API{
    constructor(artista,cancion){
        this.artista=artista;
        this.cancion=cancion;
    }

    async consultarAPI(){
        const url=`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        console.log(url);
        
        const llamado=await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);


        const datos=await llamado.json();

        return {
            datos
        }
    }
}