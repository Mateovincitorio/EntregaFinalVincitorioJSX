import React from 'react'
import { getProducts } from '../ItemList/data'
import { useEffect,useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct }=useParams()


  useEffect(()=>{
    getProducts()
    .then((dataProd)=>{
      const filterProd = dataProd.find((product)=>product.id === parseInt(idProduct))
      setProduct(filterProd)
    })
  },[idProduct])

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer