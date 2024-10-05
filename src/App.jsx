import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListConteiner bienvenida="Bienvenido a Fast-commerce!!"/>
    </div>
  )
}

export default App

