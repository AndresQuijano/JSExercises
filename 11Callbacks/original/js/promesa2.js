const promesa=new Promise(function(resolve,reject){
    const descuento=false;

    if(descuento){
        resolve('Aplica descuento');
    }else{
        reject('NO aplica descuento');
    }
});

promesa.then(function(mensaje){
    console.log(mensaje);
}).catch(function(mensaje){
    console.log(mensaje);
});