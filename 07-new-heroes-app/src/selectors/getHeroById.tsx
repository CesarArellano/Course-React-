import { heroes } from '../data/heroes';
import { HeroDataProps } from '../interfaces/hero_interface';

export const getHeroById = ( id: string ): HeroDataProps | undefined => {
  return heroes.find(( hero ) => hero.id === id );
}
