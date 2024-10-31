import React from 'react'
import cartIcon from "../../assets/cart.png"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Form, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  const quantity =totalQuantity();

  return (
      <Link className='cartCont' to="/cart">
      <p className='cantidad'>{ quantity >= 1 && quantity }</p>
      <FontAwesomeIcon icon={faCartShopping} className={quantity === 0 ? "empty-cart" : "cart"}/>
      </Link>
  )
}

export default CartWidget