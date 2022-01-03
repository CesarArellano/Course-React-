import React, { SyntheticEvent, useMemo } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { q = '' } = queryString.parse( location.search );
  
  const { formValues, handleOnChange } = useForm({
    searchText: q?.toString()
  });

  const { searchText } = formValues;

  const handleSubmit = ( e:SyntheticEvent ) => {
    e.preventDefault();
    if( searchText!.length > 0) {
      navigate(`?q=${ searchText }`);
    } else {
      toast.error("Ingrese un superhéroe!", {
        icon: '❌',
        style: {
          borderRadius: '10px',
        },
      });
    }
  };  

  const heroesFiltered = useMemo(() => getHeroesByName( q!.toString() ), [ q ]);

  return (
    <>
      <div><Toaster/></div>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={ handleSubmit }>
            <input 
              type="text"
              placeholder="Buscar un héroe"
              className='form-control'
              autoComplete='off'
              value={ searchText }
              onChange={ ({ target }) => handleOnChange('searchText', target.value ) }
            />
            <button
              className='btn btn-outline-primary mt-2'
              type='submit'
            >
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-8">
          <h4>Resultados</h4>
          <hr />
          {
            (searchText === '')
              ? <div className="alert alert-info"> Buscar un héroe</div>
              : (heroesFiltered.length === 0) 
                && <div className="alert alert-danger">No hay resultados: { searchText }</div>
          }
          {
            heroesFiltered.map(( hero ) => {
              return (
                <HeroCard 
                  key={ hero.id }
                  hero={ hero }
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
