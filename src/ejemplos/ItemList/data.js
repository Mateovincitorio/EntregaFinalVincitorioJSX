 
const products = [
    {
        id:1,
        nombre:"gorra",
        img:["/images/gorra.jpg", "/images/gorra negra.jpg"],
        precio:10,
        stock:10,
        category:"gorras"
    },
    {
        id:2,
        nombre:"zapatillas rojas",
        img:["/images/zapatillas.jpg", "/images/zapas negras.jpg"],
        precio:100,
        stock:5,
        category: "zapatillas"
    },
    {
        id:3,
        nombre:"pantalones verdes",
        img:["/images/green lopmas.jpg", "/images/short.jpg"],
        precio:20,
        stock:8,
        category:"pantalones"
    },
    {
        id:4,
        nombre:"zapatillas negras",
        img:["/images/zapas negras.jpg", "/images/zapatillas.jpg"],
        precio:40,
        stock:9,
        category: "zapatillas"
    },
    {
        id:5,
        nombre:"pantalones cortos",
        img:["/images/short.jpg","green lopmas.jpg"],
        precio:40,
        stock:9,
        category: "pantalones"
    },
    {
        id:6,
        nombre:"gorra negra",
        img:["/images/gorra negra.jpg", "/images/gorra.jpg"],
        precio:40,
        stock:9,
        category: "gorras"
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