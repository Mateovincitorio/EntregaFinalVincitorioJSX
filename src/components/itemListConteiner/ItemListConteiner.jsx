import React from 'react'
import "./itemListConteiner.css"
import ItemCount from '../../ejemplos/itemcount/ItemCount'
import ItemList from '../../ejemplos/ItemList/ItemList'
import '../../ejemplos/ItemList/data'
import { getProducts } from '../../ejemplos/ItemList/data'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'


const ItemListConteiner = ({bienvenida}) => {
  const [products, setProducts]=useState([])
const { idCategory } = useParams()

  useEffect(()=>{
    getProducts()
  .then((dataProducts)=>{
    if(idCategory){
      const filterProducts = dataProducts.filter((product)=>product.category === idCategory)
      setProducts(filterProducts)
    }else{
      setProducts(dataProducts)
    }
  })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    console.log("finalizo la promesa");
    
  })
  }, [idCategory])


  return (
    <>
    <h1 className="bienvenida">{bienvenida}</h1>
    <ItemList products={products}/>
    </>
    
  )
}

export default ItemListConteiner