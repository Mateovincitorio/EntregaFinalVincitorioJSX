import React from 'react'

const ItemView = ({contador, sumar, restar, onAdd}) => {
  return (
    <div className='contenedor'>
        <button className='btn-contador' onClick={restar}>-</button>
        <p className='contador'> Contador: {contador}</p>
        <button className='btn-contador' onClick={sumar}>+</button>
        <div className="contenedor-mostrar">
        <button className='mostrar' onClick={onAdd}>Mostrar stock en consola</button>
        </div>
    </div>
  )
}

export default ItemView