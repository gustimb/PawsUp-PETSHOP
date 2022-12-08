import { Link } from "react-router-dom"

const CardProducto = ({id, name, description, price, category, categoryId, image}) => {



    return (
        <div className="contenedorProducto">
            
            <img className="imgProducto" src={image} alt={name} />
            <div className="dataProducto">
                <h5 className="nombreProducto"> {name}</h5>
                <Link to={`/item/0001`}><button className="botonDetalles">Detalles</button></Link>  
                
            </div>
        </div>
    )
}

export default CardProducto