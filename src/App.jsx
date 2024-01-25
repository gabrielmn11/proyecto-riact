import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider} from "./Componentes/context/CarritoContext";
import Cart from "./Componentes/Cart/Cart";
import BarraNavegacion from "./Componentes/BarraNavegacion/BarraNavegacion";
import Checkout from "./Componentes/checkout/Checkout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <BarraNavegacion/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}  />
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}  />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<h2>Sitio en construcción</h2>} />

          </Routes>
        </CarritoProvider>
      </BrowserRouter>
      

      
    </div>
  )
}

export default App