const promesa=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Ya terminó');
    },3000);
});

promesa.then(function(mensaje){
    console.log(mensaje);
});