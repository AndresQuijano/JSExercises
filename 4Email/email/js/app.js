let botonEnviar;
let botonResetear;
let campoPara;
let campoAsunto;
let campoMensaje;
let formulario;

botonEnviar=document.getElementById('enviar');
botonResetear=document.getElementById('resetBtn');
campoPara=document.getElementById('email');
campoAsunto=document.getElementById('asunto');
campoMensaje=document.getElementById('mensaje');
formulario=document.getElementById('enviar-mail');

function manejarEventListeners(){
    document.addEventListener('DOMContentLoaded',configurarValoresIniciales);

    campoPara.addEventListener('blur',validarCampos);
    campoAsunto.addEventListener('blur',validarCampos);
    campoMensaje.addEventListener('blur',validarCampos);

    botonEnviar.addEventListener('click',simularEnvioCorreo);
    botonResetear.addEventListener('click',resetearFormulario);
}
manejarEventListeners();


function configurarValoresIniciales(){
    botonEnviar.disabled=true;
   // botonResetear.disabled=true;
}

function validarCampos(){
    let errores;

    validarLongitud(this);

    if(this.type=='email'){
        validarEMail(this);
    }

    if(campoPara.value!==''&&campoAsunto.value!==''&&campoMensaje.value!==''){
        errores=document.querySelectorAll('.error');

        if(errores.length===0){
            botonEnviar.disabled=false;
        }
    }
}

function validarLongitud(campo){
    if(campo.value.length>0){
        campo.style.borderBottomColor='green';
        campo.classList.remove('error');    
    }else{
        campo.style.borderBottomColor='red';
        campo.classList.add('error');
    }
}

function validarEMail(campo){
    if(campo.value.indexOf('@')!==-1){
        campo.style.borderBottomColor='green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor='red';
        campo.classList.add('error');
    }
}

function simularEnvioCorreo(evt){
    let gifSpinner;
    let gifEnviado;

    evt.preventDefault();

    gifSpinner=document.getElementById('spinner');
    gifSpinner.style.display='block';

    setTimeout(function(){
        gifSpinner.style.display='none';
    },1000);

    gifEnviado=document.createElement('img');
    gifEnviado.src='img/mail.gif';

    console.log(gifEnviado);
    document.getElementById('loaders').appendChild(gifEnviado);
    gifEnviado.style.display='block';

    setTimeout(function(){
        gifEnviado.style.display='none';
    },3000);

   formulario.reset();
}

function resetearFormulario(evt){
    evt.preventDefault();

    formulario.reset();
    botonEnviar.disabled='true';
}