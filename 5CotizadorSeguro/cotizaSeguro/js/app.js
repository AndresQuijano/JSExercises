let anioActual;
let anioMinimo;
let padre

function Seguro(marca,anio,tipo){
    this.marca=marca;
    this.anio=anio;
    this.tipo=tipo;
}

Seguro.prototype.cotizarSeguro=function(){
    let base=2000;
    let precio;

    switch(this.marca){
        case '1':
            precio=base*1.15;
            break;
        case '2':
            precio=base*1.05;
            break;
        case '3':
            precio=base*1.35;
            break;
    }

    console.log(precio);

    const diferenciaAnios=new Date().getFullYear() - this.anio;
    precio=precio*(1-(diferenciaAnios*0.03));
    console.log(precio);

    if(this.tipo==='basico'){
        precio=precio*1.3;
    }else{
        precio=precio*1.5;
    }   
    
    interfaz.mostrarResultado(this,precio);
}


function Interfaz(){}

const formulario=document.getElementById('cotizar-seguro');

formulario.addEventListener('submit',function(evt){
    evt.preventDefault();

    const marca=document.getElementById('marca');
    const marcaSeleccionada=marca.options[marca.selectedIndex].value;

    const anio=document.getElementById('anio');
    const anioSeleccionado=anio.options[anio.selectedIndex].value;

    const tipo=document.querySelector('input[name="tipo"]:checked').value;

    if(marcaSeleccionada===''|| anioSeleccionado===''|| tipo===''){
        interfaz.mostrarMensajeError('Faltan datos','error');
    }else{
        let seguro=new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
        seguro.cotizarSeguro();
    }
});

const interfaz = new Interfaz();

Interfaz.prototype.mostrarMensajeError=function(mensaje,tipo){
    const div=document.createElement('div');

    if(tipo==='error'){
        div.classList.add('error','mensaje');
    }else{
        div.classList.add('correcto','mensaje');
    }

    div.innerHTML=`${mensaje}`;

    formulario.insertBefore(div,document.querySelector('.form-group'));

    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    },3000);
}

Interfaz.prototype.mostrarResultado=function(seguro,cantidad){
    const resultado=document.getElementById('resultado');
    let marca;

    switch(seguro.marca){
        case '1':
            marca='Americano';
            break;
        case '2':
            marca='Asiatico';
            break;
        case '3':
            marca='Europeo';
            break;
    }

    const div=document.createElement('div');

    div.innerHTML=`
        <p>Tu resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: ${cantidad}</p>
    `;

    resultado.appendChild(div);

}

//Llenar el menu de los años 
anioActual=new Date().getFullYear();
anioMinimo=anioActual-20;

let optionMenu=document.createElement('option');
optionMenu.value=0;
optionMenu.innerText='-Seleccionar-';
optionMenu.value='';

document.getElementById('anio').appendChild(optionMenu);

for(i=anioActual;i>anioMinimo;i--){
    let optionMenu=document.createElement('option');
    optionMenu.value=i;
    optionMenu.innerText=i;

    document.getElementById('anio').appendChild(optionMenu);
}