import React from 'react'
import './itemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {
  return (

    <div className="products-container"> 
    {products.map((product) => (
      <Link to={"/detail/"+product.id} key={product.id}>
      <div key={product.id} className="contProds">
        <img src={product.img} alt={product.nombre} className="gorra" />
        <h2>{product.nombre}</h2>
      </div>
      </Link>
    ))}
  </div>


  )
}

export default ItemList