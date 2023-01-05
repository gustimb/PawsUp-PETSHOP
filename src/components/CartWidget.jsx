import { useContext } from 'react';
import { CartContext } from './CartContext';

const CardWidget = () => {

    const { sumaitemsEnCarrito } = useContext(CartContext);
    return (
        <div id="CarritoNavbar">            
            
            <img className='imgCarrito' src="https://res.cloudinary.com/dhn5dbtsr/image/upload/v1672959383/cart_sqq6uk.png" alt="simbolo carrito" />
            
            {
                sumaitemsEnCarrito() > 0
                    ? sumaitemsEnCarrito()
                    : ""
            }            
        </div>
    )
}

export default CardWidget;
