import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import { Publisher } from '../../interfaces/hero_interface';

interface Props {
  publisher: Publisher;
}

export const HeroList = ( { publisher }:Props ) => {
  
  const heroes = getHeroeByPublisher( publisher );

  return (
    <>
      <h1>Hero List</h1>
      <ul>
        {
          heroes.map( hero => {
            return (
              <li
                key={ hero.id }
              >
                { hero.superhero }
              </li>
            );
          })
        }
      </ul>
    </>
  )
}
