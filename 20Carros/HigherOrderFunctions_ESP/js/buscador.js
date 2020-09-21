//No lo terminé por repetitivo

// crear los años
const years = document.createElement('option');
const  max = 2018;//new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}


function obtenerAutos(){
	return [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
	];
}

let parametrosBusqueda={
    marca:'',
    modelo:'',
    year: '',
    precio: '',
    puertas: '',
    color: '',
    transmision: ''
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(obtenerAutos());
});

document.getElementById('marca').addEventListener('input',evt=>{
    parametrosBusqueda.marca=evt.target.value;
    filtrarAutos();
});

document.getElementById('year').addEventListener('input',evt=>{
    parametrosBusqueda.year=Number(evt.target.value);
    filtrarAutos();
});

document.getElementById('minimo').addEventListener('input',evt=>{
    parametrosBusqueda.minimo=Number(evt.target.value);
    filtrarAutos();
});

document.getElementById('maximo').addEventListener('input',evt=>{
    parametrosBusqueda.maximo=Number(evt.target.value);
    filtrarAutos();
});

function mostrarAutos(arrAutos){
    const panelResultados=document.getElementById('resultado');

    panelResultados.innerHTML='';

    const tabla=document.createElement('table');
    
    let tr=document.createElement('tr');

    tr.innerHTML=`
        <th></th>  
        <th><b>Marca</b></th>  
        <th><b>Modelo</b></th>           
        <th><b>Año</b></th>
        <th><b>Color</b></th>
        <th><b>Precio</b></th>
        <th><b>Puertas</b></th>
        <th><b>Transmisión</b></th>`;

    tabla.appendChild(tr);
    
    arrAutos.forEach((auto,index)=>{
        let tr=document.createElement('tr');

        tr.innerHTML=`
            <td>${index+1}</td> 
            <td>${auto.marca}</td>  
            <td>${auto.modelo}</td>           
            <td>${auto.year}</td>
            <td>${auto.color}</td>
            <td>${auto.precio}</td>
            <td>${auto.puertas}</td>
            <td>${auto.transmision}</td>
        `;

        tabla.appendChild(tr);
    });

    panelResultados.appendChild(tabla);
    console.log(arrAutos);
}

function filtrarAutos(){
    const arrFiltrado=obtenerAutos().filter(filtrarPorMarca).filter(filtrarPorYear).filter(filtrarPorMinimo).filter(filtrarPorMaximo);

    mostrarAutos(arrFiltrado);
}

function filtrarPorMarca(carro){
    if(parametrosBusqueda.marca){
        return carro.marca===parametrosBusqueda.marca;
    }else{
        return carro;
    }
}

function filtrarPorYear(carro){
    if(parametrosBusqueda.year){
        return carro.year===parametrosBusqueda.year;
    }else{
        return carro;
    }
}

function filtrarPorMinimo(carro){
    if(parametrosBusqueda.minimo){
        return carro.precio>=parametrosBusqueda.minimo;
    }else{
        return carro;
    }
}

function filtrarPorMaximo(carro){
    if(parametrosBusqueda.maximo){
        return carro.precio<=parametrosBusqueda.maximo;
    }else{
        return carro;
    }
}
