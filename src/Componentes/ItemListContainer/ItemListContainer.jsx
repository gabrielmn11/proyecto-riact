import { useState, useEffect } from "react";
import { getProductos, getProductosCategoria} from "../../asynmock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const{idCategoria}= useParams();
    
    useEffect(()=>{
      const funcionProductos = idCategoria ? getProductosCategoria : getProductos;
    funcionProductos(idCategoria)
    .then(respuesta=> setProductos(respuesta))
    } ,[idCategoria]
    )

  return (
    <div>
        <h2>Mis productos</h2>
        <ItemList productos = {productos} />
    </div>
  )
}

export default ItemListContainer