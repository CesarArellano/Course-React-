import React, { useState, useCallback } from 'react'
import { Hijo } from './Hijo';

import '../../effects.css';

export const Padre = () => {

  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = useCallback(( num = 1 ) => {
    setValue( v => v + num );
  }, [ setValue ])

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: { value } </p>

      <hr />

      {
        numbers.map( n => (
            <Hijo 
                key={ n }
                number={ n }
                increment={ increment }
            />
        ))
      }
      
    </div>
  )
}
