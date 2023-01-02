const DetalleProducto = (item) => {

    return (
        <div className="contenedorDetalle">
            <img className="imgDetalle" src={item.datos.image} alt={item.datos.title} />
            <div className="textoDetalle">
                <h2 className="nombreProducto"> {item.datos.name}</h2>                
                <p className="textoDescripcion"> Descripción: {item.datos.description }</p>
                <p className="textoPrecio"> Precio: $ {item.datos.price}  </p>
            </div>
        </div>
    )
}

export default DetalleProducto