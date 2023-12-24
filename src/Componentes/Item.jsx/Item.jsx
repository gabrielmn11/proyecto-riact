import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <>
    <div className='items'>
        <img src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <Link to={`/item/${id}`}> Ver Detalle </Link>
        </div>
    </>
  )
}

export default Item