let DB;

const   form=document.querySelector('form');
        nombreMascota=document.querySelector('#mascota'),
        nombreCliente=document.querySelector('#cliente'),
        telefono=document.querySelector('#telefono'),
        fecha=document.querySelector('#fecha'),
        hora=document.querySelector('#hora'),
        sintomas=document.querySelector('#sintomas'),
        citas=document.querySelector('#citas'),
        headingAdministra=document.querySelector('#administra');

document.addEventListener('DOMContentLoaded',()=>{
    let crearDB=window.indexedDB.open('citas',1);

    crearDB.onerror=function(){
        console.log('Error creando la base de datos');
    }

    crearDB.onsuccess=function(){
        DB=crearDB.result;

        mostrarCitas();
    }

    //Función que se ejecuta sólo la primera vez, cuando la BD es creada
    crearDB.onupgradeneeded=function(e){
        let db=e.target.result;

        let objectStore=db.createObjectStore('citas',{keyPath:'key',autoIncrement:true});

        objectStore.createIndex('mascota','mascota',{unique:false});
        objectStore.createIndex('cliente','cliente',{unique:false});
        objectStore.createIndex('telefono','telefono',{unique:false});
        objectStore.createIndex('fecha','fecha',{unique:false});
        objectStore.createIndex('hora','hora',{unique:false});
        objectStore.createIndex('sintomas','sintomas',{unique:false});
    }
});

form.addEventListener('submit',agregarDatos);

function agregarDatos(e){
    e.preventDefault();

    let nuevaCita={
        mascota: nombreMascota.value,
        cliente: nombreCliente.value,
        telefono: telefono.value,
        fecha: fecha.value,
        hora: hora.value,
        sintomas:sintomas.value
    }

    let transaction=DB.transaction(['citas'],'readwrite');
    let objectStore=transaction.objectStore('citas');
    let peticion=objectStore.add(nuevaCita);

    // peticion.onsuccess=()=>{
    //     form.reset();
    // }

    transaction.oncomplete=()=>{
        form.reset();
        
        mostrarCitas();
    }
}

function mostrarCitas(){
    //Esta es una forma fácil pero lenta
    //citas.innerHtml='';

    //la más rápida
    while(citas.firsChild) citas.removeChild(citas.firsChild);

    let objectStore=DB.transaction('citas').objectStore('citas');

    objectStore.openCursor().onsuccess=function(e){
        let cursor=e.target.result;

        if(cursor){
            let citaHtml=document.createElement('li');
            citaHtml.setAttribute('data-cita-id',cursor.value.key);
            citaHtml.classList.add('list-group-item');

            citaHtml.innerHTML=`
                <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                <p class="font-weight-bold">Teléfono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                <p class="font-weight-bold">Síntomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
            `;

            const botonBorrar=document.createElement('button');
            botonBorrar.classList.add('borrar','btn-danger','btn');
            botonBorrar.innerHTML=`<span aria-hidden="true">X<span>Borrar`;
            botonBorrar.onclick=borrarCita;
            citaHtml.appendChild(botonBorrar);

            citas.appendChild(citaHtml);
            
            cursor.continue();
        }else{
            //Lógica para cuando no hay datos (mostrar un título que diga que agregue citas o algo así)
        }
    }
}

function borrarCita(e){
    let idCita=Number(e.target.parentElement.parentElement.parentElement.getAttribute('data-cita-id'));
    console.log(idCita);
    let transaction=DB.transaction(['citas'],'readwrite');
    let objectStore=transaction.objectStore('citas');
    objectStore.delete(idCita);

    transaction.oncomplete=()=>{
        e.target.parentElement.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement.parentElement);
    }
}
