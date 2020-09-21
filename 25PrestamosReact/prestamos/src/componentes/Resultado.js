import React from 'react';

const Resultado = ({cantidad,total,plazo}) => (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>Cantidad solicitada: {cantidad}</p>
        <p>Plazo: {plazo} meses</p>
        <p>Pago mensual: {(cantidad/plazo).toFixed(2)}</p>
        <p>Total a pagar: {total}</p>
    </div>
)
 
export default Resultado;