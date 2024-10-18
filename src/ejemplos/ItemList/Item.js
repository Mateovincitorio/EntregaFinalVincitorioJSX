 
const products = [
    {
        id:1,
        nombre:"gorra",
        img:"/images/gorra.jpg",
        precio:10,
        stock:10,
        category:"gorras"
    },
    {
        id:2,
        nombre:"zapatillas rojas",
        img:"/images/zapatillas.jpg",
        precio:100,
        stock:5,
        category: "zapatillas"
    },
    {
        id:3,
        nombre:"pantalones verdes",
        img:"/images/green lopmas.jpg",
        precio:20,
        stock:8,
        category:"pantalones"
    },
    {
        id:4,
        nombre:"campera inflable",
        img:"/images/campera.jpg",
        precio:40,
        stock:9,
        category: "camperas"
    },
    {
        id:5,
        nombre:"campera azul",
        img:"/images/campera.jpg",
        precio:80,
        stock:9,
        category: "camperas"
    },
    {
        id:6,
        nombre:"zapatillas negras",
        img:"/images/zapatillas.jpg",
        precio:40,
        stock:9,
        category: "zapatillas"
    },
    {
        id:7,
        nombre:"pantalones cortos",
        img:"/images/green lopmas.jpg",
        precio:40,
        stock:9,
        category: "pantalones"
    },
    {
        id:8,
        nombre:"gorra ",
        img:"/images/gorra.jpg",
        precio:40,
        stock:9,
        category: "gorra"
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