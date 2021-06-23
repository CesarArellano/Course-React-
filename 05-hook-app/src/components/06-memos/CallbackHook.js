import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../../effects.css';

export const CallbackHook = () => {
  
  const [counter, setCounter] = useState(10);

  const increment = useCallback( ( num = 1 ) => {
    setCounter( c => c + num );
  }, [ setCounter ]);

  useEffect(() => {
    console.log('Hola');
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook { counter }</h1>
      <hr />
      <ShowIncrement increment={ increment } />
    </div>
  )
}
