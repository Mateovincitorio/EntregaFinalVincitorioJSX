import React from 'react'
import './navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to="/" className="RoadToHome">Fast-Commerce</Link>

      <ul className="categorias">
        <li className="categoria">
          <Link to="/category/gorras" >Gorras</Link>
        </li>
        <li className="categoria">
          <Link to="/category/pantalones">Pantalones</Link>
        </li>
        <li className="categoria">
          <Link to="/category/zapatillas">Zapatillas</Link>
        </li>
      </ul>


      <CartWidget />
    </nav>
  )
}

export default Navbar