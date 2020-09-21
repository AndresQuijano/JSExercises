const botonCargar = document.getElementById('cargar');

botonCargar.addEventListener('click',cargarDatosDeTxt);

function cargarDatosDeTxt(evt){
    evt.preventDefault();

    let xhr=new XMLHttpRequest();
    
    //forma nueva
    xhr.onload=function(){
        if(this.status===200){
            document.getElementById('listado').innerHTML=`${this.responseText}`;
        }
    }

    //forma antigua
    /*xhr.onreadystatechange=function(){
        //console.log(this.readyState );
        if(this.readyState===4 && this.status===200){
            document.getElementById('listado').innerHTML=`${this.responseText}`;
        }
    }*/

    xhr.open('GET','datos.txt',true);

    xhr.send();
}