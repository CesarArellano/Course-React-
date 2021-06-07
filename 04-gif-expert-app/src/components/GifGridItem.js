import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
  console.log(id);
  return (
    <div>
      <img src={ url } alt={ title }/>
    </div>
  )
}
