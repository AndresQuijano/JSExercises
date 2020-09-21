//La idea es que se ejecute saluda(), sólo cuando hayan completado todas las promesas

let p1=new Promise((resolve,reject)=>setTimeout(resolve,1000,'Promesa 1'));
let p2=new Promise((resolve,reject)=>setTimeout(resolve,900,'Promesa 2'));

let saluda=()=>console.log('Hola');

//En este código se cae en el antipatrón callback hell con múltiples operaciones anidadas
// p1.then(function(){
//   p2.then(function(){
//     saluda();
//   });
// });

//Este genera un nuevo promise que se termina cuando todos hayan terminado. Por
//eso se puede llamar el .then
Promise.all([p1,p2]).then(resultados=>{
  console.log(resultados);//Un arreglo con todos los resultados de las promesas
  saluda();
});
