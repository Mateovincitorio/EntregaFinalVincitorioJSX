import React from 'react'

const ItemView = ({contador, sumar, restar, addProduct}) => {
  return (
    <div className='contenedor'>
        <button className='btn-contador' onClick={restar}>-</button>
        <p className='contador'>Cantidad:{contador}</p>
        <button className='btn-contador' onClick={sumar}>+</button>
        <div className="contenedor-mostrar">
        <button className='mostrar' onClick={()=>addProduct(contador)}>Agregar al carrito!</button>
        </div>
    </div>
  )
}

export default ItemView