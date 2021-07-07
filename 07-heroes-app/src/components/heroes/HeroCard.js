import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col-sm-6 mb-3">
      <div className="card mb-3" style={{ maxwidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={`Imagen ${ superhero }`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text">{ alter_ego }</p>
              {
                ( alter_ego !== characters )
                  && <p className="card-text">{ characters }</p>
              }
              <p className="card-text">
                <small className="text-muted">{ first_appearance}</small>
              </p>
              <Link to={`./hero/${id}`}>
                More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
