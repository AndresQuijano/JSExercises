let producto1 = 'Pizza',
    producto2 = 'Hamburguesa',
    precio1 = 20,
    precio2 = 10;

let html;

/*
html =  '<ul>'+
            '<li> Orden: '+producto1+'</li>'+
            '<li> Precio: '+precio1+'</li>'+
            '<li> Orden: '+producto2+'</li>'+
            '<li> Precio: '+precio2+'</li>'+
            '<li> Total: '+(precio1 + precio2)+'</li>'+
        '</ul>';

console.log(html);
*/

html = `<ul>
            <li>Orden: ${producto1}</li>
            <li>Precio: ${precio1}</li>
            <li>Orden: ${producto2}</li>
            <li>Precio: ${precio2}</li>
            <li>Total: ${sumar(precio1,precio2)}</li>
        </ul>`

function sumar(a,b){
    return a+b;
}

document.getElementById('app').innerHTML = html;