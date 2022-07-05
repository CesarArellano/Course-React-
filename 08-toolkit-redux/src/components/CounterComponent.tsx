import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slices/counter/counterSlice';

export const CounterComponent = () => {
  const { value } = useSelector<any, any>((state) => state.counter);
  const dispatch = useDispatch();
  
  const handleAdd = () => {
    dispatch( increment() );
  };

  const handleSubstract = () => {
    if(value > 0) {
      dispatch( decrement() );
    }    
  }

  const handleReset = () => {
    dispatch( reset() )
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubstract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  );
}
