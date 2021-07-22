import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { ui:{ msgError } } = useSelector( state => state); // Recover state data
  
  const [ formValues, handleInputChange ] = useForm({
    name: 'César',
    email: 'cesarmauricio.arellano@gmail.com',
    password: '12345678',
    password2: '12345678'
  });

  const { name, email, password, password2 } = formValues;
  
  const handleRegister = (e) => {
    e.preventDefault();
    
    if( isFormValid() ) {
      dispatch( startRegisterWithEmailPasswordName( email, password, name) )
    }
  };

  const isFormValid = () => {
    if( name.trim().length === 0 ) {
      dispatch(setError('Name is required'));
      return false;
    } else if( !validator.isEmail(email) ){
      dispatch(setError('Email is not valid'));
      return false;
    } else if ( password !== password2 || password.length < 8 ) {
      dispatch(setError('Password should be at least 8 characters and match each other'));
      return false;
    }
    dispatch( removeError() );
    return true;
  };

  return (
    <>
      <div className="center-box">
        <img 
          src="https://image.flaticon.com/icons/png/512/3235/3235042.png"
          alt="Journal App Icon" 
          title="App Icon"
          className="img-icon"
        />
      </div>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={ handleRegister }>
        {
          ( msgError ) && <div className="auth__alert-error animate__animated animate__shakeX">
            { msgError }
          </div>
        }
        
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
          value={ name }
          onChange={ handleInputChange }
          required
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
          value={ email }
          onChange={ handleInputChange }
        />

        <input 
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={ password }
          onChange={ handleInputChange }
        />

        <input 
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={ password2 }
          onChange={ handleInputChange }
        />

        <div className="center-box">
          <button
            type="submit"
            className="btn btn-primary mb-5"
          >
            Register
          </button>
        </div>
          <Link 
            to="/auth/login"
            className="link"
          >
            Already registered?
          </Link>
      </form>
    </>
  )
}
