import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);
  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=One Punch&limit=10&api_key=qlliDsP9EbiJxsO4nHYRhreERaxu48a9';
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized.url
      };
    });
    setImages(gifs);
  };

  return (
    <div>
      <h3>{ category }</h3>
      {
        images.map(( img ) => (
          <GifGridItem
            key={ img.id }
            { ...img }
          />
        ))
      }
    </div>
  )
}
