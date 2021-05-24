//import React, { Fragment } from 'react';
// Functional Components

const PrimeraApp = () => {
  const saludo = 'Hola Mundo const';
  const objeto = {
    nombre: 'César',
    edad: 21
  };

  return (
    // <Fragment>
    //   <h1>Hola Mundo</h1>
    //   <p>Hola</p>
    // </Fragment>
    <>
      <h1>{ saludo }</h1>
      {/* <pre>{ JSON.stringify(objeto, null, 2)}</pre> */}
      <p>Hola</p>
    </>    
  );
}

export default PrimeraApp;