const { response } = require('express');

const createUser = ( req, res = response ) => {
  const { name, email, password } = req.body;

  if( name.length < 5 ) {
    return res.status(400).json({
      ok: false,
      msg: 'The name must have at least 5 letters'
    })
  }

  res.json({
    ok: true,
    msg: 'register',
    name,
    email,
    password
  })
}

const userLogin = ( req, res = response ) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    msg: 'login',
    email,
    password
  })
}

const revalidateToken = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = {
  createUser,
  userLogin,
  revalidateToken
}