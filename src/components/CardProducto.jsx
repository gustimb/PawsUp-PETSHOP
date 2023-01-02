import { Link } from "react-router-dom"

const CardProducto = (props) => {

    return (
        <div className="contenedorProducto">
            <img className="imgProducto" src={props.image} alt={props.name} />
            <div className="dataProducto">
                <h5 className="nombreProducto"> {props.name}</h5>
                <Link to={`/item/${props.id}`}><button className="botonDetalles">Detalles</button></Link>
            </div>
        </div>
    )
}

export default CardProducto