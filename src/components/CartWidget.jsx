import { FiShoppingCart } from 'react-icons/Fi';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CardWidget = () => {

    const { sumaitemsEnCarrito } = useContext(CartContext);
    return (
        <div id="CarritoNavbar">
            <FiShoppingCart />
            {
                sumaitemsEnCarrito() > 0
                    ? sumaitemsEnCarrito()
                    : ""
            }
        </div>
    )
}

export default CardWidget;
