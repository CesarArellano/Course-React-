import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getGifs();
  }, []);
  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=One&limit=10&api_key=qlliDsP9EbiJxsO4nHYRhreERaxu48a9';
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized.url
      };
    });
    console.log(gifs);
  };

  return (
    <div>
      <h3>{ category }</h3>
      <h2>{ counter }</h2>
      <button onClick={() => setCounter(counter + 1)}></button>
    </div>
  )
}
