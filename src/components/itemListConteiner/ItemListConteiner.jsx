import React from 'react'
import "./itemListConteiner.css"
import ItemCount from '../../ejemplos/itemcount/ItemCount'
import ItemList from '../../ejemplos/ItemList/ItemList'
import '../../ejemplos/ItemList/data'
import { getProducts } from '../../ejemplos/ItemList/data'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'


const ItemListConteiner = ({bienvenida}) => {
  const [products, setProducts]=useState([])
const { idCategory } = useParams()
const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    getProducts()
  .then((dataProducts)=>{
    if(idCategory){
      const filterProducts = dataProducts.filter((product)=>product.category === idCategory)
      setProducts(filterProducts)
    }else{
      setProducts(dataProducts)
    }
  })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    setLoading(false)
  })
  }, [idCategory])


  return (
    <>
    <h1 className="bienvenida">{bienvenida}</h1>
    {
      loading===true ? (<div className='loading'>cargando...</div>) : <ItemList products={products}/>
    }
    
    </>
    
  )
}

export default ItemListConteiner