import React from 'react'
import "./itemListConteiner.css"
import ItemCount from '../../ejemplos/itemcount/ItemCount'
import ItemList from '../../ejemplos/ItemList/ItemList'
import '../../ejemplos/ItemList/data'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query,where } from "firebase/firestore"
import db from "../../db/db.js"


const ItemListConteiner = ({bienvenida}) => {
  const [products, setProducts]=useState([])
const { idCategory } = useParams()
 const getProducts=()=>{
  const productsRef = collection( db, "products" )
  getDocs(productsRef)
  .then((dataDb)=>{
    //formateamos productos
    const productsDb = dataDb.docs.map((product)=>{
      return {id: product.id ,...product.data()};
    })
    setProducts(productsDb)
  })

 }

 const getProductsByCategory = () => {
  const productsRef = collection (db, "products")
  const queryCategories = query( productsRef, where("category", "==", idCategory) )
  getDocs(queryCategories)
  .then((dataDb)=>{
    //formateamos productos
    const productsDb = dataDb.docs.map((product)=>{
      return {id: product.id ,...product.data()};
    })
    setProducts(productsDb)
  })
 }
//const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
   
   
   
   
   
   
   
   
    /* setLoading(true)
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
  })*/
  }, [idCategory])


  return (
    <>
    <h1 className="bienvenida">{bienvenida}</h1>
    {
      //loading===true ? (<div className='loading'>cargando...</div>) : <ItemList products={products}/>
    }
    <ItemList products={products}/>
    </>
    
  )
}

export default ItemListConteiner