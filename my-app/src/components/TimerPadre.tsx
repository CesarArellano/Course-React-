import { Timer } from './TimerHijo';
import { useState } from 'react';
export const TimerPadre = () => {

  const [milliseconds, setMilliseconds] = useState(1000)
  
  return (
    <div>
      <h4>Milliseconds: <small>{ milliseconds }</small></h4>
      <button
        onClick={ () => setMilliseconds(1000)}
        className="btn btn-success mr-2"
      >
        1000
      </button>
      <button
        onClick={ () => setMilliseconds(2000)}
        className="btn btn-success"
      >
        2000
      </button>
      <Timer milliseconds={ milliseconds }/>
    </div>
  )
}
