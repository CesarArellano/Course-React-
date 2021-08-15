import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">
        César
      </span>
      <button className="btn btn-outline-danger">
        <span className="textButton">Salir</span>
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  )
}
