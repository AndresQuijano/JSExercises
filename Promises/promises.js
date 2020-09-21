let request=require('request');

function leerUrl(url){
  return new Promise(function(resolve,reject){
    request(url,function(err,response){//Esto es lo que va a hacer la promesa
      if(err){
        reject(err);
      }else{
        resolve(response);
      }
    });
  });
}

leerUrl('http://codigofacilito.com')//Esta función retorna una promesa
  .then(function(response){
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  });
