import { useContext } from 'react';
import { CartContext } from './CartContext';

const CardWidget = () => {

    const { sumaitemsEnCarrito } = useContext(CartContext);
    return (
        <div id="CarritoNavbar">            
            <span>
            🛒
            </span>
            {
                sumaitemsEnCarrito() > 0
                    ? sumaitemsEnCarrito()
                    : ""
            }            
        </div>
    )
}

export default CardWidget;
