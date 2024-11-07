import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)
  console.log(cart);
  
  if (cart.length === 0) {
    return(
      <div className='EmptyCart'>
        <h2 className='h2EmptyCart'>No hay productos agregados en el carrito</h2>
        <Link to="/">Volver al Inicio </Link>
      </div>

    )
  }

  return (
    <div>
      <h2 className='carritoH2'>Productos en Carrito</h2>
    {


      cart.map((productCart)=>(
        <div key={productCart.id} style={{display: "flex", justifyContent: "space-around" }}>
          <img className='img-info' src={productCart.img[0]}  alt="" />
          <p className='infoProd'>{productCart.nombre}</p>
          <p className='infoProd'>{productCart.quantity}</p>
          <p className='infoProd'>Precio c/u: ${productCart.precio}</p>
          <p className='infoProd'>Precio parcial: ${productCart.precio*productCart.quantity}</p>
          <FontAwesomeIcon icon={faTrash} className='borrarProd' onClick={()=>deleteProductById(productCart.id)}/>
          </div>
      ))
    }
    <div className="borrarTodo">
    <button className='borrarCarrito' onClick={deleteCart}>Borrar carrito</button>
    <Link to='/checkOut' className='btnTerminar'>Terminar mi compra</Link>
    <p className='totalPrice'>Precio total: ${totalPrice()}</p>
    </div>
    </div>
  )
}

export default Cart