//No lo terminé porque la API no funciona bien

eventBrite = new EventBrite();
interfaz=new Interfaz();

document.getElementById('buscarBtn').addEventListener('click',e=>{
    e.preventDefault;

    const palabraClave=document.getElementById('evento').value;

    const selectCategorias=document.getElementById('listado-categorias');
    const categoria=selectCategorias.options[selectCategorias.selectedIndex].value;

    console.log(categoria);

    if(palabraClave!==''){
        eventBrite.obtenerEventos(palabraClave,categoria);
    }else{
        interfaz.mostrarMensaje('El campo no puede estar vacío','alert alert-danger mt-4 error');
    }
});