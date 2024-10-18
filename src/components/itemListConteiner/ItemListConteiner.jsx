import React from 'react'
import "./itemListConteiner.css"
import ItemCount from '../../ejemplos/itemcount/ItemCount'
import ItemList from '../../ejemplos/ItemList/ItemList'
import '../../ejemplos/ItemList/Item'
import { getProducts } from '../../ejemplos/ItemList/Item'
import { useEffect,useState } from 'react'


const ItemListConteiner = ({bienvenida}) => {
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
    <>
    <h1 className="bienvenida">{bienvenida}</h1>
    <ItemCount/>
    <ItemList products={products}/>
    </>
    
  )
}

export default ItemListConteiner