import React from 'react'
import './navbar.css';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Remeras</a>
        <a className="nav-link" href="#">Pantalones</a>
        <a className="nav-link" href="#">Gorras</a>
        <a className="nav-link">Zapatillas</a>
      </div>
    </div>
  </div>
<CartWidget />
</nav>
  )
}

export default Navbar