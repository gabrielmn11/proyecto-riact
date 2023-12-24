import Item from "./Componentes/Item.jsx/Item";

const productos = [
    { id: "1", nombre: "Auriculares Xbox",stock: "10", precio: 700, img: "../public/img/auriculares Xbox360.png", idCat:"2" },
    { id: "2", nombre: "Auriculares Basicos", precio: 100,stock: "10", img: "../public/img/AuricularesBasicos.png", idCat:"2" },
    { id: "3", nombre: "Promocion Teclado y Mouse Gaming",stock: "10", precio: 1200, img: "../public/img/ComboTecladoMouseGaming.png", idCat:"3"},
    { id: "4", nombre: "Laptop ASUS", precio: 1900,stock: "10", img: "../public/img/LaptopAsus.png", idCat: "1" },
     {id: "5", nombre: "Laptop DELL", precio: 1500,stock: "10", img: "../public/img/LaptopDell.png", idCat: "1"},
     {id: "6", nombre: "Laptop Toshiba", precio: 1700,stock: "10", img: "../public/img/LaptopToshiba.png", idCat: "1"},
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}
export const getUnProducto= (id) => {
    return new Promise ( resolve=> {
            setTimeout(()=> {
                const producto= productos.find(Item=>Item.id === id);
                resolve(producto);
            },2000)
        }
    )
}


export const getProductosCategoria =(idCategoria)=> {
    return new Promise(resolve=>{
        setTimeout(()=>{
            const productosCategoria = productos.filter(item=> item.idCat === idCategoria);
            resolve(productosCategoria);
        },2000)
    } )
}