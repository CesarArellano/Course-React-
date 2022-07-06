export interface PokemonInterface {
  count:    number;
  next:     null;
  previous: null;
  results:  PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url:  string;
}
