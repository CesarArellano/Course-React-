//import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Functional Components

const PrimeraApp = ({ saludo, subtitulo }) => {
  // const saludo = 'Hola Mundo const';
  // const objeto = {
  //   nombre: 'César',
  //   edad: 21
  // };
  // console.log(props);

  // if(!saludo) {
  //   throw new Error('El saludo es necesario');
  // }
  return (
    // <Fragment>
    //   <h1>Hola Mundo</h1>
    //   <p>Hola</p>
    // </Fragment>
    <>
      <h1>{ saludo }</h1>
      {/* <pre>{ JSON.stringify(objeto, null, 2)}</pre> */}
      <p>{ subtitulo }</p>
    </>    
  );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;