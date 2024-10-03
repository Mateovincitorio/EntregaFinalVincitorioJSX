import React from 'react'
import './navbar.css';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className='navBar'>
    <h1 className='brand'>E-commerce</h1>
    <ul className='listaDesordenada'>
        <li className="elementoLista">Remera</li>
        <li className="elementoLista">Pantalon</li>
        <li className="elementoLista">Gorra</li>
        <li className="elementoLista">Zapatillas</li>
    </ul>
    <CartWidget />
    </nav>
  )
}

export default Navbar