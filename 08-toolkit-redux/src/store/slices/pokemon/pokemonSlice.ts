import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state, /* action */ ) => {
      state.isLoading = true;
      
      state.isLoading = false;
    },
    setPokemons: (state, action) => {
      console.log(action);
      
    }
  }
});


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;