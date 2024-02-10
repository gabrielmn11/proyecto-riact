import React from 'react'
import './CarWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const CarWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);

return (
  <div>
      <Link className="imgCar" to="/cart">
      <div  href="/carrito"><FontAwesomeIcon icon={faShoppingCart} size='6x' className="icon" /></div>
          {
              cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
          }
      </Link>
  </div>
)
        }
export default CarWidget
