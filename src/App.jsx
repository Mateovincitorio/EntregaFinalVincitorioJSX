import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner"
import ItemDetailContainer from './ejemplos/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import ItemDetail from './ejemplos/ItemDetail/ItemDetail';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListConteiner bienvenida="Bienvenido a Fast-commerce!!"/>}/>
        <Route path='/category/:idCategory' element={<ItemListConteiner bienvenida ="Categorias"/>}/>
        <Route path='/detail/:idProduct' element= {<ItemDetailContainer/>} />
      
      </Routes>
      


      </BrowserRouter>
    </div>
  )
}

export default App

