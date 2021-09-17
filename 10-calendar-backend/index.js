const express = require('express');
require('dotenv').config(); // To use .env file

// Create express server
const app = express();

// Public path
app.use( express.static('public') );

// Routes
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Events

// Listen to requests
app.listen( process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT || 3000 }`);
})