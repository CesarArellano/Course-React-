import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
  return async (dispatch: Dispatch<AnyAction>, getState: RootState) => {
    dispatch( startLoadingPokemons() );
    
    // dispatch( setPokemons([]) );
  }
}