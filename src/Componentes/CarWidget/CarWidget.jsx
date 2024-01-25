import React from 'react'
import './CarWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';

const CarWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);

return (
  <div>
      <Link to="/cart">
          <img className="imgCar" src="public\img\png-transparent-shopping-cart-shopping-centre-computer-icons-shopping-cart-text-retail-service.png" alt="Carrito" />
          {
              cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
          }
      </Link>
  </div>
)
        }
export default CarWidget
