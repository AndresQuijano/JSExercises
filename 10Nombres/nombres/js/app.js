//No lo terminé porque la API ya no funciona

const formulario=document.getElementById('generar-nombre');

formulario.addEventListener('submit',cargarNombres);

function cargarNombres(evt){
    evt.preventDefault();

    const selectOrigen=document.getElementById('origen');
    const origen=selectOrigen.options[selectOrigen.selectedIndex].value;

    const selectGenero=document.getElementById('genero');
    const genero=selectGenero.options[selectGenero.selectedIndex].value;

    const cantidad=document.getElementById('numero').value;

    let url='https://uinames.com/api/?';

    if(origen!==''){
        url=url+`region=${origen}&`;
    }

    if(genero!==''){
        url=url+'gender='+genero+'&';
    }

    if(cantidad!==''){
        url=url+'amount='+cantidad;
    }
    
    const xhr=new XMLHttpRequest();

    xhr.open('GET','https://uinames.com/api/',true);

    xhr.onload=function(){
        if(xhr.status===200){
            console.log('Entro');
        }
    };

    xhr.send();
}