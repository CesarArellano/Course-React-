const getPromiseImage = () => {
  const promise = new Promise( (resolve) => resolve('https://sdfsdfsdf.com'));
  return promise;
};

getPromiseImage().then(console.log);

const getAsyncAwaitImage = async () => {
  try {
    const apiKey = 'qlliDsP9EbiJxsO4nHYRhreERaxu48a9';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url:urlImage } = data.images.original;
    const img = document.createElement('img');
    img.src = urlImage;
    document.body.append(img);
  } catch(e) {
    console.log(e);
  }
  
};

getAsyncAwaitImage();