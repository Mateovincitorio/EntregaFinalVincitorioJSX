import React from 'react'
import cartIcon from "../../assets/cart.png"

const CartWidget = () => {
  return (
      <div className='cartCont'>
      <p className='cantidad'>1</p>
      <img src={cartIcon} width={50} alt="" className='img' />
      </div>
  )
}

export default CartWidget