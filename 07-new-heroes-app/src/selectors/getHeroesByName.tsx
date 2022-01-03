import { HeroDataProps } from '../interfaces/hero_interface';
import { heroes } from '../data/heroes';

export const getHeroesByName = ( name: string ): HeroDataProps[] => {
  
  console.log('getHeroesByName called');
  
  if( name === '') {
    return [];
  }

  return heroes.filter(( hero ) => hero.superhero.toLowerCase().includes(name) );
}
