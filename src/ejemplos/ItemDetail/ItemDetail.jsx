import React from 'react'
import './itemDetail.css'
import { useState } from 'react'
import ItemCount from '../itemcount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
  const [currentImg, setCurrentImg] = useState(product.img[0])
  const { addProductInCart } = useContext(CartContext)
  const [showItemCount, setShowItemCount] = useState(true)

  const images= product.img.filter((image)=>image!==currentImg)

  const addProduct = (contador) => {
    const productCart = {...product, quantity:contador}
    addProductInCart(productCart)
    setShowItemCount(false)
  };
  
  return (
    <div className='contenedorProductos'>
            <div className="image-detail-container">
              <div className="secondary-images">
                {
                images.map((image)=>(
                  <img className='img-secondary' src={image} key={image} onClick={()=>setCurrentImg(image)}/>
                ))
                }
              </div>
              <div className="main-image">
                <img className="imgProd" src={currentImg}/>
              </div>
            </div>
            <div className="contInfo">
            <h2 className='prodName'>{product.nombre}</h2>
            <div className="contPrice">
            <p className='prodPrecio'>Precio: ${product.precio}</p>
            <p className='prodStock'>Stock: {product.stock}</p>
            </div>
            <div className="divCount">
              {
                showItemCount === true ? (<ItemCount stock={product.stock} addProduct={addProduct}/>):(<Link to="/cart">Terminar mi compra</Link>)
              }
              
            </div>
            <p className='prodCat'>Categoria: {product.category}</p>
            </div>
    </div>
  )
}

export default ItemDetail