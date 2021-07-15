import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
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
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
        />

        <input 
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />

        <input 
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
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
