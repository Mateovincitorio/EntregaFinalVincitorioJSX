import React from 'react'
import "./checkOut.css"

const FormCheckOut = ({dataForm,handleChange,handleSubmit}) => {
  return (
    <form  className= "formulario" onSubmit={handleSubmit}>
            <label className='formLabel'>Nombre Completo</label>
            <input className='inputForm' type="text" name="fullname" value={dataForm.fullname} onChange={handleChange} />

            <label className='formLabel'>Telefono</label>
            <input className='inputForm' type="number" name="phone" value={dataForm.phone} onChange={handleChange}/>

            <label className='formLabel'>Email</label>
            <input className='inputForm' type="email" name="email" value={dataForm.email} onChange={handleChange} />

                <button className="botonSubmit" type="submit" >Enviar mi orden</button>
        </form>
  )
}

export default FormCheckOut