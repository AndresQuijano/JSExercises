/** this con Explicit binding */

function persona(el1, el2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y ${el2} `);
}
const informacion = {
    nombre: 'Juan',
    trabajo: 'Programador'
}
const generosMusicales = ['Heavy Metal', 'Rock'];

// Explicit binding con call, cuando pasas arreglo debes colocar todas las posiciones
persona.call(informacion, generosMusicales[0], generosMusicales[1]);

// explicit binding con .apply, ( si toma un arreglo )
persona.apply(informacion, generosMusicales);

// explicit binding .bind
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1]);
nuevaFn();




//Yo Andrés Quijano

class Cocinero{
    constructor(nombre,especialidad){
        this.nombre=nombre;
        this.especialidad=especialidad;
    }
    
    cocinar(fuerte,acompaniante){
        console.log(`Soy ${this.nombre} y mi especialidad es ${this.especialidad}. Hoy voy a cocinar ${fuerte} con ${acompaniante}`);
    }
}

let cVegano=new Cocinero('Camila','Comida vegana');


cVegano.cocinar.call(cVegano,'Lentejas','Arroz');

let info={
    nombre: 'Matías',
    especialidad:'Comida argentina'
}

cVegano.cocinar.call(info,'carne','papas');

let ingredientes=['Carne','Papas','Fernet'];

cVegano.cocinar.call(info,ingredientes[0],ingredientes[1]);

cVegano.cocinar.apply(info,ingredientes);

const funcionNueva=cVegano.cocinar.bind(info,ingredientes[0],ingredientes[1]);
funcionNueva();