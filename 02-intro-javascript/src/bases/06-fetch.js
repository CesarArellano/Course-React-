const apiKey = 'qlliDsP9EbiJxsO4nHYRhreERaxu48a9';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const peticion = fetch(url);

peticion
  .then( resp => resp.json())
  .then( ({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');

    img.src = url;

    document.body.append(img);
  })
  .catch( console.warn );