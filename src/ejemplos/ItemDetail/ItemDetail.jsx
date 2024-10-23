import React from 'react'
import './itemDetail.css'

const ItemDetail = ({product}) => {
  return (
    <div className='contenedorProductos'>
            <img className="imgProd" src={product.img} alt={product.name} />
            <div className="contInfo">
            <h2 className='prodName'>{product.nombre}</h2>
            <div className="contPrice">
            <p className='prodPrecio'>Precio: ${product.precio}</p>
            <p className='prodStock'>Stock: {product.stock}</p>
            </div>
            <p className='prodCat'>Categoria: {product.category}</p>
            </div>
    </div>
  )
}

export default ItemDetail