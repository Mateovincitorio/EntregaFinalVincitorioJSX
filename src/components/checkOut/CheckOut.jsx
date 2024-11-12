import React from 'react'
import FormCheckOut from './FormCheckOut'
import { useContext,useState } from 'react'
import { CartContext } from "../../context/CartContext"
import {Timestamp, addDoc, collection} from "firebase/firestore"
import db from "../../db/db.js"
import {Link} from "react-router-dom"
import validateForm from '../../ustils/validateForms.js'
import { toast } from 'react-toastify'
import "./checkOut.css"

const CheckOut = () => {
const [ dataForm, setDataForm ] = useState({
    fullname: "",
    phone: "",
    email:  ""
})

const [idOrder, setIdOrder] = useState(null)
const { cart, totalPrice, deleteCart } = useContext(CartContext)
const [input1, setInput1] = useState('')
const [input2,setInput2] = useState('')
const [equalEmail, setEqualEmail] = useState(false)

const handleChange = (event) => {
    setDataForm({...dataForm, [event.target.name]:event.target.value})
}

const handleSubmit = async(event) =>{
    event.preventDefault()
    if(input1===input2 && dataForm.fullname!="" && dataForm.phone!=""){
      setEqualEmail(true)
      toast.success('Formulario enviado correctamente')
    }else{
      setEqualEmail(false)
      toast.error("Controle que los mails sean identicos y que los campos esten rellenos")
      return
    }
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
      uploadOrder(order) //ejecuto uploadOrder solo si la validacion es valida
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
        dataForm={dataForm} handleChange={handleChange} handleSubmit={handleSubmit} input1={input1} input2={input2} setInput1={setInput1} setInput2={setInput2}/>
        ):(
          <div className='OrdenSubida'><h2 className='Orden'>Su orden se subió correctamente!!</h2>
          <p className='Orden'>Por favor guarde su numero de seguimiento:<span className='spanOrder'> {idOrder}</span></p>
          {

            equalEmail ?(
             <Link to='/' className='volver'>volver al Inicio</Link>
            ):(
            toast.error("Los emails deben ser identicos")
          )
          }
        
          </div>
        )
      }
        
    </div>
  )
}

export default CheckOut