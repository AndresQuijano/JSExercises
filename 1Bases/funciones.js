function saludar(nombre = 'visitante'){
    return `Hola ${nombre}`
}

console.log(saludar('Camila'));
console.log(saludar());

suma = function(a=0,b=0){
    return a+b;
}

console.log(suma(1,2));
console.log(suma(1));
console.log(suma());

//Funciones IIFE

(function seEjecutaDeUna(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript')