import { useState, useContext } from 'react'
import React from 'react'
import Contador from '../Contador/Contador'
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'


const ItemDetail = ({id, nombre, precio, img, stock}) => {
const[agregarCantidad, setAgregarCantidad] = useState(0)
const {agregarAlCarrito} = useContext(CarritoContext)
const manejadorCantidad =(cantidad) => {
    setAgregarCantidad(cantidad);
    const item ={id,nombre, precio}
    agregarAlCarrito(item, cantidad)
}    
return (
        <div className='item'>
            <img src={img} alt="imagen" />
            <h3>{nombre}</h3>
            <p>Precio: {precio}</p>
            <p>Id: {id} </p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda impedit iste magnam, minus alias reprehenderit officia corrupti hic quisquam deleniti ab iure dolores ipsum? Porro libero iusto laboriosam et?</p>
{
    agregarCantidad > 0 ? (<Link to="/cart">Terminar comprar</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
}
        </div>
    )
}

export default ItemDetail