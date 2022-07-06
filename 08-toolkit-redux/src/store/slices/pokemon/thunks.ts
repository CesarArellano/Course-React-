import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from '../../../api/pokemonApi';
import { PokemonInterface } from "../../../interfaces/pokemon_interface";

export const getPokemons = (page = 0) => {
  return async (dispatch: Dispatch<AnyAction>, getState: RootState) => {
    dispatch( startLoadingPokemons() );
    const { data } = await pokemonApi.get<PokemonInterface>(`/pokemon?limit=10&offset=${ page * 10 }`);
    console.log(data);
    dispatch(setPokemons({
      pokemons: data.results,
      page: page + 1
    }));
  }
}