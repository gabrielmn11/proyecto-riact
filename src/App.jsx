import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './Componentes/BarraNavegacion/BarraNavegacion';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}  />
          <Route path="/cart" element={<h2>En breve tendras tu carrito rata de dos patas!!</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
