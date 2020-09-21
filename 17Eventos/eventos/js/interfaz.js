class Interfaz{
    constructor(){
        this.listado=document.querySelector('#resultado-eventos');
        this.init();
    }

    init(){
        this.cargarCategorias();
    }

    cargarCategorias(){
        const consultaCategorias=eventBrite.consultarCategorias()
            .then(objectListaCategorias=>{
                const categories=objectListaCategorias.listaCategorias.categories;

                let select=document.getElementById('listado-categorias');

                categories.forEach(categoria => {
                    let option=document.createElement('option');
                    option.value=categoria.id;
                    option.appendChild(document.createTextNode(categoria.name));
                    select.appendChild(option);
                });

            });
        
    }

    mostrarMensaje(mensaje,tipo){
        const divError=document.createElement('div');
        divError.appendChild(document.createTextNode(`El campo no puede estar vacío`));
        divError.classList=tipo;//'mensaje';
        document.getElementById('buscador').insertBefore(divError,document.getElementById('buscarBtn'));

        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }

    limpiarMensaje(){
        const divABorrar=document.querySelector('.alert');

        if(divABorrar){
            divABorrar.remove();
        }
    }
}