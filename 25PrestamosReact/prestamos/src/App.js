import React,{Fragment,useState} from 'react';
import Header from './componentes/Header.js'
import Formulario from './componentes/Formulario.js';
import Mensaje from './componentes/Mensaje.js';
import Resultado from './componentes/Resultado.js';
import Spinner from './componentes/Spinner.js';
import './Spinner.css';

function App() {
  //Define el state. El primero es el número y el segundo es la función con que se va a modificar
  //El 0 es el valor inicial
  const [cantidad,guardarCantidadState]=useState(0);
  //Se pone el valor inicial vacío porque para el select, el value del HTML inicial es vacío y sirve
  //para las validaciones
  const [plazo,guardarPlazoState]=useState('');
  
  const[total,guardarTotalState]=useState(0);

  const[cargando,guardarCargandoState]=useState(false);

  let componente;

  if(cargando){
    componente=<Spinner/>;
  }else if(total===0){
    componente=<Mensaje/>;
  }else{
    componente=<Resultado
              cantidad={cantidad}
              plazo={plazo}
              total={total}/>;
  }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de préstamos"
      />
      <div className="container">
        <Formulario
        cantidad={cantidad}
        guardarCantidadState={guardarCantidadState}
        plazo={plazo}
        guardarPlazoState={guardarPlazoState}
        total={total}
        guardarTotalState={guardarTotalState}
        guardarCargandoState={guardarCargandoState}
        />

        <div className="mensajes">
          {componente}
        </div>
      </div>

    
    </Fragment>
  );
}

export default App;
