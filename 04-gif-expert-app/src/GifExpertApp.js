import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  
  const handleApp = () => {
    setCategories(cats => ['Pokemon', ...cats]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <button onClick={ handleApp }>Agregar</button>
      {
        categories.map((category, i) => ( // Normalmente el i, no será necesario.
          <GifGrid 
            key={ i }
            category={ category } 
          />
        ))
      }
    </>
  );
}

export default GifExpertApp;