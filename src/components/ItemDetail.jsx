const DetalleProducto = (item) => {

    return (
        <div className="contenedorDetalle">
            

            <h1>DETALLES DEL PRODUCTO</h1>
            <img className="imgDetalle" src={item.datos.image} alt={item.datos.title} />
            <h5 className="nombreProducto"> {item.datos.name}</h5>
        </div>
    )
}

export default DetalleProducto