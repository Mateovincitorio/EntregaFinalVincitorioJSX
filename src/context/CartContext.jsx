import { createContext, useState } from "react";
//creamos un contexto (cartContext)
const CartContext = createContext()


const CartProvider =({ children })=>{
const [cart, setCart]= useState([])

const totalQuantity=()=>{
    const quantity = cart.reduce((acc, productCart)=>
        acc+productCart.quantity, 0)
    return quantity
}

const totalPrice = ()=>{
    const price = cart.reduce((acc,productCart)=> acc + productCart.precio * productCart.quantity,0)
    return price
}

const deleteProductById =(idProduct)=>{
   const filterProducts = cart.filter((product)=>product.id!==idProduct)
   setCart(filterProducts)
}

const deleteCart =()=>{
    setCart([])
}

const addProductInCart = (newProduct)=>{
    const condicion = isInCart(newProduct.id)
    if(condicion){
        const tempCart = [...cart]
        const findIndex = tempCart.findIndex((productCart)=> newProduct.id===productCart.id )
        tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity
        setCart(tempCart)
    }else{
        setCart([...cart, newProduct])
    }
}

const isInCart =(idProduct)=>{
    return cart.some((productCart)=>productCart.id===idProduct)
}

    

    return(
        <CartContext.Provider value={ {cart,totalQuantity, addProductInCart, totalPrice, deleteProductById, deleteCart } }>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}