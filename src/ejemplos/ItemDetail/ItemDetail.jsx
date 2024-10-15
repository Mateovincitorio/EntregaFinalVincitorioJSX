import React from 'react'

const ItemDetail = ({products}) => {
  return (
    products.map((product)=>{
      <div key={product.id}>
        <h2>{product.nombre}</h2>
      </div>
    })
  )
}

export default ItemDetail