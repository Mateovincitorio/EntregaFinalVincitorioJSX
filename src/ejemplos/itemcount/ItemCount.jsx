import React from 'react'
import { useState } from 'react'
import ItemView from './ItemView'
import "./ItemCount.css"
import { CartContext } from '../../context/CartContext'

const ItemCount = ({stock, addProduct}) => {
    const [contador, setContador] = useState(1)
    const handleclicksumar = () =>{
        if (contador<stock) {
            setContador(contador + 1)
        }
    }
    const handleclickrestar = () => {
        if (contador>1) {
            setContador(contador - 1)
        }
    }

    

  return (
    <ItemView contador={contador} sumar={handleclicksumar} restar={handleclickrestar} addProduct={addProduct}/>

  )
}

export default ItemCount