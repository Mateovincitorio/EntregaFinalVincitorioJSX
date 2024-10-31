import React from 'react'
import { getProducts } from '../ItemList/data'
import { useEffect,useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct }=useParams()
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    setLoading(true)
    getProducts()
    .then((dataProd)=>{
      const filterProd = dataProd.find((product)=>product.id === parseInt(idProduct))
      setProduct(filterProd)
    })
    .finally(()=>setLoading(false))
  },[idProduct])

  return (
    <>
    {
      loading===true ? (<div className='loading'>cargando...</div>):<ItemDetail product={product}/>
    }
    </>
  )
}

export default ItemDetailContainer