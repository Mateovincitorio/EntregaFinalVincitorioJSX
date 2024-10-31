import React from 'react'
import { useState,useEffect } from 'react'

const EjemploContadorEventListener = () => {
    const [count, setCount] = useState(1)
    const handeClick = ()=>{
        setCount((prevCount)=>prevCount + 1)
    }

    useEffect(()=>{
        const buttonAdd= document.getElementById("btnAdd")
        buttonAdd.addEventListener("click", handeClick)
        return()=>{
            //esta funcion se ejecuta cuando se desmonta
            buttonAdd.removeEven
            tListener("click", handeClick)
        }
    },[])
  return (
    <div>
        <p>{count}</p>
        <button id="btnAdd">+</button>
    </div>
  )
}

export default EjemploContadorEventListener