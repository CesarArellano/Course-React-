const express = require('express');
require('dotenv').config(); // To use .env file

// Create express server
const app = express();

// Public path
app.use( express.static('public') );

// Routes
// app.get('/', (req, res) => {
//   console.log('Se solicitó el /');
//   res.json({
//     ok: true
//   })
// });

// Listen to requests
app.listen( process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT || 3000 }`);
})