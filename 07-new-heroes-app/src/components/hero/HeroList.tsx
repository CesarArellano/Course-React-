import { useMemo } from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import { Publisher } from '../../interfaces/hero_interface';
import { HeroCard } from './HeroCard';

interface Props {
  publisher: Publisher;
}

export const HeroList = ( { publisher }:Props ) => {
  
  const heroes = useMemo(() => getHeroeByPublisher( publisher ), [ publisher ] );

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map( hero => {
          return (
            <HeroCard 
              key={ hero.id }
              hero={ hero }
            />
          );
        })
      }
    </div>
  )
}
