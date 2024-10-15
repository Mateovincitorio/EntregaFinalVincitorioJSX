const products = [
    {
        id:1,
        nombre:"gorra",
        img:"",
        precio:10,
        stock:10,
        category:"gorras"
    },
    {
        id:2,
        nombre:"zapatillas rojas",
        img:"",
        precio:100,
        stock:5,
        category: "zapatillas"
    },
    {
        id:3,
        nombre:"pantalones verdes",
        img:"",
        precio:20,
        stock:8,
        category:"pantalones"
    },
    {
        id:4,
        nombre:"campera inflable",
        img:"",
        precio:40,
        stock:9,
        category: "camperas"
    }
]

const getProducts = () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(products)
      }, 2000);
    })
  }

  export {getProducts, products}