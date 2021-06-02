import React, { useState } from 'react';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  
  const handleApp = () => {
    //setCategories([...categories, 'Pokemon']);
    setCategories(cats => [...cats, 'Pokemon']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={ handleApp }>Agregar</button>
      <ol>
        {
          categories.map((category, i) => { // Normalmente el i, no será necesario.
            return <li key={ i }>{category}</li>
          })
        }
      </ol>
    </>
  );
}

export default GifExpertApp;