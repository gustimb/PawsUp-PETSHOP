const ItemCount = (props) => {
    return (
        <div className="contenedorItemCount">
            <div className="itemCount">
                <button className="botonItemCount" onClick={props.sumar}>+</button>
                <p className="numCantidad" >{props.itemsCantidad}</p>
                <button className="botonItemCount" onClick={props.restar}>-</button>
            </div>
            <button className="botonAgregarAlCarrito" onClick={props.onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;