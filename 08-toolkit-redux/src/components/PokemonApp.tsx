import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonReducerProps } from '../store/slices/pokemon';
import { getPokemons } from '../store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const { pokemons, page, isLoading } = useSelector<any,PokemonReducerProps>(state => state.pokemons)
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch( getPokemons() )
  }, [])
  
  if( isLoading ) {
    return <h3>Cargando...</h3>
  }

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <ul>
        {
          pokemons.map(({ name, url }) => {
            return (
              <li key={ url }>
                { name }
              </li>
            )
          })
        }
      </ul>
      <button
        onClick={ () => dispatch( getPokemons( page ))}
      >
        Next
      </button>
    </>
  )
}
