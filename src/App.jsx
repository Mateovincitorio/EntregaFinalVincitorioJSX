import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner"
import ItemDetailContainer from './ejemplos/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import CheckOut from './components/checkOut/CheckOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <Navbar />
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<ItemListConteiner bienvenida="Bienvenido a Fast-commerce!!"/>}/>
        <Route path='/category/:idCategory' element={<ItemListConteiner bienvenida ="Categorias"/>}/>
        <Route path='/detail/:idProduct' element= {<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkOut' element={<CheckOut/>}/>
      </Routes>
      
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

