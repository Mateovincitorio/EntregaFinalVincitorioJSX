import React from 'react'
import { getProducts } from '../ItemList/Item'
import { useEffect,useState } from 'react'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  useEffect(()=>{
    getProducts()
    .then((dataProd)=>{
      const filterProd = dataProd.find((product)=>product.id === "1")
      setProduct(filterProd)
    })
  },[])

  return (
    <div>
      <img src={product.img} alt="" />
    </div>
  )
}

export default ItemDetailContainer