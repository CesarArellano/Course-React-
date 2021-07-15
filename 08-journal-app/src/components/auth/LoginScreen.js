import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
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
      <h3 className="auth__title">Login</h3>
      <form>
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

        <div className="center-box">
          <button
            type="submit"
            className="btn btn-primary mb-5"
          >
            Login
          </button>
        </div>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn">
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
          </div>
        </div>
          <Link 
            to="/auth/register"
            className="link"
          >
            Create New Account
          </Link>
      </form>
    </>
  )
}
