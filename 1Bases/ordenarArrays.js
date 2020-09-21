let arreglo = [2,34,1,100,342,3,20];

console.log(arreglo);

arreglo.sort();

console.log(arreglo);

arreglo.sort(function orden(x,y){return x-y});

console.log(arreglo);


arreglo.sort(function orden(x,y){return y-x});

console.log(arreglo);