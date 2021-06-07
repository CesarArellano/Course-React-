import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data, loading} = useFetchGifs();
  console.log(loading);
  // useEffect(() => {
  //   getGifs( category )
  //     .then( setImages );
  // }, [ category ]);
  

  return (
    <>
      <h3>{ category }</h3>
      {loading ? 'Cargando' : 'Se cargó exitosamente'}
      {/* <div className="card-grid">
        {
          images.map(( img ) => (
            <GifGridItem
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div> */}
    </>
  )
}
