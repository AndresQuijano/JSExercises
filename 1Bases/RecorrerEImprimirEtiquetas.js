let todo=document.children;

//console.log(todo);

imprimir(todo,0);


function imprimir(cabeza,profundidad){
    //console.log(`Entra ${cabeza}`);
    let espacios='';

    for(let i=0;i<profundidad;i++){
        espacios=espacios+'   ';
    }

    let cabezaArr=Array.from(cabeza);

    for(let i=0;i<cabezaArr.length;i++){

        console.log(`${espacios} <${cabezaArr[i].localName}>`);

        //console.log(cabezaArr[i].children.length);

        if(cabezaArr[i].children.length > 0){
            imprimir(cabezaArr[i].children,profundidad+1);
        }
        
        console.log(`${espacios} </${cabezaArr[i].localName}>`);
    }
}