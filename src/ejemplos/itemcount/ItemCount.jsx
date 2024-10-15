import React from 'react'
import { useState } from 'react'
import ItemView from './ItemView'
import "./ItemCount.css"

const ItemCount = () => {
    const [contador, setContador] = useState(1)
    const sumar = () =>{
        const stock = 10
        if (contador<stock) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador>1) {
            setContador(contador - 1)
        }
    }

    const onAdd = ()=> {
        console.log(contador)
    }

  return (
    <ItemView contador={contador} sumar={sumar} restar={restar} onAdd={onAdd}/>

  )
}

export default ItemCount