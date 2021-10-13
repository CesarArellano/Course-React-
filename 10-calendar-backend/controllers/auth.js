const { response } = require('express');
const { validationResult } = require('express-validator');

const errorJson = ( res, errors ) => {
  return res.status(400).json({
    ok: false,
    errors: errors.mapped()
  });
}

const createUser = ( req, res = response ) => {
  const { name, email, password } = req.body;

  const errors = validationResult( req );
  
  if( !errors.isEmpty() ) {
    return errorJson(res, errors);
  }

  res.status(201).json({
    ok: true,
    msg: 'register',
    name,
    email,
    password
  })
}

const userLogin = ( req, res = response ) => {
  const { email, password } = req.body;

  const errors = validationResult( req );
  
  if( !errors.isEmpty() ) {
    return errorJson(res, errors);
  }
  
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