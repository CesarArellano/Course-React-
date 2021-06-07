import React, { useState } from 'react'

export const useFetchGifs = () => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  setTimeout(()=> {
    setstate({
      data: [1,2,2,323,2],
      loading: false
    });
  }, 3000);

  return state;
}
