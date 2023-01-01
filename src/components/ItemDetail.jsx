import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

const DetalleProducto = (item) => {

    const [cantidadItems, setCantidadItems] = useState(1)
    const { addToCart } = useContext(CartContext);

    const sumarItem = () => {
        setCantidadItems(cantidadItems + 1)
    }

    const restarItem = () => {
        if (cantidadItems != 1) setCantidadItems(cantidadItems - 1)
    }

    const sumarAlCarrito = () => {
        alert('Agregaste ' + cantidadItems + ' items al carrito!');
        setCantidadItems(cantidadItems);
        addToCart(item.datos, cantidadItems);
    }

    return (
        <div className="contenedorDetalle">
            <img className="imgDetalle" src={item.datos.image} alt={item.datos.title} />
            <div className="textoDetalle">
                <h2 className="textProductoCarrito"> {item.datos.name}</h2>
                <p className="textProductoCarrito"> ${item.datos.price}  </p>
                <p className="txtp"> Descripción: {item.datos.description}</p>
                <p>Unidades disponibles: {item.datos.stock}</p>
                <ItemCount onAdd={sumarAlCarrito} sumar={sumarItem} restar={restarItem} itemsCantidad={cantidadItems} />
                <Link to={'/cart'}><button className="botonIrAlCarrito">Ir al carrito</button></Link>
            </div>
        </div>
    )
}

export default DetalleProducto;