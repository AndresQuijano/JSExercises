//No lo terminé porque la segunda parte es lo mismo que la primera

const botonSingular=document.getElementById('boton1');
const botonPlural=r=document.getElementById('boton2');

botonSingular.addEventListener('click',function(evt){
    const xhr=new XMLHttpRequest();

    xhr.open('GET','empleado.json',true);

    xhr.onload=function(){
        if(this.status===200){
            let persona=JSON.parse(this.responseText);
            
            document.getElementById('empleado').innerHTML=`
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Cargo: ${persona.trabajo}</li>
            </ul>
            `;

            //console.log(persona);
        }
    };

    xhr.send();


});