import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {

  const [ counter, setCounter ] = useState( value );

  //handleAdd
  const handleAdd = (e) => {
    setCounter( counter + 1 );
    // In the case there is no reference to the counter, we must do this:
    //setCounter( (c) => c + 1 );
  };

  const handleSubstract = (e) => {
    if(counter > 0) {
      setCounter(counter - 1)
    }    
  }

  const handleReset = (e) => {
    setCounter( value ); 
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubstract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;