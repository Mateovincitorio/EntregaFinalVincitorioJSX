import React from 'react'
import FormCheckOut from './FormCheckOut'
import { useContext,useState } from 'react'
import { CartContext } from "../../context/CartContext"
import {Timestamp, addDoc, collection} from "firebase/firestore"
import db from "../../db/db.js"
import {Link} from "react-router-dom"
import validateForm from '../../ustils/validateForms.js'
import { toast } from 'react-toastify'

const CheckOut = () => {
const [ dataForm, setDataForm ] = useState({
    fullname: "",
    phone: "",
    email:  ""
})

const [idOrder, setIdOrder] = useState(null)
const { cart, totalPrice, deleteCart } = useContext(CartContext)


const handleChange = (event) => {
    setDataForm({...dataForm, [event.target.name]:event.target.value})
}

const handleSubmit = async(event) =>{
    event.preventDefault()
    
    const order = {
      buyer: {...dataForm},
      products: {...cart},
      date: Timestamp.fromDate(new Date() ),
      total: totalPrice()
      
    }
    try {
      const response= await validateForm(dataForm)
      if(response.status==="error"){
        throw new Error(response.message)
      }
      toast.success("validacion correcta")
      uploadOrder(order)

    } catch (error) {
      toast.error(error.message)
    }
}

const uploadOrder = (newOrder) =>{
  const ordersRef = collection (db,"orders")
  addDoc(ordersRef,newOrder)
  .then((response)=>setIdOrder(response.id))
  .catch((error)=>console.log(error))
  .finally(()=>{
    //cuando termina la orden, dejamos el carrito vacio
    deleteCart()
  })
}


  return (
    <div>
      {
        idOrder===null?(
        <FormCheckOut 
        dataForm={dataForm} handleChange={handleChange} handleSubmit={handleSubmit}/>
        ):(
          <div><h2>Su orden se subió correctamente!!</h2>
          <p>Por favor guarde su numero de seguimiento: {idOrder} </p>
          <Link to='/'>volver al Inicio</Link>
          </div>
        )
      }
        
    </div>
  )
}

export default CheckOut