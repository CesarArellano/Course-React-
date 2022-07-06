import { createSlice } from '@reduxjs/toolkit';
import { PokemonResult } from '../../../interfaces/pokemon_interface';

export interface PokemonReducerProps {
  page: number,
  pokemons: Array<PokemonResult>,
  isLoading: boolean
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  } as PokemonReducerProps,
  reducers: {
    startLoadingPokemons: (state, /* action */ ) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons
    }
  }
});


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;