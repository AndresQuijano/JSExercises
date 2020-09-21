//importar express
const express=require('express');
const path=require('path');
const routes=require('./routes');
const configs=require('./config');

//configurar express

const app=express();

//Habilitar pug
app.set('view engine','pug');

//Decirle dónde están las vistas
app.set('views',path.join(__dirname,'./views'));

//Cargar la carpeta estática donde van a estar los CSS y las imágenes
app.use(express.static('public'));

//Averiguar si estamos en pdn o en dllo
const config=configs[app.get('env')];
console.log(config);
//Creamos variable para el título
app.locals.titulo=config.nombresitio; 

//Función que calcula el año actual
app.use((req,res,next)=>{
    const fecha=new Date();
    res.locals.fechaActual=fecha.getFullYear();
    return next();
});

app.use('/',routes());

app.listen(3000);