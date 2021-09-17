const { response } = require('express');
const express = require('express');

// Create express server
const app = express();

// Routes
app.get('/', (req, res) => {
  console.log('Se solicitó el /');
  res.json({
    ok: true
  })
});

// Listen to requests
app.listen( 4000, () => {
  console.log(`Servidor corriendo en puerto ${ 4000 }`);
})