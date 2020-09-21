//Este ejemplo no lo terminé
let presupuestoPrompt;
const formulario=document.getElementById('agregar-gasto');

presupuestoPrompt=Number.parseInt(prompt('¿Cual es tu presupuesto semanal?'));

document.addEventListener('DOMContentLoaded',function(){
    if(!Number.isInteger(presupuestoPrompt)){
        window.location.reload();
    }else{
        presupuesto=new Presupuesto(presupuestoPrompt);
        const interfaz=new Interfaz();
        interfaz.mostrarPresupuesto(presupuestoPrompt);
    }
})

formulario.addEventListener('submit',function(evt){
    evt.preventDefault();

    const gasto=document.getElementById('gasto').value;
    const cantidad=document.getElementById('cantidad').value;

    const interfaz=new Interfaz();

    if(gasto==='' || cantidad===''){
        interfaz.mostrarMensaje('Hubo un error','error');
    }else{
        interfaz.mostrarMensaje('Correcto','correcto');
        interfaz.agregarGasto(gasto,cantidad);
    }

});

class Presupuesto{
    constructor(presupuestoInicial){
        this.presupuesto=presupuestoInicial;
        this.restante=presupuestoInicial;
    }

    añadirGasto(montoGasto){
        this.restante=this.restante-montoGasto;
        return this.restante;
    }
}

class Interfaz{
    mostrarPresupuesto(monto){
        const spanTotal=document.querySelector('span#total');
        const spanRestante=document.querySelector('span#restante');

        spanTotal.innerHTML=`${monto}`;
        spanRestante.innerHTML=`${monto}`;
    }

    mostrarMensaje(textoMensaje,tipoMensaje){
        const div=document.createElement('div');

        div.classList.add('text-center','alert');

        if(tipoMensaje==='error'){
            div.classList.add('alert-danger');
        }else{
            div.classList.add('alert-success');
        }

        div.appendChild(document.createTextNode(textoMensaje));

        document.querySelector('.primario').insertBefore(div,formulario);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }

    agregarGasto(gasto,cantidad){
        //const gastosListado=document.querySelector('#gastos ul')

        const li=document.createElement('li');
        li.classList='list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML=`${gasto} $${cantidad}`;
        document.querySelector('.list-group').appendChild(li);
        //gastosListado.appendChild(li);
    }
}