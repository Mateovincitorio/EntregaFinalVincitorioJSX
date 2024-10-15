import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner"
import ItemDetailContainer from './ejemplos/ItemDetail/ItemDetailContainer'


function App() {

  return (
    <div>
      <Navbar />
      <ItemListConteiner bienvenida="Bienvenido a Fast-commerce!!"/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App

