import React from 'react'
import "./checkOut.css"

const FormCheckOut = ({dataForm,handleChange,handleSubmit, input1, input2, setInput1, setInput2}) => {
  return (
    <form  className= "formulario" onSubmit={handleSubmit}>
            <label className='formLabel'>Nombre Completo</label>
            <input className='inputForm' type="text" name="fullname" value={dataForm.fullname} onChange={handleChange} />

            <label className='formLabel'>Telefono</label>
            <input className='inputForm' type="number" name="phone" value={dataForm.phone} onChange={handleChange}/>

            <label className='formLabel'>Email</label>
            <input className='inputForm' type="email" value={input1} onChange={(e) => setInput1(e.target.value)}  />
            <label className='formLabel'>Repita su email</label>
            <input className='inputForm' type="email" value={input2} onChange={(e)=>setInput2(e.target.value)} />

                <button className="botonSubmit" type="submit" >Enviar mi orden</button>
        </form>
  )
}

export default FormCheckOut