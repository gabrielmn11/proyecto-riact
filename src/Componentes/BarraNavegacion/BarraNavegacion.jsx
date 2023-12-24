import React from 'react';
import CarWidget from '../CarWidget/CarWidget';
import './BarraNavegacion.css';
import { NavLink } from 'react-router-dom';

const BarraNavegacion = () => {
  return (
    <header>
      <h1><NavLink to="/">Gaming House</NavLink></h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/1">Laptops</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/2">Auriculares</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3">Promociones</NavLink>
          </li>
        </ul>
      </nav>
      <CarWidget />
    </header>
  );
};

export default BarraNavegacion;
