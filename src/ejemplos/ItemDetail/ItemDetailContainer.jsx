import React from 'react'
import ItemDetail from './ItemDetail'
import '../ItemList/Item'
import { getProducts } from '../ItemList/Item'
import { useEffect,useState } from 'react'



const ItemDetailContainer = () => {
  const [products, setProducts]=useState([])

  useEffect(()=>{
    getProducts()
  .then((dataProducts)=>{
    setProducts(dataProducts)
  })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    console.log("finalizo la promesa");
    
  })
  }, [])


  return (
    <ItemDetail products={products}/>
  )
}

export default ItemDetailContainer