import React from 'react'
import "./itemListConteiner.css"
import ItemCount from '../../ejemplos/itemcount/ItemCount'


const ItemListConteiner = ({bienvenida}) => {
  
  return (
    <>
    <h1 className="bienvenida">{bienvenida}</h1>
    <ItemCount/>
    </>
    
  )
}

export default ItemListConteiner