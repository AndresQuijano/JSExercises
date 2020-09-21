function calcular(){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,5);//Luego de un segundo va a resolver la promesa y enviar el valor 5 como resultado
  });
}

function segundoCalculo(numero){
  console.log(numero);
    return new Promise((resolve, reject)=>{
      setTimeout(resolve,1000,'Terminó segunda');//Luego de un segundo va a resolver la promesa y enviar el valor 5 como resultado
    });
}

calcular().then(segundoCalculo).then(console.log);
