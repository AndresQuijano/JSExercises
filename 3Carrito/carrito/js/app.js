let panelCursos;
let tablaCarrito;
let todoElCarrito;
let botonVaciarCarrito;

panelCursos=document.getElementById('lista-cursos');
tablaCarrito=document.querySelector('#lista-carrito tbody');
todoElCarrito=document.getElementById('carrito');
botonVaciarCarrito=document.getElementById('vaciar-carrito');

function agregarEventos(){
    panelCursos.addEventListener('click',agregarAlCarrito);

    todoElCarrito.addEventListener('click',eliminarCursoCarrito);

    botonVaciarCarrito.addEventListener('click',vaciarCarrito);

    document.addEventListener('DOMContentLoaded',cargarProductosDeLocalStorage)
}

agregarEventos();

function agregarAlCarrito(evt){
    let panelCurso;
    let infoCurso;

    evt.preventDefault();

    if(evt.target.classList.contains('agregar-carrito')){
        panelCurso=evt.target.parentElement.parentElement;
        //console.log(curso);
    
        infoCurso=formarInfoCurso(panelCurso);

        insertarCarrito(infoCurso);
    }
}

function formarInfoCurso(panelCurso){
    const infoCurso = {
        imagen: panelCurso.querySelector('img').src,
        titulo: panelCurso.querySelector('h4').textContent,
        precio: panelCurso.querySelector('.precio span').textContent,
        id: panelCurso.querySelector('a').getAttribute('data-id')
    }

    return infoCurso;
}

function insertarCarrito(infoCurso){
    const row=document.createElement('tr');

    row.innerHTML=`
    <td>
        <img src="${infoCurso.imagen}" width=100>
    </td>
    <td>${infoCurso.titulo}</td>
    <td>${infoCurso.precio}</td>
    <td>
        <a href="#" class="borrar-curso" id-curso="${infoCurso.id}">X</a>
    </td>
    `;

    tablaCarrito.appendChild(row);

    agregarALocalStorage(infoCurso);
}

function eliminarCursoCarrito(evt){
    evt.preventDefault();

    let idCursoAEliminar;    

    idCursoAEliminar=evt.target.getAttribute('id-curso');
    console.log(idCursoAEliminar);

    if(evt.target.classList.contains('borrar-curso')){
        evt.target.parentElement.parentElement.remove();
    }

    borrarCursoDeLocalStorage(idCursoAEliminar);

}

function vaciarCarrito(evt){
    evt.preventDefault();

    //tablaCarrito.innerHTML='';//Esta es la forma no recomendada pero funciona

    while(tablaCarrito.firstChild){
        tablaCarrito.removeChild(tablaCarrito.firstChild);
    }

    localStorage.setItem('cursos','[]');

    return false;
}

function agregarALocalStorage(infoCurso){
    console.log('entra a agregarALocalStorage');
    let arrInfoCursos;

    arrInfoCursos=leerLocalStorage();

    console.log(arrInfoCursos);

    arrInfoCursos.push(infoCurso);

    localStorage.setItem('cursos',JSON.stringify(arrInfoCursos));
}

function leerLocalStorage(){
    let arrInfoCursos;

    if(localStorage.getItem('cursos')==null){
        arrInfoCursos=[];
    }else{
        arrInfoCursos=JSON.parse(localStorage.getItem('cursos'));
    }

    return arrInfoCursos;
}

function cargarProductosDeLocalStorage(){
    let arrInfoCursos;

    arrInfoCursos=leerLocalStorage();



    arrInfoCursos.forEach(function (infoCurso){
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>
            <img src="${infoCurso.imagen}" width=100>
        </td>
        <td>${infoCurso.titulo}</td>
        <td>${infoCurso.precio}</td>
        <td>
            <a href="#" class="borrar-curso id-curso="${infoCurso.id}" >X</a>
        </td>
        `;
    
        tablaCarrito.appendChild(row);
    });
}


function borrarCursoDeLocalStorage(idCursoAEliminar){
    let arrInfoCursos;

    console.log(`A borrar: ${idCursoAEliminar}`);

    arrInfoCursos=leerLocalStorage();

    arrInfoCursos.forEach(function(infoCurso,index){
        console.log(`actual: ${infoCurso.id}`);
        if(infoCurso.id === idCursoAEliminar){
            arrInfoCursos.splice(index,1);
        }
    });

    localStorage.setItem('cursos',JSON.stringify(arrInfoCursos));
}