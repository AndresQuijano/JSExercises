import React,{useState,Fragment} from 'react';
import {calcularTotal} from '../helpers.js';

const Formulario = (props) => {

    const {cantidad,guardarCantidadState,plazo,guardarPlazoState,guardarTotalState,guardarCargandoState}=props;

    //Para manejar errores de validación
    const[error, guardarErrorState]=useState(false);
    

    const calcularPrestamo=e=>{
        e.preventDefault();

        //Validar el formulario
        if(cantidad===0 || plazo===''){
            guardarErrorState(true);
        }else{
            guardarErrorState(false);
        }

        guardarCargandoState(true);

        let granTotal;

        setTimeout(() => {
            granTotal=calcularTotal(cantidad, plazo);
            guardarTotalState(granTotal);
            guardarCargandoState(false);    
        }, 3000);
        

        
    }

    return ( 
        <Fragment>
            <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        onChange={e=>guardarCantidadState(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={e=>guardarPlazoState(parseInt(e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
            </form>
            {error ? <p className="error">Todos los campos son obligatorios</p>:null}
        </Fragment>
     );
}
 
export default Formulario;