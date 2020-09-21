//Variables
const listaTweets = document.getElementById('lista-tweets');


//Event listeners
function eventListeners(){
    document.getElementById('formulario').addEventListener('submit',agregarTweet);

    document.getElementById('lista-tweets').addEventListener('click',borrarUnTweet);

    document.addEventListener('DOMContentLoaded',cargarTuitsDeLocal);
}

eventListeners();

//Funciones

function agregarTweet(evt){
    evt.preventDefault();

    const textoTuit = document.getElementById('tweet').value;

    const liTuit = document.createElement('li');
    liTuit.innerText=textoTuit;
    document.getElementById('tweet').value='';

    const botonBorrarTuit = document.createElement('a');
    botonBorrarTuit.innerText='X';
    botonBorrarTuit.classList='borrar-tweet';

    liTuit.appendChild(botonBorrarTuit);
    listaTweets.appendChild(liTuit);
    
    agregarALocalStorage(textoTuit);

    document.getElementById('tweet').value='';
}

function borrarUnTweet(evt){
    evt.preventDefault();

    if(evt.target.className==='borrar-tweet'){
        evt.target.parentElement.remove();
    }

    //console.log(evt.target.parentElement.innerText);
    borrarTuitDeLocalStorage(evt.target.parentElement.innerText);
}

function agregarALocalStorage(textoTuit){
    let arrTuits;

    arrTuits=leerTuitsDeLocal();

    arrTuits.push(textoTuit);

    localStorage.setItem('tuits',JSON.stringify(arrTuits));
}

function leerTuitsDeLocal(){
    let tuits;
    let item=localStorage.getItem('tuits');

    if(item==null){
        tuits=[];
    }else{
        tuits= JSON.parse(item);
    }

    return tuits;
}

function cargarTuitsDeLocal(evt){
    let arrTuits = leerTuitsDeLocal();

    arrTuits.forEach(function (tuit){
        const liTuit = document.createElement('li');
        liTuit.innerText=tuit;
    
        const botonBorrarTuit = document.createElement('a');
        botonBorrarTuit.innerText='X';
        botonBorrarTuit.classList='borrar-tweet';
    
        liTuit.appendChild(botonBorrarTuit);
        listaTweets.appendChild(liTuit);
    });
}

function borrarTuitDeLocalStorage(textoConXAlFinal){
    let textoABuscar=textoConXAlFinal.substring(0,textoConXAlFinal.length-1);
    let arrTuits=leerTuitsDeLocal();

    arrTuits.forEach(function(tuit,i){
        if(tuit===textoABuscar){
            arrTuits.splice(i,1);
        }
    });

    localStorage.setItem('tuits',JSON.stringify(arrTuits));
}