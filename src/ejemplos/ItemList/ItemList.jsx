import React from 'react'
import '../ItemDetail/itemDetail.css'


const ItemList = ({products}) => {
  return (    
    <>
    {
    <div className="products-container"> 
    {products.map((product) => (
      <div key={product.id} className="contProds">
        <img src={product.img} alt={product.nombre} className="gorra" />
        <h2>{product.nombre}</h2>
      </div>
    ))}
  </div>
    }
    </>

  )
}

export default ItemList