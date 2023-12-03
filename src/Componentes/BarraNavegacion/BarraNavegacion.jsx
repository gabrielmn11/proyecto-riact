import React from 'react'
import CarWidget from '../CarWidget/CarWidget'
import './BarraNavegacion.css'
const BarraNavegacion = () => {
  return (
    <header>
    <h1>Gaming House</h1>
    <nav>
        <ul>
            <li>Nosotros</li>
            <li>Productos</li>
            <li>Proximamente</li>
        </ul>
    </nav>
    <CarWidget/>
</header>

  )
}

export default BarraNavegacion