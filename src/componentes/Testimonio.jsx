import React from 'react'
import '../hojaDeEstilos/Testimonio.css'

function Testimono(props){
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/avatar${props.imagen}.jpg`)}
        alt={props.nombre}/>
      <div className='contenedor-texto-textimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong>en {props.pais}</p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}
export default Testimono;