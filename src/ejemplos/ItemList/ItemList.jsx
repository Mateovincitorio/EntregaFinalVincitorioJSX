import React from 'react'
import './itemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {

  return (
    <div className="products-container"> 
    {products.map((product) => (
      <Link to={"/detail/"+product.id} key={product.id}>
      <div key={product.id} className="contProds">
        
        <img src={product.img[0]} alt={product.nombre} className="img0" />
        <h2 className='h2Products'>{product.nombre}</h2>
      </div>
      </Link>
    ))}
  </div>


  )
}

export default ItemList