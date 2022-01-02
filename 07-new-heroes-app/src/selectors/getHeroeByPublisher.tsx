import { heroes } from '../data/heroes';
import { HeroDataProps, Publisher } from '../interfaces/hero_interface';

export const getHeroeByPublisher = ( publisher: Publisher ): HeroDataProps[] => {
  
  const validPublishers:Publisher[] = ['DC Comics', 'Marvel Comics'];

  if( !validPublishers.includes(publisher) ) {
    throw new Error( `${ publisher } is not a valid publisher`);
  }

  return heroes.filter( hero => hero.publisher === publisher );
}
