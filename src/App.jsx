import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner"
import ItemDetailContainer from './ejemplos/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import EjemploContadorEventListener from './ejemplos/EjemploContadorEventListener';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListConteiner bienvenida="Bienvenido a Fast-commerce!!"/>}/>
        <Route path='/category/:idCategory' element={<ItemListConteiner bienvenida ="Categorias"/>}/>
        <Route path='/detail/:idProduct' element= {<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

