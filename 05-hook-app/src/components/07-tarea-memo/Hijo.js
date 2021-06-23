import React from 'react'

export const Hijo = React.memo(({ number, increment }) => {

  console.log('  Me volví a generar :(  ');

  return (
    <button
      className="btn btn-primary ml-10"
      onClick={ () => increment( number ) }
    >
      { number }
    </button>
  )
}
)