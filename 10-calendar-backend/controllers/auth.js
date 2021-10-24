const { response } = require('express');
const User = require('../models/User');

const createUser = async ( req, res = response ) => {
  
  try {
    const user = new User( req.body );
    user.save();
    
    res.status(201).json({
      ok: true,
      msg: 'register'
    });
  } catch(error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please talk to the admin'
    });
  }
  
}

const userLogin = ( req, res = response ) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'login',
    email,
    password
  });

};

const revalidateToken = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'renew'
  });
};

module.exports = {
  createUser,
  userLogin,
  revalidateToken
};