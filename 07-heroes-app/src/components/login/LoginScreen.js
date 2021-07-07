import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    
    const newLogin = {
      type: types.login,
      payload: {
        name: 'César Arellano'
      }
    };
    
    dispatch(newLogin);
    history.replace('/');
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Sign In
      </button>
    </div>
  )
}
