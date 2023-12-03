import React from 'react'
import BarraNavegacion from './Componentes/BarraNavegacion/BarraNavegacion'
import ItemList from './Componentes/ItemList/ItemList'
const App = () => {
  return (
    <div>
    
<BarraNavegacion/>
<ItemList greeting={"Hola bienvenidos a la mejor tienda de productos Gamer"}/>
    </div>
  )
}

export default App