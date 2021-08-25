import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

type TimerArgs = {
  milliseconds: number;
  seconds?: number;
}

export const Timer = ( { milliseconds }: TimerArgs ) => {
  
  const [seconds, setSeconds] = useState(0);
  // console.log(milliseconds);
  const ref = useRef<NodeJS.Timeout>();
  useEffect(() => {
    ref.current && clearInterval( ref.current ); // Destruir componente
    ref.current = setInterval(() => setSeconds( (s) => s + 1 ) , milliseconds);
  }, [milliseconds]);

  return (
    <>
      <h4>Timer: <small>{ seconds }</small></h4>
    </>
  )
}