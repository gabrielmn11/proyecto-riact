import React from 'react'
import "./ItemDetail.css"
const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className='item'>
            <img src={img} alt="imagen" />
            <h3>{nombre}</h3>
            <p>Precio: {precio}</p>
            <p>Id: {id} </p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda impedit iste magnam, minus alias reprehenderit officia corrupti hic quisquam deleniti ab iure dolores ipsum? Porro libero iusto laboriosam et?</p>

        </div>
    )
}

export default ItemDetail