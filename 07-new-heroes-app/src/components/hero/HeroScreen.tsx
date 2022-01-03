import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroId } = useParams();

  const hero = useMemo( () => getHeroById(heroId!), [heroId] ); // Sólo se llamará si cambia la dependencia heroId.

  if( !hero ) {
    return <Navigate to="/" />;
  }
  const { id, publisher, superhero, first_appearance, alter_ego, characters } = hero;

  const imagePath = `/assets/img/heroes/${ id }.jpg`;

  const handleReturn = () => {
    navigate(-1) // Regresar a la anterior pantalla.
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          className='img-thumbnail animate__animated animate__fadeInLeft'
          src={ imagePath }
          alt={ superhero }
        />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className='list-group'>
          <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
          <li className="list-group-item"> <b>Publisher:</b> { publisher } </li>
          <li className="list-group-item"> <b>First appearance:</b> { first_appearance } </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{ characters }</p>
        <button
          className='btn btn-outline-info'
          onClick={ handleReturn }
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
